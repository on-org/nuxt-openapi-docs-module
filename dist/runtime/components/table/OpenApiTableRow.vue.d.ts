declare namespace _default {
    let name: string;
    namespace props {
        namespace hasNestedTable {
            export let type: BooleanConstructor;
            let _default: boolean;
            export { _default as default };
        }
    }
    function data(): {
        nestedTableShown: boolean;
    };
    namespace methods {
        function toggleNestedTable(): void;
    }
}
export default _default;
