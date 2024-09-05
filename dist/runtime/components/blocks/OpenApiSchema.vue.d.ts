declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
}>, {}, {}, {}, {
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
}>> & Readonly<{}>, {
    title: null;
    components: Record<string, any>;
    open: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
