declare namespace _default {
    namespace components {
        export { MainLeftMenuSubMenu };
        export { OpenApiDropdown };
    }
    namespace props {
        namespace routes {
            let type: ObjectConstructor;
            let required: boolean;
        }
        namespace currentLocale {
            let type_1: StringConstructor;
            export { type_1 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
        namespace file {
            let type_2: StringConstructor;
            export { type_2 as type };
            let required_2: boolean;
            export { required_2 as required };
        }
        namespace path {
            let type_3: StringConstructor;
            export { type_3 as type };
            let required_3: boolean;
            export { required_3 as required };
        }
        namespace files {
            let type_4: ObjectConstructor;
            export { type_4 as type };
            let required_4: boolean;
            export { required_4 as required };
        }
        namespace locales {
            let type_5: ObjectConstructor;
            export { type_5 as type };
            let required_5: boolean;
            export { required_5 as required };
        }
        namespace localesReload {
            let type_6: BooleanConstructor;
            export { type_6 as type };
            let required_6: boolean;
            export { required_6 as required };
        }
    }
    namespace computed {
        function currentRouteName(): any;
        function localesOptions(): {
            value: string;
            text: any;
        }[];
        function isMultipleFiles(): boolean;
        function isLocalization(): any;
        function filesAccessor(): {
            value: string;
            text: any;
        }[];
    }
    namespace methods {
        export { getTagColor };
        export function genUrl(path: any): string;
        export function onLocalesReload(e: any): void;
        export function getRoute(path: any): {
            name: string;
            meta: {
                path: any;
                file: any;
                type: string;
            };
        };
        export function getSubRoute(route: any): {
            name: string;
            meta?: undefined;
            params?: undefined;
        } | {
            name: string;
            meta: {
                path: string;
                file: any;
                type: any;
            };
            params: {
                type: any;
                path: string;
            };
        };
        export function changeDoc(option: any): {
            name: string;
            meta: {
                path: any;
                type: string;
                file: any;
            };
        };
        export function changeLocale(option: any): {
            name: string;
            meta: {
                path: any;
                type: string;
                file: any;
            };
        };
    }
}
export default _default;
import { getTagColor } from "./helpers";
