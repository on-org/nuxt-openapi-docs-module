interface Param {
  pos: string,
  name: string,
  value: string,
  type: string
}

export default class OpenApiPlugin {
  params: Array<Param> = [];
  locales: {[key: string]: { [key: string]: string }} = {};
  footer: null|string = null;
  routeInfo: (file: string, url: string, method: string) => null|string = (file: string, url: string, method: string) => null;
  logo: string | null = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" style="border: 1px solid white;border-radius: 0.375rem;">' +
    '<rect width="100" height="30" rx="5" fill="#2d87e2" />' +
    '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="16">:name</text>' +
    '</svg>';
  access = (file: string) => true;

  addParam(pos: string, name: string, value: string, type = 'string') {
    this.params.push({pos, name, value, type})
  }
  getParams() {
    return this.params;
  }

  clearParams() {
    this.params = []
  }

  addLocale(lang: string, locale: { [key: string]: string }) {
    this.locales[lang] = locale;
  }

  getLocale(lang: string) {
    return this.locales[lang] || null;
  }

  getLocaleText(lang: string, path: string) {
    if(!this.locales[lang]) return path
    return this.locales[lang][path] || path;
  }

  hasLocaleText(lang: string, path: string) {
    if(!this.locales[lang]) return false
    return !!this.locales[lang][path];
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
