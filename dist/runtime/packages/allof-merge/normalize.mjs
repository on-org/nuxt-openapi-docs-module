import { isObject } from "json-crawl";
import { buildPointer, isRefNode, parseRef, resolvePointer } from "./utils.mjs";
export const normalizeAllOfItems = (allOfItems, jsonPath, source, allOfRefs) => {
  const resolvedAllOfItems = [];
  const pointer = buildPointer(jsonPath);
  const brokenRefs = [];
  const _allOfRef = { pointer, data: "", refs: [] };
  for (const item of allOfItems) {
    if (isRefNode(item) && !brokenRefs.includes(item.$ref)) {
      if (_allOfRef.data === "") {
        _allOfRef.data = JSON.stringify(allOfItems);
      }
      const { $ref, ...rest } = item;
      const { filePath, normalized, pointer: pointer2 } = parseRef($ref);
      const ref = allOfRefs.find((allOfRef) => allOfRef.refs.includes(item.$ref) && allOfRef.data === _allOfRef.data && pointer2 !== allOfRef.pointer);
      if (ref) {
        return { allOfItems: [{ $ref: "#" + ref.pointer }], brokenRefs };
      }
      _allOfRef.refs.push(normalized);
      const value = !filePath ? resolvePointer(source, pointer2) : void 0;
      if (value === void 0) {
        brokenRefs.push(normalized);
        resolvedAllOfItems.push(item);
      } else {
        resolvedAllOfItems.push(value);
      }
      if (Object.keys(rest).length) {
        resolvedAllOfItems.push(rest);
      }
    } else {
      resolvedAllOfItems.push(item);
    }
  }
  if (_allOfRef.refs.length) {
    allOfRefs.push(_allOfRef);
  }
  const items = flattenAllOf(resolvedAllOfItems);
  if (items.find((item) => isRefNode(item) && !brokenRefs.includes(item.$ref))) {
    return normalizeAllOfItems(items, jsonPath, source, allOfRefs);
  }
  return { allOfItems: items, brokenRefs };
};
const flattenAllOf = (items) => {
  const result = [];
  for (const item of items) {
    if (!isObject(item)) {
      continue;
    }
    if (!item.allOf || !Array.isArray(item.allOf)) {
      result.push(item);
    } else {
      const { allOf, ...sibling } = item;
      const allOfItems = Object.keys(sibling).length ? [...allOf, sibling] : allOf;
      result.push(...flattenAllOf(allOfItems));
    }
  }
  return result;
};
