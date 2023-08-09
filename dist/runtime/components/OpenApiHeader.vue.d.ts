declare namespace _default {
    namespace components {
        export { OpenApiDarkModeToggle };
        export { OpenApiSearch };
    }
    namespace props {
        namespace currentLocale {
            const type: StringConstructor;
            const required: boolean;
        }
        namespace file {
            const type_1: StringConstructor;
            export { type_1 as type };
            const required_1: boolean;
            export { required_1 as required };
        }
        namespace path {
            const type_2: StringConstructor;
            export { type_2 as type };
            const required_2: boolean;
            export { required_2 as required };
        }
        namespace files {
            const type_3: ObjectConstructor;
            export { type_3 as type };
            const required_3: boolean;
            export { required_3 as required };
        }
        namespace locales {
            const type_4: ObjectConstructor;
            export { type_4 as type };
            const required_4: boolean;
            export { required_4 as required };
        }
    }
    const computed: {};
    namespace methods {
        function downloadJson(): void;
    }
}
export default _default;
