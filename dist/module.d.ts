import * as _nuxt_schema from '@nuxt/schema';

interface ModuleOptions {
    folder?: string;
    name?: string;
    logo?: string;
    footer?: string | null;
    path?: string;
    debug?: boolean;
    list?: boolean;
    localize?: boolean;
    devtools?: boolean;
    locales?: string[];
    files: () => {
        [key: string]: string;
    };
    doc?: {
        [key: string]: any;
    };
}
declare const _default: _nuxt_schema.NuxtModule<ModuleOptions, ModuleOptions, false>;

export { type ModuleOptions, _default as default };
