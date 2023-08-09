declare namespace _default {
    const name: string;
    namespace components {
        export { OpenApiExampleObject };
        export { OpenApiTabs };
        export { OpenApiObjectModel };
        export { OpenApiDropdown };
    }
    namespace props {
        namespace data {
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
    const methods: {};
}
export default _default;
