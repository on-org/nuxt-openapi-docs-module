declare namespace _default {
    const name: string;
    namespace components {
        export { OpenApiMediaTypes };
        export { OpenApiObjectModel };
    }
    namespace props {
        namespace data {
            const type: ObjectConstructor;
            const required: boolean;
        }
        const hideName: BooleanConstructor;
        const hideDescription: BooleanConstructor;
        const lite: BooleanConstructor;
        namespace currentLocale {
            const type_1: StringConstructor;
            export { type_1 as type };
            const required_1: boolean;
            export { required_1 as required };
        }
    }
    function data(): {};
    namespace computed {
        function flags(): string[];
        function exampleString(): any;
    }
}
export default _default;
