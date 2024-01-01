import { traverse } from '../traverse';
export function sampleArray(schema: any, options: any = {}, spec: any, context: any) {
  const depth = (context && context.depth || 1);

  let arrayLength = Math.min(schema.maxItems != undefined ? schema.maxItems : Infinity, schema.minItems || 1);
  // for the sake of simplicity, we're treating `contains` in a similar way to `items`
  const items = schema.prefixItems || schema.items || schema.contains;
  if (Array.isArray(items)) {
    arrayLength = Math.max(arrayLength, items.length);
  }

  let itemSchemaGetter = (itemNumber: any) => {
    if (Array.isArray(items)) {
      return items[itemNumber] || {};
    }
    return items || {};
  };

  let res: any[] = [];
  if (!items) return res;

  for (let i = 0; i < arrayLength; i++) {
    let itemSchema = itemSchemaGetter(i);
    let { value: sample } = traverse(itemSchema, options, spec, {depth: depth + 1});
    res.push(sample);
  }
  return res;
}
