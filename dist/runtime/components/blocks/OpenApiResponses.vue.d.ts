declare namespace _default {
    let name: string;
    namespace components {
        export { OpenApiResponse };
    }
    namespace props {
        export let isCb: BooleanConstructor;
        export namespace hPrefix {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        export namespace responses {
            let type_1: ObjectConstructor;
            export { type_1 as type };
            export let required: boolean;
        }
        export namespace currentLocale {
            let type_2: StringConstructor;
            export { type_2 as type };
            let required_1: boolean;
            export { required_1 as required };
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
