import { jsonSchemaMergeResolver } from "./jsonschema.mjs";
import { MapArray } from "../utils.mjs";
export const itemsMergeResolver = (args, ctx) => {
  const arrayItems = args.reduce((r, v) => Array.isArray(v) || r, false);
  if (!arrayItems) {
    return jsonSchemaMergeResolver(args, ctx);
  }
  const mergeItems = [];
  let itemsLimit = Infinity;
  let maxItemsLength = 0;
  const additionalItemsSchema = new MapArray();
  for (const obj of ctx.allOfItems) {
    if ("additionalItems" in obj && obj.additionalItems && "items" in obj && Array.isArray(obj.items)) {
      additionalItemsSchema.add(obj.items.length, obj.additionalItems);
    }
    if (!("items" in obj)) {
      continue;
    }
    mergeItems.push(obj.items);
    if (Array.isArray(obj.items)) {
      maxItemsLength = Math.max(maxItemsLength, obj.items.length);
      if ("additionalItems" in obj && obj.additionalItems === false) {
        itemsLimit = Math.min(itemsLimit, obj.items.length);
      }
    }
  }
  const len = Math.min(maxItemsLength, itemsLimit);
  const items = [...Array(len)].map(() => ({ allOf: [] }));
  for (const item of mergeItems) {
    if (!Array.isArray(item)) {
      items.forEach(({ allOf }) => allOf.push(item));
      continue;
    }
    for (let j = 0; j < len; j++) {
      const allOf = [];
      for (let k = 0; k <= j; k++) {
        additionalItemsSchema.has(k) && allOf.push(...additionalItemsSchema.get(k));
      }
      if (j < item.length) {
        items[j].allOf.push(allOf.length ? { ...item[j], allOf } : item[j]);
      } else {
        items[j].allOf.push(allOf.length ? { allOf } : true);
      }
    }
  }
  return items;
};
export const additionalItemsMergeResolver = (args, ctx) => {
  const additionalItems = [];
  const itemsSchema = [];
  for (const obj of ctx.allOfItems) {
    if ("items" in obj && !Array.isArray(obj.items)) {
      itemsSchema.push(obj.items);
    }
    if (!("additionalItems" in obj) || !("items" in obj) || !Array.isArray(obj.items)) {
      continue;
    }
    additionalItems.push(obj.additionalItems);
  }
  if (itemsSchema.length) {
    additionalItems.forEach((item) => item.allOf = itemsSchema);
  }
  return jsonSchemaMergeResolver(additionalItems, ctx);
};
