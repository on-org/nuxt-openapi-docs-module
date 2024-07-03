export declare function toRFCDateTime(date: any, omitTime: boolean, omitDate: boolean, milliseconds: boolean): string;
export declare function ensureMinLength(sample: string, min: number): string;
export declare function mergeDeep(...objects: any[]): any;
export declare function uuid(str: string): string;
export declare function getResultForCircular(type: string): {
    value: {} | undefined;
};
export declare function popSchemaStack(seenSchemasStack: any[], context: boolean): void;
