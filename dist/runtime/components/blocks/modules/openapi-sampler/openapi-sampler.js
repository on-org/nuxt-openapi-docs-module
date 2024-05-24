import { traverse, clearCache } from "./traverse.js";
import { sampleArray, sampleBoolean, sampleNumber, sampleObject, sampleString } from "./samplers/index.js";
export var _samplers = {};
const defaults = {
  skipReadOnly: false,
  maxSampleDepth: 15
};
export function sample(schema, options, spec) {
  let opts = Object.assign({}, defaults, options);
  clearCache();
  return traverse(schema, opts, spec).value;
}
;
export function _registerSampler(type, sampler) {
  _samplers[type] = sampler;
}
;
export { inferType } from "./infer.js";
_registerSampler("array", sampleArray);
_registerSampler("boolean", sampleBoolean);
_registerSampler("integer", sampleNumber);
_registerSampler("number", sampleNumber);
_registerSampler("object", sampleObject);
_registerSampler("string", sampleString);
