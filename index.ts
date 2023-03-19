import {resolve} from "path";
import * as yaml from "yaml";
import * as path from "path";
import * as fs from "fs";

import {
  addComponent,
  addPlugin,
  addPluginTemplate,
  addComponentsDir,
  addPrerenderRoutes,
  addTemplate,
  createResolver,
  extendRouteRules,
  defineNuxtModule,
  extendPages
} from '@nuxt/kit'

export interface OpenApiDocsOptions {
  folder: string
  name: string
  path: string
  locales?: Record<string, string>
  files?: (ctx: { nuxt: any }) => Record<string, string>
  params?: (ctx: { route: any }) => Record<string, string>
  docs?: Record<string, any>
}

// Функция для парсинга YAML-файла
function parseYamlFile(options: OpenApiDocsOptions, fileName: string) {
  // const filePath = this.nuxt.resolver.resolvePath(
  //   options.folder,
  //   `${fileName}.yaml`
  // )

  const filePath =  path.join(options.folder, fileName + '.yaml')
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
    locales: { en: 'English' },
    docs: {},
    files: function (ctx) {
      return { API: 'api' }
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

      options.docs[fileName] = openApiSpec;
    });

    nuxt.options.$openApiDocs = options.docs;


    extendPages((pages) => {
      Object.keys(options.docs).forEach((fileName) => {
        const openApiSpec = options.docs[fileName];

        // Добавляем шаблон для каждого файла
        addTemplate({
          src: resolve(__dirname, 'templates/docs.vue'),
          fileName: resolve(__dirname, `.cache/docs.${fileName}.vue`),
        })

        Object.keys(options.locales!).forEach((locale) => {
          pages.push({
            name: `openapi-${options.path}/${fileName}/${locale}-info`,
            path: `/${options.path}/${fileName}/${locale}/get/info`,
            component: resolve(__dirname, `.cache/docs.${fileName}.vue`),
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
            component: resolve(__dirname, `.cache/docs.${fileName}.vue`),
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
                component: resolve(__dirname, `.cache/docs.${fileName}.vue`),
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
})


module.exports.meta = require('./package.json')
