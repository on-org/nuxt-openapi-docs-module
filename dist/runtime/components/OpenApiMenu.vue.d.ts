declare const _default: import("vue").DefineComponent<{
    routes: {
        type: ObjectConstructor;
        required: true;
    };
    currentLocale: {
        type: StringConstructor;
        required: true;
    };
    file: {
        type: StringConstructor;
        required: true;
    };
    path: {
        type: StringConstructor;
        required: true;
    };
    files: {
        type: ObjectConstructor;
        required: true;
    };
    locales: {
        type: ObjectConstructor;
        required: true;
    };
    servers: {
        type: ArrayConstructor;
        required: true;
    };
    localesReload: {
        type: BooleanConstructor;
        required: true;
    };
}, any, {
    currentServer: number;
}, {
    currentRouteName(): any;
    localesOptions(): {
        value: string;
        text: any;
    }[];
    serversOptions(): {
        value: string;
        text: any;
    }[];
    hasMultipleFiles(): boolean;
    hasLocalization(): any;
    hasServers(): boolean;
    filesAccessor(): {
        value: string;
        text: any;
    }[];
}, {
    getTagColor: typeof getTagColor;
    genUrl(path: any): string;
    onLocalesReload(e: any): void;
    getRoute(path: any): {
        name: string;
        params: {
            type: any;
        };
    };
    getSubRoute(route: any): {
        name: string;
        params?: undefined;
    } | {
        name: string;
        params: {
            type: any;
            mathod: string;
        };
    };
    changeRoute(route: any): void;
    changeDoc(option: any): {
        name: string;
        params: {
            type: string;
        };
    };
    changeServer(option: any): void;
    changeLocale(option: any): {
        name: string;
        params: {
            type: string;
        };
    };
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    routes: {
        type: ObjectConstructor;
        required: true;
    };
    currentLocale: {
        type: StringConstructor;
        required: true;
    };
    file: {
        type: StringConstructor;
        required: true;
    };
    path: {
        type: StringConstructor;
        required: true;
    };
    files: {
        type: ObjectConstructor;
        required: true;
    };
    locales: {
        type: ObjectConstructor;
        required: true;
    };
    servers: {
        type: ArrayConstructor;
        required: true;
    };
    localesReload: {
        type: BooleanConstructor;
        required: true;
    };
}>>, {}, {}>;
export default _default;
import { getTagColor } from "./helpers.js";
