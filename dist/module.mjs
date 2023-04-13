import { defineNuxtModule, createResolver, addComponentsDir, isNuxt3, isNuxt2, addLayout, addTemplate, extendPages, addPlugin } from '@nuxt/kit';
import * as fs from 'fs';
import { marked } from 'marked';
import * as yaml from 'js-yaml';
import hljs from 'highlight.js';
import fetch from 'sync-fetch';
import { kebabCase } from 'scule';
import { resolve, extname, join, basename } from 'path';

function sanitizeText(text) {
  const map = {
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "\\": "&#x5C;",
    "|": "&#x7C;"
  };
  const reg = /[<>"'\\|]/gi;
  return text.replace(reg, function(match) {
    return map[match];
  });
}
const renderer = new marked.Renderer();
renderer.text = function(text) {
  return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};
marked.setOptions({
  renderer,
  highlight: function(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: "hljs language-",
  // highlight.js css expects a top-level 'hljs' class.
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartypants: false,
  xhtml: false
});
function getSchemaValsFromPath(ref) {
  const [type, path, name] = ref.replace("#/", "").split("/");
  return { type, path, name };
}
function replaceMarkdown(obj, components, definitions, lastlink = null) {
  if (typeof obj === "string") {
    if (obj.match(/\[.*?\]\(.*?\)|^>/) || obj.match(/```|\*\*|:--|<a |## |------/)) {
      return marked.parse(obj);
    } else {
      return sanitizeText(obj);
    }
  } else if (Array.isArray(obj)) {
    return obj.map((val) => replaceMarkdown(val, components, definitions, lastlink));
  } else if (typeof obj === "object" && obj !== null) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      if (key === "$ref" && typeof value === "string") {
        const link = getSchemaValsFromPath(value);
        if (lastlink === value)
          return { type: "string", title: link.path, description: "recursive" };
        if (link.type === "definitions") {
          if (definitions && definitions[link.path]) {
            lastlink = value;
            const item = definitions[link.path];
            item.title = link.path;
            return replaceMarkdown(item, components, definitions, lastlink);
          }
        }
        if (components && components[link.path] && components[link.path][link.name]) {
          lastlink = value;
          const item = components[link.path][link.name];
          item.title = link.path;
          return replaceMarkdown(item, components, definitions, lastlink);
        }
      } else {
        acc[key] = replaceMarkdown(value, components, definitions, lastlink);
      }
      return acc;
    }, {});
  } else {
    return obj;
  }
}
function parseYamlFile(folder, fileName) {
  let yamlData = "";
  if (fileName.startsWith("http")) {
    yamlData = fetch(fileName).text();
  } else {
    const extension2 = extname(fileName);
    if (!extension2) {
      fileName += ".yaml";
    }
    const filePath = join(folder, fileName);
    yamlData = fs.readFileSync(filePath, "utf8");
  }
  const extension = extname(fileName);
  const newFileName = basename(fileName, extension);
  const openApiSpec = yaml.load(yamlData);
  return { fileName: newFileName, openApiSpec };
}
function filesCleanup(files) {
  const result = {};
  for (const i in files) {
    const extension = extname(i);
    const fileName = basename(i, extension);
    result[fileName] = files[i];
  }
  return result;
}
const module = defineNuxtModule({
  meta: {
    name: "nuxt-open-api-docs",
    configKey: "openApiDocs"
  },
  defaults: {
    folder: "./docs/openapi",
    name: "OpenApiDocs",
    path: "docs",
    debug: false,
    doc: {},
    files: () => {
      return {};
    }
  },
  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);
    if (options.debug) {
      nuxt.hook("generate:route", (route) => {
        console.log(`[GENERATE DEBUG] Generating route: ${route.route}`);
      });
      nuxt.hook("generate:routeCreated", (route) => {
        console.log(`[GENERATE DEBUG] Route created: ${route.route}`);
      });
      nuxt.hook("generate:routeFailed", (route, errors) => {
        console.error(`[GENERATE DEBUG] Route failed: ${route.route}`);
        console.error(errors);
      });
    }
    await addComponentsDir({
      path: resolver.resolve("./runtime/components"),
      pathPrefix: false,
      // prefix: 'OA',
      extensions: ["vue"]
    });
    options.isNuxt3 = isNuxt3(nuxt);
    options.isNuxt2 = isNuxt2(nuxt);
    const files = filesCleanup(options.files());
    Object.keys(options.files()).forEach((filePath) => {
      console.log("Generate: " + filePath);
      const localoptions = JSON.parse(JSON.stringify(options));
      const { openApiSpec, fileName } = parseYamlFile(resolve(nuxt.options.rootDir, localoptions.folder), filePath);
      if (!openApiSpec)
        return;
      if (!openApiSpec.paths)
        return;
      localoptions.locales = { en: "English" };
      if (openApiSpec.info["x-locales"]) {
        localoptions.locales = { ...{ en: "English" }, ...openApiSpec.info["x-locales"] };
      }
      const tags = (openApiSpec.tags ?? []).reduce((acc, tag) => {
        acc[tag.name] = tag;
        return acc;
      }, {});
      const pathsByTags = {};
      for (const url in openApiSpec.paths) {
        let reUrl = url;
        if (reUrl.startsWith("/"))
          reUrl = reUrl.substring(1);
        if (reUrl.endsWith("/"))
          reUrl = reUrl.substring(-1);
        reUrl = reUrl.replace(/[/\\.?+=&{}]/gumi, "_").replace(/__+/, "_");
        for (const method in openApiSpec.paths[url]) {
          const openapi_item = openApiSpec.paths[url][method];
          if (!openapi_item.tags)
            openapi_item.tags = ["other"];
          openapi_item.tags.forEach((tag) => {
            if (method === "parameters")
              return;
            if (method === "servers")
              return;
            if (!pathsByTags[tag]) {
              const tagInfo = tags[tag] ?? {};
              const item2 = {
                name: tagInfo.name ?? tag,
                description: marked.parse(tagInfo.description ?? ""),
                isOpen: tagInfo["x-tag-expanded"] ?? true,
                items: []
              };
              for (const i in localoptions.locales) {
                if (tagInfo[`x-description-${i}`]) {
                  item2[`x-description-${i}`] = marked.parse(tagInfo[`x-description-${i}`]);
                }
                if (tagInfo[`x-name-${i}`]) {
                  item2[`x-name-${i}`] = tagInfo[`x-name-${i}`];
                }
              }
              pathsByTags[tag] = item2;
            }
            const item = {
              name: url,
              path: reUrl,
              type: method,
              description: openapi_item.description ?? null
            };
            for (const i in localoptions.locales) {
              if (openapi_item[`x-description-${i}`]) {
                item[`x-description-${i}`] = openapi_item[`x-description-${i}`];
              }
            }
            pathsByTags[tag].items.push(item);
          });
        }
      }
      openApiSpec.definitions = replaceMarkdown(openApiSpec.definitions, openApiSpec.components, openApiSpec.definitions);
      openApiSpec.components = replaceMarkdown(openApiSpec.components, openApiSpec.components, openApiSpec.definitions);
      localoptions.doc = replaceMarkdown(openApiSpec, openApiSpec.components, openApiSpec.definitions);
      localoptions.pathsByTags = pathsByTags;
      localoptions.fileName = fileName;
      localoptions.layoutName = kebabCase(`apidocs-layout-${fileName}`).replace(/["']/g, "");
      addLayout({
        src: resolver.resolve("./runtime/layout/docs.vue"),
        filename: `apidocs.layout.${fileName}.vue`,
        // @ts-ignore
        name: localoptions.layoutName,
        write: true,
        options: { ...localoptions, files }
      }, localoptions.layoutName);
      addTemplate({
        src: resolver.resolve("./runtime/templates/docs.vue"),
        filename: `apidocs.${fileName}.vue`,
        write: true,
        options: { ...localoptions, files }
      });
      extendPages((pages) => {
        Object.keys(localoptions.locales).forEach((locale) => {
          pages.push({
            name: `openapi-${localoptions.path}/${fileName}/${locale}-info`,
            path: `/${localoptions.path}/${fileName}/${locale}/get/info`,
            // @ts-ignore
            component: resolve(nuxt.options.buildDir, `apidocs.${fileName}.vue`),
            file: resolve(nuxt.options.buildDir, `apidocs.${fileName}.vue`),
            meta: {
              file: fileName,
              locale,
              type: "get",
              path: "info"
            }
          });
          pages.push({
            name: `openapi-${localoptions.path}/${fileName}/${locale}-components`,
            path: `/${localoptions.path}/${fileName}/${locale}/get/components`,
            // @ts-ignore
            component: resolve(nuxt.options.buildDir, `apidocs.${fileName}.vue`),
            file: resolve(nuxt.options.buildDir, `apidocs.${fileName}.vue`),
            meta: {
              file: fileName,
              locale,
              type: "get",
              path: "components"
            }
          });
          for (let tag in pathsByTags) {
            for (let i in pathsByTags[tag].items) {
              const item = pathsByTags[tag].items[i];
              pages.push({
                name: `openapi-${localoptions.path}/${fileName}/${locale}-${item.type}-${item.path}`,
                path: `/${localoptions.path}/${fileName}/${locale}/${item.type}/${item.path}`,
                // @ts-ignore
                component: resolve(nuxt.options.buildDir, `apidocs.${fileName}.vue`),
                file: resolve(nuxt.options.buildDir, `apidocs.${fileName}.vue`),
                meta: {
                  file: fileName,
                  locale,
                  type: item.type,
                  path: item.path,
                  url: item.name
                }
              });
            }
          }
          for (const i in openApiSpec.paths) {
            for (const type in openApiSpec.paths[i]) {
            }
          }
        });
      });
    });
    if (isNuxt2(nuxt)) {
      addPlugin({
        src: resolver.resolve("./runtime/plugin")
      });
    }
    if (isNuxt3(nuxt)) {
      addPlugin({
        src: resolver.resolve("./runtime/plugin3")
      });
    }
    nuxt.options.css.push(resolver.resolve("./runtime/tokyo-night-dark.css"));
    nuxt.options.css.push(resolver.resolve("./runtime/tailwindcss.css"));
  }
});

export { module as default };
