declare const _default: import("vue").DefineComponent<{
    data: {
        type: ObjectConstructor;
        required: true;
    };
    hideName: BooleanConstructor;
    hideDescription: BooleanConstructor;
    lite: BooleanConstructor;
    currentLocale: {
        type: StringConstructor;
        required: true;
    };
}, any, {}, {
    flags(): string[];
    exampleString(): any;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: ObjectConstructor;
        required: true;
    };
    hideName: BooleanConstructor;
    hideDescription: BooleanConstructor;
    lite: BooleanConstructor;
    currentLocale: {
        type: StringConstructor;
        required: true;
    };
}>>, {
    lite: boolean;
    hideName: boolean;
    hideDescription: boolean;
}, {}>;
export default _default;
