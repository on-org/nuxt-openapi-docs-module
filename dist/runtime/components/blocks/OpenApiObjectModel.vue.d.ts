declare namespace _default {
    let name: string;
    namespace components {
        export { OpenApiSchemaProperty };
    }
    namespace props {
        let lite: BooleanConstructor;
        namespace schema {
            let type: ObjectConstructor;
            let required: boolean;
        }
        namespace currentLocale {
            let type_1: StringConstructor;
            export { type_1 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
    }
    function data(): {};
    namespace computed {
        function resolvedSchema(): any;
        function requiredProps(): any;
    }
    let methods: {};
}
export default _default;
