import { shallowReactive, shallowRef, useState } from "#imports";
export const useOpenApiDataState = () => {
  const data = useState("oa-data", () => shallowRef(shallowReactive({})));
  return {
    data
  };
};
