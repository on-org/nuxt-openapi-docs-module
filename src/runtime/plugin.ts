import type { Plugin } from '@nuxt/types';
import mitt from 'mitt';
import OpenApiPlugin from "./OpenApiPlugin";

import ruLang from './locales/ru.json'
import deLang from './locales/de.json'

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


const OpenApiPlugins: Plugin = ({ app }, inject) => {
  const emitter = mitt();
  const openapidoc = new OpenApiPlugin()

  openapidoc.addLocale('ru', ruLang)
  openapidoc.addLocale('de', deLang)

  app.$openapidoc = openapidoc
  app.$openapidocBus = {
    $on: emitter.on,
    $off: emitter.off,
    $emit: emitter.emit,
  }
  inject('openapidoc', openapidoc)
  inject('openapidocBus', {
    $on: emitter.on,
    $off: emitter.off,
    $emit: emitter.emit,
  })
}

export default OpenApiPlugins
