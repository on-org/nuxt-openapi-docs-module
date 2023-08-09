declare namespace _default {
    namespace props {
        const isMenuOpen: BooleanConstructor;
        const isMobile: BooleanConstructor;
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
