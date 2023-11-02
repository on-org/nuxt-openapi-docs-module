interface Param {
    pos: string;
    name: string;
    value: string;
    type: string;
}
export default class OpenApiPlugin {
    params: Array<Param>;
    locale: string;
    footer: null | string;
    routeInfo: (file: string, url: string, method: string) => null | string;
    logo: string | null;
    access: (file: string) => boolean;
    i18n: any;
    constructor(i18n: any);
    addParam(pos: string, name: string, value: string, type?: string): void;
    getParams(): Param[];
    clearParams(): void;
    getLocaleText(path: string): any;
    hasI18n(): boolean;
    currentLocale(): any;
    I18nLocaleSuffix(locale?: string | null): string;
    hasAccess(file: string): boolean;
    setAccess(accessor: (file: string) => boolean): void;
    getFooter(): string | null;
    setFooter(footer: null | string): void;
    getLogo(): string | null;
    setLogo(logo: null | string): void;
    getRouteInfo(file: string, url: string, method: string): string | null;
    setRouteInfo(routeInfo: (file: string, url: string, method: string) => null | string): void;
    copyToClipboard(data: string, e: any): void;
}
export {};
