declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    requestBody: {
        type: ObjectConstructor;
        required: true;
    };
    currentLocale: {
        type: StringConstructor;
        required: true;
    };
    components: {
        type: ObjectConstructor;
        default: () => {};
    };
    isCb: BooleanConstructor;
    hPrefix: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    requestBody: {
        type: ObjectConstructor;
        required: true;
    };
    currentLocale: {
        type: StringConstructor;
        required: true;
    };
    components: {
        type: ObjectConstructor;
        default: () => {};
    };
    isCb: BooleanConstructor;
    hPrefix: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    components: Record<string, any>;
    isCb: boolean;
    hPrefix: string;
}, {}, {
    OpenApiMediaTypes: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        data: {
            type: ObjectConstructor;
            required: true;
        };
        currentLocale: {
            type: StringConstructor;
            required: true;
        };
    }>, {}, {
        selectedMediaType: null;
    }, {
        types(): {
            value: string;
        }[];
        medaTypeObject(): any;
    }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: ObjectConstructor;
            required: true;
        };
        currentLocale: {
            type: StringConstructor;
            required: true;
        };
    }>> & Readonly<{}>, {}, {}, {
        OpenApiExampleObject: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            lite: BooleanConstructor;
            name: {
                type: StringConstructor;
                default: string;
            };
            nameTag: {
                type: StringConstructor;
                default: string;
            };
            example: {
                type: ObjectConstructor;
                required: true;
            };
            currentLocale: {
                type: StringConstructor;
                required: true;
            };
        }>, {}, {}, {
            valueFormatted(): string | null;
        }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            lite: BooleanConstructor;
            name: {
                type: StringConstructor;
                default: string;
            };
            nameTag: {
                type: StringConstructor;
                default: string;
            };
            example: {
                type: ObjectConstructor;
                required: true;
            };
            currentLocale: {
                type: StringConstructor;
                required: true;
            };
        }>> & Readonly<{}>, {
            name: string;
            lite: boolean;
            nameTag: string;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        OpenApiTabs: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            tabNames: {
                type: ObjectConstructor;
                default: null;
            };
        }>, {}, {
            activeSlotName: null;
        }, {
            computedTabNames(): {};
        }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            tabNames: {
                type: ObjectConstructor;
                default: null;
            };
        }>> & Readonly<{}>, {
            tabNames: Record<string, any>;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        OpenApiObjectModel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
