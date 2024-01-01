/**
 * Convenience wrapper around the api.
 * Calls `.get` when called with an `object` and a `pointer`.
 * Calls `.set` when also called with `value`.
 * If only supplied `object`, returns a partially applied function, mapped to the object.
 *
 * @param {Object} obj
 * @param {String|Array} pointer
 * @param value
 * @returns {*}
 */
declare function api(obj: any, pointer: any, value: any): any;
declare namespace api {
    var get: (obj: any, pointer: any) => any;
    var set: (obj: any, pointer: any, value: any) => any;
    var remove: (obj: any, pointer: any) => void;
    var dict: (obj: any, descend: any) => {};
    var walk: (obj: any, iterator: any, descend: any) => void;
    var has: (obj: any, pointer: any) => boolean;
    var escape: (str: any) => any;
    var unescape: (str: any) => any;
    var parse: (pointer: any) => any;
    var compile: (refTokens: any) => string;
}
export default api;
