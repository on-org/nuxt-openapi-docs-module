declare const _default: import("vue").DefineComponent<{
    schema: {
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
    title: {
        default: null;
    };
    open: {
        type: BooleanConstructor;
        default: boolean;
    };
}, any, any, {}, {
    assignAllOf(allOf: any): {
        properties: any;
    };
    assign(allOf: any): {
        properties: any;
    };
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    schema: {
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
    title: {
        default: null;
    };
    open: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    title: null;
    components: Record<string, any>;
    open: boolean;
}, {}>;
export default _default;
