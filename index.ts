import {resolve} from "path";
import * as yaml from "yaml";
import * as path from "path";
import * as fs from "fs";
import {marked} from "marked";

import {
  addTemplate,
  defineNuxtModule,
  extendPages
} from '@nuxt/kit'


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

function replaceMarkdown(obj: { [key: string]: any } | any): any {
  if (typeof obj === 'string') {
    if (obj.match(/\[.*?\]\(.*?\)|^>/)) {
      return marked(obj, {renderer: renderer});
    } else {
      return sanitizeText(obj);
    }
  } else if (Array.isArray(obj)) {
    return obj.map(replaceMarkdown);
  } else if (typeof obj === 'object' && obj !== null) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      // @ts-ignore
      acc[key] = replaceMarkdown(value);
      return acc;
    }, {});
  } else {
    return obj;
  }
}

export interface OpenApiDocsOptions {
  folder: string
  name: string
  path: string
  locales?: Record<string, string>
  files?: (ctx: { nuxt: any }) => Record<string, string>
  params?: (ctx: { route: any }) => Record<string, string>
  doc?: any
}

// Функция для парсинга YAML-файла
function parseYamlFile(options: OpenApiDocsOptions, fileName: string) {
  // const filePath = this.nuxt.resolver.resolvePath(
  //   options.folder,
  //   `${fileName}.yaml`
  // )

  const filePath = path.join(options.folder, fileName + '.yaml')
  // const yamlData = this.nuxt.readContent(filePath)
  const yamlData = fs.readFileSync(filePath, 'utf8');
  const openApiSpec = yaml.parse(yamlData)
  return openApiSpec
}

export default defineNuxtModule<OpenApiDocsOptions>({
  meta: {
    name: 'nuxt-open-api-docs',
    configKey: 'openApiDocs',
    compatibility: {
      nuxt: '^3.0.0',
      bridge: false,
    },
  },
  defaults: {
    folder: './docs/openapi',
    name: 'OpenApiDocs',
    path: 'docs',
    locales: {en: 'English'},
    doc: {},
    files: function (ctx) {
      return {API: 'api'}
    },
    params: function (ctx) {
      return {}
    },
  },
  async setup(options, nuxt) {
    Object.keys(options.files(this)).forEach((fileName) => {
      const openApiSpec = parseYamlFile(options, fileName)

      for (let i in openApiSpec.paths) {
        let reUrl = i
        if (reUrl.startsWith('/')) reUrl = reUrl.substring(1);
        reUrl = reUrl.replace(/[\/\\.?+=&{}]/gumi, '_')

        openApiSpec.paths[reUrl] = openApiSpec.paths[i]
        for (let j in openApiSpec.paths[reUrl]) {
          openApiSpec.paths[reUrl][j].path = i;
        }


        delete openApiSpec.paths[i];
      }

      options.doc = replaceMarkdown(openApiSpec);

        // Добавляем шаблон для каждого файла
      addTemplate({
        src: resolve(__dirname, 'templates/docs.vue'),
        filename: `apidocs.${fileName}.vue`,
        dst: resolve(__dirname, `.cache/apidocs.${fileName}.vue`),
        write: true,
        options,
      })

      extendPages((pages) => {
        Object.keys(options.locales!).forEach((locale) => {
          pages.push({
            name: `openapi-${options.path}/${fileName}/${locale}-info`,
            path: `/${options.path}/${fileName}/${locale}/get/info`,
            file: resolve(__dirname, `.cache/apidocs.${fileName}.vue`),
            meta: {
              file: fileName,
              locale: locale,
              type: 'get',
              path: 'info',
            },
          })

          pages.push({
            name: `openapi-${options.path}/${fileName}/${locale}-components`,
            path: `/${options.path}/${fileName}/${locale}/get/components`,
            file: resolve(__dirname, `.cache/apidocs.${fileName}.vue`),
            meta: {
              file: fileName,
              locale: locale,
              type: 'get',
              path: 'components',
            },
          })

          // Генерируем роуты для каждого типа запроса и пути
          for (const i in openApiSpec.paths) {
            for (const type in openApiSpec.paths[i]) {
              pages.push({
                name: `openapi-${options.path}/${fileName}/${locale}-${type}=${i}`,
                path: `/${options.path}/${fileName}/${locale}/${type}/${i}`,
                file: resolve(__dirname, `.cache/apidocs.${fileName}.vue`),
                meta: {
                  file: fileName,
                  locale: locale,
                  type: type,
                  path: i,
                },
              })
            }
          }
        })

      })
    })
  },
});


module.exports.meta = require('./package.json')
