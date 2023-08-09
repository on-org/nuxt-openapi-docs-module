declare namespace _default {
    let name: string;
    namespace components {
        export { OpenApiExpandIcon };
    }
    namespace model {
        let prop: string;
        let event: string;
    }
    namespace props {
        namespace modelValue {
            export let type: (StringConstructor | NumberConstructor)[];
            let _default: null;
            export { _default as default };
        }
        namespace options {
            let type_1: ArrayConstructor;
            export { type_1 as type };
            export let required: boolean;
        }
        namespace valueProp {
            let type_2: StringConstructor;
            export { type_2 as type };
            let _default_1: string;
            export { _default_1 as default };
        }
        namespace textProp {
            let type_3: StringConstructor;
            export { type_3 as type };
            let _default_2: string;
            export { _default_2 as default };
        }
        namespace placeholder {
            let type_4: StringConstructor;
            export { type_4 as type };
            let _default_3: null;
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
