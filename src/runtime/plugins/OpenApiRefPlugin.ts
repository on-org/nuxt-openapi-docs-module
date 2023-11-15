export default class OpenApiRefPlugin {
  definitions: { [key: string]: any } = {};
  components: { [key: string]: any } = {};

  i18n: any = null
  doc_path: string = 'docs'
  file: string = 'docs'

  constructor(i18n: any) {
    this.i18n = i18n
  }

  setDefinitions(definitions: { [key: string]: any }) {
    this.definitions = definitions;
  }

  setComponents(components: { [key: string]: any }) {
    this.components = components;
  }

  setDocPath(path: string) {
    this.doc_path = path
  }
  setFile(file: string) {
    this.file = file;
  }

  tr(data: {[key: string]: any}, param: string, oldLocale?: string) {
    let locale = 'en';
    let defaultLocale = true;
    if(this.i18n && this.i18n.locale) {
      locale = this.i18n.locale;
      defaultLocale = this.i18n.locale === this.i18n.defaultLocale
    }
    let result = (data[`x-${param}-${locale}`] || data[param] || '').toString();
    if(defaultLocale) {
      result = result.replaceAll('/:locale', '').replaceAll(':locale', '')
    }
    return result
      .replaceAll(':path', this.doc_path)
      .replaceAll(':file', this.file)
      .replaceAll(':locale', locale)
  }
}
