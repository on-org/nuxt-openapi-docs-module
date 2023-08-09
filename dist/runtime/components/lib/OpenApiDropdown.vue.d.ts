declare namespace _default {
    const name: string;
    namespace components {
        export { OpenApiExpandIcon };
    }
    namespace model {
        const prop: string;
        const event: string;
    }
    namespace props {
        namespace modelValue {
            export const type: (StringConstructor | NumberConstructor)[];
            const _default: null;
            export { _default as default };
        }
        namespace options {
            const type_1: ArrayConstructor;
            export { type_1 as type };
            export const required: boolean;
        }
        namespace valueProp {
            const type_2: StringConstructor;
            export { type_2 as type };
            const _default_1: string;
            export { _default_1 as default };
        }
        namespace textProp {
            const type_3: StringConstructor;
            export { type_3 as type };
            const _default_2: string;
            export { _default_2 as default };
        }
        namespace placeholder {
            const type_4: StringConstructor;
            export { type_4 as type };
            const _default_3: null;
            export { _default_3 as default };
        }
    }
    function data(): {
        isOpen: boolean;
    };
    namespace computed {
        function classes(): {
            'oapi-dd--is-open': any;
            'oapi-dd--empty': boolean;
        };
        function selectedOption(): any;
    }
    function beforeUnmount(): void;
    namespace methods {
        function toggle(): void;
        function handleOutsideClick(e: any): void;
        function cleanupOutside(): void;
        function open(): void;
        function close(): void;
        function select(value: any): void;
    }
}
export default _default;
