declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
}>, {}, {
    isOpen: boolean;
}, {
    classes(): {
        'oapi-dd--is-open': boolean;
        'oapi-dd--empty': boolean;
    };
    selectedOption(): {} | null;
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
}>> & Readonly<{}>, {
    modelValue: string | number;
    valueProp: string;
    textProp: string;
    placeholder: string;
}, {}, {
    OpenApiExpandIcon: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
