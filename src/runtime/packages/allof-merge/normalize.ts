import { JsonPath, isObject } from "json-crawl"

import { buildPointer, isRefNode, parseRef, resolvePointer } from "./utils"
import { AllOfRef, NormalizeResponse } from "./types"

export const normalizeAllOfItems = (allOfItems: any[], jsonPath: JsonPath, source: any, allOfRefs: AllOfRef[]): NormalizeResponse => {
  const resolvedAllOfItems = []
  const pointer = buildPointer(jsonPath)
  const brokenRefs: string[] = []
  
  const _allOfRef: AllOfRef = { pointer, data: "", refs: [] }

  for (const item of allOfItems) {
    // resolve $ref
    if (isRefNode(item) && !brokenRefs.includes(item.$ref)) {

      if (_allOfRef.data === "") {
        _allOfRef.data = JSON.stringify(allOfItems)
      }

      const { $ref, ...rest } = item
      const { filePath, normalized, pointer } = parseRef($ref)

      const ref = allOfRefs.find((allOfRef) => allOfRef.refs.includes(item.$ref) && allOfRef.data === _allOfRef.data && pointer !== allOfRef.pointer)
      if (ref) { 
        return { allOfItems: [{ $ref: "#" + ref.pointer }], brokenRefs }
      }

      _allOfRef.refs.push(normalized)
      const value = !filePath ? resolvePointer(source, pointer) : undefined

      if (value === undefined) {
        brokenRefs.push(normalized)
        resolvedAllOfItems.push(item)
      } else {
        resolvedAllOfItems.push(value)
      }

      if (Object.keys(rest).length) {
        resolvedAllOfItems.push(rest)
      }
    } else {
      resolvedAllOfItems.push(item)
    }
  }

  if (_allOfRef.refs.length) {
    allOfRefs.push(_allOfRef)
  }

  const items = flattenAllOf(resolvedAllOfItems)
  if (items.find((item) => isRefNode(item) && !brokenRefs.includes(item.$ref))) {
    return normalizeAllOfItems(items, jsonPath, source, allOfRefs)
  }

  return { allOfItems: items, brokenRefs }
}

const flattenAllOf = (items: any[]): any[] => {
  // allOf: [{ allOf: [a,b], c }] => allOf: [a, b, c]
  
  const result: any[] = []
  for (const item of items) {
    if (!isObject(item)) {
      // error, object expected
      continue
    }

    if (!item.allOf || !Array.isArray(item.allOf)) { 
      // TODO skip non-array allOf 
      result.push(item)
    } else {
      const { allOf, ...sibling } = item
      const allOfItems = Object.keys(sibling).length ? [...allOf, sibling] : allOf as any[]
      result.push(...flattenAllOf(allOfItems))
    }
  }

  return result
}
