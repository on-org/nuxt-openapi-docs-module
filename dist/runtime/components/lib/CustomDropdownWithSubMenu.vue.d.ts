declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    items: {
        type: ObjectConstructor;
        required: true;
    };
}>, {}, {
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
}>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
