interface Param {
  pos: string,
  name: string,
  value: string,
  type: string
}

export default class OpenApiPlugin {
  params: Array<Param> = [];
  locale = 'en';
  routeInfo: (file: string, url: string, method: string) => null|string = (file: string, url: string, method: string) => null;
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

  getLocaleText(path: string) {
    if(this.i18n && this.i18n.t) {
      const text = this.i18n.t(path);
      if (text !== path) {
        return this.i18n.t(path)
      }
    }

    return path;
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
  getRouteInfo(file: string, url: string, method: string) {
    return this.routeInfo(file, url, method)
  }
  setRouteInfo(routeInfo: (file: string, url: string, method: string) => null|string) {
    this.routeInfo = routeInfo
  }

  copyToClipboard(data: string, e: any, repl = true) {
    const btnEl = e.target;
    const originalText = btnEl.innerText;

    try {
      navigator.clipboard.writeText(data).then(r => {
        if (!repl) return;
        btnEl.innerText = 'Copied';
        setTimeout(() => {
          btnEl.innerText = originalText;
        }, 1000);
      });
    } catch (err) {
      console.error('Unable to copy', err); // eslint-disable-line no-console
    }
  }
}
