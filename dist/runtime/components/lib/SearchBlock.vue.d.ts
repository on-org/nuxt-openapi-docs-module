declare const _default: import("vue").DefineComponent<{
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
}, any, {
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
}>>, {}, {}>;
export default _default;
