import {resolve} from "path";
import yaml from "yaml";
import path from "path";
import fs from "fs";
import {marked} from "marked";
function validateHTML(htmlString) {
  // Создаем виртуальный документ из переданной строки с помощью jsdom
  return htmlString.replace(/[*+?^${}()|\[\]\\]/g, '\\$&').replace(/>/, '&#62;').replace(/</, '&#60;');
}

function replaceMarkdown(obj) {
  if (typeof obj === 'string') {
    if (obj.match(/\[.*?\]\(.*?\)|^>/)) {
      return validateHTML(marked(obj));
    } else {
      return validateHTML(obj);
    }
  } else if (Array.isArray(obj)) {
    return obj.map(replaceMarkdown);
  } else if (typeof obj === 'object' && obj !== null) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      acc[key] = replaceMarkdown(value);
      return acc;
    }, {});
  } else {
    return obj;
  }
}

let complite = false;


module.exports = async function (moduleOptions) {
    if (complite) return;
    complite = true

    const options = {
        ...moduleOptions,
        folder: moduleOptions.folder || './docs/openapi',
        name: moduleOptions.name || 'OpenApiDocs',
        path: moduleOptions.path || 'docs',
        locales: moduleOptions.locales ?? {en: 'English'},
        files: moduleOptions.files ?? function (ctx) { return { 'API': 'api' } },
        params: moduleOptions.params ?? function (ctx) { return {} },
        doc: {}
    };

    // fs.rmSync(path.resolve(this.options.srcDir, 'dist/', options.path), { recursive: true, force: true });


  Object.keys(options.files(this)).forEach((fileName) => {
    // Получаем имя файла без расширения
    const absolutePath = path.join(options.folder, fileName + '.yaml');
    const yamlData = fs.readFileSync(absolutePath, 'utf8');
    const openApiSpec = yaml.parse(yamlData);

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

    // Генерируем шаблон и роуты
    this.extendRoutes((routes, resolve) => {
      options.doc = replaceMarkdown(openApiSpec);
      this.addTemplate({
        src: resolve(__dirname, 'templates/docs.vue'),
        fileName: resolve(__dirname, `.cache/docs.${fileName}.vue`),
        options,
      });

      Object.keys(options.locales).forEach((locale) => {
        routes.push({
          name: `openapi-${options.path}/${fileName}/${locale}-info`,
          path: `/${options.path}/${fileName}/${locale}/get/info`,
          component: resolve(__dirname, `.cache/docs.${fileName}.vue`),
          meta: {
            file: fileName,
            locale: locale,
            type: 'get',
            path: 'info',
          }
        })
        routes.push({
          name: `openapi-${options.path}/${fileName}/${locale}-components`,
          path: `/${options.path}/${fileName}/${locale}/get/components`,
          component: resolve(__dirname, `.cache/docs.${fileName}.vue`),
          meta: {
            file: fileName,
            locale: locale,
            type: 'get',
            path: 'components',
          }
        })

        for (let i in openApiSpec.paths) {
          for (let type in openApiSpec.paths[i]) {
            routes.push({
              name: `openapi-${options.path}/${fileName}/${locale}-${type}=${i}`,
              path: `/${options.path}/${fileName}/${locale}/${type}/${i}`,
              component: resolve(__dirname, `.cache/docs.${fileName}.vue`),
              meta: {
                file: fileName,
                locale: locale,
                type: type,
                path: i,
              }
            })
          }
        }
      })
    });
  });

}


module.exports.meta = require('./package.json')
