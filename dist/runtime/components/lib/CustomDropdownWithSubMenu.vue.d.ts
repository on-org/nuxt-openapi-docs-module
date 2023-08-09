declare namespace _default {
    namespace props {
        namespace items {
            const type: ObjectConstructor;
            const required: boolean;
        }
    }
    function data(): {
        isOpen: boolean;
        preSelectedSnippet: string;
        selectedSnippet: string;
        selectedLibrary: string;
    };
    namespace computed {
        function selectedText(): string;
    }
    namespace methods {
        function handleItemClick(snippet: any, library?: null): void;
    }
}
export default _default;
