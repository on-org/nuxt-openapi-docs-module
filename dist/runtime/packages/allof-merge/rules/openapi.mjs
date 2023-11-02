import { jsonSchemaMergeRules } from "./jsonschema.mjs";
import * as resolvers from "../resolvers/index.mjs";
export const openApiVersion = ["3.0.x", "3.1.x"];
const customJsonSchemaMergeRules = (version) => {
  return {
    ...jsonSchemaMergeRules(version),
    "/discriminator": { $: resolvers.mergeObjects },
    "/oneOf": {
      "/*": () => customJsonSchemaMergeRules(version),
      $: resolvers.mergeArray,
      sibling: ["discriminator"]
    },
    "/anyOf": {
      "/*": () => customJsonSchemaMergeRules(version),
      $: resolvers.mergeArray,
      sibling: ["discriminator"]
    }
  };
};
export const openApiJsonSchemaMergeRules = (version) => {
  return version === "3.0.x" ? {
    ...customJsonSchemaMergeRules("draft-04"),
    "/items": () => ({
      ...customJsonSchemaMergeRules("draft-04"),
      "$": resolvers.itemsMergeResolver
    })
  } : customJsonSchemaMergeRules("draft-06");
};
const parametersMergeRules = (version) => ({
  "/*": {
    "/schema": openApiJsonSchemaMergeRules(version)
  }
});
const requestBodyMergeRules = (version) => ({
  "/content": {
    "/*": {
      "/schema": openApiJsonSchemaMergeRules(version),
      "/encoding": {
        "/headers": parametersMergeRules(version)
      }
    }
  }
});
const responsesMergeRules = (version) => ({
  "/*": {
    "/headers": parametersMergeRules(version),
    "/content": {
      "/*": {
        "/schema": openApiJsonSchemaMergeRules(version),
        "/encoding": {
          "/headers": parametersMergeRules(version)
        }
      }
    }
  }
});
export const openApiMergeRules = (version = "3.0.x") => ({
  "/paths": {
    "/*": {
      "/*": {
        "/parameters": parametersMergeRules(version),
        "/requestBody": requestBodyMergeRules(version),
        "/responses": responsesMergeRules(version)
      },
      "/parameters": parametersMergeRules(version)
    }
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
    "/headers": parametersMergeRules(version)
  }
});
