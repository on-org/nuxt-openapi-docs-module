declare namespace _default {
    let name: string;
    namespace props {
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
        namespace components {
            let type_2: ObjectConstructor;
            export { type_2 as type };
            function _default(): {};
            export { _default as default };
        }
        namespace title {
            let _default_1: null;
            export { _default_1 as default };
        }
        namespace open {
            let type_3: BooleanConstructor;
            export { type_3 as type };
            let _default_2: boolean;
            export { _default_2 as default };
        }
    }
    let computed: {};
    namespace methods {
        function assignAllOf(allOf: any): {
            properties: any;
        };
        function assign(allOf: any): {
            properties: any;
        };
    }
}
export default _default;
