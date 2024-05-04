declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
    isOpen: BooleanConstructor;
}, any, {
    open: boolean;
}, {}, {
    toggleOpen(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
    isOpen: BooleanConstructor;
}>>, {
    title: string;
    description: string;
    isOpen: boolean;
}, {}>;
export default _default;
