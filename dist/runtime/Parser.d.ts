interface PathByTagItem {
    name: string;
    path: string;
    type: string | null;
    description: string | null;
    icon: string | null;
    [key: string]: any;
}
interface PathByTag {
    name: string;
    description: string;
    isOpen: boolean;
    items: Array<PathByTagItem>;
    [key: string]: any;
}
export default class Parser {
    workDir: string;
    lastlink: string | null;
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
    refs: {
        [key: string]: any;
    };
    constructor(workDir: string);
    load(fileName: string): void;
    private getSchemaValsFromPath;
    private refLoader;
    private replaceMarkdown;
    getLocales(): {
        [key: string]: string;
    };
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
