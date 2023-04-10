declare namespace _default {
    namespace props {
        const title: StringConstructor;
        const description: StringConstructor;
        const isOpen: BooleanConstructor;
    }
    function data(): {
        open: boolean;
    };
    namespace methods {
        function toggleOpen(): void;
    }
    namespace watch {
        function isOpen(val: any): void;
    }
    function mounted(): void;
}
export default _default;
