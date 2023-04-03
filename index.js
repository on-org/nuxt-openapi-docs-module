import * as path from "path";
import {resolve} from "path";
import * as fs from "fs";
import {marked} from "marked";
import * as yaml from 'js-yaml';
import hljs from "highlight.js";

import {addTemplate, defineNuxtModule, extendPages} from '@nuxt/kit'

function sanitizeText(text) {
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
renderer.text = function (text) {
  return text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

marked.setOptions({
  renderer: renderer,
  highlight: function(code, lang) {
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

function getSchemaValsFromPath(ref) {
  const [type, path, name] = ref.replace('#/', '').split('/');

  return {type, path, name};
}

function replaceMarkdown(obj, components, definitions, lastlink = null) {
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
function parseYamlFile(folder, fileName) {
  const filePath = path.join(folder, fileName + '.yaml')
  // const yamlData = this.nuxt.readContent(filePath)
  const yamlData = fs.readFileSync(filePath, 'utf8');
  return yaml.load(yamlData)
}

export default defineNuxtModule({
  meta: {
    name: 'nuxt-open-api-docs',
    configKey: 'openApiDocs',
    compatibility: {
      nuxt: '^2.0.0',
      bridge: false,
    },
  },
  defaults: {
    folder: './docs/openapi',
    name: 'OpenApiDocs',
    path: 'docs',
    debug: false,
    doc: {},
    files: function (ctx) {
      return {API: 'api'}
    },
    params: function (ctx) {
      return {}
    },
  },
  setup(options, nuxt) {
    if(options.debug) {
      nuxt.hook('generate:route', (route) => {
        console.log(`[GENERATE DEBUG] Generating route: ${route.route}`)
      })
      nuxt.hook('generate:routeCreated', (route) => {
        console.log(`[GENERATE DEBUG] Route created: ${route.route}`)
      })

      nuxt.hook('generate:routeFailed', (route, errors) => {
        console.error(`[GENERATE DEBUG] Route failed: ${route.route}`)
        console.error(errors)
      })
    }

    Object.keys(options.files(this)).forEach((fileName) => {
      console.log('Generate: ' + fileName)
      const localoptions = JSON.parse(JSON.stringify(options));
      const openApiSpec = parseYamlFile(resolve(nuxt.options.rootDir, localoptions.folder), fileName)
      if(!openApiSpec) return;
      if(!openApiSpec.paths) return;

      localoptions.locales = {en: 'English'};
      if(openApiSpec.info['x-locales']) {
        localoptions.locales = {...{ en: 'English' }, ...openApiSpec.info['x-locales']};
      }

      const tags = (openApiSpec.tags ?? []).reduce((acc, tag) => {
        acc[tag.name] = tag;
        return acc;
      }, {});


      const pathsByTags = {};
      for (let i in openApiSpec.paths) {
        let reUrl = i
        if (reUrl.startsWith('/')) reUrl = reUrl.substring(1);
        reUrl = reUrl.replace(/[\/\\.?+=&{}]/gumi, '_')

        openApiSpec.paths[reUrl] = openApiSpec.paths[i]


        for (let j in openApiSpec.paths[reUrl]) {
          const openapi_item = openApiSpec.paths[reUrl][j];

          openapi_item.path = i;

          if(!openapi_item.tags) openapi_item.tags = ['other']

          openapi_item.tags.forEach((tag, val) => {
            if(j === 'parameters') return;
            if(j === 'servers') return;
            if (!pathsByTags[tag]) {
              const tagInfo = tags[tag] ?? {}
              const description = tagInfo.description ?? '';
              const isOpen = tagInfo['x-tag-expanded'] ?? true;
              pathsByTags[tag] = {
                description: marked.parse(description),
                isOpen: isOpen,
                items: []
              };
            }
            const item = {
              name: openapi_item.path,
              path: reUrl,
              type: j,
              description: openapi_item.description ?? null,
            };
            for(let i in localoptions.locales) {
              if(openapi_item[`x-description-${i}`]) {
                item[`x-description-${i}`] = openapi_item[`x-description-${i}`];
              }
            }
            pathsByTags[tag].items.push(item);
          })

        }

        delete openApiSpec.paths[i];
      }

      openApiSpec.definitions = replaceMarkdown(openApiSpec.definitions, openApiSpec.components, openApiSpec.definitions)
      openApiSpec.components = replaceMarkdown(openApiSpec.components, openApiSpec.components, openApiSpec.definitions)
      localoptions.doc = replaceMarkdown(openApiSpec, openApiSpec.components, openApiSpec.definitions);
      localoptions.pathsByTags = pathsByTags;
      localoptions.fileName = fileName;


      const layoutName = (`apidocs-layout-${fileName}`)
        .replace(/["']/g, "")
        .replace(/./g, "-");
      if(!nuxt.options.layouts[layoutName]) {
        addTemplate({
          src: resolve(__dirname, 'layout/docs.vue'),
          filename: `apidocs.layout.${fileName}.vue`,
          dst: resolve(__dirname, `.cache/apidocs.layout.${fileName}.vue`),
          write: true,
          options: {...localoptions, files: options.files, params: options.params},
        })

        // nuxt addLayout О_о!!!
        nuxt.options.layouts[layoutName] = resolve(__dirname, `.cache/apidocs.layout.${fileName}.vue`);
      }



      // Добавляем шаблон для каждого файла
      addTemplate({
        src: resolve(__dirname, 'templates/docs.vue'),
        filename: `apidocs.${fileName}.vue`,
        dst: resolve(__dirname, `.cache/apidocs.${fileName}.vue`),
        write: true,
        options: {...localoptions, files: options.files, params: options.params},
      })

      extendPages((pages) => {
        Object.keys(localoptions.locales).forEach((locale) => {
          pages.push({
            name: `openapi-${localoptions.path}/${fileName}/${locale}-info`,
            path: `/${localoptions.path}/${fileName}/${locale}/get/info`,
            component: resolve(__dirname, `.cache/apidocs.${fileName}.vue`),
            meta: {
              file: fileName,
              locale: locale,
              type: 'get',
              path: 'info',
            },
          })

          pages.push({
            name: `openapi-${localoptions.path}/${fileName}/${locale}-components`,
            path: `/${localoptions.path}/${fileName}/${locale}/get/components`,
            component: resolve(__dirname, `.cache/apidocs.${fileName}.vue`),
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
                name: `openapi-${localoptions.path}/${fileName}/${locale}-${type}-${i}`,
                path: `/${localoptions.path}/${fileName}/${locale}/${type}/${i}`,
                component: resolve(__dirname, `.cache/apidocs.${fileName}.vue`),
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
