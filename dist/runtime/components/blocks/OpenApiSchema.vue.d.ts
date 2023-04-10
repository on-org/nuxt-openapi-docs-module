declare namespace _default {
    const name: string;
    namespace props {
        namespace schema {
            const type: ObjectConstructor;
            const required: boolean;
        }
        namespace currentLocale {
            const type_1: StringConstructor;
            export { type_1 as type };
            const required_1: boolean;
            export { required_1 as required };
        }
        namespace components {
            const type_2: ObjectConstructor;
            export { type_2 as type };
            function _default(): {};
            export { _default as default };
        }
    }
    const computed: {};
    namespace methods {
        export { tr };
    }
}
export default _default;
import { tr } from "../helpers";
