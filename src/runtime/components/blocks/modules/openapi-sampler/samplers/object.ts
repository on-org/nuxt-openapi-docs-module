import { traverse } from '../traverse';
export function sampleObject(schema: any, options: any = {}, spec: any, context: any) {
  let res = {};
  const depth = (context && context.depth || 1);

  if (schema && typeof schema.properties === 'object') {
    let requiredKeys = (Array.isArray(schema.required) ? schema.required : []);
    let requiredKeyDict = requiredKeys.reduce((dict: any, key: any) => {
      dict[key] = true;
      return dict;
    }, {});

    Object.keys(schema.properties).forEach(propertyName => {
      // skip before traverse that could be costly
      if (options.skipNonRequired && !requiredKeyDict.hasOwnProperty(propertyName)) {
        return;
      }

      const sample = traverse(schema.properties[propertyName], options, spec, { propertyName, depth: depth + 1 });
      if (options.skipReadOnly && sample.readOnly) {
        return;
      }

      if (options.skipWriteOnly && sample.writeOnly) {
        return;
      }
      // @ts-ignore
      res[propertyName] = sample.value;
    });
  }

  if (schema && typeof schema.additionalProperties === 'object') {
    const propertyName = schema.additionalProperties['x-additionalPropertiesName'] || 'property';
    // @ts-ignore
    res[`${String(propertyName)}1`] = traverse(schema.additionalProperties, options, spec, {depth: depth + 1 }).value;
    // @ts-ignore
    res[`${String(propertyName)}2`] = traverse(schema.additionalProperties, options, spec, {depth: depth + 1 }).value;
  }
  return res;
}
