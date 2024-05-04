declare const _default: import("vue").DefineComponent<{
    items: {
        type: ObjectConstructor;
        required: true;
    };
}, any, {
    isOpen: boolean;
    preSelectedSnippet: string;
    selectedSnippet: string;
    selectedLibrary: string;
}, {
    selectedText(): string;
}, {
    handleItemClick(snippet: any, library?: null): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: ObjectConstructor;
        required: true;
    };
}>>, {}, {}>;
export default _default;
