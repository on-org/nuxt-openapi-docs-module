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
export default class Parser {
    workDir: string;
    fileName: string;
    spec: {
        [key: string]: any;
    };
    components: {
        [key: string]: any;
    };
    definitions: {
        [key: string]: any;
    };
    locales: {
        [key: string]: string;
    };
    localesReload: boolean;
    refs: {
        [key: string]: any;
    };
    constructor(workDir: string);
    load(fileName: string): void;
    sanitizeText(text: string): string;
    private getSchemaValsFromPath;
    private refFileLoader;
    private refReplace;
    private replaceMarkdown;
    getLocales(): {
        [key: string]: string;
    };
    getLocalesReload(): boolean;
    getPaths(): {
        [key: string]: PathByTag;
    };
    getDoc(): {
        [key: string]: any;
    };
    getFilename(): string;
    private parseYamlFile;
    private processCustomPaths;
    private processOpenApiPaths;
}
export {};
