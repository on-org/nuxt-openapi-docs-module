declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    routes: {
        type: ObjectConstructor;
        required: true;
    };
    currentLocale: {
        type: StringConstructor;
        required: true;
    };
    file: {
        type: StringConstructor;
        required: true;
    };
    path: {
        type: StringConstructor;
        required: true;
    };
    files: {
        type: ObjectConstructor;
        required: true;
    };
    locales: {
        type: ObjectConstructor;
        required: true;
    };
    servers: {
        type: ArrayConstructor;
        required: true;
    };
    localesReload: {
        type: BooleanConstructor;
        required: true;
    };
}>, {}, {
    currentServer: number;
}, {
    currentRouteName(): any;
    localesOptions(): {
        value: string;
        text: any;
    }[];
    serversOptions(): {
        value: string;
        text: any;
    }[];
    hasMultipleFiles(): boolean;
    hasLocalization(): any;
    hasServers(): boolean;
    filesAccessor(): {
        value: string;
        text: any;
    }[];
}, {
    getTagColor: typeof getTagColor;
    genUrl(path: any): string;
    onLocalesReload(e: any): void;
    getRoute(path: any): any;
    getSubRoute(route: any): any;
    changeRoute(route: any): void;
    changeDoc(option: any): any;
    changeServer(option: any): void;
    changeLocale(locale: any): any;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    routes: {
        type: ObjectConstructor;
        required: true;
    };
    currentLocale: {
        type: StringConstructor;
        required: true;
    };
    file: {
        type: StringConstructor;
        required: true;
    };
    path: {
        type: StringConstructor;
        required: true;
    };
    files: {
        type: ObjectConstructor;
        required: true;
    };
    locales: {
        type: ObjectConstructor;
        required: true;
    };
    servers: {
        type: ArrayConstructor;
        required: true;
    };
    localesReload: {
        type: BooleanConstructor;
        required: true;
    };
}>> & Readonly<{}>, {}, {}, {
    MainLeftMenuSubMenu: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        title: {
            type: StringConstructor;
            default: string;
        };
        description: {
            type: StringConstructor;
            default: string;
        };
        isOpen: BooleanConstructor;
    }>, {}, {
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
    }>> & Readonly<{}>, {
        title: string;
        description: string;
        isOpen: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    OpenApiDropdown: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
import { getTagColor } from "./helpers.js";
