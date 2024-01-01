import { traverse, clearCache } from './traverse';
import { sampleArray, sampleBoolean, sampleNumber, sampleObject, sampleString } from './samplers/index';
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

export var _samplers: any = {};

const defaults: DefaultsOptions = {
  skipReadOnly: false,
  maxSampleDepth: 15,
};

export function sample(schema: JSONSchema7, options?: Options, spec?: object) {
  let opts = Object.assign({}, defaults, options);
  clearCache();
  return traverse(schema, opts, spec!).value;
};

export function _registerSampler(type: string, sampler: any) {
  _samplers[type] = sampler;
};

export { inferType } from './infer';

_registerSampler('array', sampleArray);
_registerSampler('boolean', sampleBoolean);
_registerSampler('integer', sampleNumber);
_registerSampler('number', sampleNumber);
_registerSampler('object', sampleObject);
_registerSampler('string', sampleString);
