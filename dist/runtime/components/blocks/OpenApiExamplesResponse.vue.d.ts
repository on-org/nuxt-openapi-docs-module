declare namespace _default {
    const name: string;
    namespace props {
        namespace examples {
            const type: ObjectConstructor;
            const required: boolean;
        }
        namespace mediaType {
            const type_1: StringConstructor;
            export { type_1 as type };
            const _default: string;
            export { _default as default };
        }
        namespace currentLocale {
            const type_2: StringConstructor;
            export { type_2 as type };
            const required_1: boolean;
            export { required_1 as required };
        }
        namespace components {
            const type_3: ObjectConstructor;
            export { type_3 as type };
            function _default_1(): {};
            export { _default_1 as default };
        }
    }
    namespace methods {
        export { tr };
        export function isJsonMediaType(mediaType: any): any;
        export function isXmlMediaType(mediaType: any): any;
    }
}
export default _default;
import { tr } from "../helpers";
