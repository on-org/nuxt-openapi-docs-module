declare namespace _default {
    let name: string;
    namespace components {
        export { OpenApiParameter };
        export { OpenApiObjectModel };
        export { OpenApiMediaTypes };
    }
    namespace props {
        namespace response {
            let type: ObjectConstructor;
            let required: boolean;
        }
        namespace currentLocale {
            let type_1: StringConstructor;
            export { type_1 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
        let lite: BooleanConstructor;
    }
    function data(): {};
    namespace computed {
        function isEmpty(): any;
    }
}
export default _default;
