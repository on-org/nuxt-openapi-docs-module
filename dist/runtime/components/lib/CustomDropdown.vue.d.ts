declare namespace _default {
    namespace props {
        namespace options {
            const required: boolean;
        }
        namespace placeholder {
            export const type: StringConstructor;
            const _default: string;
            export { _default as default };
        }
        namespace value {
            const type_1: StringConstructor;
            export { type_1 as type };
            const _default_1: string;
            export { _default_1 as default };
        }
        namespace routeFunction {
            const type_2: FunctionConstructor;
            export { type_2 as type };
            function _default_2(): void;
            export { _default_2 as default };
        }
    }
    function data(): {
        isOpen: boolean;
        selectedOption: string;
    };
    function created(): void;
    namespace methods {
        function selectOption(option: any): void;
    }
}
export default _default;
