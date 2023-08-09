declare namespace _default {
    namespace props {
        namespace currentLocale {
            let type: StringConstructor;
            let required: boolean;
        }
        namespace doc {
            let type_1: ObjectConstructor;
            export { type_1 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
        namespace file {
            let type_2: StringConstructor;
            export { type_2 as type };
            let required_2: boolean;
            export { required_2 as required };
        }
        namespace path {
            let type_3: StringConstructor;
            export { type_3 as type };
            let required_3: boolean;
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
    function beforeUnmount(): void;
    namespace methods {
        function toggleSearch(): void;
        function searchInPaths(query: any): void;
    }
}
export default _default;
