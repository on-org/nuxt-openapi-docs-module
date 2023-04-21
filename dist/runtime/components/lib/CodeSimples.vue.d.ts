declare namespace _default {
    const name: string;
    namespace components {
        export { CustomDropdownWithSubMenu };
    }
    namespace props {
        namespace baseUrl {
            export const type: StringConstructor;
            export const required: boolean;
            const _default: string;
            export { _default as default };
        }
        namespace url {
            const type_1: StringConstructor;
            export { type_1 as type };
            const required_1: boolean;
            export { required_1 as required };
        }
        namespace method {
            const type_2: StringConstructor;
            export { type_2 as type };
            const required_2: boolean;
            export { required_2 as required };
            const _default_1: string;
            export { _default_1 as default };
        }
        namespace params {
            const type_3: ArrayConstructor;
            export { type_3 as type };
            const required_3: boolean;
            export { required_3 as required };
            function _default_2(): never[];
            export { _default_2 as default };
        }
        namespace mimeType {
            const type_4: StringConstructor;
            export { type_4 as type };
            const required_4: boolean;
            export { required_4 as required };
            const _default_3: string;
            export { _default_3 as default };
        }
    }
    function data(): {
        snippetIndex: string;
        snippetLibraryIndex: string;
        code: string;
        html: string;
        showPopup: boolean;
        onPopupIndex: null;
        vals: never[];
    };
    namespace computed {
        function config(): any;
    }
    const watch: {};
    function mounted(): void;
    namespace methods {
        function copyToClipboard(e: any): void;
        function onLangClick(snippet: any, library?: null): void;
        function getAbsoluteUrl(): any;
        function genCode(): void;
    }
}
export default _default;
