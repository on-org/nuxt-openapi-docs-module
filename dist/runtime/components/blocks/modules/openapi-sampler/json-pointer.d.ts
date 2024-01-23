type Pointer = string | Array<string | number>;
type DescendFunction = (value: any) => boolean;
type IteratorFunction = (value: any, pointer: string) => void;
type ObjectLiteral = {
    [key: string]: any;
};
declare function api(obj: ObjectLiteral, pointer: Pointer, value?: any): any;
declare namespace api {
    var get: (obj: ObjectLiteral, pointer: Pointer) => any;
    var set: (obj: ObjectLiteral, pointer: Pointer, value: any) => any;
    var remove: (obj: ObjectLiteral, pointer: Pointer) => void;
    var dict: (obj: ObjectLiteral, descend?: DescendFunction | undefined) => ObjectLiteral;
    var walk: (obj: ObjectLiteral, iterator: IteratorFunction, descend?: DescendFunction | undefined) => void;
    var has: (obj: ObjectLiteral, pointer: Pointer) => boolean;
    var escape: (str: string | number) => string;
    var unescape: (str: string) => string;
    var parse: (pointer: string) => (string | number)[];
    var compile: (refTokens: (string | number)[]) => string;
}
export default api;
