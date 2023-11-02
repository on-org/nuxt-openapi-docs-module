import { MergeRules } from "../types";
export declare const openApiVersion: readonly ["3.0.x", "3.1.x"];
export type OpenApiVersion = typeof openApiVersion[number];
export declare const openApiJsonSchemaMergeRules: (version: OpenApiVersion) => {
    "/discriminator": {
        $: import("../types").MergeResolver;
    };
    "/oneOf": {
        "/*": () => any | {
            "/discriminator": {
                $: import("../types").MergeResolver;
            };
            "/oneOf": {
                "/*": any;
                $: import("../types").MergeResolver;
                sibling: string[];
            };
            "/anyOf": {
                "/*": () => any | any;
                $: import("../types").MergeResolver;
                sibling: string[];
            };
            $: import("../types").MergeResolver;
            sibling: string[];
        };
        $: import("../types").MergeResolver;
        sibling: string[];
    };
    "/anyOf": {
        "/*": () => any | {
            "/discriminator": {
                $: import("../types").MergeResolver;
            };
            "/oneOf": {
                "/*": () => any | any;
                $: import("../types").MergeResolver;
                sibling: string[];
            };
            "/anyOf": {
                "/*": any;
                $: import("../types").MergeResolver;
                sibling: string[];
            };
            $: import("../types").MergeResolver;
            sibling: string[];
        };
        $: import("../types").MergeResolver;
        sibling: string[];
    };
} | {
    "/items": () => {
        $: import("../types").MergeResolver;
        "/discriminator": {
            $: import("../types").MergeResolver;
        };
        "/oneOf": {
            "/*": () => {
                "/discriminator": {
                    $: import("../types").MergeResolver;
                };
                "/oneOf": any;
                "/anyOf": {
                    "/*": () => any | {
                        "/discriminator": {
                            $: import("../types").MergeResolver;
                        };
                        "/oneOf": {
                            "/*": any;
                            $: import("../types").MergeResolver;
                            sibling: string[];
                        };
                        "/anyOf": {
                            "/*": any;
                            $: import("../types").MergeResolver;
                            sibling: string[];
                        };
                        $: import("../types").MergeResolver;
                        sibling: string[];
                    };
                    $: import("../types").MergeResolver;
                    sibling: string[];
                };
            } | {
                "/discriminator": {
                    $: import("../types").MergeResolver;
                };
                "/oneOf": {
                    "/*": any;
                    $: import("../types").MergeResolver;
                    sibling: string[];
                };
                "/anyOf": {
                    "/*": () => {
                        "/discriminator": {
                            $: import("../types").MergeResolver;
                        };
                        "/oneOf": any;
                        "/anyOf": {
                            "/*": any;
                            $: import("../types").MergeResolver;
                            sibling: string[];
                        };
                    } | any;
                    $: import("../types").MergeResolver;
                    sibling: string[];
                };
                $: import("../types").MergeResolver;
                sibling: string[];
            };
            $: import("../types").MergeResolver;
            sibling: string[];
        };
        "/anyOf": {
            "/*": () => {
                "/discriminator": {
                    $: import("../types").MergeResolver;
                };
                "/oneOf": {
                    "/*": () => any | {
                        "/discriminator": {
                            $: import("../types").MergeResolver;
                        };
                        "/oneOf": {
                            "/*": any;
                            $: import("../types").MergeResolver;
                            sibling: string[];
                        };
                        "/anyOf": {
                            "/*": any;
                            $: import("../types").MergeResolver;
                            sibling: string[];
                        };
                        $: import("../types").MergeResolver;
                        sibling: string[];
                    };
                    $: import("../types").MergeResolver;
                    sibling: string[];
                };
                "/anyOf": any;
            } | {
                "/discriminator": {
                    $: import("../types").MergeResolver;
                };
                "/oneOf": {
                    "/*": () => {
                        "/discriminator": {
                            $: import("../types").MergeResolver;
                        };
                        "/oneOf": {
                            "/*": any;
                            $: import("../types").MergeResolver;
                            sibling: string[];
                        };
                        "/anyOf": any;
                    } | any;
                    $: import("../types").MergeResolver;
                    sibling: string[];
                };
                "/anyOf": {
                    "/*": any;
                    $: import("../types").MergeResolver;
                    sibling: string[];
                };
                $: import("../types").MergeResolver;
                sibling: string[];
            };
            $: import("../types").MergeResolver;
            sibling: string[];
        };
    } | {
        $: import("../types").MergeResolver;
        "/discriminator": {
            $: import("../types").MergeResolver;
        };
        "/oneOf": {
            "/*": () => {
                "/discriminator": {
                    $: import("../types").MergeResolver;
                };
                "/oneOf": {
                    "/*": any;
                    $: import("../types").MergeResolver;
                    sibling: string[];
                };
                "/anyOf": {
                    "/*": () => any | {
                        "/discriminator": {
                            $: import("../types").MergeResolver;
                        };
                        "/oneOf": any;
                        "/anyOf": {
                            "/*": any;
                            $: import("../types").MergeResolver;
                            sibling: string[];
                        };
                        $: import("../types").MergeResolver;
                        sibling: string[];
                    };
                    $: import("../types").MergeResolver;
                    sibling: string[];
                };
            } | {
                "/discriminator": {
                    $: import("../types").MergeResolver;
                };
                "/oneOf": any;
                "/anyOf": {
                    "/*": () => {
                        "/discriminator": {
                            $: import("../types").MergeResolver;
                        };
                        "/oneOf": {
                            "/*": any;
                            $: import("../types").MergeResolver;
                            sibling: string[];
                        };
                        "/anyOf": {
                            "/*": any;
                            $: import("../types").MergeResolver;
                            sibling: string[];
                        };
                    } | any;
                    $: import("../types").MergeResolver;
                    sibling: string[];
                };
                $: import("../types").MergeResolver;
                sibling: string[];
            };
            $: import("../types").MergeResolver;
            sibling: string[];
        };
        "/anyOf": {
            "/*": () => {
                "/discriminator": {
                    $: import("../types").MergeResolver;
                };
                "/oneOf": {
                    "/*": () => any | {
                        "/discriminator": {
                            $: import("../types").MergeResolver;
                        };
                        "/oneOf": {
                            "/*": any;
                            $: import("../types").MergeResolver;
                            sibling: string[];
                        };
                        "/anyOf": any;
                        $: import("../types").MergeResolver;
                        sibling: string[];
                    };
                    $: import("../types").MergeResolver;
                    sibling: string[];
                };
                "/anyOf": {
                    "/*": any;
                    $: import("../types").MergeResolver;
                    sibling: string[];
                };
            } | {
                "/discriminator": {
                    $: import("../types").MergeResolver;
                };
                "/oneOf": {
                    "/*": () => {
                        "/discriminator": {
                            $: import("../types").MergeResolver;
                        };
                        "/oneOf": {
                            "/*": any;
                            $: import("../types").MergeResolver;
                            sibling: string[];
                        };
                        "/anyOf": {
                            "/*": any;
                            $: import("../types").MergeResolver;
                            sibling: string[];
                        };
                    } | any;
                    $: import("../types").MergeResolver;
                    sibling: string[];
                };
                "/anyOf": any;
                $: import("../types").MergeResolver;
                sibling: string[];
            };
            $: import("../types").MergeResolver;
            sibling: string[];
        };
        sibling: string[];
    };
    "/discriminator": {
        $: import("../types").MergeResolver;
    };
    "/oneOf": {
        "/*": () => {
            "/discriminator": {
                $: import("../types").MergeResolver;
            };
            "/oneOf": any;
            "/anyOf": {
                "/*": () => any | {
                    "/discriminator": {
                        $: import("../types").MergeResolver;
                    };
                    "/oneOf": {
                        "/*": any;
                        $: import("../types").MergeResolver;
                        sibling: string[];
                    };
                    "/anyOf": {
                        "/*": any;
                        $: import("../types").MergeResolver;
                        sibling: string[];
                    };
                    $: import("../types").MergeResolver;
                    sibling: string[];
                };
                $: import("../types").MergeResolver;
                sibling: string[];
            };
        } | {
            "/discriminator": {
                $: import("../types").MergeResolver;
            };
            "/oneOf": {
                "/*": any;
                $: import("../types").MergeResolver;
                sibling: string[];
            };
            "/anyOf": {
                "/*": () => {
                    "/discriminator": {
                        $: import("../types").MergeResolver;
                    };
                    "/oneOf": any;
                    "/anyOf": {
                        "/*": any;
                        $: import("../types").MergeResolver;
                        sibling: string[];
                    };
                } | any;
                $: import("../types").MergeResolver;
                sibling: string[];
            };
            $: import("../types").MergeResolver;
            sibling: string[];
        };
        $: import("../types").MergeResolver;
        sibling: string[];
    };
    "/anyOf": {
        "/*": () => {
            "/discriminator": {
                $: import("../types").MergeResolver;
            };
            "/oneOf": {
                "/*": () => any | {
                    "/discriminator": {
                        $: import("../types").MergeResolver;
                    };
                    "/oneOf": {
                        "/*": any;
                        $: import("../types").MergeResolver;
                        sibling: string[];
                    };
                    "/anyOf": {
                        "/*": any;
                        $: import("../types").MergeResolver;
                        sibling: string[];
                    };
                    $: import("../types").MergeResolver;
                    sibling: string[];
                };
                $: import("../types").MergeResolver;
                sibling: string[];
            };
            "/anyOf": any;
        } | {
            "/discriminator": {
                $: import("../types").MergeResolver;
            };
            "/oneOf": {
                "/*": () => {
                    "/discriminator": {
                        $: import("../types").MergeResolver;
                    };
                    "/oneOf": {
                        "/*": any;
                        $: import("../types").MergeResolver;
                        sibling: string[];
                    };
                    "/anyOf": any;
                } | any;
                $: import("../types").MergeResolver;
                sibling: string[];
            };
            "/anyOf": {
                "/*": any;
                $: import("../types").MergeResolver;
                sibling: string[];
            };
            $: import("../types").MergeResolver;
            sibling: string[];
        };
        $: import("../types").MergeResolver;
        sibling: string[];
    };
} | {
    "/items": () => {
        $: import("../types").MergeResolver;
        "/discriminator": {
            $: import("../types").MergeResolver;
        };
        "/oneOf": {
            "/*": () => {
                "/discriminator": {
                    $: import("../types").MergeResolver;
                };
                "/oneOf": any;
                "/anyOf": {
                    "/*": () => any | {
                        "/discriminator": {
                            $: import("../types").MergeResolver;
                        };
                        "/oneOf": {
                            "/*": any;
                            $: import("../types").MergeResolver;
                            sibling: string[];
                        };
                        "/anyOf": {
                            "/*": any;
                            $: import("../types").MergeResolver;
                            sibling: string[];
                        };
                        $: import("../types").MergeResolver;
                        sibling: string[];
                    };
                    $: import("../types").MergeResolver;
                    sibling: string[];
                };
            } | {
                "/discriminator": {
                    $: import("../types").MergeResolver;
                };
                "/oneOf": {
                    "/*": any;
                    $: import("../types").MergeResolver;
                    sibling: string[];
                };
                "/anyOf": {
                    "/*": () => {
                        "/discriminator": {
                            $: import("../types").MergeResolver;
                        };
                        "/oneOf": any;
                        "/anyOf": {
                            "/*": any;
                            $: import("../types").MergeResolver;
                            sibling: string[];
                        };
                    } | any;
                    $: import("../types").MergeResolver;
                    sibling: string[];
                };
                $: import("../types").MergeResolver;
                sibling: string[];
            };
            $: import("../types").MergeResolver;
            sibling: string[];
        };
        "/anyOf": {
            "/*": () => {
                "/discriminator": {
                    $: import("../types").MergeResolver;
                };
                "/oneOf": {
                    "/*": () => any | {
                        "/discriminator": {
                            $: import("../types").MergeResolver;
                        };
                        "/oneOf": {
                            "/*": any;
                            $: import("../types").MergeResolver;
                            sibling: string[];
                        };
                        "/anyOf": {
                            "/*": any;
                            $: import("../types").MergeResolver;
                            sibling: string[];
                        };
                        $: import("../types").MergeResolver;
                        sibling: string[];
                    };
                    $: import("../types").MergeResolver;
                    sibling: string[];
                };
                "/anyOf": any;
            } | {
                "/discriminator": {
                    $: import("../types").MergeResolver;
                };
                "/oneOf": {
                    "/*": () => {
                        "/discriminator": {
                            $: import("../types").MergeResolver;
                        };
                        "/oneOf": {
                            "/*": any;
                            $: import("../types").MergeResolver;
                            sibling: string[];
                        };
                        "/anyOf": any;
                    } | any;
                    $: import("../types").MergeResolver;
                    sibling: string[];
                };
                "/anyOf": {
                    "/*": any;
                    $: import("../types").MergeResolver;
                    sibling: string[];
                };
                $: import("../types").MergeResolver;
                sibling: string[];
            };
            $: import("../types").MergeResolver;
            sibling: string[];
        };
    } | {
        $: import("../types").MergeResolver;
        "/discriminator": {
            $: import("../types").MergeResolver;
        };
        "/oneOf": {
            "/*": () => {
                "/discriminator": {
                    $: import("../types").MergeResolver;
                };
                "/oneOf": {
                    "/*": any;
                    $: import("../types").MergeResolver;
                    sibling: string[];
                };
                "/anyOf": {
                    "/*": () => any | {
                        "/discriminator": {
                            $: import("../types").MergeResolver;
                        };
                        "/oneOf": any;
                        "/anyOf": {
                            "/*": any;
                            $: import("../types").MergeResolver;
                            sibling: string[];
                        };
                        $: import("../types").MergeResolver;
                        sibling: string[];
                    };
                    $: import("../types").MergeResolver;
                    sibling: string[];
                };
            } | {
                "/discriminator": {
                    $: import("../types").MergeResolver;
                };
                "/oneOf": any;
                "/anyOf": {
                    "/*": () => {
                        "/discriminator": {
                            $: import("../types").MergeResolver;
                        };
                        "/oneOf": {
                            "/*": any;
                            $: import("../types").MergeResolver;
                            sibling: string[];
                        };
                        "/anyOf": {
                            "/*": any;
                            $: import("../types").MergeResolver;
                            sibling: string[];
                        };
                    } | any;
                    $: import("../types").MergeResolver;
                    sibling: string[];
                };
                $: import("../types").MergeResolver;
                sibling: string[];
            };
            $: import("../types").MergeResolver;
            sibling: string[];
        };
        "/anyOf": {
            "/*": () => {
                "/discriminator": {
                    $: import("../types").MergeResolver;
                };
                "/oneOf": {
                    "/*": () => any | {
                        "/discriminator": {
                            $: import("../types").MergeResolver;
                        };
                        "/oneOf": {
                            "/*": any;
                            $: import("../types").MergeResolver;
                            sibling: string[];
                        };
                        "/anyOf": any;
                        $: import("../types").MergeResolver;
                        sibling: string[];
                    };
                    $: import("../types").MergeResolver;
                    sibling: string[];
                };
                "/anyOf": {
                    "/*": any;
                    $: import("../types").MergeResolver;
                    sibling: string[];
                };
            } | {
                "/discriminator": {
                    $: import("../types").MergeResolver;
                };
                "/oneOf": {
                    "/*": () => {
                        "/discriminator": {
                            $: import("../types").MergeResolver;
                        };
                        "/oneOf": {
                            "/*": any;
                            $: import("../types").MergeResolver;
                            sibling: string[];
                        };
                        "/anyOf": {
                            "/*": any;
                            $: import("../types").MergeResolver;
                            sibling: string[];
                        };
                    } | any;
                    $: import("../types").MergeResolver;
                    sibling: string[];
                };
                "/anyOf": any;
                $: import("../types").MergeResolver;
                sibling: string[];
            };
            $: import("../types").MergeResolver;
            sibling: string[];
        };
        sibling: string[];
    };
    "/discriminator": {
        $: import("../types").MergeResolver;
    };
    "/oneOf": {
        "/*": () => {
            "/discriminator": {
                $: import("../types").MergeResolver;
            };
            "/oneOf": {
                "/*": any;
                $: import("../types").MergeResolver;
                sibling: string[];
            };
            "/anyOf": {
                "/*": () => any | {
                    "/discriminator": {
                        $: import("../types").MergeResolver;
                    };
                    "/oneOf": any;
                    "/anyOf": {
                        "/*": any;
                        $: import("../types").MergeResolver;
                        sibling: string[];
                    };
                    $: import("../types").MergeResolver;
                    sibling: string[];
                };
                $: import("../types").MergeResolver;
                sibling: string[];
            };
        } | {
            "/discriminator": {
                $: import("../types").MergeResolver;
            };
            "/oneOf": any;
            "/anyOf": {
                "/*": () => {
                    "/discriminator": {
                        $: import("../types").MergeResolver;
                    };
                    "/oneOf": {
                        "/*": any;
                        $: import("../types").MergeResolver;
                        sibling: string[];
                    };
                    "/anyOf": {
                        "/*": any;
                        $: import("../types").MergeResolver;
                        sibling: string[];
                    };
                } | any;
                $: import("../types").MergeResolver;
                sibling: string[];
            };
            $: import("../types").MergeResolver;
            sibling: string[];
        };
        $: import("../types").MergeResolver;
        sibling: string[];
    };
    "/anyOf": {
        "/*": () => {
            "/discriminator": {
                $: import("../types").MergeResolver;
            };
            "/oneOf": {
                "/*": () => any | {
                    "/discriminator": {
                        $: import("../types").MergeResolver;
                    };
                    "/oneOf": {
                        "/*": any;
                        $: import("../types").MergeResolver;
                        sibling: string[];
                    };
                    "/anyOf": any;
                    $: import("../types").MergeResolver;
                    sibling: string[];
                };
                $: import("../types").MergeResolver;
                sibling: string[];
            };
            "/anyOf": {
                "/*": any;
                $: import("../types").MergeResolver;
                sibling: string[];
            };
        } | {
            "/discriminator": {
                $: import("../types").MergeResolver;
            };
            "/oneOf": {
                "/*": () => {
                    "/discriminator": {
                        $: import("../types").MergeResolver;
                    };
                    "/oneOf": {
                        "/*": any;
                        $: import("../types").MergeResolver;
                        sibling: string[];
                    };
                    "/anyOf": {
                        "/*": any;
                        $: import("../types").MergeResolver;
                        sibling: string[];
                    };
                } | any;
                $: import("../types").MergeResolver;
                sibling: string[];
            };
            "/anyOf": any;
            $: import("../types").MergeResolver;
            sibling: string[];
        };
        $: import("../types").MergeResolver;
        sibling: string[];
    };
    $: import("../types").MergeResolver;
    sibling: string[];
};
export declare const openApiMergeRules: (version?: OpenApiVersion) => MergeRules;
