declare namespace _default {
    let name: string;
    namespace components {
        export { OpenApiMediaTypes };
        export { OpenApiObjectModel };
    }
    namespace props {
        namespace data {
            let type: ObjectConstructor;
            let required: boolean;
        }
        let hideName: BooleanConstructor;
        let hideDescription: BooleanConstructor;
        let lite: BooleanConstructor;
        namespace currentLocale {
            let type_1: StringConstructor;
            export { type_1 as type };
            let required_1: boolean;
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
