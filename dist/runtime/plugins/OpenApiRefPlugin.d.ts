export default class OpenApiRefPlugin {
    definitions: {
        [key: string]: any;
    };
    components: {
        [key: string]: any;
    };
    refs: {
        [key: string]: any;
    };
    i18n: any;
    doc_path: string;
    file: string;
    constructor(i18n: any);
    setDefinitions(definitions: {
        [key: string]: any;
    }): void;
    setComponents(components: {
        [key: string]: any;
    }): void;
    pefFix(ref: any, cache?: string[]): any;
    repReplace(source: any, cache?: string[], setPath?: boolean): any;
    resolveAllOf(schema: any): any;
    setDocPath(path: string): void;
    setFile(file: string): void;
    tr(data: {
        [key: string]: any;
    }, param: string, oldLocale?: string): any;
}
