declare namespace _default {
    const name: string;
    namespace props {
        namespace server {
            const type: ObjectConstructor;
            const required: boolean;
        }
        namespace currentLocale {
            const type_1: StringConstructor;
            export { type_1 as type };
            const required_1: boolean;
            export { required_1 as required };
        }
    }
    function data(): {};
    namespace methods {
        export { tr };
    }
}
export default _default;
import { tr } from "../helpers";
