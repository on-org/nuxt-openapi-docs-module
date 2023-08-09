declare namespace _default {
    const name: string;
    function data(): {
        tableShow: boolean;
    };
    namespace props {
        namespace open {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
    }
    namespace watch {
        function open(val: any): void;
    }
    namespace methods {
        function onShowHide(): void;
    }
    function mounted(): void;
}
export default _default;
