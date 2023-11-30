import mitt from 'mitt';
import OpenApiPlugin from "./OpenApiPlugin";
import {defineNuxtPlugin} from "#app";
import OpenApiRefPlugin from "./OpenApiRefPlugin";
import { useOpenApiDataState } from '../composables/openApiData'
// @ts-ignore
import {RouteLocationNormalized, RouteLocationNormalizedLoaded} from "vue-router";
import {addRouteMiddleware, ref, useFetch, useRoute, useRouter} from "#imports";
class I18nLinker {
  private i18n: any;
  constructor(i18n: any) {
    this.i18n = i18n
  }

  get locale() {
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

  const { data } = useOpenApiDataState()

  if (process.server) {
    nuxtApp.payload.openapidocRefDefinitions = openapidocRef.definitions;
    nuxtApp.payload.openapidocRefComponents = openapidocRef.components;
  } else if (nuxtApp.payload) {
    if(nuxtApp.payload.openapidocRefDefinitions) openapidocRef.definitions = nuxtApp.payload.openapidocRefDefinitions;
    if(nuxtApp.payload.openapidocRefComponents) openapidocRef.components = nuxtApp.payload.openapidocRefComponents;
  }

  const refresh = async (to: RouteLocationNormalized | RouteLocationNormalizedLoaded, dedup = false) => {
    let docsBase = to.fullPath.split('/')[1] ?? 'docs';
    if(docsBase.length < 4) docsBase = to.fullPath.split('/')[2] ?? 'docs';
    const fileName = ref(to.params.name?.toString() ?? 'default');

    const { data: result } = await useFetch('/' + docsBase + "/query/file/" + fileName.value + '.json')

    console.log(111, result.value);

    data.value = result.value as any
  }

  addRouteMiddleware(async (to, from) => {

    if (!to.name?.toString().startsWith('openapi-')) return;
    if (process.client && to.params.name === from.params.name) return;
    if (process.client && to.path === from.path) return

    const redirect = await refresh(to, false)

    // if (redirect) {
    //   if (hasProtocol(redirect)) {
    //     return callWithNuxt(nuxt, navigateTo, [redirect, { external: true }])
    //   } else {
    //     return redirect
    //   }
    // }
  })


  // @ts-ignore - Refresh on client-side
  nuxtApp.hook('app:data:refresh', async () => process.client && await refresh(useRoute(), true))

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
