declare namespace _default {
    let name: string;
    namespace components {
        export { OpenApiExampleObject };
        export { OpenApiTabs };
        export { OpenApiObjectModel };
        export { OpenApiDropdown };
    }
    namespace props {
        namespace data {
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
    function data(): {
        selectedMediaType: null;
    };
    namespace computed {
        function types(): {
            value: string;
        }[];
        function medaTypeObject(): any;
    }
    function created(): void;
    let methods: {};
}
export default _default;
