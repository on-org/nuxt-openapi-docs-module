import { popValues } from "../utils.mjs";
export const mergeCombinarySibling = (value, combinaryKey, rule) => {
  const siblingKeys = rule.sibling || [];
  const { [combinaryKey]: combinary, ...rest } = value;
  const sibling = popValues(rest, siblingKeys);
  return Object.keys(rest).length ? {
    [combinaryKey]: combinary.map((item) => ({ allOf: [item, rest] })),
    ...sibling
  } : value;
};
