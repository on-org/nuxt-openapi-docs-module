import { AnyOfNode, MergeRule, OneOfNode } from "../types"
import { popValues } from "../utils"

export const mergeCombinarySibling = (value: AnyOfNode | OneOfNode, combinaryKey: "anyOf" | "oneOf", rule: MergeRule) => {
  const siblingKeys = rule.sibling || []

  // merge non sibling keys to oneOf/anyOf
  const { [combinaryKey]: combinary, ...rest } = value
  const sibling = popValues(rest, siblingKeys)

  return Object.keys(rest).length ? { 
    [combinaryKey]: combinary.map((item: any) => ({ allOf: [item, rest] })), 
    ...sibling 
  } : value
}
