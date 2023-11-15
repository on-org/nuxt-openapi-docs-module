export default class OpenApiRefPlugin {
    definitions: {
        [key: string]: any;
    };
    components: {
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
    setDocPath(path: string): void;
    setFile(file: string): void;
    tr(data: {
        [key: string]: any;
    }, param: string, oldLocale?: string): any;
}
