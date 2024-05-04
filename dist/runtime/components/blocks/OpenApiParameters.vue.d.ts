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
    components: Record<string, any>;
    title: string;
}, {}>;
export default _default;
