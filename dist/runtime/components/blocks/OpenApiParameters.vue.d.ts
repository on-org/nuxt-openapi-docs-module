declare namespace _default {
    namespace props {
        namespace title {
            export const type: StringConstructor;
            export const required: boolean;
            const _default: string;
            export { _default as default };
        }
        const parameters: (ObjectConstructor | ArrayConstructor)[];
        namespace currentLocale {
            const type_1: StringConstructor;
            export { type_1 as type };
            const required_1: boolean;
            export { required_1 as required };
        }
        namespace components {
            const type_2: ObjectConstructor;
            export { type_2 as type };
            function _default_1(): {};
            export { _default_1 as default };
        }
    }
    const computed: {};
    namespace methods {
        export { tr };
    }
}
export default _default;
import { tr } from "../helpers";
