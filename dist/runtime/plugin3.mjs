import mitt from "mitt";
import OpenApiPlugin from "./OpenApiPlugin.mjs";
import enLang from "./locales/en.json";
import { defineNuxtPlugin } from "#app";
import OpenApiRefPlugin from "./OpenApiRefPlugin.mjs";
export default defineNuxtPlugin((nuxtApp) => {
  const emitter = mitt();
  const openapidoc = new OpenApiPlugin(nuxtApp.$i18n);
  const openapidocRef = new OpenApiRefPlugin();
  openapidoc.addLocale(enLang);
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
