import { FileHandler } from './FileHandler.js';
import { MarkdownRenderer } from './MarkdownRenderer.js';
import { ReferenceResolver } from './ReferenceResolver.js';
interface PathByTagItem {
    name: string;
    path: string;
    type: string | null;
    description: string | null;
    deprecated?: boolean | null;
    icon: string | null;
    [key: string]: any;
}
export interface PathByTag {
    name: string;
    description: string;
    isOpen: boolean;
    items: Array<PathByTagItem>;
    [key: string]: any;
}
export default class OpenApiProcessor {
    workDir: string;
    fileName: string;
    spec: {
        [key: string]: any;
    };
    markdownRenderer: MarkdownRenderer;
    referenceResolver: ReferenceResolver;
    fileHandler: FileHandler;
    locales: {
        [key: string]: string;
    };
    localesReload: boolean;
    constructor(workDir: string);
    load(fileName: string): void;
    private processLocales;
    private processTags;
    private processSpec;
    getFilename(): string;
    getDoc(): {
        [key: string]: any;
    };
    getLocalesReload(): boolean;
    getLocales(): {
        [key: string]: string;
    };
    getServers(): any[];
    getPaths(): {
        [key: string]: PathByTag;
    };
    private processCustomPaths;
    private processOpenApiPaths;
    private replaceMarkdown;
}
export {};
