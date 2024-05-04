declare const _default: import("vue").DefineComponent<{
    requestBody: {
        type: ObjectConstructor;
        required: true;
    };
    currentLocale: {
        type: StringConstructor;
        required: true;
    };
    components: {
        type: ObjectConstructor;
        default: () => {};
    };
    isCb: BooleanConstructor;
    hPrefix: {
        type: StringConstructor;
        default: string;
    };
}, any, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    requestBody: {
        type: ObjectConstructor;
        required: true;
    };
    currentLocale: {
        type: StringConstructor;
        required: true;
    };
    components: {
        type: ObjectConstructor;
        default: () => {};
    };
    isCb: BooleanConstructor;
    hPrefix: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    components: Record<string, any>;
    isCb: boolean;
    hPrefix: string;
}, {}>;
export default _default;
