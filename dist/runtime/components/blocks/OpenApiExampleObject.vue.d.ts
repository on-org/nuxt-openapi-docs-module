declare const _default: import("vue").DefineComponent<{
    lite: BooleanConstructor;
    name: {
        type: StringConstructor;
        default: string;
    };
    nameTag: {
        type: StringConstructor;
        default: string;
    };
    example: {
        type: ObjectConstructor;
        required: true;
    };
    currentLocale: {
        type: StringConstructor;
        required: true;
    };
}, any, {}, {
    valueFormatted(): string | null;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    lite: BooleanConstructor;
    name: {
        type: StringConstructor;
        default: string;
    };
    nameTag: {
        type: StringConstructor;
        default: string;
    };
    example: {
        type: ObjectConstructor;
        required: true;
    };
    currentLocale: {
        type: StringConstructor;
        required: true;
    };
}>>, {
    name: string;
    lite: boolean;
    nameTag: string;
}, {}>;
export default _default;
