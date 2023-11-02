import { getAllOfItemsMap, jsonSchemaMergeResolver } from "./jsonschema.mjs";
import { MapArray } from "../utils.mjs";
export const getPropertiesForMerge = (allOfItems) => {
  const properties = [];
  for (const schema of allOfItems) {
    if (!("properties" in schema)) {
      continue;
    }
    const ownProperties = new Set(Object.keys(schema.properties));
    const additionalPropertiesSchema = new MapArray();
    for (const prop of ownProperties.values()) {
      for (const _schema of allOfItems) {
        if (_schema == schema || _schema.properties && prop in _schema.properties) {
          continue;
        }
        if ("patternProperties" in _schema && _schema.patternProperties) {
          for (const pattern of Object.keys(_schema.patternProperties)) {
            if (new RegExp(pattern).test(prop)) {
              continue;
            }
            ownProperties.delete(prop);
          }
        } else if ("additionalProperties" in _schema) {
          if (_schema.additionalProperties === false) {
            ownProperties.delete(prop);
          } else if (typeof _schema.additionalProperties === "object") {
            additionalPropertiesSchema.add(prop, _schema.additionalProperties);
          }
        }
      }
    }
    if (!ownProperties.size) {
      continue;
    }
    const props = {};
    for (const prop of ownProperties.values()) {
      if (additionalPropertiesSchema.has(prop)) {
        props[prop] = { allOf: [schema.properties[prop], ...additionalPropertiesSchema.get(prop)] };
      } else {
        props[prop] = schema.properties[prop];
      }
    }
    properties.push(props);
  }
  return properties;
};
export const getPatternPropertiesForMerge = (allOfItems) => {
  const patternProperties = [];
  for (const schema of allOfItems) {
    if (!("patternProperties" in schema)) {
      continue;
    }
    const patterns = new Set(Object.keys(schema.patternProperties));
    for (const _schema of allOfItems) {
      if (_schema == schema) {
        continue;
      }
      if ("additionalProperties" in _schema && !_schema.additionalProperties) {
        for (const pattern of patterns.values()) {
          if (_schema.patternProperties && pattern in _schema.patternProperties) {
            continue;
          }
          patterns.delete(pattern);
        }
      }
    }
    if (!patterns.size) {
      continue;
    }
    const props = {};
    for (const prop of patterns.values()) {
      props[prop] = schema.patternProperties[prop];
    }
    patternProperties.push(props);
  }
  return patternProperties;
};
export const propertiesMergeResolver = (args) => {
  const result = {};
  const props = getAllOfItemsMap(args);
  for (const [prop, items] of Object.entries(props)) {
    if (items.includes(false)) {
      result[prop] = false;
    } else {
      result[prop] = items.length > 1 ? { allOf: items } : items[0];
    }
  }
  return result;
};
export const additionalPropertiesMergeResolver = (args, ctx) => {
  if (args.reduce((r, v) => r && v === true, true)) {
    return true;
  }
  return jsonSchemaMergeResolver(args, ctx);
};
