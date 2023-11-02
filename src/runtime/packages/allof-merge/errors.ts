export const ErrorMessage = {
  mergeError: () => 'Could not merge values, they are probably incompatible',
  ruleNotFound: (key: any) => `Merge rule not found for key: ${key}`
} as const
