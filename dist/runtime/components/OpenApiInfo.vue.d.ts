declare namespace _default {
    namespace props {
        namespace info {
            let type: ObjectConstructor;
            let required: boolean;
        }
        namespace servers {
            let required_1: boolean;
            export { required_1 as required };
        }
        namespace currentLocale {
            let type_1: StringConstructor;
            export { type_1 as type };
            let required_2: boolean;
            export { required_2 as required };
        }
    }
    namespace methods {
        function getUrl(server: any): any;
    }
}
export default _default;
