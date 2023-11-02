declare namespace _default {
    namespace components {
        export { OpenApiParameter };
    }
    namespace props {
        export namespace title {
            export let type: StringConstructor;
            export let required: boolean;
            let _default: string;
            export { _default as default };
        }
        export namespace parameters {
            let type_1: ArrayConstructor;
            export { type_1 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
        export namespace currentLocale {
            let type_2: StringConstructor;
            export { type_2 as type };
            let required_2: boolean;
            export { required_2 as required };
        }
        export namespace components_1 {
            let type_3: ObjectConstructor;
            export { type_3 as type };
            function _default_1(): {};
            export { _default_1 as default };
        }
        export { components_1 as components };
    }
}
export default _default;
