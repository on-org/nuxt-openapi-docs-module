declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    currentLocale: {
        type: StringConstructor;
        required: true;
    };
    doc: {
        type: ObjectConstructor;
        required: true;
    };
    file: {
        type: StringConstructor;
        required: true;
    };
    path: {
        type: StringConstructor;
        required: true;
    };
}>, {}, {
    isSearchOpen: boolean;
    search: string;
    list: never[];
}, {}, {
    highlightText(node?: null): void;
    toggleSearch(): void;
    searchInPaths(query: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    currentLocale: {
        type: StringConstructor;
        required: true;
    };
    doc: {
        type: ObjectConstructor;
        required: true;
    };
    file: {
        type: StringConstructor;
        required: true;
    };
    path: {
        type: StringConstructor;
        required: true;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
