declare namespace _default {
    namespace props {
        namespace info {
            const type: ObjectConstructor;
            const required: boolean;
        }
        namespace servers {
            const required_1: boolean;
            export { required_1 as required };
        }
        namespace currentLocale {
            const type_1: StringConstructor;
            export { type_1 as type };
            const required_2: boolean;
            export { required_2 as required };
        }
    }
    namespace methods {
        function getUrl(server: any): any;
    }
}
export default _default;
