import {
  addTemplate,
  addPlugin,
  defineNuxtModule,
  extendPages,
  isNuxt3,
  isNuxt2,
  addLayout,
  addComponentsDir,
  createResolver
} from '@nuxt/kit'


import * as fs from "fs";
import {marked} from "marked";
import * as yaml from 'js-yaml';
import hljs from "highlight.js";
import fetch from 'sync-fetch';

import {kebabCase} from "scule";
import {resolve,extname,join,basename} from "path";

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

function getSchemaValsFromPath(ref: string) {
  const [type, path, name] = ref.replace('#/', '').split('/');

  return {type, path, name};
}

function replaceMarkdown(obj: {[key: string]: any}|string, components: {[key: string]: any}, definitions: {[key: string]: any}, lastlink: string|null = null): any {
  if (typeof obj === 'string') {
    if (obj.match(/\[.*?\]\(.*?\)|^>/) || obj.match(/```|\*\*|:--|<a |## |------/)) {
      return marked.parse(obj);
    } else {
      return sanitizeText(obj);
    }
  } else if (Array.isArray(obj)) {
    return obj.map((val) => replaceMarkdown(val, components, definitions, lastlink));
  } else if (typeof obj === 'object' && obj !== null) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      if(key === '$ref' && typeof value === 'string') {
        const link = getSchemaValsFromPath(value)

        if(lastlink === value) return { type: "string", title: link.path, description: 'recursive' }

        if (link.type === 'definitions') {
          if(definitions && definitions[link.path]) {
            lastlink = value;

            const item = definitions[link.path];
            item.title = link.path
            return replaceMarkdown(item, components, definitions, lastlink);
          }
        }

        if(components && components[link.path] && components[link.path][link.name]) {
          lastlink = value;

          const item = components[link.path][link.name];
          item.title = link.path
          return replaceMarkdown(item, components, definitions, lastlink);
        }
      } else {
        // @ts-ignore
        acc[key] = replaceMarkdown(value, components, definitions, lastlink);
      }
      return acc;
    }, {});
  } else {
    return obj;
  }
}

// Функция для парсинга YAML-файла
function parseYamlFile(folder:string, fileName:string): {fileName: string, openApiSpec: {[key: string]: any}} {
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

function filesCleanup(files: {[key: string]: string}) {
  const result: {[key: string]: string} = {}
  for (const i in files) {
    const extension = extname(i);
    const fileName = basename(i, extension);

    result[fileName] = files[i]
  }
  return result
}

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


// Module options TypeScript interface definition
export interface ModuleOptions {
  folder?: string,
  name?: string,
  path?: string,
  debug?: boolean,
  files: () => {[key:string]:string},
  doc?: {[key:string]:any},
  isNuxt3?: boolean,
  isNuxt2?: boolean,
}


function processCustomPaths(custom: any, locales: {[key: string]: string}) {
  const pathsByTags: {[key: string]: PathByTag} = {};
  if (Object.keys(custom).length) {
    pathsByTags['custom'] = {
      name: custom.name ?? 'Custom',
      description: custom.description ?? '',
      isOpen: custom['x-tag-expanded'] ?? true,
      items: []
    }
    for (const i in locales) {
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
      for (const i in locales) {
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

function processOpenApiPaths(paths: any, locales: {[key: string]: string}) {
  const pathsByTags: {[key: string]: PathByTag} = {};

  for (const url in paths) {
    let routePath = url
    if (routePath.startsWith('/')) routePath = routePath.substring(1);
    if (routePath.endsWith('/')) routePath = routePath.substring(-1);
    routePath = routePath.replace(/[/\\.?+=&{}]/gumi, '_').replace(/__+/, '_')

    for (const method in paths[url]) {
      const openapi_item = paths[url][method];

      if (!openapi_item.tags) openapi_item.tags = ['other']

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
          for (const locale in locales) {
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
        for (const i in locales) {
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

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-open-api-docs',
    configKey: 'openApiDocs',
  },
  defaults: {
    folder: './docs/openapi',
    name: 'OpenApiDocs',
    path: 'docs',
    debug: false,
    doc: {},
    files: () => { return {}},
  },
  async setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    if(options.debug) {
      // @ts-ignore
      nuxt.hook('generate:route', (route: any) => {
        console.log(`[GENERATE DEBUG] Generating route: ${route.route}`)
      })
      // @ts-ignore
      nuxt.hook('generate:routeCreated', (route: any) => {
        console.log(`[GENERATE DEBUG] Route created: ${route.route}`)
      })
      // @ts-ignore
      nuxt.hook('generate:routeFailed', (route: any, errors: Error) => {
        console.error(`[GENERATE DEBUG] Route failed: ${route.route}`)
        console.error(errors)
      })
    }

    await addComponentsDir({
      path: resolver.resolve( "./runtime/components"),
      pathPrefix: false,
      // prefix: 'OA',
      extensions: ['vue']
    })

    options.isNuxt3 = isNuxt3(nuxt);
    options.isNuxt2 = isNuxt2(nuxt);

    const files = filesCleanup(options.files());

    Object.keys(options.files()).forEach((filePath) => {
      console.log('Generate: ' + filePath)
      const localoptions = JSON.parse(JSON.stringify(options));
      const { openApiSpec, fileName } = parseYamlFile(resolve(nuxt.options.rootDir, localoptions.folder), filePath);

      if(!openApiSpec) return;
      if(!openApiSpec.paths) return;

      localoptions.locales = {en: 'English'};
      if(openApiSpec.info['x-locales']) {
        localoptions.locales = {...{ en: 'English' }, ...openApiSpec.info['x-locales']};
      }

      const tags = (openApiSpec.tags ?? []).reduce((acc: {[key: string]: any}, tag: { name: string }) => {
        acc[tag.name] = tag;
        return acc;
      }, {});


      const pathsByTags: {[key: string]: PathByTag} = JSON.parse(JSON.stringify({
        ...processCustomPaths(openApiSpec['x-custom-path'] ?? {}, localoptions.locales),
        ...processOpenApiPaths(openApiSpec.paths, localoptions.locales),
      }));

      openApiSpec.definitions = replaceMarkdown(openApiSpec.definitions, openApiSpec.components, openApiSpec.definitions)
      openApiSpec.components = replaceMarkdown(openApiSpec.components, openApiSpec.components, openApiSpec.definitions)

      localoptions.doc = replaceMarkdown(openApiSpec, openApiSpec.components, openApiSpec.definitions);
      localoptions.pathsByTags = pathsByTags;
      localoptions.fileName = fileName;
      localoptions.layoutName = (kebabCase(`apidocs-layout-${fileName}`) as string).replace(/["']/g, "");

      addLayout({
        src: resolver.resolve( './runtime/layout/docs.vue'),
        filename: `apidocs.layout.${fileName}.vue`,
        // @ts-ignore
        name: localoptions.layoutName,
        write: true,
        options: {...localoptions, files: files},
      }, localoptions.layoutName)


      // Добавляем шаблон для каждого файла
      addTemplate({
        src: resolver.resolve('./runtime/templates/docs.vue'),
        filename: `apidocs.${fileName}.vue`,
        write: true,
        options: {...localoptions, files: files},
      })



      extendPages((pages) => {
        Object.keys(localoptions.locales).forEach((locale) => {
          pages.push({
            name: `openapi-${localoptions.path}/${fileName}/${locale}-info`,
            path: `/${localoptions.path}/${fileName}/${locale}/info`,
            // @ts-ignore
            component: resolve(nuxt.options.buildDir, `apidocs.${fileName}.vue`),
            file: resolve(nuxt.options.buildDir, `apidocs.${fileName}.vue`),
            meta: {
              file: fileName,
              locale: locale,
              type: 'get',
              path: 'info',
            },
          })

          pages.push({
            name: `openapi-${localoptions.path}/${fileName}/${locale}-components`,
            path: `/${localoptions.path}/${fileName}/${locale}/components`,
            // @ts-ignore
            component: resolve(nuxt.options.buildDir, `apidocs.${fileName}.vue`),
            file: resolve(nuxt.options.buildDir, `apidocs.${fileName}.vue`),
            meta: {
              file: fileName,
              locale: locale,
              type: 'get',
              path: 'components',
            },
          })

          for (let tag in pathsByTags) {
            if (tag === 'custom') continue;

            for (let i in pathsByTags[tag].items) {
              const item = pathsByTags[tag].items[i]
              pages.push({
                name: `openapi-${localoptions.path}/${fileName}/${locale}-${item.type}-${item.path}`,
                path: `/${localoptions.path}/${fileName}/${locale}/${item.type}/${item.path}`,
                // @ts-ignore
                component: resolve(nuxt.options.buildDir, `apidocs.${fileName}.vue`),
                file: resolve(nuxt.options.buildDir, `apidocs.${fileName}.vue`),
                meta: {
                  file: fileName,
                  locale: locale,
                  type: item.type,
                  path: item.path,
                  url: item.name,
                },
              })
            }
          }
          // Генерируем роуты для каждого типа запроса и пути
          for (const i in openApiSpec.paths) {
            for (const type in openApiSpec.paths[i]) {

            }
          }
        })

      })
    })


    if(isNuxt2(nuxt)) {
      addPlugin({
        src: resolver.resolve('./runtime/plugin'),
      })
    }
    if(isNuxt3(nuxt)) {
      addPlugin({
        src: resolver.resolve('./runtime/plugin3'),
      })
    }

    nuxt.options.css.push(resolver.resolve('./runtime/tokyo-night-dark.css'));
    nuxt.options.css.push(resolver.resolve('./runtime/tailwindcss.css'));
  }
})
