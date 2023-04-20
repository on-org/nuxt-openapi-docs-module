declare namespace _default {
    const name: string;
    namespace props {
        export const lite: BooleanConstructor;
        export namespace name_1 {
            export const type: StringConstructor;
            const _default: string;
            export { _default as default };
        }
        export { name_1 as name };
        export namespace nameTag {
            const type_1: StringConstructor;
            export { type_1 as type };
            const _default_1: string;
            export { _default_1 as default };
        }
        export namespace example {
            const type_2: ObjectConstructor;
            export { type_2 as type };
            export const required: boolean;
        }
        export namespace currentLocale {
            const type_3: StringConstructor;
            export { type_3 as type };
            const required_1: boolean;
            export { required_1 as required };
        }
    }
    function data(): {};
    namespace computed {
        function valueFormatted(): string | null;
    }
    namespace methods {
        export { tr };
    }
}
export default _default;
import { tr } from "../helpers.js";
