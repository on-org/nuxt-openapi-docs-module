declare namespace _default {
    namespace props {
        let isMenuOpen: BooleanConstructor;
        let isMobile: BooleanConstructor;
    }
    namespace computed {
        function shouldRender(): any;
        function computedClass(): {
            'oapi-aside--mobile-invisible': any;
            'oapi-aside--mobile-visible': any;
        };
    }
}
export default _default;
