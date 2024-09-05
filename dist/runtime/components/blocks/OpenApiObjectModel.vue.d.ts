declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    lite: BooleanConstructor;
    schema: {
        type: ObjectConstructor;
        required: true;
    };
    currentLocale: {
        type: StringConstructor;
        required: true;
    };
}>, {}, {}, {
    resolvedSchema(): any;
    requiredProps(): any;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    lite: BooleanConstructor;
    schema: {
        type: ObjectConstructor;
        required: true;
    };
    currentLocale: {
        type: StringConstructor;
        required: true;
    };
}>> & Readonly<{}>, {
    lite: boolean;
}, {}, {
    OpenApiSchemaProperty: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        name: {
            type: StringConstructor;
            default: string;
        };
        required: {
            type: BooleanConstructor;
        };
        schema: {
            type: ObjectConstructor;
            required: true;
        };
        noLines: {
            type: BooleanConstructor;
        };
        hideTitleDescription: {
            type: BooleanConstructor;
        };
        open: {
            type: BooleanConstructor;
        };
        currentLocale: {
            type: StringConstructor;
            required: true;
        };
    }>, {}, {
        isOpen: boolean;
    }, {
        resolvedSchema(): Record<string, any>;
        isPlainArray(): any;
        isObject(): boolean;
        isArray(): boolean;
        isOneOf(): boolean;
        isAnyOf(): boolean;
        hasProperties(): boolean;
        exampleString(): any;
        genExample(): string | null;
        computedOneAnyOf(): any;
        computedType(): any;
        flags(): string[];
        requiredProps(): any[];
        classes(): {
            'oapi-prop--is-object': boolean;
            'oapi-prop--no-lines': boolean;
            'oapi-prop--no-name': boolean;
            'oapi-prop--deprecated': boolean;
        };
    }, {
        getType(schema: any): any;
        toggle(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        name: {
            type: StringConstructor;
            default: string;
        };
        required: {
            type: BooleanConstructor;
        };
        schema: {
            type: ObjectConstructor;
            required: true;
        };
        noLines: {
            type: BooleanConstructor;
        };
        hideTitleDescription: {
            type: BooleanConstructor;
        };
        open: {
            type: BooleanConstructor;
        };
        currentLocale: {
            type: StringConstructor;
            required: true;
        };
    }>> & Readonly<{}>, {
        name: string;
        required: boolean;
        open: boolean;
        noLines: boolean;
        hideTitleDescription: boolean;
    }, {}, {
        OpenApiSchemaSubObject: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            title: {
                type: StringConstructor;
                default: string;
            };
            currentLocale: {
                type: StringConstructor;
                required: true;
            };
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            title: {
                type: StringConstructor;
                default: string;
            };
            currentLocale: {
                type: StringConstructor;
                required: true;
            };
        }>> & Readonly<{}>, {
            title: string;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        OpenApiExpandIcon: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
