import ruLang from './locales/ru.json'
import deLang from './locales/de.json'
class OpenApiPlugin {
  params = [];
  locales = {};

  addParam(pos, name, value, type = 'string') {
    this.params.push({pos, name, value, type})
  }
  getParams() {
    return this.params;
  }

  clearParams() {
    this.params = []
  }

  addLocale(lang, locale) {
    this.locales[lang] = locale;
  }

  getLocale(lang) {
    return this.locales[lang] ?? null;
  }

  getLocaleText(lang, path) {
    if(!this.locales[lang]) return path
    return this.locales[lang][path] ?? path;
  }

  hasLocaleText(lang, path) {
    if(!this.locales[lang]) return false
    return !!this.locales[lang][path];
  }
}
export default ({ app }, inject) => {
  const openapidoc = new OpenApiPlugin()

  openapidoc.addLocale('ru', ruLang)
  openapidoc.addLocale('de', deLang)

  app.$openapidoc = openapidoc
  inject('openapidoc', openapidoc)
}
