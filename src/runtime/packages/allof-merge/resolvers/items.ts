import { jsonSchemaMergeResolver } from "./jsonschema"
import { MergeResolver } from "../types"
import { MapArray } from "../utils"

export const itemsMergeResolver: MergeResolver = (args, ctx) => {
  // if all "items" are not array, merge items as JsonSchema
  const arrayItems = args.reduce((r, v) => Array.isArray(v) || r, false)
  if (!arrayItems) { return jsonSchemaMergeResolver(args, ctx) }

  // if any of "items" is array, additionalItems should also be merged with "items"
  const mergeItems: any[] = []
  // limit for items length in case of "items" is array and "additionalItems" is false
  let itemsLimit = Infinity
  let maxItemsLength = 0

  // map of additionalItems schemas required for 
  const additionalItemsSchema = new MapArray<number, any>()

  for(const obj of ctx.allOfItems) {
    // Schema from additionalItems should be merged with all "items" 
    // with index greater then length of "items" in current schema
    // "additionalItems" should be ignored if no "items" in current schema or "items" in object
    if ("additionalItems" in obj && obj.additionalItems && "items" in obj && Array.isArray(obj.items)) { 
      additionalItemsSchema.add(obj.items.length, obj.additionalItems)
    } 

    if (!("items" in obj)) { continue }
    mergeItems.push(obj.items)

    // set max items length and limit
    if (Array.isArray(obj.items)) {
      maxItemsLength = Math.max(maxItemsLength, obj.items.length)
      if ("additionalItems" in obj && obj.additionalItems === false) { 
        itemsLimit = Math.min(itemsLimit, obj.items.length)
      } 
    }
  }

  const len = Math.min(maxItemsLength, itemsLimit)
  const items: any[] = [...Array(len)].map(() => ({ allOf: [] }))

  // "items" of array type should be merged with additionalItems schema if 
  for (const item of mergeItems) {
    if (!Array.isArray(item)) { 
      // merge schema from object "items" with all array "items"
      items.forEach(({ allOf }) => allOf.push(item))
      continue 
    }

    for (let j = 0; j < len; j++) {
      const allOf = []
      // copy all additionalItems schemas for merge via allOf
      for (let k = 0; k <= j; k++) {
        additionalItemsSchema.has(k) && allOf.push(...additionalItemsSchema.get(k)!)
      }

      if (j < item.length) {
        // merge existing items with additionals schemas if needed
        items[j].allOf.push(allOf.length ? { ...item[j], allOf } : item[j])
      } else {
        // add new schemas to "items" if itemsLimit > items.length
        items[j].allOf.push(allOf.length ? { allOf } : true)
      }
    }
  }
  
  return items
}

export const additionalItemsMergeResolver: MergeResolver = (args, ctx) => {
  const additionalItems: any[] = []
  const itemsSchema: any[] = []

  // "additionalItems" schema should be merged with object "items" schemas
  for (const obj of ctx.allOfItems) {
    // store object "items"
    if ("items" in obj && !Array.isArray(obj.items)) {
      itemsSchema.push(obj.items)
    }

    // ignore "additionalItems" if "items" is not array
    if (!("additionalItems" in obj) || !("items" in obj) || !Array.isArray(obj.items)) { continue }
    additionalItems.push(obj.additionalItems)
  }

  // merge "items" schemas to "additionalItems" via allOf
  if (itemsSchema.length) {
    additionalItems.forEach((item) => item.allOf = itemsSchema)
  }

  return jsonSchemaMergeResolver(additionalItems, ctx)
}
