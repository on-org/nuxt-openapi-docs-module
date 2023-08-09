declare namespace _default {
    namespace props {
        namespace title {
            export const type: StringConstructor;
            const _default: string;
            export { _default as default };
        }
        namespace description {
            const type_1: StringConstructor;
            export { type_1 as type };
            const _default_1: string;
            export { _default_1 as default };
        }
        const isOpen: BooleanConstructor;
    }
    function data(): {
        open: boolean;
    };
    namespace watch {
        function isOpen(val: any): void;
    }
    function mounted(): void;
    namespace methods {
        function toggleOpen(): void;
    }
}
export default _default;
