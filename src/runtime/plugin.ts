import type { Plugin } from '@nuxt/types';
import mitt from 'mitt';
import OpenApiPlugin from "./OpenApiPlugin";

import enLang from './locales/en.json'

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


// @ts-ignore
const OpenApiPlugins: Plugin = (ctx, inject) => {
  const emitter = mitt();
  // @ts-ignore
  const openapidoc = new OpenApiPlugin(ctx.i18n)

  openapidoc.addLocale(enLang)

  ctx.app.$openapidoc = openapidoc
  ctx.app.$openapidocBus = {
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
