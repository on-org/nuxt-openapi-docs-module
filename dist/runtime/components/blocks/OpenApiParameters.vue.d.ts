declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    parameters: {
        type: ArrayConstructor;
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
    title: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    parameters: {
        type: ArrayConstructor;
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
    title: string;
    components: Record<string, any>;
}, {}>;
export default _default;
