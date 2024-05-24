import OpenApiPlugin from "./OpenApiPlugin.js";
import OpenApiRefPlugin from "./OpenApiRefPlugin.js";
declare const _default: import("#app").Plugin<{
    openapidoc: OpenApiPlugin;
    openapidocRef: OpenApiRefPlugin;
    openapidocBus: {
        $on: {
            <Key extends import("mitt").EventType>(type: Key, handler: import("mitt").Handler<Record<import("mitt").EventType, unknown>[Key]>): void;
            (type: "*", handler: import("mitt").WildcardHandler<Record<import("mitt").EventType, unknown>>): void;
        };
        $off: {
            <Key_1 extends import("mitt").EventType>(type: Key_1, handler?: import("mitt").Handler<Record<import("mitt").EventType, unknown>[Key_1]> | undefined): void;
            (type: "*", handler: import("mitt").WildcardHandler<Record<import("mitt").EventType, unknown>>): void;
        };
        $emit: {
            <Key_2 extends import("mitt").EventType>(type: Key_2, event: Record<import("mitt").EventType, unknown>[Key_2]): void;
            <Key_3 extends import("mitt").EventType>(type: undefined extends Record<import("mitt").EventType, unknown>[Key_3] ? Key_3 : never): void;
        };
    };
}> & import("#app").ObjectPlugin<{
    openapidoc: OpenApiPlugin;
    openapidocRef: OpenApiRefPlugin;
    openapidocBus: {
        $on: {
            <Key extends import("mitt").EventType>(type: Key, handler: import("mitt").Handler<Record<import("mitt").EventType, unknown>[Key]>): void;
            (type: "*", handler: import("mitt").WildcardHandler<Record<import("mitt").EventType, unknown>>): void;
        };
        $off: {
            <Key_1 extends import("mitt").EventType>(type: Key_1, handler?: import("mitt").Handler<Record<import("mitt").EventType, unknown>[Key_1]> | undefined): void;
            (type: "*", handler: import("mitt").WildcardHandler<Record<import("mitt").EventType, unknown>>): void;
        };
        $emit: {
            <Key_2 extends import("mitt").EventType>(type: Key_2, event: Record<import("mitt").EventType, unknown>[Key_2]): void;
            <Key_3 extends import("mitt").EventType>(type: undefined extends Record<import("mitt").EventType, unknown>[Key_3] ? Key_3 : never): void;
        };
    };
}>;
export default _default;
