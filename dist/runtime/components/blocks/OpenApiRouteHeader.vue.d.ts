declare namespace _default {
    namespace props {
        namespace path {
            const type: StringConstructor;
            const required: boolean;
        }
        namespace method {
            const type_1: StringConstructor;
            export { type_1 as type };
            const required_1: boolean;
            export { required_1 as required };
        }
        namespace tags {
            const type_2: ArrayConstructor;
            export { type_2 as type };
            function _default(): never[];
            export { _default as default };
        }
        namespace summary {
            const type_3: StringConstructor;
            export { type_3 as type };
            const _default_1: null;
            export { _default_1 as default };
        }
        namespace description {
            const type_4: StringConstructor;
            export { type_4 as type };
            const _default_2: null;
            export { _default_2 as default };
        }
        const deprecated: BooleanConstructor;
        namespace currentLocale {
            const type_5: StringConstructor;
            export { type_5 as type };
            const required_2: boolean;
            export { required_2 as required };
        }
        namespace server {
            const type_6: StringConstructor;
            export { type_6 as type };
            const required_3: boolean;
            export { required_3 as required };
            const _default_3: string;
            export { _default_3 as default };
        }
    }
    namespace computed {
        function requestUrl(): string;
    }
    namespace methods {
        export { getTagColor };
        export { copyToClipboard };
    }
}
export default _default;
import { getTagColor } from "../helpers";
import { copyToClipboard } from "../helpers";
