export default class OpenApiPlugin {
  params = [];
  locale = "en";
  footer = null;
  routeInfo = (file, url, method) => null;
  logo = '<svg width="140" height="30" viewBox="0 0 380 91" class="css-1j8o68f"><g id="SvgjsG1669" featurekey="PG4fjM-0" transform="matrix(0.3580488055912308,0,0,0.3580488055912308,0,0.00012395068781816175)" fill="rgb(62 142 238 / 89%)"><path xmlns="http://www.w3.org/2000/svg" d="M126.795,249.872l-5.068-6.189l26.459-21.67l3.933-0.654c2.383,0.891,4.517,0.809,6.008-0.227  c1.556-1.08,2.412-3.164,2.412-5.869v-145c0-6.626-5.137-14.141-11.217-16.408l-0.146-0.059L39.823,8.012  c-8.66-0.255-17.459,3.097-23.702,9.031C10.884,22.02,8,28.378,8,34.947v4H0v-4c0-8.783,3.768-17.201,10.609-23.703  C18.576,3.673,29.911-0.513,40.907,0.05l1.342,0.305l109.947,46.033c9.17,3.467,16.342,13.936,16.342,23.875v145  c0,5.326-2.132,9.859-5.85,12.441c-3.078,2.135-7.019,2.771-11.074,1.84L126.795,249.872z"></path><path xmlns="http://www.w3.org/2000/svg" d="M1.038,38.491v145c0,8.08,6.053,16.912,13.493,19.688l105.042,46.072c1.457,0.543,2.91,0.824,4.293,0.824  c5.277,0,8.823-4.104,8.823-10.209v-145c0-8.08-6.053-16.912-13.492-19.688l-9.267-4.064c-1.756,1.523-4.893,5.444-4.893,14.093v56  l-18-25.25l-13.25,11.25c0,0-0.169-34.875-0.044-50.25c-0.037-10.146,1.992-16.831,5.298-19.391L14.155,29.104  c-1.457-0.543-2.91-0.823-4.293-0.823C4.584,28.281,1.038,32.384,1.038,38.491z"></path><path xmlns="http://www.w3.org/2000/svg" d="M4.475,29.498C2.76,30.81,1.495,32.787,0.91,35.272C1.715,33.491,3.003,31.483,4.475,29.498z"></path></g><text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" fill="black" font-size="56" font-weight="600">:name</text></svg>';
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
    return path;
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
  copyToClipboard(data, e, repl = true) {
    const btnEl = e.target;
    const originalText = btnEl.innerText;
    try {
      navigator.clipboard.writeText(data).then((r) => {
        if (!repl)
          return;
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
