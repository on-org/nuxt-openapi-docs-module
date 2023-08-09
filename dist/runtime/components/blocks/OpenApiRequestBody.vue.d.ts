declare namespace _default {
    const name: string;
    namespace components {
        export { OpenApiMediaTypes };
    }
    namespace props {
        export namespace requestBody {
            const type: ObjectConstructor;
            const required: boolean;
        }
        export namespace currentLocale {
            const type_1: StringConstructor;
            export { type_1 as type };
            const required_1: boolean;
            export { required_1 as required };
        }
        export namespace components_1 {
            const type_2: ObjectConstructor;
            export { type_2 as type };
            function _default(): {};
            export { _default as default };
        }
        export { components_1 as components };
        export const isCb: BooleanConstructor;
        export namespace hPrefix {
            const type_3: StringConstructor;
            export { type_3 as type };
            const _default_1: string;
            export { _default_1 as default };
        }
    }
}
export default _default;
