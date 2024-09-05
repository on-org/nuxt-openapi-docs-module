declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    security: {
        type: ArrayConstructor;
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
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    security: {
        type: ArrayConstructor;
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
}>> & Readonly<{}>, {}, {}, {
    OpenApiSecurityRequirement: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    }>, {}, {}, {}, {
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
    }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
