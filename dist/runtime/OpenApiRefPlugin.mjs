import mergeJsonSchema from "json-schema-merge-allof";
export default class OpenApiRefPlugin {
  constructor(i18n) {
    this.definitions = {};
    this.components = {};
    this.refs = {};
    this.i18n = null;
    this.doc_path = "docs";
    this.file = "docs";
    this.i18n = i18n;
  }
  setDefinitions(definitions) {
    this.definitions = definitions;
  }
  setComponents(components) {
    this.components = components;
  }
  pefFix(ref, cache = []) {
    if (typeof ref !== "string" || !ref.startsWith("#")) {
      return ref;
    }
    if (this.refs[ref]) {
      return this.refs[ref];
    }
    if (cache.includes(ref)) {
      return {
        $recursive: true,
        $ref: ref
      };
    }
    const [_, type, block, name] = ref.split("/");
    let refSchema = null;
    if (type === "definitions") {
      if (!this.definitions || !this.definitions[block]) {
        return {};
      }
      refSchema = this.definitions[block];
      refSchema.title = name;
      cache.push(ref);
    } else {
      if (!this.components || !this.components[block] || !this.components[block][name]) {
        return {};
      }
      refSchema = this.components[block][name];
      refSchema.title = name;
      cache.push(ref);
    }
    if (!refSchema)
      return null;
    return this.refs[ref] = this.repReplace(refSchema, cache);
  }
  repReplace(source, cache = [], setPath = true) {
    if (typeof source === "string")
      return this.pefFix(source, cache);
    if (!source)
      return source;
    if (typeof source !== "object")
      return source;
    if (Array.isArray(source)) {
      return source.map((item) => this.repReplace(item, cache, setPath));
    }
    if (source && "$ref" in source) {
      const ref = source.$ref;
      const refSchema = this.pefFix(ref, cache);
      if (!refSchema) {
        return {};
      }
      if (refSchema.$ref) {
        return refSchema;
      }
      if (!setPath)
        return refSchema;
      return {
        ...refSchema,
        $path: ref
      };
    }
    let result = {};
    for (const [key, value] of Object.entries(source)) {
      let subVal = value;
      if (typeof subVal === "string" && subVal.startsWith("#"))
        subVal = { $ref: value };
      result[key] = this.repReplace(subVal, cache, key !== "allOf");
    }
    if ("allOf" in result) {
      result = this.resolveAllOf(result);
    }
    return result;
  }
  resolveAllOf(schema) {
    if (typeof schema !== "object" || !Array.isArray(schema.allOf))
      return schema;
    const originalRef = schema.$ref;
    const result = mergeJsonSchema(schema);
    if (originalRef) {
      result.$ref = originalRef;
    } else if (result.$ref) {
      delete result.$ref;
    }
    return result;
  }
  setDocPath(path) {
    this.doc_path = path;
  }
  setFile(file) {
    this.file = file;
  }
  tr(data, param, oldLocale) {
    let locale = "en";
    let defaultLocale = true;
    if (this.i18n && this.i18n.locale) {
      locale = this.i18n.locale;
      defaultLocale = this.i18n.locale === this.i18n.defaultLocale;
    }
    let result = (data[`x-${param}-${locale}`] || data[param] || "").toString();
    if (defaultLocale) {
      result = result.replaceAll("/:locale", "").replaceAll(":locale", "");
    }
    return result.replaceAll(":path", this.doc_path).replaceAll(":file", this.file).replaceAll(":locale", locale);
  }
}
