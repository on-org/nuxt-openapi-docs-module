import { JsonSchemaVersion, jsonSchemaMergeRules } from "./jsonschema"
import * as resolvers from "../resolvers"
import { MergeRules } from "../types"

export const openApiVersion = ["3.0.x", "3.1.x"] as const

export type OpenApiVersion = typeof openApiVersion[number]

const customJsonSchemaMergeRules = (version: JsonSchemaVersion) => {
  return {
    ...jsonSchemaMergeRules(version),
    "/discriminator": { $: resolvers.mergeObjects },
    "/oneOf": {
      "/*": () => customJsonSchemaMergeRules(version),
      $: resolvers.mergeArray,
      sibling: ["discriminator"],
    },
    "/anyOf": {
      "/*": () => customJsonSchemaMergeRules(version),
      $: resolvers.mergeArray,
      sibling: ["discriminator"],
    }
  }
} 

export const openApiJsonSchemaMergeRules = (version: OpenApiVersion) => {
  return version === "3.0.x"
    ? { 
      ...customJsonSchemaMergeRules("draft-04"),
      "/items": () => ({
        ...customJsonSchemaMergeRules("draft-04"),
        "$": resolvers.itemsMergeResolver,
      }),
    }
    : customJsonSchemaMergeRules("draft-06")
}

const parametersMergeRules = (version: OpenApiVersion): MergeRules => ({
  "/*": {
    "/schema": openApiJsonSchemaMergeRules(version)
  }
})

const requestBodyMergeRules = (version: OpenApiVersion): MergeRules => ({
  "/content": {
    "/*": {
      "/schema": openApiJsonSchemaMergeRules(version),
      "/encoding": {
        "/headers": parametersMergeRules(version)
      }
    }
  }
})

const responsesMergeRules = (version: OpenApiVersion): MergeRules => ({
  "/*": {
    "/headers": parametersMergeRules(version),
    "/content": {
      "/*": {
        "/schema": openApiJsonSchemaMergeRules(version),
        "/encoding": {
          "/headers": parametersMergeRules(version)
        }
      }
    },
  }
})

export const openApiMergeRules = (version: OpenApiVersion = "3.0.x"): MergeRules => ({
  "/paths": {
    "/*": {
      "/*": {
        "/parameters": parametersMergeRules(version),
        "/requestBody": requestBodyMergeRules(version),
        "/responses": responsesMergeRules(version),
      },
      "/parameters": parametersMergeRules(version),
    },
  },
  "/components": {
    "/schemas": {
      "/*": openApiJsonSchemaMergeRules(version)
    },
    "/responses": responsesMergeRules(version),
    "/parameters": parametersMergeRules(version),
    "/requestBodies": {
      "/*": requestBodyMergeRules(version)
    },
    "/headers": parametersMergeRules(version),
  }
})
