import ruLang from './locales/ru.json'
import deLang from './locales/de.json'
class OpenApiPlugin {
  params = [];
  locales = {};
  footer = null;
  routeInfo = (file, url, method) => null;
  logo = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" style="border: 1px solid white;border-radius: 0.375rem;">' +
    '<rect width="100" height="30" rx="5" fill="#2d87e2" />' +
    '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="16">:name</text>' +
    '</svg>';
  access = (file) => true;

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

  hasAccess(file) {
    return this.access(file)
  }

  setAccess(accessor) {
    this.access = accessor
  }

  getFooter() {
    return this.footer
  }
  setFooter(footer) {
    this.footer = footer
  }
  getLogo() {
    return this.logo
  }
  setLogo(logo) {
    this.logo = logo
  }

  getRouteInfo(file, url, method) {
    return this.routeInfo(file, url, method)
  }
  setRouteInfo(routeInfo) {
    this.routeInfo = routeInfo
  }
}
export default ({ app }, inject) => {
  const openapidoc = new OpenApiPlugin()

  openapidoc.addLocale('ru', ruLang)
  openapidoc.addLocale('de', deLang)

  app.$openapidoc = openapidoc
  inject('openapidoc', openapidoc)
}
