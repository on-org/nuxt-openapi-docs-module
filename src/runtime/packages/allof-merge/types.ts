import { JsonPath, CrawlRules, CrawlContext } from "json-crawl"

export type JsonSchema = any
export type MergeRules = CrawlRules<MergeRule>

export interface MergeOptions {
  source?: any                    // source JsonSchema if merging only part of it
  rules?: MergeRules              // custom merge rules
  mergeRefSibling?: boolean       // merge $ref and sibling content
  mergeCombinarySibling?: boolean // merge oneOf, anyOf sibling content
  onMergeError?: (message: string, path: JsonPath, values: any[]) => void
  onRefResolveError?: (message: string, path: JsonPath, ref: string) => void
}

export interface RefNode {
  $ref: string
  [key: string]: any
}

export interface AnyOfNode {
  anyOf: any[]
  [key: string]: any
}

export interface OneOfNode {
  oneOf: any[]
  [key: string]: any
}

export type MergeError = (values: any[]) => void

export interface MergeContext {
  allOfItems: JsonSchema[]
  mergeRules: MergeRules
  mergeError: MergeError
}

export type MergeResolver = (args: any[], ctx: MergeContext) => any 
export type MergeRule = { "$": MergeResolver, sibling: string[] }

export interface AllOfRef {
  pointer: string
  data: string
  refs: string[]
}

export interface NormalizeResponse {
  allOfItems: any[]
  brokenRefs: string[]
}
