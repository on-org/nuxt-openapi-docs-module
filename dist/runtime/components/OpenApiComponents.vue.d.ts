declare namespace _default {
    namespace props {
        namespace components {
            export const type: ObjectConstructor;
            function _default(): {};
            export { _default as default };
        }
        namespace currentLocale {
            const type_1: StringConstructor;
            export { type_1 as type };
            export const required: boolean;
        }
    }
    namespace methods {
        export { tr };
    }
}
export default _default;
import { tr } from "./helpers";
