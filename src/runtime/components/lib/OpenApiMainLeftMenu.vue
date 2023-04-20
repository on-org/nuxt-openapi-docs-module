<template>
  <aside
    v-if="shouldRender"
    class="oapi-aside"
    :class="computedClass"
  >
    <slot />
  </aside>
</template>

<script>
export default {
  props: {
    isMenuOpen: Boolean,
    isMobile: Boolean,
  },
  computed: {
    shouldRender() {
      return !this.isMobile || this.isMenuOpen;
    },
    computedClass() {
      return {
        'oapi-aside--mobile-invisible': this.isMobile && !this.isMenuOpen,
        'oapi-aside--mobile-visible': this.isMobile && this.isMenuOpen,
      }
    }
  }
};
</script>

<style scoped lang="scss">
.oapi-aside {
  flex: 0 0 auto;
  align-self: stretch;
  width: var(--aside-width);
  background: #f6f8fa;
  padding: 16px 12px 40px;
  overflow-y: auto;
  z-index: 15;
  border-right: 1px solid #e2e2e2;

  &--mobile-visible {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 1px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 9999px;
    background-color: #e1e1e1;
  }
}
</style>
