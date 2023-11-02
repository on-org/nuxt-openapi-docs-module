import { getPatternPropertiesForMerge, getPropertiesForMerge } from "./properties.mjs";
import { ErrorMessage } from "../errors.mjs";
export const getAllOfItemsMap = (allOfItems) => {
  const result = {};
  for (const schema of allOfItems) {
    for (const key of Object.keys(schema)) {
      if (Array.isArray(result[key])) {
        result[key].push(schema[key]);
      } else {
        result[key] = [schema[key]];
      }
    }
  }
  return result;
};
export const jsonSchemaMergeResolver = (args, ctx) => {
  if (args.includes(false)) {
    return false;
  }
  const result = {};
  const keys = getAllOfItemsMap(args);
  if ("properties" in keys) {
    keys.properties = getPropertiesForMerge(args);
  }
  if ("patternProperties" in keys) {
    keys.patternProperties = getPatternPropertiesForMerge(args);
  }
  for (let [key, _args] of Object.entries(keys)) {
    if (!_args.length) {
      continue;
    }
    const rules = ctx.mergeRules;
    let rule = `/${key}` in rules ? rules[`/${key}`] : rules["/?"];
    rule = rule && (!("$" in rule) && "/" in rule) ? rule["/"] : rule;
    rule = typeof rule === "function" ? rule() : rule;
    const mergeFunc = rule && "$" in rule ? rule["$"] : void 0;
    if (!mergeFunc) {
      throw new Error(ErrorMessage.ruleNotFound(key));
    }
    const merged = _args.length > 1 ? mergeFunc(_args, { ...ctx, allOfItems: args }) : _args[0];
    if (merged === void 0) {
      ctx.mergeError(_args);
    } else {
      result[key] = merged;
    }
  }
  return Object.keys(result).length ? result : void 0;
};
