interface Param {
    pos: string;
    name: string;
    value: string;
    type: string;
}
export default class OpenApiPlugin {
    params: Array<Param>;
    locale: string;
    routeInfo: (file: string, url: string, method: string) => null | string;
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
    getLocalizedRoute(name: string, params: {
        [key: string]: string;
    }, locale?: string, hash?: string, query?: {
        [key: string]: string;
    }): any;
    hasAccess(file: string): boolean;
    setAccess(accessor: (file: string) => boolean): void;
    getRouteInfo(file: string, url: string, method: string): string | null;
    setRouteInfo(routeInfo: (file: string, url: string, method: string) => null | string): void;
    copyToClipboard(data: string, e: any, repl?: boolean): void;
}
export {};
