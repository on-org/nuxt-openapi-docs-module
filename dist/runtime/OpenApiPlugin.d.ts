interface Param {
    pos: string;
    name: string;
    value: string;
    type: string;
}
export default class OpenApiPlugin {
    params: Array<Param>;
    locales: {
        [key: string]: {
            [key: string]: string;
        };
    };
    footer: null | string;
    routeInfo: (file: string, url: string, method: string) => null | string;
    logo: string | null;
    access: (file: string) => boolean;
    addParam(pos: string, name: string, value: string, type?: string): void;
    getParams(): Param[];
    clearParams(): void;
    addLocale(lang: string, locale: {
        [key: string]: string;
    }): void;
    getLocale(lang: string): {
        [key: string]: string;
    };
    getLocaleText(lang: string, path: string): string;
    hasLocaleText(lang: string, path: string): boolean;
    hasAccess(file: string): boolean;
    setAccess(accessor: (file: string) => true): void;
    getFooter(): string | null;
    setFooter(footer: null | string): void;
    getLogo(): string | null;
    setLogo(logo: null | string): void;
    getRouteInfo(file: string, url: string, method: string): string | null;
    setRouteInfo(routeInfo: (file: string, url: string, method: string) => null | string): void;
}
export {};
