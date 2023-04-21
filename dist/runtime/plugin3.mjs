import mitt from "mitt";
import OpenApiPlugin from "./OpenApiPlugin.mjs";
import enLang from "./locales/en.json";
import { defineNuxtPlugin } from "#app";
export default defineNuxtPlugin((nuxtApp) => {
  const emitter = mitt();
  const openapidoc = new OpenApiPlugin(nuxtApp.$i18n);
  openapidoc.addLocale(enLang);
  return {
    provide: {
      openapidoc,
      openapidocBus: {
        $on: emitter.on,
        $off: emitter.off,
        $emit: emitter.emit
      }
    }
  };
});
