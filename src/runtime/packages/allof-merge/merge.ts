import { JsonPath, SyncCloneHook, isObject, syncClone } from "json-crawl"

import { AllOfRef, MergeError, MergeOptions, MergeRules } from "./types"
import { buildPointer, isAnyOfNode, isOneOfNode } from "./utils"
import { mergeCombinarySibling } from "./resolvers/combinary"
import { jsonSchemaMergeResolver } from "./resolvers"
import { normalizeAllOfItems } from "./normalize"
import { jsonSchemaMergeRules } from "./rules"
import { ErrorMessage } from "./errors"

export const merge = (value: any, options?: MergeOptions) => {
  const rules: MergeRules = options?.rules || jsonSchemaMergeRules() 
  return syncClone(value, allOfResolverHook(options), { rules })
}

const isAllOfMergeRule = (rules: MergeRules) => {
  return rules && rules["/allOf"] && "$" in rules["/allOf"]
} 

export const allOfResolverHook = (options?: MergeOptions): SyncCloneHook<{}> => {
 
  const nodeToDelete: Map<string, number> = new Map()
  let source = options?.source
  
  /**
   * Map of cycle nodes paths (used for enableCircular mode)
   * key    - pointer to source node
   * value  - path to cycle node
   */
  const allOfRefs: AllOfRef[] = []

  return (value, ctx) => {
    // save root value as source if source is not defined
    if (!ctx.path.length && !options?.source) {
      source = value
    }

    const mergeError: MergeError = (values) => {
      // check if merge error in anyOf/oneOf combination node
      const args = findNodeToDelete(ctx.path)
      if (args) {
        nodeToDelete.set(...args)
      } else {
        options?.onMergeError?.(ErrorMessage.mergeError(), ctx.path, values)
      }
    }

    const exitHook = () => {
      const { node } = ctx.state
      const strPath = buildPointer(ctx.path)
      if (nodeToDelete.has(strPath)) {
        const key = nodeToDelete.get(strPath)!
        if (Array.isArray(node[ctx.key])) {
          if (node[ctx.key].length < 2) {
            mergeError((<any>value)?.allOf || [])
          }
          node[ctx.key].splice(key, 1)
        }
      }
      // if ("anyOf" in node) {
      //   node.anyOf = removeDuplicates(node.anyOf)
      // }
      // if ("oneOf" in node) {
      //   node.oneOf = removeDuplicates(node.oneOf)
      // }
    }

    // skip if not object
    if (!isObject(value) || Array.isArray(value)) { 
      return { value, exitHook }
    }
    
    // check if in current node expected allOf merge rule in rules
    if (!isAllOfMergeRule(ctx.rules)) { return { value, exitHook } }

    const { allOf, ...sibling } = value

    const _allOf: any[] = []
    // remove allOf from scheam if is wrong type
    if (Array.isArray(allOf)) {
      _allOf.push(...allOf)
    }

    if (!_allOf.length) {
      const { $ref, ...rest } = sibling
      if (options?.mergeRefSibling && $ref && Object.keys(rest).length > 0) {
        // create allOf from $ref and sibling if mergeRefSibling option
        _allOf.push({ $ref }, rest)
      } else if (options?.mergeCombinarySibling) {
        // create allOf from each combinary content and sibling if mergeCombinarySibling
        if (isAnyOfNode(sibling) && ctx.rules["/anyOf"]) {
          return { value: mergeCombinarySibling(sibling, "anyOf", ctx.rules["/anyOf"]), exitHook }
        } else if (isOneOfNode(sibling) && ctx.rules["/oneOf"]) {
          return { value: mergeCombinarySibling(sibling, "oneOf", ctx.rules["/oneOf"]), exitHook }
        }
      } 
    } else if (Object.keys(sibling).length) {
      _allOf.push(sibling)
    }

    if (!_allOf.length) {
      return { value: sibling, exitHook }
    }
    
    const { allOfItems, brokenRefs } = normalizeAllOfItems(_allOf, ctx.path, source, allOfRefs)

    if (brokenRefs.length) {
      brokenRefs.forEach((ref) => options?.onRefResolveError?.("Cannot resolve $ref", ctx.path, ref)) 
      return { value: { allOf: allOfItems }, exitHook }
    }

    // remove allOf from schema if it is empty or has single item
    if (allOfItems.length < 2) {
      return { value: allOfItems.length ? allOfItems[0] : {}, exitHook }
    }

    const mergedNode = jsonSchemaMergeResolver(allOfItems, { allOfItems, mergeRules: ctx.rules, mergeError })

    if (options?.mergeCombinarySibling && isAnyOfNode(mergedNode)) {
      return { value: mergeCombinarySibling(mergedNode, "anyOf", ctx.rules["/anyOf"]), exitHook }
    } else if (options?.mergeCombinarySibling && isOneOfNode(mergedNode)) {
      return { value: mergeCombinarySibling(mergedNode, "oneOf", ctx.rules["/oneOf"]), exitHook }
    } else {
      return { value: mergedNode, exitHook }
    }
  }
}

const findNodeToDelete = (path: JsonPath): [string, number] | undefined => {
  for (let i = path.length - 2; i >= 0; i--) {
    if ((path[i] === "anyOf" || path[i] === "oneOf")) {
      const _path = path.slice(0, i+1)
      return [buildPointer(_path), path[i+1] as number]
    }
  }
  return
}
