import { basename, dirname, extname, join } from "path";
import { marked } from "marked";
import fetch from "sync-fetch";
import fs from "fs";
import * as yaml from "js-yaml";
import hljs from "highlight.js";
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
export default class Parser {
  constructor(workDir) {
    this.lastlink = "null";
    this.fileName = "";
    this.spec = {};
    this.components = {};
    this.definitions = {};
    this.locales = { "en": "English" };
    this.refs = {};
    this.workDir = workDir;
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
      this.lastlink = value;
      const item = spec[link.path][link.name];
      item.title = link.path;
      return this.refs[value] = this.refReplace(item);
    }
    return value;
  }
  refLoader(value) {
    if (this.refs[value])
      return this.refs[value];
    const link = this.getSchemaValsFromPath(value);
    if (this.lastlink === value)
      return {
        type: "string",
        title: link.path,
        description: "recursive"
      };
    if (link.type === "definitions") {
      if (this.definitions[link.path]) {
        this.lastlink = value;
        const item = this.definitions[link.path];
        item.title = link.name;
        return this.refs[value] = this.refReplace(item);
      }
    }
    if (this.components[link.path] && this.components[link.path][link.name]) {
      this.lastlink = value;
      const item = this.components[link.path][link.name];
      item.title = link.name;
      return this.refs[value] = this.refReplace(item);
    }
    return this.refs[value] = value;
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
      if (obj.match(/\[.*?\]\(.*?\)|^>/) || obj.match(/```|\*\*|:--|<a |## |------/)) {
        return marked.parse(obj);
      } else {
        return sanitizeText(obj);
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
        if (custom[`x-summary-${i}`]) {
          pathsByTags[`x-description-${i}`] = custom[`x-summary-${i}`];
        }
        if (custom[`x-name-${i}`]) {
          pathsByTags[`x-name-${i}`] = custom[`x-name-${i}`];
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
          if (custom[`x-summary-${i}`]) {
            pathsByTags[`x-description-${i}`] = custom[`x-summary-${i}`];
          }
          if (custom[`x-name-${i}`]) {
            pathsByTags[`x-name-${i}`] = custom[`x-name-${i}`];
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
