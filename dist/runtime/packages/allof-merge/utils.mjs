import { isObject } from "json-crawl";
export class MapArray extends Map {
  add(key, value) {
    const arr = this.get(key);
    if (arr) {
      arr.push(value);
    } else {
      this.set(key, [value]);
    }
    return this;
  }
}
export const popValues = (data, keys) => {
  const source = {};
  for (const key of keys) {
    if (key in data) {
      source[key] = data[key];
      delete data[key];
    }
  }
  return source;
};
export const removeDuplicates = (array) => {
  const uniqueItems = [];
  for (const item of array) {
    if (!uniqueItems.some((uniqueItem) => isEqual(uniqueItem, item))) {
      uniqueItems.push(item);
    }
  }
  return uniqueItems;
};
export const mergeValues = (value, patch) => {
  if (Array.isArray(value) && Array.isArray(patch)) {
    return [...value, ...patch];
  } else if (isObject(value) && isObject(patch)) {
    const result = { ...value };
    for (const key of Object.keys(patch)) {
      result[key] = mergeValues(result[key], patch[key]);
    }
    return result;
  } else {
    return patch;
  }
};
export const isRefNode = (value) => {
  return value && value.$ref && typeof value.$ref === "string";
};
export const isAnyOfNode = (value) => {
  return value && value.anyOf && Array.isArray(value.anyOf);
};
export const isOneOfNode = (value) => {
  return value && value.oneOf && Array.isArray(value.oneOf);
};
export const parseRef = ($ref, basePath = "") => {
  const [filePath = basePath, ref] = $ref.split("#");
  const pointer = !ref || ref === "/" ? "" : ref;
  const normalized = createRef(filePath, pointer);
  return { filePath, pointer, normalized };
};
export const createRef = (basePath, pointer) => {
  if (!basePath) {
    return !pointer ? "#" : `#${pointer}`;
  } else {
    return `${basePath}${!pointer ? "" : "#" + pointer}`;
  }
};
export const resolveRefNode = (data, node) => {
  const { $ref, ...rest } = node;
  const _ref = parseRef($ref);
  return !_ref.filePath ? resolvePointer(data, _ref.pointer) : void 0;
};
export const resolvePointer = (data, pointer, pointers = [pointer]) => {
  if (!isObject(data)) {
    return;
  }
  let value = data;
  const path = parsePointer(pointer);
  for (const key of path) {
    if (Array.isArray(value) && value.length > +key) {
      value = value[+key];
    } else if (isObject(value) && key in value) {
      value = value[key];
    } else if (isRefNode(value)) {
      const _ref = parseRef(value.$ref);
      value = !_ref.filePath && !pointers.includes(_ref.pointer) ? resolvePointer(data, _ref.pointer, [...pointers, _ref.pointer]) : void 0;
    } else {
      return;
    }
  }
  return value;
};
export const pathMask = {
  slash: /\//g,
  tilde: /~/g,
  escapedSlash: /~1/g,
  escapedTilde: /~0/g
};
export const parsePointer = (pointer) => {
  return pointer.split("/").map((i) => decodeURIComponent(i.replace(pathMask.escapedSlash, "/").replace(pathMask.escapedTilde, "~"))).slice(1);
};
export const buildPointer = (path) => {
  if (!path.length) {
    return "";
  }
  return "/" + path.map((i) => encodeURIComponent(String(i).replace(pathMask.tilde, "~0").replace(pathMask.slash, "~1"))).join("/");
};
export const isEqual = (a, b) => JSON.stringify(a) == JSON.stringify(b);
export const findMultiplierForInteger = (number) => {
  let multiplier = 1;
  while (number * multiplier % 1 !== 0) {
    multiplier *= 10;
  }
  return multiplier;
};
export function calculateLCM(args) {
  const x = args.reduce((r, v) => Math.max(r, findMultiplierForInteger(v)), 0);
  return args.reduce((a, b) => Math.round(a * x * b * x / calculateGCD(a * x, b * x)) / x);
}
export function calculateGCD(a, b) {
  return b === 0 ? a : calculateGCD(b, a % b);
}
export const findCombinations = (vectors) => {
  if (vectors.length === 0) {
    return [[]];
  }
  const firstVector = vectors[0];
  const remainingVectors = vectors.slice(1);
  const combinationsOfRemaining = findCombinations(remainingVectors);
  const combinations = [];
  for (const element of firstVector) {
    for (const combination of combinationsOfRemaining) {
      combinations.push([element, ...combination]);
    }
  }
  return combinations;
};
