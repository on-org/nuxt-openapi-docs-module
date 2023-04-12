declare namespace _default {
    const name: string;
    namespace props {
        namespace hasNestedTable {
            export const type: BooleanConstructor;
            const _default: boolean;
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
