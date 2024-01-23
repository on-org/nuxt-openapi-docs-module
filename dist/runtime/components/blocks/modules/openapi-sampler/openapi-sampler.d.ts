import type { JSONSchema7 } from 'json-schema';
export interface Options {
    readonly skipNonRequired?: boolean;
    readonly skipReadOnly?: boolean;
    readonly skipWriteOnly?: boolean;
    readonly quiet?: boolean;
}
export interface DefaultsOptions {
    readonly skipReadOnly: boolean;
    readonly maxSampleDepth: number;
}
export declare var _samplers: any;
export declare function sample(schema: JSONSchema7, options?: Options, spec?: object): any;
export declare function _registerSampler(type: string, sampler: any): void;
export { inferType } from './infer';
