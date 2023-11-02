import { calculateLCM, findCombinations, isEqual, mergeValues } from "../utils"
import { getAllOfItemsMap } from "./jsonschema"
import { MergeResolver } from "../types"

export const first: MergeResolver = ([a]) => a
export const last: MergeResolver = (args) => args[args.length-1]
export const alternative: MergeResolver = (args) => args.reduce((r, v) =>  r || v, false)
export const minValue: MergeResolver = (args) => Math.min(...args)
export const maxValue: MergeResolver = (args) => Math.max(...args)
export const mergePattern: MergeResolver = (args) => args.length > 1 ? args.reduce((r, v) => `${r}(?=${v})`, '') : args[0]
export const intersectItems: MergeResolver = ([a, ...args]) => args.reduce((r, v) => r.filter((t: string) => v.includes(t)), a)
export const equal: MergeResolver = ([a, ...args]) => args.find((v) => !isEqual(v, a)) ? undefined : a
export const mergeObjects: MergeResolver = ([a, ...args]) => args.reduce((r, v) => mergeValues(r, v), a)
export const mergeArray: MergeResolver = (args) => findCombinations(args).map((v) => ({ allOf: v }))
export const mergeNot: MergeResolver = (args) => ({ anyOf: args })
export const mergeMultipleOf: MergeResolver = (args) => calculateLCM(args)

export const mergeEnum: MergeResolver = (args, ctx) => {
  const items = args.map((v) => v.map((p: any) => JSON.stringify(p)))
  const result = intersectItems(items, ctx).map((v: string) => JSON.parse(v)).sort()
  if (!result.length) {
    ctx.mergeError(args)
  }
  return result
}

export const mergeTypes: MergeResolver = (args, ctx) => {
  const arrayTypes = args.map((a) => Array.isArray(a) ? a : [a])
  const types = intersectItems(arrayTypes, ctx)
  return types.length === 1 ? types[0] : types.length ? types : undefined
}

export const mergeStringItems: MergeResolver = (args) => {
  const uniqueStrings: Set<string> = new Set();

  // Iterate through each array and add its strings to the set
  for (const array of args) {
    for (const str of array) {
      uniqueStrings.add(str);
    }
  }

  // Convert the set back to an array and return it
  return Array.from(uniqueStrings).sort()
} 

export const dependenciesMergeResolver: MergeResolver = (args, ctx) => {
  const result: Record<string, any> = {}
  const props = getAllOfItemsMap(args)

  for (const [prop, items] of Object.entries(props)) {
    const required = items.reduce((r, v) => r && Array.isArray(v), true)

    if (required) {
      result[prop] = mergeStringItems(items, ctx)
    } else {
      const _items = items.map((v) => Array.isArray(v) ? { required: v } : v)
      result[prop] = _items.length > 1 ? { allOf: _items } : _items[0]
    }
  }

  return result
}
