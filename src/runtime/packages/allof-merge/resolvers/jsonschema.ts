import { getPatternPropertiesForMerge, getPropertiesForMerge } from "./properties"
import type { JsonSchema, MergeResolver } from "../types"
import { ErrorMessage } from "../errors"

export const getAllOfItemsMap = (allOfItems: JsonSchema[]): Record<string, any[]> => {
  const result: Record<string, any[]> = {}

  for (const schema of allOfItems) {
    for (const key of Object.keys(schema)) {
      if (Array.isArray(result[key])) {
        result[key].push(schema[key])
      } else {
        result[key] = [schema[key]]
      }
    }
  }
  return result
}

export const jsonSchemaMergeResolver: MergeResolver = (args: any[], ctx) => {
  if (args.includes(false)) { return false }
  
  const result: Record<string, any> = {}
  const keys = getAllOfItemsMap(args)

  if ("properties" in keys) {
    keys.properties = getPropertiesForMerge(args)
  }

  if ("patternProperties" in keys) {
    keys.patternProperties = getPatternPropertiesForMerge(args)
  }

  for (let [key, _args] of Object.entries(keys)) {
    if (!_args.length) { continue }
    const rules: any = ctx.mergeRules

    let rule = `/${key}` in rules ? rules[`/${key}`] : rules["/?"]
    rule = rule && (!("$" in rule) && "/" in rule) ? rule["/"] : rule
    rule = typeof rule === "function" ? rule() : rule
    const mergeFunc =  rule && "$" in rule ? rule["$"] : undefined

    if (!mergeFunc) {
      throw new Error(ErrorMessage.ruleNotFound(key))
    }

    const merged = _args.length > 1 ? mergeFunc(_args, { ...ctx, allOfItems: args }) : _args[0]

    if (merged === undefined) {
      ctx.mergeError(_args)
    } else {
      result[key] = merged
    }
  }

  return Object.keys(result).length ? result : undefined
}
