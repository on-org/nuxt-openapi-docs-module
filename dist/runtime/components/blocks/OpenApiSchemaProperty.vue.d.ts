declare namespace _default {
    let name: string;
    namespace components {
        export { OpenApiSchemaSubObject };
        export { OpenApiExpandIcon };
    }
    namespace props {
        export namespace name_1 {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        export { name_1 as name };
        export namespace required {
            let type_1: BooleanConstructor;
            export { type_1 as type };
        }
        export namespace schema {
            let type_2: ObjectConstructor;
            export { type_2 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
        export namespace noLines {
            let type_3: BooleanConstructor;
            export { type_3 as type };
        }
        export namespace hideTitleDescription {
            let type_4: BooleanConstructor;
            export { type_4 as type };
        }
        export namespace open {
            let type_5: BooleanConstructor;
            export { type_5 as type };
        }
        export namespace currentLocale {
            let type_6: StringConstructor;
            export { type_6 as type };
            let required_2: boolean;
            export { required_2 as required };
        }
    }
    function data(): {
        isOpen: boolean;
    };
    namespace computed {
        function resolvedSchema(): any;
        function isPlainArray(): any;
        function isObject(): boolean;
        function isArray(): boolean;
        function isOneOf(): boolean;
        function isAnyOf(): boolean;
        function hasProperties(): boolean;
        function exampleString(): any;
        function genExample(): string | null;
        function computedOneAnyOf(): any;
        function computedType(): any;
        function flags(): string[];
        function requiredProps(): any;
        function classes(): {
            'oapi-prop--is-object': () => boolean;
            'oapi-prop--no-lines': any;
            'oapi-prop--no-name': boolean;
            'oapi-prop--deprecated': boolean;
        };
    }
    function created(): void;
    namespace methods {
        function getType(schema: any): any;
        function toggle(): void;
    }
}
export default _default;
