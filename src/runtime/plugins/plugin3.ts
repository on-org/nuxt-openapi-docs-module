import mitt from 'mitt';
import OpenApiPlugin from "./OpenApiPlugin";
import {defineNuxtPlugin} from "#app";
import OpenApiRefPlugin from "./OpenApiRefPlugin";

class I18nLinker {
  i18n: any;
  defaultLocale: string = 'en';

  constructor(i18n: any) {
    this.i18n = i18n
  }

  get locale() {
    if (this.i18n.defaultLocale && typeof this.i18n.defaultLocale === 'function') {
      this.defaultLocale = this.i18n.defaultLocale()
    } else if (this.i18n.defaultLocale) {
      this.defaultLocale = this.i18n.defaultLocale
    }
    if (this.i18n.getLocale) {
      return this.i18n.getLocale()
    }

    return this.i18n.locale.value
  }

  t(val: string) {
    return this.i18n.t(val)
  }
}
export default defineNuxtPlugin((nuxtApp) => {
  const emitter = mitt();
  const i18nLinker =  nuxtApp.$i18n ? new I18nLinker(nuxtApp.$i18n) : null;
  const openapidoc = new OpenApiPlugin(i18nLinker)
  const openapidocRef = new OpenApiRefPlugin(i18nLinker)

  if (import.meta.server) {
    nuxtApp.payload.openapidocRefDefinitions = openapidocRef.definitions;
    nuxtApp.payload.openapidocRefComponents = openapidocRef.components;
  } else if (nuxtApp.payload) {
    if(nuxtApp.payload.openapidocRefDefinitions) openapidocRef.definitions = nuxtApp.payload.openapidocRefDefinitions;
    if(nuxtApp.payload.openapidocRefComponents) openapidocRef.components = nuxtApp.payload.openapidocRefComponents;
  }

  return {
    provide: {
      openapidoc: openapidoc,
      openapidocRef: openapidocRef,
      openapidocBus: {
        $on: emitter.on,
        $off: emitter.off,
        $emit: emitter.emit,
      },
    }
  }
});
