declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    route: {
        type: (ObjectConstructor | ArrayConstructor)[];
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
}>, {}, {
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
        type: (ObjectConstructor | ArrayConstructor)[];
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
}>> & Readonly<{}>, {
    components: Record<string, any>;
    server: string;
    url: string;
    method: string;
}, {}, {
    OpenApiCallbacks: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        callbacks: {
            type: ObjectConstructor;
            default: () => {};
        };
        currentLocale: {
            type: StringConstructor;
            default: string;
        };
        components: {
            type: ObjectConstructor;
            default: () => {};
        };
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        callbacks: {
            type: ObjectConstructor;
            default: () => {};
        };
        currentLocale: {
            type: StringConstructor;
            default: string;
        };
        components: {
            type: ObjectConstructor;
            default: () => {};
        };
    }>> & Readonly<{}>, {
        currentLocale: string;
        components: Record<string, any>;
        callbacks: Record<string, any>;
    }, {}, {
        OpenApiResponses: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            isCb: BooleanConstructor;
            hPrefix: {
                type: StringConstructor;
                default: string;
            };
            responses: {
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
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            isCb: BooleanConstructor;
            hPrefix: {
                type: StringConstructor;
                default: string;
            };
            responses: {
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
        }>> & Readonly<{}>, {
            components: Record<string, any>;
            isCb: boolean;
            hPrefix: string;
        }, {}, {
            OpenApiResponse: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                response: {
                    type: ObjectConstructor;
                    required: true;
                };
                currentLocale: {
                    type: StringConstructor;
                    required: true;
                };
                lite: BooleanConstructor;
            }>, {}, {}, {
                isEmpty(): boolean;
            }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                response: {
                    type: ObjectConstructor;
                    required: true;
                };
                currentLocale: {
                    type: StringConstructor;
                    required: true;
                };
                lite: BooleanConstructor;
            }>> & Readonly<{}>, {
                lite: boolean;
            }, {}, {
                OpenApiParameter: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    data: {
                        type: ObjectConstructor;
                        required: true;
                    };
                    hideName: BooleanConstructor;
                    hideDescription: BooleanConstructor;
                    lite: BooleanConstructor;
                    currentLocale: {
                        type: StringConstructor;
                        required: true;
                    };
                }>, {}, {}, {
                    flags(): string[];
                    exampleString(): any;
                }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    data: {
                        type: ObjectConstructor;
                        required: true;
                    };
                    hideName: BooleanConstructor;
                    hideDescription: BooleanConstructor;
                    lite: BooleanConstructor;
                    currentLocale: {
                        type: StringConstructor;
                        required: true;
                    };
                }>> & Readonly<{}>, {
                    lite: boolean;
                    hideName: boolean;
                    hideDescription: boolean;
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
                }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        OpenApiRequestBody: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
        OpenApiParameters: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            title: {
                type: StringConstructor;
                required: false;
                default: string;
            };
            parameters: {
                type: ArrayConstructor;
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
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            title: {
                type: StringConstructor;
                required: false;
                default: string;
            };
            parameters: {
                type: ArrayConstructor;
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
        }>> & Readonly<{}>, {
            title: string;
            components: Record<string, any>;
        }, {}, {
            OpenApiParameter: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                data: {
                    type: ObjectConstructor;
                    required: true;
                };
                hideName: BooleanConstructor;
                hideDescription: BooleanConstructor;
                lite: BooleanConstructor;
                currentLocale: {
                    type: StringConstructor;
                    required: true;
                };
            }>, {}, {}, {
                flags(): string[];
                exampleString(): any;
            }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                data: {
                    type: ObjectConstructor;
                    required: true;
                };
                hideName: BooleanConstructor;
                hideDescription: BooleanConstructor;
                lite: BooleanConstructor;
                currentLocale: {
                    type: StringConstructor;
                    required: true;
                };
            }>> & Readonly<{}>, {
                lite: boolean;
                hideName: boolean;
                hideDescription: boolean;
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
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    OpenApiResponses: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        isCb: BooleanConstructor;
        hPrefix: {
            type: StringConstructor;
            default: string;
        };
        responses: {
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
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        isCb: BooleanConstructor;
        hPrefix: {
            type: StringConstructor;
            default: string;
        };
        responses: {
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
    }>> & Readonly<{}>, {
        components: Record<string, any>;
        isCb: boolean;
        hPrefix: string;
    }, {}, {
        OpenApiResponse: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            response: {
                type: ObjectConstructor;
                required: true;
            };
            currentLocale: {
                type: StringConstructor;
                required: true;
            };
            lite: BooleanConstructor;
        }>, {}, {}, {
            isEmpty(): boolean;
        }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            response: {
                type: ObjectConstructor;
                required: true;
            };
            currentLocale: {
                type: StringConstructor;
                required: true;
            };
            lite: BooleanConstructor;
        }>> & Readonly<{}>, {
            lite: boolean;
        }, {}, {
            OpenApiParameter: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                data: {
                    type: ObjectConstructor;
                    required: true;
                };
                hideName: BooleanConstructor;
                hideDescription: BooleanConstructor;
                lite: BooleanConstructor;
                currentLocale: {
                    type: StringConstructor;
                    required: true;
                };
            }>, {}, {}, {
                flags(): string[];
                exampleString(): any;
            }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                data: {
                    type: ObjectConstructor;
                    required: true;
                };
                hideName: BooleanConstructor;
                hideDescription: BooleanConstructor;
                lite: BooleanConstructor;
                currentLocale: {
                    type: StringConstructor;
                    required: true;
                };
            }>> & Readonly<{}>, {
                lite: boolean;
                hideName: boolean;
                hideDescription: boolean;
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
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    OpenApiRequestBody: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    OpenApiSecurity: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    OpenApiParameters: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        title: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        parameters: {
            type: ArrayConstructor;
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
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        title: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        parameters: {
            type: ArrayConstructor;
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
    }>> & Readonly<{}>, {
        title: string;
        components: Record<string, any>;
    }, {}, {
        OpenApiParameter: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            data: {
                type: ObjectConstructor;
                required: true;
            };
            hideName: BooleanConstructor;
            hideDescription: BooleanConstructor;
            lite: BooleanConstructor;
            currentLocale: {
                type: StringConstructor;
                required: true;
            };
        }>, {}, {}, {
            flags(): string[];
            exampleString(): any;
        }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            data: {
                type: ObjectConstructor;
                required: true;
            };
            hideName: BooleanConstructor;
            hideDescription: BooleanConstructor;
            lite: BooleanConstructor;
            currentLocale: {
                type: StringConstructor;
                required: true;
            };
        }>> & Readonly<{}>, {
            lite: boolean;
            hideName: boolean;
            hideDescription: boolean;
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
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    OpenApiExamples: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        examples: {
            type: ObjectConstructor;
            required: true;
        };
        currentLocale: {
            type: StringConstructor;
            required: true;
        };
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        examples: {
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
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    CodeSimples: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        baseUrl: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        url: {
            type: StringConstructor;
            required: true;
        };
        method: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        params: {
            type: ArrayConstructor;
            required: false;
            default: () => never[];
        };
        mimeType: {
            type: StringConstructor;
            required: false;
            default: string;
        };
    }>, {}, {
        snippetIndex: string;
        snippetLibraryIndex: string;
        code: string;
        html: string;
        showPopup: boolean;
        onPopupIndex: null;
        vals: never[];
    }, {
        config(): any;
    }, {
        copyToClipboard(e: any): void;
        onLangClick(snippet: any, library?: null): void;
        getAbsoluteUrl(): string;
        genCode(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        baseUrl: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        url: {
            type: StringConstructor;
            required: true;
        };
        method: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        params: {
            type: ArrayConstructor;
            required: false;
            default: () => never[];
        };
        mimeType: {
            type: StringConstructor;
            required: false;
            default: string;
        };
    }>> & Readonly<{}>, {
        params: unknown[];
        method: string;
        baseUrl: string;
        mimeType: string;
    }, {}, {
        CustomDropdownWithSubMenu: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            items: {
                type: ObjectConstructor;
                required: true;
            };
        }>, {}, {
            isOpen: boolean;
            preSelectedSnippet: string;
            selectedSnippet: string;
            selectedLibrary: string;
        }, {
            selectedText(): string;
        }, {
            handleItemClick(snippet: any, library?: null): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            items: {
                type: ObjectConstructor;
                required: true;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    OpenApiServer: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        server: {
            type: ObjectConstructor;
            required: true;
        };
        currentLocale: {
            type: StringConstructor;
            required: true;
        };
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        server: {
            type: ObjectConstructor;
            required: true;
        };
        currentLocale: {
            type: StringConstructor;
            required: true;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    OpenApiRouteHeader: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        path: {
            type: StringConstructor;
            required: true;
        };
        method: {
            type: StringConstructor;
            required: true;
        };
        tags: {
            type: ArrayConstructor;
            default: () => never[];
        };
        summary: {
            type: StringConstructor;
            default: null;
        };
        description: {
            type: StringConstructor;
            default: null;
        };
        deprecated: BooleanConstructor;
        currentLocale: {
            type: StringConstructor;
            required: true;
        };
        server: {
            type: StringConstructor;
            required: false;
            default: string;
        };
    }>, {}, {}, {
        requestUrl(): string;
        title(): string;
    }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        path: {
            type: StringConstructor;
            required: true;
        };
        method: {
            type: StringConstructor;
            required: true;
        };
        tags: {
            type: ArrayConstructor;
            default: () => never[];
        };
        summary: {
            type: StringConstructor;
            default: null;
        };
        description: {
            type: StringConstructor;
            default: null;
        };
        deprecated: BooleanConstructor;
        currentLocale: {
            type: StringConstructor;
            required: true;
        };
        server: {
            type: StringConstructor;
            required: false;
            default: string;
        };
    }>> & Readonly<{}>, {
        summary: string;
        description: string;
        deprecated: boolean;
        server: string;
        tags: unknown[];
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
