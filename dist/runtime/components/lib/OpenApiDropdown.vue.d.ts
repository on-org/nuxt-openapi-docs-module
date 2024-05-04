declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    options: {
        type: ArrayConstructor;
        required: true;
    };
    valueProp: {
        type: StringConstructor;
        default: string;
    };
    textProp: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: null;
    };
}, any, {
    isOpen: boolean;
}, {
    classes(): {
        'oapi-dd--is-open': boolean;
        'oapi-dd--empty': boolean;
    };
    selectedOption(): any;
}, {
    toggle(): void;
    handleOutsideClick(e: any): void;
    cleanupOutside(): void;
    open(): void;
    close(): void;
    select(value: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    options: {
        type: ArrayConstructor;
        required: true;
    };
    valueProp: {
        type: StringConstructor;
        default: string;
    };
    textProp: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: null;
    };
}>>, {
    modelValue: string | number;
    valueProp: string;
    textProp: string;
    placeholder: string;
}, {}>;
export default _default;
