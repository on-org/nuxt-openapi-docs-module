import { defineNuxtModule, createResolver, addComponentsDir, addTemplate, extendPages, addLayout, addPlugin } from '@nuxt/kit';
import { extname, join, basename, resolve } from 'path';
import { readFileSync, promises, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import _ from 'lodash';
import { kebabCase } from 'scule';
import fs from 'fs';
import * as yaml from 'js-yaml';
import fetch from 'sync-fetch';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';



// -- Unbuild CommonJS Shims --
import __cjs_url__ from 'url';
import __cjs_path__ from 'path';
import __cjs_mod__ from 'module';
const __filename = __cjs_url__.fileURLToPath(import.meta.url);
const __dirname = __cjs_path__.dirname(__filename);
const require = __cjs_mod__.createRequire(import.meta.url);
class FileHandler {
  loadYamlFile(folder, fileName) {
    let yamlData = "";
    if (fileName.startsWith("http")) {
      yamlData = fetch(fileName).text();
    } else {
      const extension = extname(fileName);
      if (!extension) {
        fileName += ".yaml";
      }
      const filePath = join(folder, fileName);
      yamlData = fs.readFileSync(filePath, "utf8");
    }
    return yaml.load(yamlData);
  }
}

class MarkdownRenderer {
  markedInstance;
  constructor() {
    this.markedInstance = new Marked(
      markedHighlight({
        langPrefix: "hljs language-",
        highlight: (code, lang) => {
          const language = hljs.getLanguage(lang) ? lang : "plaintext";
          return hljs.highlight(code, { language }).value;
        }
      })
    );
    this.configureCustomRenderer();
  }
  configureCustomRenderer() {
    const renderer = {
      text: (text) => this.replaceAngleBracketsInText(text),
      table: (header, body) => `<table class="table">
${header}${body}</table>
`
    };
    this.markedInstance.use({ renderer });
  }
  replaceAngleBracketsInText(text) {
    return text.replace(/(?<=[^=])<|>(?=[^=])/g, (match) => match === "<" ? "&lt;" : "&gt;");
  }
  render(text) {
    return this.markedInstance.parse(text);
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
}

class ReferenceResolver {
  workDir;
  refsCache = {};
  fileHandler;
  constructor(workDir, fileHandler) {
    this.workDir = workDir;
    this.fileHandler = fileHandler;
  }
  resolveRef(ref) {
    if (this.refsCache[ref])
      return this.refsCache[ref];
    const [filePath, refPath] = ref.split("#");
    let doc;
    if (filePath.startsWith("http")) {
      doc = this.loadRemoteRef(filePath);
    } else {
      doc = this.loadLocalRef(filePath);
    }
    const resolvedDoc = this.resolveInternalPath(doc, refPath);
    this.refsCache[ref] = resolvedDoc;
    return resolvedDoc;
  }
  loadRemoteRef(filePath) {
    const yamlData = fetch(filePath).text();
    return yaml.load(yamlData);
  }
  loadLocalRef(filePath) {
    return this.fileHandler.loadYamlFile(this.workDir, filePath);
  }
  resolveInternalPath(doc, refPath) {
    if (!refPath)
      return doc;
    const pathSegments = refPath.startsWith("/") ? refPath.slice(1).split("/") : refPath.split("/");
    return pathSegments.reduce((acc, segment) => {
      if (!acc || !acc[segment]) {
        throw new Error(`Reference path not found: ${refPath}`);
      }
      return acc[segment];
    }, doc);
  }
}

class OpenApiProcessor {
  workDir;
  fileName = "";
  spec = {};
  markdownRenderer;
  referenceResolver;
  fileHandler = new FileHandler();
  locales = { "en": "English" };
  localesReload = false;
  constructor(workDir) {
    this.workDir = workDir;
    this.markdownRenderer = new MarkdownRenderer();
    this.referenceResolver = new ReferenceResolver(workDir, this.fileHandler);
  }
  load(fileName) {
    this.spec = this.fileHandler.loadYamlFile(this.workDir, fileName);
    this.fileName = kebabCase(basename(fileName, extname(fileName)));
    this.spec = this.processSpec(this.spec);
    this.spec = this.replaceMarkdown(this.spec);
    this.processLocales();
    this.processTags();
  }
  processLocales() {
    this.localesReload = !!this.spec?.info?.["x-locales-reload"];
    this.locales = { en: "English", ...this.spec?.info?.["x-locales"] };
  }
  processTags() {
    if (!this.spec.tags) {
      this.spec.tags = [];
    }
    this.spec.tags = this.spec.tags.reduce((acc, tag) => {
      acc[tag.name.toString().toLowerCase()] = tag;
      return acc;
    }, {});
  }
  processSpec(obj) {
    if (Array.isArray(obj)) {
      return obj.map((val) => val);
    } else if (typeof obj === "object" && obj !== null) {
      return Object.entries(obj).reduce((acc, [key, value]) => {
        if (key === "$ref" && typeof value === "string") {
          if (!value.startsWith("#")) {
            return obj = this.referenceResolver.resolveRef(value);
          }
          return obj = value;
        } else {
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
    return this.spec;
  }
  getLocalesReload() {
    return this.localesReload;
  }
  getLocales() {
    return this.locales;
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
              description: this.markdownRenderer.render(tagInfo.description ?? ""),
              isOpen: tagInfo["x-tag-expanded"] ?? true,
              items: []
            };
            for (const locale in this.locales) {
              if (tagInfo[`x-description-${locale}`]) {
                item2[`x-description-${locale}`] = this.markdownRenderer.render(tagInfo[`x-description-${locale}`]);
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
  replaceMarkdown(obj) {
    if (typeof obj === "string") {
      if (obj.match(/\[.*?\]\(.*?\)|^>/) || obj.match(/```|\*\*|:--|<a |## |------|`..?`/)) {
        return this.markdownRenderer.render(obj);
      } else {
        return this.markdownRenderer.sanitizeText(obj);
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
}

function filesCleanup(files) {
  const result = {};
  for (const i in files) {
    const extension = extname(i);
    const fileName = basename(i, extension);
    result[kebabCase(fileName)] = files[i];
  }
  return result;
}
async function makeTemplate(templateName, fileName, options, resolver) {
  const srcContents = await promises.readFile(resolver.resolve(`./runtime/${templateName}`), "utf-8");
  const template = _.template(srcContents, {})({ options });
  if (!existsSync(join(__dirname, ".cache"))) {
    mkdirSync(join(__dirname, ".cache"));
  }
  const path = join(__dirname, ".cache", `${fileName}.vue`);
  writeFileSync(path, template);
  return path;
}
const module = defineNuxtModule({
  meta: {
    name: "nuxt-openapi-docs-module",
    configKey: "openApiDocs",
    compatibility: {
      nuxt: "^3.0.0"
    }
  },
  defaults: {
    folder: "./docs/openapi",
    name: "OpenApiDocs",
    logo: '<svg width="140" height="30" viewBox="0 0 380 91" class="css-1j8o68f"><g id="SvgjsG1669" featurekey="PG4fjM-0" transform="matrix(0.3580488055912308,0,0,0.3580488055912308,0,0.00012395068781816175)" fill="rgb(62 142 238 / 89%)"><path xmlns="http://www.w3.org/2000/svg" d="M126.795,249.872l-5.068-6.189l26.459-21.67l3.933-0.654c2.383,0.891,4.517,0.809,6.008-0.227  c1.556-1.08,2.412-3.164,2.412-5.869v-145c0-6.626-5.137-14.141-11.217-16.408l-0.146-0.059L39.823,8.012  c-8.66-0.255-17.459,3.097-23.702,9.031C10.884,22.02,8,28.378,8,34.947v4H0v-4c0-8.783,3.768-17.201,10.609-23.703  C18.576,3.673,29.911-0.513,40.907,0.05l1.342,0.305l109.947,46.033c9.17,3.467,16.342,13.936,16.342,23.875v145  c0,5.326-2.132,9.859-5.85,12.441c-3.078,2.135-7.019,2.771-11.074,1.84L126.795,249.872z"></path><path xmlns="http://www.w3.org/2000/svg" d="M1.038,38.491v145c0,8.08,6.053,16.912,13.493,19.688l105.042,46.072c1.457,0.543,2.91,0.824,4.293,0.824  c5.277,0,8.823-4.104,8.823-10.209v-145c0-8.08-6.053-16.912-13.492-19.688l-9.267-4.064c-1.756,1.523-4.893,5.444-4.893,14.093v56  l-18-25.25l-13.25,11.25c0,0-0.169-34.875-0.044-50.25c-0.037-10.146,1.992-16.831,5.298-19.391L14.155,29.104  c-1.457-0.543-2.91-0.823-4.293-0.823C4.584,28.281,1.038,32.384,1.038,38.491z"></path><path xmlns="http://www.w3.org/2000/svg" d="M4.475,29.498C2.76,30.81,1.495,32.787,0.91,35.272C1.715,33.491,3.003,31.483,4.475,29.498z"></path></g><text x="60%" y="60%" dominant-baseline="middle" text-anchor="middle" fill="black" font-size="56" font-weight="600">:name</text></svg>',
    footer: null,
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
      options.locales = ["en", "fr", "de", "ru", "ch", "es", "hi", "ar", "zh", "pt", "bn", "it", "ja", "jv", "ko", "pa", "ta", "te", "tr"];
    }
    nuxt.options.dev === false;
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
      const parser = new OpenApiProcessor(workDir);
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
    addTemplate({
      filename: "openapi/config.mjs",
      write: true,
      getContents: () => "export default " + JSON.stringify({
        filesClean,
        path: options.path ?? "docs",
        doc_path: options.path ?? "docs",
        base_url: nuxt.options.app.baseURL ?? "/",
        logo: options.logo,
        footer: options.footer
      })
    });
    for (let item of docs) {
      addTemplate({
        filename: `openapi/docs.${item.filename}.config.mjs`,
        write: true,
        getContents: () => "export default " + JSON.stringify({
          path: item.path,
          locales: item.locales,
          localesReload: item.localesReload,
          servers: item.servers,
          paths_by_tags: item.pathsByTags,
          name: item.name
        })
      });
      addTemplate({
        filename: `openapi/docs.${item.filename}.mjs`,
        write: true,
        getContents: () => "export default " + JSON.stringify(item.doc)
      });
    }
    if (options.list) {
      const dst = await makeTemplate("templates/OpenApiTemplateDocsList.vue", "DocsList", {
        files: filesClean
      }, resolver);
      nuxt.hook("prepare:types", ({ references }) => {
        references.push({ path: dst });
      });
      extendPages((pages) => {
        pages.push({
          name: `openapi-docs-list`,
          path: `/${options.path}`,
          file: dst
        });
      });
    }
    const hasI18nModule = (nuxt.options?.modules ?? []).some((module) => {
      if (Array.isArray(module) && module.length > 0) {
        const moduleName = module[0];
        return typeof moduleName === "string" && moduleName === "@nuxtjs/i18n";
      }
      return false;
    });
    for (let item of docs) {
      addLayout({
        getContents({ options: options2 }) {
          const contents = readFileSync(resolver.resolve(`./runtime/layout/OpenApiLayoutNuxt3.vue`), "utf-8");
          return _.template(contents)({ options: options2 });
        },
        filename: `openapi/apidocs.layout.${item.filename}.vue`,
        write: true,
        options: {
          path: options.path ?? "docs",
          filename: item.filename,
          locales: item.locales,
          localesReload: item.localesReload
        }
      }, "open-api-layout-" + item.filename);
      const dst = await makeTemplate("templates/OpenApiTemplateNuxt3.vue", `${item.filename}`, {
        path: options.path ?? "docs",
        filename: item.filename,
        locales: item.locales,
        localesReload: item.localesReload,
        i18n: hasI18nModule,
        i18n_text: resolver.resolve("./runtime/lang/en.json")
      }, resolver);
      nuxt.hook("prepare:types", ({ references }) => {
        references.push({ path: dst });
      });
      extendPages((pages) => {
        pages.push({
          name: `openapi-${options.path}-${item.filename}`,
          path: `/${options.path}/${item.filename}/:type`,
          file: dst
        });
        pages.push({
          name: `openapi-${options.path}-${item.filename}/type-mathod`,
          path: `/${options.path}/${item.filename}/:type/:mathod`,
          file: dst
        });
      });
    }
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
    nuxt.hooks.hook("nitro:config", (nitroConfig) => {
      nitroConfig.publicAssets = nitroConfig.publicAssets || [];
      nitroConfig.publicAssets.push({ dir: resolver.resolve("./runtime/public"), maxAge: 31536e3 });
    });
    nuxt.hook("devtools:customTabs", (iframeTabs) => {
      iframeTabs.push({
        name: "nuxt-openapi-docs-module",
        title: "OpenApi",
        icon: "carbon:doc",
        view: {
          type: "iframe",
          src: "https://on-org.github.io/nuxt-openapi-docs-module/"
        }
      });
    });
  }
});

export { module as default };
