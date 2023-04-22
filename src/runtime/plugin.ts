import type { Plugin } from '@nuxt/types';
import mitt from 'mitt';
import OpenApiPlugin from "./OpenApiPlugin";

import enLang from './locales/en.json'
import OpenApiRefPlugin from "./OpenApiRefPlugin";

declare module 'vue/types/vue' {
  interface Vue {
    $openapidoc: OpenApiPlugin,
    $openapidocRef: OpenApiRefPlugin,
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $openapidoc: OpenApiPlugin,
    $openapidocRef: OpenApiRefPlugin,
  }

  interface Context {
    $openapidoc: OpenApiPlugin,
    $openapidocRef: OpenApiRefPlugin,
  }
}


// @ts-ignore
const OpenApiPlugins: Plugin = (ctx, inject) => {
  const emitter = mitt();
  // @ts-ignore
  const openapidoc = new OpenApiPlugin(ctx.i18n)
  const openapidocRef = new OpenApiRefPlugin()

  openapidoc.addLocale(enLang)

  ctx.app.$openapidoc = openapidoc
  ctx.app.$openapidocRef = openapidocRef
  ctx.app.$openapidocBus = {
    $on: emitter.on,
    $off: emitter.off,
    $emit: emitter.emit,
  }
  inject('openapidoc', openapidoc)
  inject('openapidocRef', openapidocRef)
  inject('openapidocBus', {
    $on: emitter.on,
    $off: emitter.off,
    $emit: emitter.emit,
  })
  if (process.server) {
    ctx.beforeNuxtRender(({ nuxtState }) => {
      nuxtState.openapidocRefDefinitions = openapidocRef.definitions;
      nuxtState.openapidocRefComponents = openapidocRef.components;
    });
  } else if (ctx.nuxtState) {
    if(ctx.nuxtState.openapidocRefDefinitions) openapidocRef.definitions = ctx.nuxtState.openapidocRefDefinitions;
    if(ctx.nuxtState.openapidocRefComponents) openapidocRef.components = ctx.nuxtState.openapidocRefComponents;
  }
}

export default OpenApiPlugins
