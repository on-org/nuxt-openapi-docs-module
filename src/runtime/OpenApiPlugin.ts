interface Param {
  pos: string,
  name: string,
  value: string,
  type: string
}

export default class OpenApiPlugin {
  params: Array<Param> = [];
  locale = 'en';
  locales: { [key: string]: string } = {};
  footer: null|string = null;
  routeInfo: (file: string, url: string, method: string) => null|string = (file: string, url: string, method: string) => null;
  logo: string | null = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" style="border: 1px solid white;border-radius: 0.375rem;">' +
    '<rect width="100" height="30" rx="5" fill="#2d87e2" />' +
    '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="16">:name</text>' +
    '</svg>';
  access = (file: string) => true;
  i18n: any = null

  constructor(i18n: any) {
    this.i18n = i18n
  }

  addParam(pos: string, name: string, value: string, type = 'string') {
    this.params.push({pos, name, value, type})
  }
  getParams() {
    return this.params;
  }

  clearParams() {
    this.params = []
  }

  addLocale(locale: { [key: string]: string }) {
    this.locales = locale;
  }

  getLocaleText(path: string) {
    if(this.i18n && this.i18n.t) {
      const text = this.i18n.t(path);
      if (text !== path) {
        return this.i18n.t(path)
      }
    }

    return this.locales[path] || path;
  }

  hasI18n() {
    return !!this.i18n
  }

  currentLocale() {
    return this.i18n ? this.i18n.locale : this.locale
  }

  I18nLocaleSuffix(locale: string|null = null) {
    if(locale && this.i18n) {
      return `___${locale}`
    }
    return this.i18n ? `___${this.i18n.locale}` : ''
  }

  hasAccess(file: string) {
    return this.access(file)
  }

  setAccess(accessor: (file: string) => boolean) {
    this.access = accessor
  }

  getFooter() {
    return this.footer
  }
  setFooter(footer: null|string) {
    this.footer = footer
  }
  getLogo() {
    return this.logo
  }
  setLogo(logo: null|string) {
    this.logo = logo
  }

  getRouteInfo(file: string, url: string, method: string) {
    return this.routeInfo(file, url, method)
  }
  setRouteInfo(routeInfo: (file: string, url: string, method: string) => null|string) {
    this.routeInfo = routeInfo
  }
}
