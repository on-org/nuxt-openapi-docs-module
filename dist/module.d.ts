import * as _nuxt_schema from '@nuxt/schema';

interface ModuleOptions {
    folder?: string;
    name?: string;
    path?: string;
    debug?: boolean;
    files: () => {
        [key: string]: string;
    };
    doc?: {
        [key: string]: any;
    };
    isNuxt3?: boolean;
    isNuxt2?: boolean;
}
declare const _default: _nuxt_schema.NuxtModule<ModuleOptions>;

export { ModuleOptions, _default as default };
