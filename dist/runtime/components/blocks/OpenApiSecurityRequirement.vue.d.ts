declare const _default: import("vue").DefineComponent<{
    securityRequirement: {
        type: ObjectConstructor;
        required: true;
    };
    currentLocale: {
        type: StringConstructor;
        required: true;
    };
    path_doc: {
        type: StringConstructor;
        required: true;
    };
    file: {
        type: StringConstructor;
        required: true;
    };
}, any, any, {}, {
    getRoute(scheme: any): {
        name: string;
        params: {
            type: string;
        };
        hash: string;
    };
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    securityRequirement: {
        type: ObjectConstructor;
        required: true;
    };
    currentLocale: {
        type: StringConstructor;
        required: true;
    };
    path_doc: {
        type: StringConstructor;
        required: true;
    };
    file: {
        type: StringConstructor;
        required: true;
    };
}>>, {}, {}>;
export default _default;
