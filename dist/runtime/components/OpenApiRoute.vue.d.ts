declare const _default: import("vue").DefineComponent<{
    route: {
        type: (ArrayConstructor | ObjectConstructor)[];
        required: true;
    };
    subParams: {
        required: false;
    };
    path_doc: {
        type: StringConstructor;
        required: true;
    };
    file: {
        type: StringConstructor;
        required: true;
    };
    currentLocale: {
        type: StringConstructor;
        required: true;
    };
    url: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    server: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    method: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    components: {
        type: ObjectConstructor;
        default: () => {};
    };
}, any, {
    lang: string;
    mimeType: string;
    params: never[];
}, {
    resolvedSchema(): any;
    routeInfo(): any;
}, {
    genParamsToSimple(): void;
    handleNestedArrayOrObject(property: any, propertyName: any): any;
    handleNestedObject(property: any): {};
    convertStringFormatToMd(format: any, name: any): any;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    route: {
        type: (ArrayConstructor | ObjectConstructor)[];
        required: true;
    };
    subParams: {
        required: false;
    };
    path_doc: {
        type: StringConstructor;
        required: true;
    };
    file: {
        type: StringConstructor;
        required: true;
    };
    currentLocale: {
        type: StringConstructor;
        required: true;
    };
    url: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    server: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    method: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    components: {
        type: ObjectConstructor;
        default: () => {};
    };
}>>, {
    components: Record<string, any>;
    server: string;
    method: string;
    url: string;
}, {}>;
export default _default;
