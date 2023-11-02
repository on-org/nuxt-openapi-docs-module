import { JsonPath } from "json-crawl";
import { AllOfRef, NormalizeResponse } from "./types";
export declare const normalizeAllOfItems: (allOfItems: any[], jsonPath: JsonPath, source: any, allOfRefs: AllOfRef[]) => NormalizeResponse;
