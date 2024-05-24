import type { FileHandler } from "./FileHandler.js";
export declare class ReferenceResolver {
    workDir: string;
    refsCache: {
        [key: string]: any;
    };
    fileHandler: FileHandler;
    constructor(workDir: string, fileHandler: FileHandler);
    resolveRef(ref: string): any;
    private loadRemoteRef;
    private loadLocalRef;
    private resolveInternalPath;
}
