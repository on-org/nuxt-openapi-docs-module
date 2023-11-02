import { calculateLCM, findCombinations, isEqual, mergeValues } from "../utils.mjs";
import { getAllOfItemsMap } from "./jsonschema.mjs";
export const first = ([a]) => a;
export const last = (args) => args[args.length - 1];
export const alternative = (args) => args.reduce((r, v) => r || v, false);
export const minValue = (args) => Math.min(...args);
export const maxValue = (args) => Math.max(...args);
export const mergePattern = (args) => args.length > 1 ? args.reduce((r, v) => `${r}(?=${v})`, "") : args[0];
export const intersectItems = ([a, ...args]) => args.reduce((r, v) => r.filter((t) => v.includes(t)), a);
export const equal = ([a, ...args]) => args.find((v) => !isEqual(v, a)) ? void 0 : a;
export const mergeObjects = ([a, ...args]) => args.reduce((r, v) => mergeValues(r, v), a);
export const mergeArray = (args) => findCombinations(args).map((v) => ({ allOf: v }));
export const mergeNot = (args) => ({ anyOf: args });
export const mergeMultipleOf = (args) => calculateLCM(args);
export const mergeEnum = (args, ctx) => {
  const items = args.map((v) => v.map((p) => JSON.stringify(p)));
  const result = intersectItems(items, ctx).map((v) => JSON.parse(v)).sort();
  if (!result.length) {
    ctx.mergeError(args);
  }
  return result;
};
export const mergeTypes = (args, ctx) => {
  const arrayTypes = args.map((a) => Array.isArray(a) ? a : [a]);
  const types = intersectItems(arrayTypes, ctx);
  return types.length === 1 ? types[0] : types.length ? types : void 0;
};
export const mergeStringItems = (args) => {
  const uniqueStrings = /* @__PURE__ */ new Set();
  for (const array of args) {
    for (const str of array) {
      uniqueStrings.add(str);
    }
  }
  return Array.from(uniqueStrings).sort();
};
export const dependenciesMergeResolver = (args, ctx) => {
  const result = {};
  const props = getAllOfItemsMap(args);
  for (const [prop, items] of Object.entries(props)) {
    const required = items.reduce((r, v) => r && Array.isArray(v), true);
    if (required) {
      result[prop] = mergeStringItems(items, ctx);
    } else {
      const _items = items.map((v) => Array.isArray(v) ? { required: v } : v);
      result[prop] = _items.length > 1 ? { allOf: _items } : _items[0];
    }
  }
  return result;
};
