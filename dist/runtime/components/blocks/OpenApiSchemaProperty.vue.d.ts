declare const _default: import("vue").DefineComponent<{
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
}, any, {
    isOpen: boolean;
}, {
    resolvedSchema(): any;
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
    requiredProps(): any;
    classes(): {
        'oapi-prop--is-object': boolean;
        'oapi-prop--no-lines': any;
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
}>>, {
    name: string;
    required: boolean;
    open: boolean;
    noLines: boolean;
    hideTitleDescription: boolean;
}, {}>;
export default _default;
