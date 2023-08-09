declare namespace _default {
    namespace components {
        export { OpenApiDarkModeToggle };
        export { OpenApiSearch };
    }
    namespace props {
        namespace currentLocale {
            let type: StringConstructor;
            let required: boolean;
        }
        namespace file {
            let type_1: StringConstructor;
            export { type_1 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
        namespace path {
            let type_2: StringConstructor;
            export { type_2 as type };
            let required_2: boolean;
            export { required_2 as required };
        }
        namespace files {
            let type_3: ObjectConstructor;
            export { type_3 as type };
            let required_3: boolean;
            export { required_3 as required };
        }
        namespace locales {
            let type_4: ObjectConstructor;
            export { type_4 as type };
            let required_4: boolean;
            export { required_4 as required };
        }
    }
    let computed: {};
    namespace methods {
        function downloadJson(): void;
    }
}
export default _default;
