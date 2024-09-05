import en from "../locales/en.json";
export default class OpenApiPlugin {
  params = [];
  locale = "en";
  routeInfo = (file, url, method) => null;
  access = (file) => true;
  i18n = null;
  constructor(i18n) {
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
  getLocaleText(path) {
    if (this.i18n && this.i18n.t) {
      const text = this.i18n.t(path);
      if (text !== path) {
        return this.i18n.t(path);
      }
    }
    return en[path] ?? path;
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
  getRouteInfo(file, url, method) {
    return this.routeInfo(file, url, method);
  }
  setRouteInfo(routeInfo) {
    this.routeInfo = routeInfo;
  }
  copyToClipboard(data, e, repl = true) {
    const btnEl = e.target;
    const originalText = btnEl.innerText;
    try {
      navigator.clipboard.writeText(data).then((r) => {
        if (!repl) return;
        btnEl.innerText = "Copied";
        setTimeout(() => {
          btnEl.innerText = originalText;
        }, 1e3);
      });
    } catch (err) {
      console.error("Unable to copy", err);
    }
  }
}
