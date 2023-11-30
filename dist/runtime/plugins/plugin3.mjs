import mitt from "mitt";
import OpenApiPlugin from "./OpenApiPlugin.mjs";
import { defineNuxtPlugin } from "#app";
import OpenApiRefPlugin from "./OpenApiRefPlugin.mjs";
import { useOpenApiDataState } from "../composables/openApiData.mjs";
import { addRouteMiddleware, ref, useFetch, useRoute } from "#imports";
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
  const { data } = useOpenApiDataState();
  if (process.server) {
    nuxtApp.payload.openapidocRefDefinitions = openapidocRef.definitions;
    nuxtApp.payload.openapidocRefComponents = openapidocRef.components;
  } else if (nuxtApp.payload) {
    if (nuxtApp.payload.openapidocRefDefinitions)
      openapidocRef.definitions = nuxtApp.payload.openapidocRefDefinitions;
    if (nuxtApp.payload.openapidocRefComponents)
      openapidocRef.components = nuxtApp.payload.openapidocRefComponents;
  }
  const refresh = async (to, dedup = false) => {
    let docsBase = to.fullPath.split("/")[1] ?? "docs";
    if (docsBase.length < 4)
      docsBase = to.fullPath.split("/")[2] ?? "docs";
    const fileName = ref(to.params.name?.toString() ?? "default");
    const { data: result } = await useFetch("/" + docsBase + "/query/file/" + fileName.value + "/data.json");
    data.value = result.value;
  };
  addRouteMiddleware(async (to, from) => {
    if (!to.name?.toString().startsWith("openapi-"))
      return;
    if (process.client && to.params.name === from.params.name)
      return;
    if (process.client && to.path === from.path)
      return;
    const redirect = await refresh(to, false);
  });
  nuxtApp.hook("app:data:refresh", async () => process.client && await refresh(useRoute(), true));
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
