declare namespace _default {
    let name: string;
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
            let type: (ObjectConstructor | ArrayConstructor)[];
            let required: boolean;
        }
        export namespace subParams {
            let required_1: boolean;
            export { required_1 as required };
        }
        export namespace path_doc {
            let type_1: StringConstructor;
            export { type_1 as type };
            let required_2: boolean;
            export { required_2 as required };
        }
        export namespace file {
            let type_2: StringConstructor;
            export { type_2 as type };
            let required_3: boolean;
            export { required_3 as required };
        }
        export namespace currentLocale {
            let type_3: StringConstructor;
            export { type_3 as type };
            let required_4: boolean;
            export { required_4 as required };
        }
        export namespace url {
            let type_4: StringConstructor;
            export { type_4 as type };
            let required_5: boolean;
            export { required_5 as required };
            let _default: string;
            export { _default as default };
        }
        export namespace server {
            let type_5: StringConstructor;
            export { type_5 as type };
            let required_6: boolean;
            export { required_6 as required };
            let _default_1: string;
            export { _default_1 as default };
        }
        export namespace method {
            let type_6: StringConstructor;
            export { type_6 as type };
            let required_7: boolean;
            export { required_7 as required };
            let _default_2: string;
            export { _default_2 as default };
        }
        export namespace components_1 {
            let type_7: ObjectConstructor;
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
        function genParamsToSimple(): void;
        function handleNestedArrayOrObject(property: any, propertyName: any): any;
        function handleNestedObject(property: any): {};
        function convertStringFormatToMd(format: any, name: any): any;
    }
}
export default _default;
