import type { Plugin } from '@nuxt/types';
import OpenApiPlugin from "./OpenApiPlugin";
declare module 'vue/types/vue' {
    interface Vue {
        $openapidoc: OpenApiPlugin;
    }
}
declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $openapidoc: OpenApiPlugin;
    }
    interface Context {
        $openapidoc: OpenApiPlugin;
    }
}
declare const OpenApiPlugins: Plugin;
export default OpenApiPlugins;
