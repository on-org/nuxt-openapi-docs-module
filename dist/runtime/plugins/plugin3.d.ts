import OpenApiPlugin from "./OpenApiPlugin.js";
import OpenApiRefPlugin from "./OpenApiRefPlugin.js";
declare const _default: import("nuxt/app").Plugin<{
    openapidoc: OpenApiPlugin;
    openapidocRef: OpenApiRefPlugin;
    openapidocBus: {
        $on: {
            <Key extends import("mitt").EventType>(type: Key, handler: import("mitt").Handler<Record<import("mitt").EventType, unknown>[Key]>): void;
            (type: "*", handler: import("mitt").WildcardHandler<Record<import("mitt").EventType, unknown>>): void;
        };
        $off: {
            <Key extends import("mitt").EventType>(type: Key, handler?: import("mitt").Handler<Record<import("mitt").EventType, unknown>[Key]> | undefined): void;
            (type: "*", handler: import("mitt").WildcardHandler<Record<import("mitt").EventType, unknown>>): void;
        };
        $emit: {
            <Key extends import("mitt").EventType>(type: Key, event: Record<import("mitt").EventType, unknown>[Key]): void;
            <Key extends import("mitt").EventType>(type: undefined extends Record<import("mitt").EventType, unknown>[Key] ? Key : never): void;
        };
    };
}> & import("nuxt/app").ObjectPlugin<{
    openapidoc: OpenApiPlugin;
    openapidocRef: OpenApiRefPlugin;
    openapidocBus: {
        $on: {
            <Key extends import("mitt").EventType>(type: Key, handler: import("mitt").Handler<Record<import("mitt").EventType, unknown>[Key]>): void;
            (type: "*", handler: import("mitt").WildcardHandler<Record<import("mitt").EventType, unknown>>): void;
        };
        $off: {
            <Key extends import("mitt").EventType>(type: Key, handler?: import("mitt").Handler<Record<import("mitt").EventType, unknown>[Key]> | undefined): void;
            (type: "*", handler: import("mitt").WildcardHandler<Record<import("mitt").EventType, unknown>>): void;
        };
        $emit: {
            <Key extends import("mitt").EventType>(type: Key, event: Record<import("mitt").EventType, unknown>[Key]): void;
            <Key extends import("mitt").EventType>(type: undefined extends Record<import("mitt").EventType, unknown>[Key] ? Key : never): void;
        };
    };
}>;
export default _default;
