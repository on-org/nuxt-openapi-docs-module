declare namespace _default {
    let name: string;
    namespace props {
        namespace securityRequirement {
            let type: ObjectConstructor;
            let required: boolean;
        }
        namespace currentLocale {
            let type_1: StringConstructor;
            export { type_1 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
        namespace path_doc {
            let type_2: StringConstructor;
            export { type_2 as type };
            let required_2: boolean;
            export { required_2 as required };
        }
        namespace file {
            let type_3: StringConstructor;
            export { type_3 as type };
            let required_3: boolean;
            export { required_3 as required };
        }
    }
    namespace methods {
        function getRoute(scheme: any): {
            name: string;
            hash: string;
            meta: {
                locale: string;
                path: string;
                file: any;
                type: string;
            };
        };
    }
}
export default _default;
