import { SyncCloneHook } from "json-crawl";
import { MergeOptions } from "./types";
export declare const merge: (value: any, options?: MergeOptions) => any;
export declare const allOfResolverHook: (options?: MergeOptions) => SyncCloneHook<{}>;
