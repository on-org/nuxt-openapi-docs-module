declare namespace _default {
    namespace props {
        namespace currentLocale {
            const type: StringConstructor;
            const required: boolean;
        }
        namespace doc {
            const type_1: ObjectConstructor;
            export { type_1 as type };
            const required_1: boolean;
            export { required_1 as required };
        }
        namespace file {
            const type_2: StringConstructor;
            export { type_2 as type };
            const required_2: boolean;
            export { required_2 as required };
        }
        namespace path {
            const type_3: StringConstructor;
            export { type_3 as type };
            const required_3: boolean;
            export { required_3 as required };
        }
    }
    function data(): {
        isSearchOpen: boolean;
        search: string;
        list: never[];
    };
    namespace watch {
        function search(val: any): void;
    }
    function mounted(): void;
    function beforeDestroy(): void;
    namespace methods {
        export { tr };
        export function toggleSearch(): void;
        export function searchInPaths(query: any): void;
    }
}
export default _default;
import { tr } from "../helpers";
