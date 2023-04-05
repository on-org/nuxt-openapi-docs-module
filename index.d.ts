import type Vue from 'vue';

interface OpenApiPlugin {
  addParam(pos: 'headers'|'query'|'postData'|'path'|'cookie', name: string, value: string, type?: string): void;
  getParams(): Array<{pos: string, name: string, value: string, type: string}>
  clearParams(): void;
  addLocale(lang: string, locale: {[key: string]: string}): void;
  getLocale(lang: string): {[key: string]: string};
  getLocaleText(lang: string, path: string): string;
  hasLocaleText(lang: string, path: string): boolean;
  hasAccess(file: string): boolean;
  setAccess(accessor: (path: string) => boolean): boolean;
  getFooter(): null|string;
  setFooter(footer: null|string): void;
  getLogo(): string;
  setLogo(footer: string): void;
  getRouteInfo(file: string, url: string, method: string): (file: string, url: string, method: string) => string|null;
  setRouteInfo(routeInfo: (file: string, url: string, method: string) => string|null): void;
}

declare module 'vue/types/vue' {
  interface Vue {
    $openapidoc: OpenApiPlugin,
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $openapidoc: OpenApiPlugin,
  }

  interface Context {
    $openapidoc: OpenApiPlugin,
  }
}
