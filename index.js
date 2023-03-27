import path from "path";
import yaml from "yaml";
import fs from "fs";
import {marked} from "marked";
import {getSchemaValsFromPath} from "./components/helpers";

const renderer = new marked.Renderer();
renderer.text = function(text) {
  return text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

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
  return text.replace(reg, function(match) {
    return map[match];
  });
}

function replaceMarkdown(obj, components) {
  if (typeof obj === 'string') {
    if (obj.match(/\[.*?\]\(.*?\)|^>/)) {
      return marked(obj, { renderer: renderer });
    } else {
      return sanitizeText(obj);
    }
  } else if (Array.isArray(obj)) {
    return obj.map((val) => replaceMarkdown(val, components));
  } else if (typeof obj === 'object' && obj !== null) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      if(key === '$ref' && typeof value === 'string') {
        const link = getSchemaValsFromPath(value)
        if(components[link.path] && components[link.path][link.name]) {
          return components[link.path][link.name];
        }
      } else {
        acc[key] = replaceMarkdown(value, components);
      }
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
      openApiSpec.components = replaceMarkdown(openApiSpec.components, openApiSpec.components)
      options.doc = replaceMarkdown(openApiSpec, openApiSpec.components);
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
