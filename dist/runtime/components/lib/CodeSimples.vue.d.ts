declare const _default: import("vue").DefineComponent<{
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
}, any, {
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
    getAbsoluteUrl(): any;
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
}>>, {
    params: unknown[];
    method: string;
    baseUrl: string;
    mimeType: string;
}, {}>;
export default _default;
