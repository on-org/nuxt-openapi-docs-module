import mitt from "mitt";
import OpenApiPlugin from "./OpenApiPlugin.mjs";
import { defineNuxtPlugin } from "#app";
import OpenApiRefPlugin from "./OpenApiRefPlugin.mjs";
class I18nLinker {
  i18n;
  constructor(i18n) {
    this.i18n = i18n;
  }
  get locale() {
    return this.i18n.locale.value;
  }
  t(val) {
    return this.i18n.t(val);
  }
}
export default defineNuxtPlugin((nuxtApp) => {
  const emitter = mitt();
  const i18nLinker = nuxtApp.$i18n ? new I18nLinker(nuxtApp.$i18n) : null;
  const openapidoc = new OpenApiPlugin(i18nLinker);
  const openapidocRef = new OpenApiRefPlugin(i18nLinker);
  if (process.server) {
    nuxtApp.payload.openapidocRefDefinitions = openapidocRef.definitions;
    nuxtApp.payload.openapidocRefComponents = openapidocRef.components;
  } else if (nuxtApp.payload) {
    if (nuxtApp.payload.openapidocRefDefinitions)
      openapidocRef.definitions = nuxtApp.payload.openapidocRefDefinitions;
    if (nuxtApp.payload.openapidocRefComponents)
      openapidocRef.components = nuxtApp.payload.openapidocRefComponents;
  }
  return {
    provide: {
      openapidoc,
      openapidocRef,
      openapidocBus: {
        $on: emitter.on,
        $off: emitter.off,
        $emit: emitter.emit
      }
    }
  };
});
