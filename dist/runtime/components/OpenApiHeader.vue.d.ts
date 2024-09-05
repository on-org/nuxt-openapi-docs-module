declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    currentLocale: {
        type: StringConstructor;
        required: true;
    };
    file: {
        type: StringConstructor;
    };
    path: {
        type: StringConstructor;
        required: true;
    };
    files: {
        type: ObjectConstructor;
    };
}>, {}, {}, {}, {
    downloadJson(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    currentLocale: {
        type: StringConstructor;
        required: true;
    };
    file: {
        type: StringConstructor;
    };
    path: {
        type: StringConstructor;
        required: true;
    };
    files: {
        type: ObjectConstructor;
    };
}>> & Readonly<{}>, {}, {}, {
    OpenApiDarkModeToggle: import("vue").DefineComponent<{}, {}, {
        isDarkMode: boolean;
    }, {}, {
        darkModeClick(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    OpenApiSearch: import("vue").DefineComponent<{}, {}, {}, {}, {
        toggleSearch(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
