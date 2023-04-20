declare namespace _default {
    const name: string;
    namespace components {
        export { OpenApiSchemaProperty };
    }
    namespace props {
        const lite: BooleanConstructor;
        namespace schema {
            const type: ObjectConstructor;
            const required: boolean;
        }
        namespace currentLocale {
            const type_1: StringConstructor;
            export { type_1 as type };
            const required_1: boolean;
            export { required_1 as required };
        }
    }
    function data(): {};
    namespace computed {
        function resolvedSchema(): any;
        function requiredProps(): any;
    }
    const methods: {};
}
export default _default;
