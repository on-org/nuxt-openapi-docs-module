declare namespace _default {
    const name: string;
    namespace props {
        namespace securityRequirement {
            const type: ObjectConstructor;
            const required: boolean;
        }
        namespace currentLocale {
            const type_1: StringConstructor;
            export { type_1 as type };
            const required_1: boolean;
            export { required_1 as required };
        }
        namespace path_doc {
            const type_2: StringConstructor;
            export { type_2 as type };
            const required_2: boolean;
            export { required_2 as required };
        }
        namespace file {
            const type_3: StringConstructor;
            export { type_3 as type };
            const required_3: boolean;
            export { required_3 as required };
        }
    }
    namespace methods {
        export { tr };
        export function getRoute(scheme: any): "/" | {
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
import { tr } from "../helpers";
