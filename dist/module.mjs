import { defineNuxtModule, createResolver, addComponentsDir, extendPages, addLayout, addImports, addPlugin } from '@nuxt/kit';
import { join, dirname, basename, extname, resolve } from 'path';
import { marked } from 'marked';
import fetch from 'sync-fetch';
import fs from 'fs';
import * as yaml from 'js-yaml';
import hljs from 'highlight.js';
import { promises, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import lodashTemplate from 'lodash.template';
import { watch } from 'chokidar';



// -- Unbuild CommonJS Shims --
import __cjs_url__ from 'url';
import __cjs_path__ from 'path';
import __cjs_mod__ from 'module';
const __filename = __cjs_url__.fileURLToPath(import.meta.url);
const __dirname = __cjs_path__.dirname(__filename);
const require = __cjs_mod__.createRequire(import.meta.url);
class Parser {
  workDir;
  fileName = "";
  spec = {};
  components = {};
  definitions = {};
  locales = { "en": "English" };
  localesReload = false;
  refs = {};
  constructor(workDir) {
    this.workDir = workDir;
    const self = this;
    const renderer = new marked.Renderer();
    renderer.text = function(text) {
      return self.replaceAngleBracketsInText(text);
    };
    renderer.table = function(header, body) {
      return '<table class="table">\n' + header + body + "</table>\n";
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
      headerIds: true,
      breaks: false,
      sanitize: false,
      smartypants: false,
      xhtml: false
    });
  }
  load(fileName) {
    const openApiSpec = this.parseYamlFile(this.workDir, fileName);
    this.spec = openApiSpec.openApiSpec;
    this.components = openApiSpec.openApiSpec.components;
    this.definitions = openApiSpec.openApiSpec.definitions;
    this.fileName = openApiSpec.fileName;
    this.definitions = this.refReplace(this.definitions);
    this.components = this.refReplace(this.components);
    this.spec = this.refReplace(this.spec);
    this.definitions = this.replaceMarkdown(this.definitions);
    this.components = this.replaceMarkdown(this.components);
    this.spec = this.replaceMarkdown(this.spec);
    this.localesReload = false;
    if (this.spec && this.spec.info && this.spec.info["x-locales-reload"]) {
      this.localesReload = this.spec.info["x-locales-reload"] === "true" || this.spec.info["x-locales-reload"] === true;
    }
    this.locales = { en: "English" };
    if (this.spec && this.spec.info && this.spec.info["x-locales"]) {
      this.locales = { ...{ en: "English" }, ...this.spec.info["x-locales"] };
    }
    if (!this.spec.tags) {
      this.spec.tags = [];
    }
    this.spec.tags = this.spec.tags.reduce((acc, tag) => {
      acc[tag.name.toString().toLowerCase()] = tag;
      return acc;
    }, {});
  }
  replaceAngleBracketsInText(text) {
    return text.replace(/(?<=[^=])<|>(?=[^=])/g, function(match) {
      return match === "<" ? "&lt;" : "&gt;";
    }).replaceAll("&br;", "<br>");
  }
  sanitizeText(text) {
    text = this.replaceAngleBracketsInText(text);
    const map = {
      '"': "&quot;",
      "'": "&#x27;",
      "\\": "&#x5C;",
      "|": "&#x7C;"
    };
    const reg = /["'\\|]/gi;
    return text.replace(reg, function(match) {
      return map[match];
    });
  }
  getSchemaValsFromPath(ref) {
    const [type, path, name] = ref.replace("#/", "").split("/");
    return { type, path, name };
  }
  refFileLoader(value) {
    if (this.refs[value])
      return this.refs[value];
    const [filepath, refPath] = value.split("#");
    let spec = {};
    if (filepath.startsWith("http")) {
      const yamlData = fetch(filepath).text();
      spec = yaml.load(yamlData);
    } else {
      const dir = join(this.workDir, dirname(filepath));
      const name = basename(filepath);
      const spec2 = this.parseYamlFile(dir, name).openApiSpec;
      if (!refPath)
        return this.refs[value] = this.refReplace(spec2);
    }
    const link = this.getSchemaValsFromPath(refPath);
    if (spec && spec[link.path] && spec[link.path][link.name]) {
      const item = spec[link.path][link.name];
      item.title = link.path;
      return this.refs[value] = this.refReplace(item);
    }
    return value;
  }
  refReplace(obj) {
    if (Array.isArray(obj)) {
      return obj.map((val) => val);
    } else if (typeof obj === "object" && obj !== null) {
      return Object.entries(obj).reduce((acc, [key, value]) => {
        if (key === "$ref" && typeof value === "string") {
          if (!value.startsWith("#")) {
            return obj = this.refFileLoader(value);
          }
          return obj = value;
        } else {
          acc[key] = this.refReplace(value);
        }
        return acc;
      }, {});
    }
    return obj;
  }
  replaceMarkdown(obj) {
    if (typeof obj === "string") {
      if (obj.match(/\[.*?\]\(.*?\)|^>/) || obj.match(/```|\*\*|:--|<a |## |------|`..?`/)) {
        return marked.parse(obj);
      } else {
        return this.sanitizeText(obj);
      }
    } else if (Array.isArray(obj)) {
      return obj.map((val) => this.replaceMarkdown(val));
    } else if (typeof obj === "object" && obj !== null) {
      return Object.entries(obj).reduce((acc, [key, value]) => {
        if (key === "$ref" && typeof value === "string") {
          return value;
        } else {
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
  getLocalesReload() {
    return this.localesReload;
  }
  getServers() {
    return this.spec.servers ?? [];
  }
  getPaths() {
    return JSON.parse(JSON.stringify({
      ...this.processOpenApiPaths(this.spec.webhooks ?? {}, "webhooks"),
      ...this.processCustomPaths(this.spec["x-custom-path"] ?? {}),
      ...this.processOpenApiPaths(this.spec.paths)
    }));
  }
  getDoc() {
    return this.spec;
  }
  getFilename() {
    return this.fileName;
  }
  parseYamlFile(folder, fileName) {
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
  processCustomPaths(custom) {
    const pathsByTags = {};
    if (Object.keys(custom).length) {
      pathsByTags["custom"] = {
        name: custom.name ?? "Custom",
        description: custom.description ?? "",
        isOpen: custom["x-tag-expanded"] ?? true,
        items: []
      };
      for (const i in this.locales) {
        if (custom[`x-description-${i}`]) {
          pathsByTags["custom"][`x-description-${i}`] = custom[`x-description-${i}`];
        }
        if (custom[`x-name-${i}`]) {
          pathsByTags["custom"][`x-name-${i}`] = custom[`x-name-${i}`];
        }
      }
      for (const path in custom.paths) {
        const item = {
          name: custom.paths[path].title ?? path,
          path,
          type: "custom",
          description: custom.paths[path].description ?? "",
          icon: custom.paths[path]["x-icon"] ?? null
        };
        for (const i in this.locales) {
          if (custom.paths[path][`x-description-${i}`]) {
            item[`x-description-${i}`] = custom.paths[path][`x-description-${i}`];
          }
          if (custom.paths[path][`x-title-${i}`]) {
            item[`x-name-${i}`] = custom.paths[path][`x-title-${i}`];
          }
        }
        pathsByTags["custom"].items.push(item);
      }
    }
    return pathsByTags;
  }
  processOpenApiPaths(paths, type = "other") {
    const pathsByTags = {};
    for (const url in paths) {
      let routePath = url;
      if (routePath.startsWith("/"))
        routePath = routePath.substring(1);
      if (routePath.endsWith("/"))
        routePath = routePath.substring(-1);
      routePath = routePath.replace(/[/\\.?+=&{}]/gumi, "_").replace(/__+/, "_");
      for (const method in paths[url]) {
        const openapi_item = paths[url][method];
        if (!openapi_item.tags)
          openapi_item.tags = [type];
        openapi_item.tags.forEach((tag) => {
          if (method === "parameters")
            return;
          if (method === "servers")
            return;
          if (!pathsByTags[tag]) {
            const tagInfo = this.spec.tags[tag.toString().toLowerCase()] ?? {};
            const item2 = {
              name: tagInfo.name ?? tag,
              description: marked.parse(tagInfo.description ?? ""),
              isOpen: tagInfo["x-tag-expanded"] ?? true,
              items: []
            };
            for (const locale in this.locales) {
              if (tagInfo[`x-description-${locale}`]) {
                item2[`x-description-${locale}`] = marked.parse(tagInfo[`x-description-${locale}`]);
              }
              if (tagInfo[`x-name-${locale}`]) {
                item2[`x-name-${locale}`] = tagInfo[`x-name-${locale}`];
              }
            }
            pathsByTags[tag] = item2;
          }
          const item = {
            name: url,
            path: routePath,
            type: method,
            icon: openapi_item["x-icon"] ?? null,
            description: openapi_item.summary ?? null
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
        });
      }
    }
    return pathsByTags;
  }
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
async function makeTemplate(templateName, fileName, options, resolver) {
  const srcContents = await promises.readFile(resolver.resolve(`./runtime/templates/${templateName}`), "utf-8");
  const template = lodashTemplate(srcContents, {})({ options });
  if (!existsSync(join(__dirname, ".cache"))) {
    mkdirSync(join(__dirname, ".cache"));
  }
  const path = join(__dirname, ".cache", `${fileName}.vue`);
  writeFileSync(path, template);
  return path;
}
async function updateStorageFiles(nitro, docs) {
  for (let item of docs) {
    await nitro.storage.setItem(`cache:openapidoc:${item.filename}:doc.json`, item.doc);
    await nitro.storage.setItem(`cache:openapidoc:${item.filename}:path.json`, item.path);
    await nitro.storage.setItem(`cache:openapidoc:${item.filename}:locales.json`, item.locales);
    await nitro.storage.setItem(`cache:openapidoc:${item.filename}:locales_reload.json`, item.localesReload);
    await nitro.storage.setItem(`cache:openapidoc:${item.filename}:servers.json`, item.servers);
    await nitro.storage.setItem(`cache:openapidoc:${item.filename}:paths_by_tags.json`, item.pathsByTags);
    await nitro.storage.setItem(`cache:openapidoc:${item.filename}:name.json`, item.name);
  }
}
const module = defineNuxtModule({
  meta: {
    name: "nuxt-open-api-docs",
    configKey: "openApiDocs",
    compatibility: {
      nuxt: "^3.0.0"
    }
  },
  defaults: {
    folder: "./docs/openapi",
    name: "OpenApiDocs",
    path: "docs",
    debug: false,
    list: false,
    devtools: true,
    localize: true,
    doc: {},
    locales: [],
    files: () => {
      return {};
    }
  },
  async setup(options, nuxt) {
    if (!options.locales || !options.locales.length) {
      options.locales = ["en", "fr", "de", "ru", "ch", "es", "hi", "ar", "zh", "pt"];
    }
    const isProd = nuxt.options.dev === false;
    const resolver = createResolver(import.meta.url);
    await addComponentsDir({
      path: resolver.resolve("./runtime/components"),
      pathPrefix: false,
      // prefix: 'OA',
      extensions: ["vue"]
    });
    const filesClean = filesCleanup(options.files());
    const files = options.files();
    const workDir = resolve(nuxt.options.rootDir, options.folder);
    const docs = [];
    for (let filePath in files) {
      const parser = new Parser(workDir);
      parser.load(filePath);
      docs.push({
        filename: parser.getFilename(),
        name: options.name.toString(),
        filePath,
        doc: parser.getDoc(),
        path: options.path,
        pathsByTags: parser.getPaths(),
        locales: parser.getLocales(),
        localesReload: parser.getLocalesReload(),
        servers: parser.getServers()
      });
    }
    nuxt.hook("nitro:build:before", async (nitro) => {
      if (!isProd) {
        console.log("\u2139 add file watcher", workDir);
        const cachePath = join(__dirname, ".cache");
        const watcherEvent = async (path) => {
          watcher.close();
          console.log("\u21BB update store item", path);
          nuxt.callHook("restart");
        };
        const watcher = watch(workDir, { depth: 1, persistent: true }).on("change", watcherEvent);
        const watcher2 = watch(cachePath, { depth: 1, persistent: true }).on("unlink", watcherEvent);
        nuxt.hook("close", () => {
          watcher.close();
          watcher2.close();
        });
      }
      await nitro.storage.setItem(`cache:openapidoc:files.json`, filesClean);
      await nitro.storage.setItem(`cache:openapidoc:doc_path.json`, options.path ?? "docs");
      for (let item of docs) {
        nitro.options.prerender.routes = nitro.options.prerender.routes || [];
        await updateStorageFiles(nitro, docs);
        nitro.options.prerender.routes.unshift(`/${options.path}/${item.filename}/info`);
        nitro.options.prerender.routes.unshift(`/${options.path}/${item.filename}/auth`);
        nitro.options.prerender.routes.unshift(`/${options.path}/${item.filename}/components`);
        for (let locale in item.locales) {
          if (locale === "en")
            continue;
          nitro.options.prerender.routes.unshift(`/${locale}/${options.path}/${item.filename}/info`);
          nitro.options.prerender.routes.unshift(`/${locale}/${options.path}/${item.filename}/auth`);
          nitro.options.prerender.routes.unshift(`/${locale}/${options.path}/${item.filename}/components`);
        }
        for (let tag in item.pathsByTags) {
          if (tag === "custom")
            continue;
          nitro.options.prerender.routes.unshift(`/${item.path}/query/file/${item.filename}.json`);
          for (let i in item.pathsByTags[tag].items) {
            const select = item.pathsByTags[tag].items[i];
            nitro.options.prerender.routes.unshift(`/${options.path}/${item.filename}/${select.type}/${select.path}`);
            for (let locale in item.locales) {
              if (locale === "en")
                continue;
              nitro.options.prerender.routes.unshift(`/${locale}/${options.path}/${item.filename}/${select.type}/${select.path}`);
            }
          }
        }
      }
    });
    nuxt.hook("nitro:config", async (nitroConfig) => {
      nitroConfig.handlers = nitroConfig.handlers || [];
      nitroConfig.prerender = nitroConfig.prerender || {};
      nitroConfig.prerender.routes = nitroConfig.prerender.routes || [];
      nuxt.options.build.transpile = nuxt.options.build.transpile || [];
      nuxt.options.build.transpile.push(resolver.resolve("./runtime"));
      nitroConfig.handlers.push(
        {
          method: "get",
          route: `/${options.path}/query/file/:name.json`,
          handler: resolver.resolve("./runtime/server/api/file")
        }
      );
      console.info(`Added \`${options.path}/query/files.json\` route handler`);
    });
    if (options.list) {
      const dst = await makeTemplate("OpenApiTemplateDocsList.vue", "DocsList", {
        files: filesClean,
        doc_path: options.path ?? "docs",
        base_url: nuxt.options.app.baseURL ?? "/"
      }, resolver);
      extendPages((pages) => {
        pages.push({
          name: `openapi-docs-list`,
          path: `/${options.path}`,
          file: dst
        });
      });
    }
    addLayout({
      src: resolver.resolve(`./runtime/layout/OpenApiLayoutNuxt3.vue`),
      filename: `OpenApiLayoutNuxt3.vue`,
      write: true,
      options: {
        path: options.path ?? "docs"
      }
    }, "open-api-layout");
    for (let item of docs) {
      const dst = await makeTemplate("OpenApiTemplateNuxt3.vue", `${item.filename}`, {
        path: options.path ?? "docs",
        filename: item.filename,
        locales: item.locales,
        localesReload: item.localesReload
      }, resolver);
      extendPages((pages) => {
        pages.push({
          name: `openapi-${options.path}`,
          path: `/${options.path}/:name/:type`,
          file: dst
        });
        pages.push({
          name: `openapi-${options.path}/type-mathod`,
          path: `/${options.path}/:name/:type/:mathod`,
          file: dst
        });
      });
    }
    addImports([
      { name: "useOpenApiDataState", as: "useOpenApiDataState", from: resolver.resolve("./runtime/composables/openApiData") }
    ]);
    addPlugin({
      src: resolver.resolve("./runtime/plugins/plugin3")
    });
    if (options.localize) {
      nuxt.hook("i18n:registerModule", (register) => {
        register({
          langDir: resolver.resolve("./runtime/lang"),
          locales: options.locales?.map((code) => ({
            code,
            iso: code,
            file: `${code}.json`
          }))
        });
      });
    }
  }
});

export { module as default };
