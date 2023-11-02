declare namespace _default {
    let name: string;
    function data(): {
        tableShow: boolean;
    };
    namespace props {
        namespace open {
            export let type: BooleanConstructor;
            let _default: boolean;
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
