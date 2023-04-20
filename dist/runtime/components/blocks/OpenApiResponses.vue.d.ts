declare namespace _default {
    const name: string;
    namespace components {
        export { OpenApiResponse };
    }
    namespace props {
        export const isCb: BooleanConstructor;
        export namespace hPrefix {
            export const type: StringConstructor;
            const _default: string;
            export { _default as default };
        }
        export namespace responses {
            const type_1: ObjectConstructor;
            export { type_1 as type };
            export const required: boolean;
        }
        export namespace currentLocale {
            const type_2: StringConstructor;
            export { type_2 as type };
            const required_1: boolean;
            export { required_1 as required };
        }
        export namespace components_1 {
            const type_3: ObjectConstructor;
            export { type_3 as type };
            function _default_1(): {};
            export { _default_1 as default };
        }
        export { components_1 as components };
    }
    namespace methods {
        export { tr };
    }
}
export default _default;
import { tr } from "../helpers";
