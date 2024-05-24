export default class OpenApiRefPlugin {
  definitions = {};
  components = {};
  i18n = null;
  doc_path = "docs";
  file = "docs";
  constructor(i18n) {
    this.i18n = i18n;
  }
  setDefinitions(definitions) {
    this.definitions = definitions;
  }
  setComponents(components) {
    this.components = components;
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
