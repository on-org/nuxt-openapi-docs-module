import * as resolvers from "../resolvers"
import { MergeRules } from "../types"

export const jsonSchemaVersion = ["draft-04", "draft-06"] as const

export type JsonSchemaVersion = typeof jsonSchemaVersion[number]

export const jsonSchemaMergeRules = (draft: JsonSchemaVersion = "draft-06"): MergeRules => ({
  "/maximum": { $: resolvers.minValue },
  "/exclusiveMaximum": { $: resolvers.alternative },
  "/minimum": { $: resolvers.maxValue },
  "/exclusiveMinimum": { $: resolvers.alternative },
  "/maxLength": { $: resolvers.minValue },
  "/minLength": { $: resolvers.maxValue },
  "/maxItems": { $: resolvers.minValue },
  "/minItems": { $: resolvers.maxValue },
  "/uniqueItems": { $: resolvers.alternative },
  "/maxProperties": { $: resolvers.minValue },
  "/minProperties": { $: resolvers.maxValue },
  "/required": { $: resolvers.mergeStringItems },
  "/multipleOf": { $: resolvers.mergeMultipleOf },
  "/enum": { $: resolvers.mergeEnum },
  "/type": { $: resolvers.mergeTypes },
  "/allOf": {
    "/*": () => jsonSchemaMergeRules(draft),
    $: resolvers.mergeArray,
  },
  "/not": { $: resolvers.mergeNot },
  "/oneOf": {
    "/*": () => jsonSchemaMergeRules(draft),
    $: resolvers.mergeArray,
    sibling: draft === "draft-04" ?  ["defs"] : ["definitions"],
  },
  "/anyOf": {
    "/*": () => jsonSchemaMergeRules(draft),
    $: resolvers.mergeArray,
    sibling: draft === "draft-04" ?  ["defs"] : ["definitions"],
  },
  "/properties": {
    "/*": () => jsonSchemaMergeRules(draft),
    $: resolvers.propertiesMergeResolver,
  },
  "/items": () => ({
    ...jsonSchemaMergeRules(draft),
    "$": resolvers.itemsMergeResolver,
    "/*": (path) => typeof path[path.length-1] === 'number' ? jsonSchemaMergeRules(draft) : {},
  }),
  "/additionalProperties": () => ({ 
    ...jsonSchemaMergeRules(draft),
    "$": resolvers.additionalPropertiesMergeResolver 
  }),
  "/additionalItems": () => ({ 
    ...jsonSchemaMergeRules(draft), 
    "$": resolvers.additionalItemsMergeResolver 
  }),
  "/patternProperties": { 
    "/*": () => jsonSchemaMergeRules(draft),
    $: resolvers.propertiesMergeResolver,
  },
  "/pattern": { $: resolvers.mergePattern },
  "/nullable": { $: resolvers.alternative },
  "/readOnly": { $: resolvers.alternative },
  "/writeOnly": { $: resolvers.alternative },
  "/example": { $: resolvers.mergeObjects },
  "/examples": { $: resolvers.mergeObjects },
  "/deprecated": { $: resolvers.alternative },
  ...draft !== "draft-04" ? { 
    "/propertyNames": () => jsonSchemaMergeRules(draft),
    "/contains": () => jsonSchemaMergeRules(draft),
    "/dependencies": { 
      "/*": () => jsonSchemaMergeRules(draft),
      $: resolvers.dependenciesMergeResolver
    },
    "/const": { $: resolvers.equal },
    "/exclusiveMaximum": { $: resolvers.minValue },
    "/exclusiveMinimum": { $: resolvers.maxValue },
    "/definitions": {
      '/*': () => jsonSchemaMergeRules(draft),
      $: resolvers.mergeObjects
    },
  } : {},
  "/xml": { $: resolvers.mergeObjects },
  "/externalDocs": { $: resolvers.last },
  "/description": { $: resolvers.last },
  "/title": { $: resolvers.last },
  "/format": { $: resolvers.last },
  "/default": { $: resolvers.last }, 
  "/?": { $: resolvers.last },
  "/defs": {
    '/*': () => jsonSchemaMergeRules(draft),
    $: resolvers.mergeObjects
  },
  $: resolvers.jsonSchemaMergeResolver,
})
