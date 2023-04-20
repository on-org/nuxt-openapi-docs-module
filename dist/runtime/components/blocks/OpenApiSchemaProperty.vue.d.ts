declare namespace _default {
    const name: string;
    namespace components {
        export { OpenApiSchemaSubObject };
        export { OpenApiExpandIcon };
    }
    namespace props {
        export namespace name_1 {
            export const type: StringConstructor;
            const _default: string;
            export { _default as default };
        }
        export { name_1 as name };
        export namespace required {
            const type_1: BooleanConstructor;
            export { type_1 as type };
        }
        export namespace schema {
            const type_2: ObjectConstructor;
            export { type_2 as type };
            const required_1: boolean;
            export { required_1 as required };
        }
        export namespace noLines {
            const type_3: BooleanConstructor;
            export { type_3 as type };
        }
        export namespace hideTitleDescription {
            const type_4: BooleanConstructor;
            export { type_4 as type };
        }
        export namespace open {
            const type_5: BooleanConstructor;
            export { type_5 as type };
        }
        export namespace currentLocale {
            const type_6: StringConstructor;
            export { type_6 as type };
            const required_2: boolean;
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
        export { tr };
        export function getType(schema: any): any;
        export function toggle(): void;
    }
}
export default _default;
import { tr } from "../helpers";
