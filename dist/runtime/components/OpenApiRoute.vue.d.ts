declare namespace _default {
    const name: string;
    namespace components {
        export { OpenApiCallbacks };
        export { OpenApiResponses };
        export { OpenApiRequestBody };
        export { OpenApiSecurity };
        export { OpenApiParameters };
        export { OpenApiExamples };
        export { CodeSimples };
        export { OpenApiServer };
        export { OpenApiRouteHeader };
    }
    namespace props {
        export namespace route {
            const type: (ArrayConstructor | ObjectConstructor)[];
            const required: boolean;
        }
        export namespace subParams {
            const required_1: boolean;
            export { required_1 as required };
        }
        export namespace path_doc {
            const type_1: StringConstructor;
            export { type_1 as type };
            const required_2: boolean;
            export { required_2 as required };
        }
        export namespace file {
            const type_2: StringConstructor;
            export { type_2 as type };
            const required_3: boolean;
            export { required_3 as required };
        }
        export namespace currentLocale {
            const type_3: StringConstructor;
            export { type_3 as type };
            const required_4: boolean;
            export { required_4 as required };
        }
        export namespace url {
            const type_4: StringConstructor;
            export { type_4 as type };
            const required_5: boolean;
            export { required_5 as required };
            const _default: string;
            export { _default as default };
        }
        export namespace server {
            const type_5: StringConstructor;
            export { type_5 as type };
            const required_6: boolean;
            export { required_6 as required };
            const _default_1: string;
            export { _default_1 as default };
        }
        export namespace method {
            const type_6: StringConstructor;
            export { type_6 as type };
            const required_7: boolean;
            export { required_7 as required };
            const _default_2: string;
            export { _default_2 as default };
        }
        export namespace components_1 {
            const type_7: ObjectConstructor;
            export { type_7 as type };
            function _default_3(): {};
            export { _default_3 as default };
        }
        export { components_1 as components };
    }
    function data(): {
        lang: string;
        mimeType: string;
        params: never[];
    };
    namespace computed {
        function resolvedSchema(): any;
        function routeInfo(): any;
    }
    function mounted(): void;
    namespace methods {
        export { tr };
        export function genParamsToSimple(): void;
        export function handleNestedArrayOrObject(property: any, propertyName: any): any;
        export function handleNestedObject(property: any): {};
        export function convertStringFormatToMd(format: any, name: any): any;
    }
}
export default _default;
import { tr } from "./helpers";
