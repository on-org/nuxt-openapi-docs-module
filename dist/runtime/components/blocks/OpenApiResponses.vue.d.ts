declare const _default: import("vue").DefineComponent<{
    isCb: BooleanConstructor;
    hPrefix: {
        type: StringConstructor;
        default: string;
    };
    responses: {
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
}, any, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    isCb: BooleanConstructor;
    hPrefix: {
        type: StringConstructor;
        default: string;
    };
    responses: {
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
}>>, {
    components: Record<string, any>;
    isCb: boolean;
    hPrefix: string;
}, {}>;
export default _default;
