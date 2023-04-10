declare namespace _default {
    namespace props {
        const path: StringConstructor;
        const method: StringConstructor;
        const tags: ArrayConstructor;
        const summary: StringConstructor;
        const description: StringConstructor;
        const deprecated: BooleanConstructor;
        namespace currentLocale {
            const type: StringConstructor;
            const required: boolean;
        }
    }
    namespace methods {
        export { tr };
        export { getTagColor };
    }
}
export default _default;
import { tr } from "../helpers";
import { getTagColor } from "../helpers";
