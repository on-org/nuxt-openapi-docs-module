import { isObject, syncClone } from "json-crawl";
import { buildPointer, isAnyOfNode, isOneOfNode } from "./utils.mjs";
import { mergeCombinarySibling } from "./resolvers/combinary.mjs";
import { jsonSchemaMergeResolver } from "./resolvers/index.mjs";
import { normalizeAllOfItems } from "./normalize.mjs";
import { jsonSchemaMergeRules } from "./rules/index.mjs";
import { ErrorMessage } from "./errors.mjs";
export const merge = (value, options) => {
  const rules = options?.rules || jsonSchemaMergeRules();
  return syncClone(value, allOfResolverHook(options), { rules });
};
const isAllOfMergeRule = (rules) => {
  return rules && rules["/allOf"] && "$" in rules["/allOf"];
};
export const allOfResolverHook = (options) => {
  const nodeToDelete = /* @__PURE__ */ new Map();
  let source = options?.source;
  const allOfRefs = [];
  return (value, ctx) => {
    if (!ctx.path.length && !options?.source) {
      source = value;
    }
    const mergeError = (values) => {
      const args = findNodeToDelete(ctx.path);
      if (args) {
        nodeToDelete.set(...args);
      } else {
        options?.onMergeError?.(ErrorMessage.mergeError(), ctx.path, values);
      }
    };
    const exitHook = () => {
      const { node } = ctx.state;
      const strPath = buildPointer(ctx.path);
      if (nodeToDelete.has(strPath)) {
        const key = nodeToDelete.get(strPath);
        if (Array.isArray(node[ctx.key])) {
          if (node[ctx.key].length < 2) {
            mergeError(value?.allOf || []);
          }
          node[ctx.key].splice(key, 1);
        }
      }
    };
    if (!isObject(value) || Array.isArray(value)) {
      return { value, exitHook };
    }
    if (!isAllOfMergeRule(ctx.rules)) {
      return { value, exitHook };
    }
    const { allOf, ...sibling } = value;
    const _allOf = [];
    if (Array.isArray(allOf)) {
      _allOf.push(...allOf);
    }
    if (!_allOf.length) {
      const { $ref, ...rest } = sibling;
      if (options?.mergeRefSibling && $ref && Object.keys(rest).length > 0) {
        _allOf.push({ $ref }, rest);
      } else if (options?.mergeCombinarySibling) {
        if (isAnyOfNode(sibling) && ctx.rules["/anyOf"]) {
          return { value: mergeCombinarySibling(sibling, "anyOf", ctx.rules["/anyOf"]), exitHook };
        } else if (isOneOfNode(sibling) && ctx.rules["/oneOf"]) {
          return { value: mergeCombinarySibling(sibling, "oneOf", ctx.rules["/oneOf"]), exitHook };
        }
      }
    } else if (Object.keys(sibling).length) {
      _allOf.push(sibling);
    }
    if (!_allOf.length) {
      return { value: sibling, exitHook };
    }
    const { allOfItems, brokenRefs } = normalizeAllOfItems(_allOf, ctx.path, source, allOfRefs);
    if (brokenRefs.length) {
      brokenRefs.forEach((ref) => options?.onRefResolveError?.("Cannot resolve $ref", ctx.path, ref));
      return { value: { allOf: allOfItems }, exitHook };
    }
    if (allOfItems.length < 2) {
      return { value: allOfItems.length ? allOfItems[0] : {}, exitHook };
    }
    const mergedNode = jsonSchemaMergeResolver(allOfItems, { allOfItems, mergeRules: ctx.rules, mergeError });
    if (options?.mergeCombinarySibling && isAnyOfNode(mergedNode)) {
      return { value: mergeCombinarySibling(mergedNode, "anyOf", ctx.rules["/anyOf"]), exitHook };
    } else if (options?.mergeCombinarySibling && isOneOfNode(mergedNode)) {
      return { value: mergeCombinarySibling(mergedNode, "oneOf", ctx.rules["/oneOf"]), exitHook };
    } else {
      return { value: mergedNode, exitHook };
    }
  };
};
const findNodeToDelete = (path) => {
  for (let i = path.length - 2; i >= 0; i--) {
    if (path[i] === "anyOf" || path[i] === "oneOf") {
      const _path = path.slice(0, i + 1);
      return [buildPointer(_path), path[i + 1]];
    }
  }
  return;
};
