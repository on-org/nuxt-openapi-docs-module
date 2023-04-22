import type { Plugin } from '@nuxt/types';
import OpenApiPlugin from "./OpenApiPlugin";
import OpenApiRefPlugin from "./OpenApiRefPlugin";
declare module 'vue/types/vue' {
    interface Vue {
        $openapidoc: OpenApiPlugin;
        $openapidocRef: OpenApiRefPlugin;
    }
}
declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $openapidoc: OpenApiPlugin;
        $openapidocRef: OpenApiRefPlugin;
    }
    interface Context {
        $openapidoc: OpenApiPlugin;
        $openapidocRef: OpenApiRefPlugin;
    }
}
declare const OpenApiPlugins: Plugin;
export default OpenApiPlugins;
