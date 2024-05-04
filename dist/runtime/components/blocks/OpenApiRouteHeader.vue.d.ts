declare const _default: import("vue").DefineComponent<{
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
}, any, any, {
    requestUrl(): string;
    title(): any;
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
}>>, {
    summary: string;
    description: string;
    server: string;
    tags: unknown[];
    deprecated: boolean;
}, {}>;
export default _default;
