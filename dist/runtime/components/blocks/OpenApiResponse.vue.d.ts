declare namespace _default {
    const name: string;
    namespace components {
        export { OpenApiParameter };
        export { OpenApiObjectModel };
        export { OpenApiMediaTypes };
    }
    namespace props {
        namespace response {
            const type: ObjectConstructor;
            const required: boolean;
        }
        namespace currentLocale {
            const type_1: StringConstructor;
            export { type_1 as type };
            const required_1: boolean;
            export { required_1 as required };
        }
        const lite: BooleanConstructor;
    }
    function data(): {};
    namespace computed {
        function isEmpty(): any;
    }
    function created(): void;
    namespace methods {
        export { tr };
    }
}
export default _default;
import { tr } from "../helpers";
