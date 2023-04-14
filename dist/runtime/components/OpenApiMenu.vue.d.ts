declare namespace _default {
    namespace props {
        namespace routes {
            const type: ObjectConstructor;
            const required: boolean;
        }
        namespace currentLocale {
            const type_1: StringConstructor;
            export { type_1 as type };
            const required_1: boolean;
            export { required_1 as required };
        }
        namespace file {
            const type_2: StringConstructor;
            export { type_2 as type };
            const required_2: boolean;
            export { required_2 as required };
        }
        namespace path {
            const type_3: StringConstructor;
            export { type_3 as type };
            const required_3: boolean;
            export { required_3 as required };
        }
        namespace files {
            const type_4: ObjectConstructor;
            export { type_4 as type };
            const required_4: boolean;
            export { required_4 as required };
        }
        namespace locales {
            const type_5: ObjectConstructor;
            export { type_5 as type };
            const required_5: boolean;
            export { required_5 as required };
        }
    }
    namespace computed {
        function isLocalization(): boolean;
        function filesAccessor(): {};
    }
    namespace methods {
        export { tr };
        export { getTagColor };
        export function getRouteType(method: any): "" | "🔍 GET" | "💾 POST" | "💾 PUT" | "💾 PATCH" | "🗑️ DEL";
        export function genUrl(path: any): string;
        export function getRoute(path: any): {
            name: string;
            meta: {
                locale: string;
                path: any;
                file: any;
                type: string;
            };
        };
        export function getSubRoute(route: any): string | {
            name: string;
            meta: {
                locale: any;
                path: string;
                file: any;
                type: any;
            };
        };
        export function changeDoc(option: any): {
            name: string;
            meta: {
                locale: string;
                path: any;
                type: string;
                file: any;
            };
        };
        export function changeLocale(option: any): {
            name: string;
            meta: {
                locale: any;
                path: any;
                type: string;
                file: any;
            };
        };
    }
}
export default _default;
import { tr } from "./helpers";
import { getTagColor } from "./helpers";
