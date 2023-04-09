import mitt from 'mitt';
import OpenApiPlugin from "./OpenApiPlugin";

import ruLang from './locales/ru.json'
import deLang from './locales/de.json'
export default defineNuxtPlugin((NuxtApp) => {
  const emitter = mitt();
  const openapidoc = new OpenApiPlugin()

  openapidoc.addLocale('ru', ruLang)
  openapidoc.addLocale('de', deLang)

  return {
    provide: {
      openapidoc: openapidoc,
      openapidocBus: {
        $on: emitter.on,
        $off: emitter.off,
        $emit: emitter.emit,
      },
    }
  }
});
