declare namespace _default {
    let name: string;
    namespace components {
        export { OpenApiMediaTypes };
    }
    namespace props {
        export namespace requestBody {
            let type: ObjectConstructor;
            let required: boolean;
        }
        export namespace currentLocale {
            let type_1: StringConstructor;
            export { type_1 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
        export namespace components_1 {
            let type_2: ObjectConstructor;
            export { type_2 as type };
            function _default(): {};
            export { _default as default };
        }
        export { components_1 as components };
        export let isCb: BooleanConstructor;
        export namespace hPrefix {
            let type_3: StringConstructor;
            export { type_3 as type };
            let _default_1: string;
            export { _default_1 as default };
        }
    }
}
export default _default;
