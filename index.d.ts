import type Vue from 'vue';

interface OpenApiPlugin {
  addParam(pos: 'headers'|'query'|'postData'|'path'|'cookie', name: string, value: string, type?: string): void;
  getParams(): Array<{pos: string, name: string, value: string, type: string}>
  clearParams(): void;
  addLocale(lang: string, locale: {[key: string]: string}): void;
  getLocale(lang): {[key: string]: string};
  getLocaleText(lang, path): string;
  hasLocaleText(lang, path): boolean;
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
