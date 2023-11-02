declare namespace _default {
    let name: string;
    namespace props {
        export let lite: BooleanConstructor;
        export namespace name_1 {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        export { name_1 as name };
        export namespace nameTag {
            let type_1: StringConstructor;
            export { type_1 as type };
            let _default_1: string;
            export { _default_1 as default };
        }
        export namespace example {
            let type_2: ObjectConstructor;
            export { type_2 as type };
            export let required: boolean;
        }
        export namespace currentLocale {
            let type_3: StringConstructor;
            export { type_3 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
    }
    function data(): {};
    namespace computed {
        function valueFormatted(): string | null;
    }
}
export default _default;
