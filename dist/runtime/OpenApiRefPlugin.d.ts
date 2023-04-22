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
    setDefinitions(definitions: {
        [key: string]: any;
    }): void;
    setComponents(components: {
        [key: string]: any;
    }): void;
    pefFix(ref: any, cache?: string[]): any;
    repReplace(source: any, cache?: string[], setPath?: boolean): any;
    resolveAllOf(schema: any): any;
}
