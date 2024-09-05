declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    path: {
        type: StringConstructor;
        required: true;
    };
    method: {
        type: StringConstructor;
        required: true;
    };
    tags: {
        type: ArrayConstructor;
        default: () => never[];
    };
    summary: {
        type: StringConstructor;
        default: null;
    };
    description: {
        type: StringConstructor;
        default: null;
    };
    deprecated: BooleanConstructor;
    currentLocale: {
        type: StringConstructor;
        required: true;
    };
    server: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>, {}, {}, {
    requestUrl(): string;
    title(): string;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    path: {
        type: StringConstructor;
        required: true;
    };
    method: {
        type: StringConstructor;
        required: true;
    };
    tags: {
        type: ArrayConstructor;
        default: () => never[];
    };
    summary: {
        type: StringConstructor;
        default: null;
    };
    description: {
        type: StringConstructor;
        default: null;
    };
    deprecated: BooleanConstructor;
    currentLocale: {
        type: StringConstructor;
        required: true;
    };
    server: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>> & Readonly<{}>, {
    summary: string;
    description: string;
    deprecated: boolean;
    server: string;
    tags: unknown[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
