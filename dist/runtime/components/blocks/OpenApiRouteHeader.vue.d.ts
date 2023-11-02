declare namespace _default {
    namespace props {
        namespace path {
            let type: StringConstructor;
            let required: boolean;
        }
        namespace method {
            let type_1: StringConstructor;
            export { type_1 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
        namespace tags {
            let type_2: ArrayConstructor;
            export { type_2 as type };
            function _default(): never[];
            export { _default as default };
        }
        namespace summary {
            let type_3: StringConstructor;
            export { type_3 as type };
            let _default_1: null;
            export { _default_1 as default };
        }
        namespace description {
            let type_4: StringConstructor;
            export { type_4 as type };
            let _default_2: null;
            export { _default_2 as default };
        }
        let deprecated: BooleanConstructor;
        namespace currentLocale {
            let type_5: StringConstructor;
            export { type_5 as type };
            let required_2: boolean;
            export { required_2 as required };
        }
        namespace server {
            let type_6: StringConstructor;
            export { type_6 as type };
            let required_3: boolean;
            export { required_3 as required };
            let _default_3: string;
            export { _default_3 as default };
        }
    }
    namespace computed {
        function requestUrl(): string;
        function title(): any;
    }
}
export default _default;
