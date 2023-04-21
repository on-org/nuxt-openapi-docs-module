export default class OpenApiPlugin {
  constructor(i18n) {
    this.params = [];
    this.locale = "en";
    this.locales = {};
    this.footer = null;
    this.routeInfo = (file, url, method) => null;
    this.logo = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" style="border: 1px solid white;border-radius: 0.375rem;"><rect width="100" height="30" rx="5" fill="#2d87e2" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="16">:name</text></svg>';
    this.access = (file) => true;
    this.i18n = null;
    this.i18n = i18n;
  }
  addParam(pos, name, value, type = "string") {
    this.params.push({ pos, name, value, type });
  }
  getParams() {
    return this.params;
  }
  clearParams() {
    this.params = [];
  }
  addLocale(locale) {
    this.locales = locale;
  }
  getLocaleText(path) {
    if (this.i18n && this.i18n.t) {
      const text = this.i18n.t(path);
      if (text !== path) {
        return this.i18n.t(path);
      }
    }
    return this.locales[path] || path;
  }
  hasI18n() {
    return !!this.i18n;
  }
  currentLocale() {
    return this.i18n ? this.i18n.locale : this.locale;
  }
  I18nLocaleSuffix(locale = null) {
    if (locale && this.i18n) {
      return `___${locale}`;
    }
    return this.i18n ? `___${this.i18n.locale}` : "";
  }
  hasAccess(file) {
    return this.access(file);
  }
  setAccess(accessor) {
    this.access = accessor;
  }
  getFooter() {
    return this.footer;
  }
  setFooter(footer) {
    this.footer = footer;
  }
  getLogo() {
    return this.logo;
  }
  setLogo(logo) {
    this.logo = logo;
  }
  getRouteInfo(file, url, method) {
    return this.routeInfo(file, url, method);
  }
  setRouteInfo(routeInfo) {
    this.routeInfo = routeInfo;
  }
}
