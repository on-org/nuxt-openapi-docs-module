declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    baseUrl: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    url: {
        type: StringConstructor;
        required: true;
    };
    method: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    params: {
        type: ArrayConstructor;
        required: false;
        default: () => never[];
    };
    mimeType: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>, {}, {
    snippetIndex: string;
    snippetLibraryIndex: string;
    code: string;
    html: string;
    showPopup: boolean;
    onPopupIndex: null;
    vals: never[];
}, {
    config(): any;
}, {
    copyToClipboard(e: any): void;
    onLangClick(snippet: any, library?: null): void;
    getAbsoluteUrl(): string;
    genCode(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    baseUrl: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    url: {
        type: StringConstructor;
        required: true;
    };
    method: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    params: {
        type: ArrayConstructor;
        required: false;
        default: () => never[];
    };
    mimeType: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>> & Readonly<{}>, {
    method: string;
    baseUrl: string;
    params: unknown[];
    mimeType: string;
}, {}, {
    CustomDropdownWithSubMenu: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
