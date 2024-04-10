import { kebabCase } from 'scule';
import { FileHandler } from './FileHandler';
import { MarkdownRenderer } from './MarkdownRenderer';
import { ReferenceResolver } from './ReferenceResolver';
import { join, dirname, basename, extname } from 'path';

interface PathByTagItem {
  name: string,
  path: string,
  type: string | null,
  description: string | null,
  deprecated?: boolean | null,
  icon: string | null,

  [key: string]: any
}

export interface PathByTag {
  name: string,
  description: string,
  isOpen: boolean,
  items: Array<PathByTagItem>,

  [key: string]: any
}

export default class OpenApiProcessor {
  workDir: string;
  fileName: string = '';
  spec: { [key: string]: any } = {};
  markdownRenderer: MarkdownRenderer;
  referenceResolver: ReferenceResolver;
  fileHandler: FileHandler = new FileHandler();
  locales: { [key: string]: string } = {'en': 'English'};
  localesReload: boolean = false;

  constructor(workDir: string) {
    this.workDir = workDir;
    this.markdownRenderer = new MarkdownRenderer();
    this.referenceResolver = new ReferenceResolver(workDir, this.fileHandler);
  }

  load(fileName: string): void {
    this.spec = this.fileHandler.loadYamlFile(this.workDir, fileName);
    this.fileName = kebabCase(basename(fileName, extname(fileName)));

    // Now, let's process the entire spec for $ref references and Markdown content
    this.spec = this.processSpec(this.spec);
    this.spec = this.replaceMarkdown(this.spec)

    this.processLocales();
    this.processTags();
  }

  private processLocales(): void {
    this.localesReload = !!this.spec?.info?.['x-locales-reload'];
    this.locales = { en: 'English', ...this.spec?.info?.['x-locales'] };
  }

  private processTags(): void {
    if (!this.spec.tags) {
      this.spec.tags = [];
    }
    this.spec.tags = this.spec.tags.reduce((acc: { [key: string]: any }, tag: { name: string }) => {
      acc[tag.name.toString().toLowerCase()] = tag;
      return acc;
    }, {});
  }

  private processSpec(obj: any): any {
    if (Array.isArray(obj)) {
      return obj.map((val) => val);
      // return obj.map((val) => this.refReplace(val));
    } else if (typeof obj === 'object' && obj !== null) {
      return Object.entries(obj).reduce((acc, [key, value]) => {
        if (key === '$ref' && typeof value === 'string') {
          if (!value.startsWith('#')) {
            return obj = this.referenceResolver.resolveRef(value)
          }
          return obj = value
          // return obj = this.refLoader(value)
        } else {
          // @ts-ignore
          acc[key] = this.processSpec(value);
        }
        return acc;
      }, {});
    }
    return obj;
  }

  getFilename() {
    return this.fileName;
  }

  getDoc() {
    return this.spec
  }

  getLocalesReload() {
    return this.localesReload;
  }

  getLocales() {
    return this.locales;
  }

  getServers(): any[] {
    return this.spec.servers ?? [];
  }

  getPaths(): { [key: string]: PathByTag } {
    return JSON.parse(JSON.stringify({
      ...this.processOpenApiPaths(this.spec.webhooks ?? {}, 'webhooks'),
      ...this.processCustomPaths(this.spec['x-custom-path'] ?? {}),
      ...this.processOpenApiPaths(this.spec.paths),
    }));
  }

  private processCustomPaths(custom: any) {
    const pathsByTags: { [key: string]: PathByTag } = {};
    if (Object.keys(custom).length) {

      pathsByTags['custom'] = {
        name: custom.name ?? 'Custom',
        description: custom.description ?? '',
        isOpen: custom['x-tag-expanded'] ?? true,
        items: []
      }
      for (const i in this.locales) {
        if (custom[`x-description-${i}`]) {
          pathsByTags['custom'][`x-description-${i}`] = custom[`x-description-${i}`];
        }
        if (custom[`x-name-${i}`]) {
          pathsByTags['custom'][`x-name-${i}`] = custom[`x-name-${i}`];
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
          if (custom.paths[path][`x-description-${i}`]) {
            item[`x-description-${i}`] = custom.paths[path][`x-description-${i}`];
          }
          if (custom.paths[path][`x-title-${i}`]) {
            item[`x-name-${i}`] = custom.paths[path][`x-title-${i}`];
          }
        }
        pathsByTags['custom'].items.push(item);
      }
    }

    return pathsByTags;
  }

  private processOpenApiPaths(paths: any, type = 'other') {
    const pathsByTags: { [key: string]: PathByTag } = {};

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
            const tagInfo = this.spec.tags[tag.toString().toLowerCase()] ?? {}

            const item: PathByTag = {
              name: tagInfo.name ?? tag,
              description: this.markdownRenderer.render(tagInfo.description ?? '') as string,
              isOpen: tagInfo['x-tag-expanded'] ?? true,
              items: []
            }
            for (const locale in this.locales) {
              if (tagInfo[`x-description-${locale}`]) {
                item[`x-description-${locale}`] = this.markdownRenderer.render(tagInfo[`x-description-${locale}`]);
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
          if (openapi_item.deprecated) {
            item.deprecated = openapi_item.deprecated;
          }
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


  private replaceMarkdown(obj: { [key: string]: any } | string): any {
    if (typeof obj === 'string') {
      if (obj.match(/\[.*?\]\(.*?\)|^>/) || obj.match(/```|\*\*|:--|<a |## |------|`..?`/)) {
        return this.markdownRenderer.render(obj);
      } else {
        return this.markdownRenderer.sanitizeText(obj);
      }
    } else if (Array.isArray(obj)) {
      return obj.map((val) => this.replaceMarkdown(val));
    } else if (typeof obj === 'object' && obj !== null) {
      return Object.entries(obj).reduce((acc, [key, value]) => {
        if (key === '$ref' && typeof value === 'string') {
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
}
