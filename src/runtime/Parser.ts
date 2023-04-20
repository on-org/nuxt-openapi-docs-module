import {basename, dirname, extname, join} from "path";
import {marked} from "marked";
import fetch from "sync-fetch";
import fs from "fs";
import * as yaml from "js-yaml";
import hljs from "highlight.js";


function sanitizeText(text: string) {
  const map = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '\\': '&#x5C;',
    '|': '&#x7C;'
  };
  const reg = /[<>"'\\|]/gi;
  return text.replace(reg, function (match) {
    // @ts-ignore
    return map[match];
  });
}

const renderer = new marked.Renderer();
renderer.text = function (text: string) {
  return text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

marked.setOptions({
  renderer: renderer,
  highlight: function(code: string, lang: string) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartypants: false,
  xhtml: false
});

interface PathByTagItem {
  name: string,
  path: string,
  type: string|null,
  description: string|null,
  icon: string|null,
  [key:string]: any
}

interface PathByTag {
  name: string,
  description: string,
  isOpen: boolean,
  items: Array<PathByTagItem>,
  [key:string]: any
}

export default class Parser {
  workDir: string;
  lastlink: string|null = 'null';
  fileName: string = ''
  spec: {[key: string]: any} = {};
  components: {[key: string]: any} = {};
  definitions: {[key: string]: any} = {};
  locales: { [key: string]: string } = {'en': 'English'};
  refs: { [key: string]: any } = {};

  constructor(workDir: string) {
    this.workDir = workDir;
  }

  load(fileName:string) {
    const openApiSpec = this.parseYamlFile(this.workDir, fileName);

    this.spec = openApiSpec.openApiSpec;
    this.components = openApiSpec.openApiSpec.components;
    this.definitions = openApiSpec.openApiSpec.definitions;
    this.fileName = openApiSpec.fileName;

    this.definitions = this.refReplace(this.definitions)
    this.components = this.refReplace(this.components)
    this.spec = this.refReplace(this.spec)

    this.definitions = this.replaceMarkdown(this.definitions)
    this.components = this.replaceMarkdown(this.components)
    this.spec = this.replaceMarkdown(this.spec)

    this.locales = {en: 'English'};
    if(this.spec && this.spec.info && this.spec.info['x-locales']) {
      this.locales = {...{ en: 'English' }, ...this.spec.info['x-locales']};
    }

    if(!this.spec.tags) {
      this.spec.tags = []
    }
    this.spec.tags.reduce((acc: {[key: string]: any}, tag: { name: string }) => {
      acc[tag.name] = tag;
      return acc;
    }, {});
  }

  private getSchemaValsFromPath(ref: string) {
    const [type, path, name] = ref.replace('#/', '').split('/');

    return {type, path, name};
  }

  private refFileLoader(value: string) {
    if(this.refs[value]) return this.refs[value];

    const [filepath, refPath] = value.split('#')

    let spec: {[key: string]: any} = {};
    if (filepath.startsWith('http')) {
      const yamlData = fetch(filepath).text();
      spec = yaml.load(yamlData) as {[key: string]: any};
    } else {
      const dir = join(this.workDir, dirname(filepath))
      const name = basename(filepath)

      const spec = this.parseYamlFile(dir, name).openApiSpec;
      if(!refPath) return this.refs[value] = this.refReplace(spec);
    }

    const link = this.getSchemaValsFromPath(refPath)
    if(spec && spec[link.path] && spec[link.path][link.name]) {
      this.lastlink = value;

      const item = spec[link.path][link.name];
      item.title = link.path
      return this.refs[value] = this.refReplace(item);
    }

    return value;
  }

  private refLoader(value: string) {
    if(this.refs[value]) return this.refs[value];

    const link = this.getSchemaValsFromPath(value)

    if(this.lastlink === value)
      return {
        type: "string",
        title: link.path,
        description: 'recursive'
      }

    if (link.type === 'definitions') {
      if(this.definitions[link.path]) {
        this.lastlink = value;

        const item = this.definitions[link.path];
        item.title = link.name

        return this.refs[value] = this.refReplace(item);
      }
    }

    if(this.components[link.path] && this.components[link.path][link.name]) {
      this.lastlink = value;

      const item = this.components[link.path][link.name];
      item.title = link.name

      return this.refs[value] = this.refReplace(item);
    }

    return this.refs[value] = value
  }

  private refReplace(obj: {[key: string]: any}|string): any {
    if (Array.isArray(obj)) {
      return obj.map((val) => this.refReplace(val));
    } else if (typeof obj === 'object' && obj !== null) {
      return Object.entries(obj).reduce((acc, [key, value]) => {
        if(key === '$ref' && typeof value === 'string') {
          if(!value.startsWith('#')) {
            return obj = this.refFileLoader(value)
          }
          return obj = this.refLoader(value)
        } else {
          // @ts-ignore
          acc[key] = this.refReplace(value);
        }
        return acc;
      }, {});
    }
    return obj;
  }

  private replaceMarkdown(obj: {[key: string]: any}|string): any {
    if (typeof obj === 'string') {
      if (obj.match(/\[.*?\]\(.*?\)|^>/) || obj.match(/```|\*\*|:--|<a |## |------/)) {
        return marked.parse(obj);
      } else {
        return sanitizeText(obj);
      }
    } else if (Array.isArray(obj)) {
      return obj.map((val) => this.replaceMarkdown(val));
    } else if (typeof obj === 'object' && obj !== null) {
      return Object.entries(obj).reduce((acc, [key, value]) => {
        if(key === '$ref' && typeof value === 'string') {
          return value
        } else {
          // @ts-ignore
          acc[key] = this.replaceMarkdown(value);
        }
        return acc;
      }, {});
    } else {
      return obj;
    }
  }

  getLocales() {
    return this.locales;
  }

  getPaths(): {[key: string]: PathByTag} {
    return JSON.parse(JSON.stringify({
      ...this.processOpenApiPaths(this.spec.webhooks ?? {}, 'webhooks'),
      ...this.processCustomPaths(this.spec['x-custom-path'] ?? {}),
      ...this.processOpenApiPaths(this.spec.paths),
    }));
  }

  getDoc() {
    return this.spec
  }

  getFilename() {
    return this.fileName;
  }

  private parseYamlFile(folder:string, fileName:string): {fileName: string, openApiSpec: {[key: string]: any}} {
    let yamlData = ''
    if (fileName.startsWith('http')) {
      yamlData = fetch(fileName).text();
    } else {
      const extension = extname(fileName);
      if(!extension) {
        fileName += '.yaml';
      }
      const filePath = join(folder, fileName)
      yamlData = fs.readFileSync(filePath, 'utf8');
    }

    const extension = extname(fileName);
    const newFileName = basename(fileName, extension);

    const openApiSpec = yaml.load(yamlData) as {[key: string]: any};

    return {fileName: newFileName, openApiSpec: openApiSpec}
  }

  private processCustomPaths(custom: any) {
    const pathsByTags: {[key: string]: PathByTag} = {};
    if (Object.keys(custom).length) {
      pathsByTags['custom'] = {
        name: custom.name ?? 'Custom',
        description: custom.description ?? '',
        isOpen: custom['x-tag-expanded'] ?? true,
        items: []
      }
      for (const i in this.locales) {
        if (custom[`x-summary-${i}`]) {
          pathsByTags[`x-description-${i}`] = custom[`x-summary-${i}`];
        }
        if (custom[`x-name-${i}`]) {
          pathsByTags[`x-name-${i}`] = custom[`x-name-${i}`];
        }
      }

      for (const path in custom.paths) {
        const item: PathByTagItem = {
          name: custom.paths[path].title ?? path,
          path: path,
          type: 'custom',
          description: custom.paths[path].description ?? '',
          icon: custom.paths[path]['x-icon'] ?? null,
        };
        for (const i in this.locales) {
          if (custom[`x-summary-${i}`]) {
            pathsByTags[`x-description-${i}`] = custom[`x-summary-${i}`];
          }
          if (custom[`x-name-${i}`]) {
            pathsByTags[`x-name-${i}`] = custom[`x-name-${i}`];
          }
        }
        pathsByTags['custom'].items.push(item);
      }
    }
    return pathsByTags;
  }


  private processOpenApiPaths(paths: any, type = 'other') {
    const pathsByTags: {[key: string]: PathByTag} = {};

    for (const url in paths) {
      let routePath = url
      if (routePath.startsWith('/')) routePath = routePath.substring(1);
      if (routePath.endsWith('/')) routePath = routePath.substring(-1);
      routePath = routePath.replace(/[/\\.?+=&{}]/gumi, '_').replace(/__+/, '_')

      for (const method in paths[url]) {
        const openapi_item = paths[url][method];

        if (!openapi_item.tags) openapi_item.tags = [type]

        openapi_item.tags.forEach((tag: string) => {
          if (method === 'parameters') return;
          if (method === 'servers') return;
          if (!pathsByTags[tag]) {
            const tagInfo = openapi_item.tags[tag] ?? {}

            const item: PathByTag = {
              name: tagInfo.name ?? tag,
              description: marked.parse(tagInfo.description ?? ''),
              isOpen: tagInfo['x-tag-expanded'] ?? true,
              items: []
            }
            for (const locale in this.locales) {
              if (tagInfo[`x-description-${locale}`]) {
                item[`x-description-${locale}`] = marked.parse(tagInfo[`x-description-${locale}`]);
              }
              if (tagInfo[`x-name-${locale}`]) {
                item[`x-name-${locale}`] = tagInfo[`x-name-${locale}`];
              }
            }

            pathsByTags[tag] = item;
          }
          const item: PathByTagItem = {
            name: url,
            path: routePath,
            type: method,
            icon: openapi_item['x-icon'] ?? null,
            description: openapi_item.summary ?? null,
          };
          for (const i in this.locales) {
            if (openapi_item[`x-summary-${i}`]) {
              item[`x-description-${i}`] = openapi_item[`x-summary-${i}`];
            }
          }
          pathsByTags[tag].items.push(item);
        })
      }
    }
    return pathsByTags;
  }
}