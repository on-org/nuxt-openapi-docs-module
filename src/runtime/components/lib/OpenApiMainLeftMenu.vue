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
  padding: 16px 24px 40px;
  overflow-y: auto;
  height: 100%;
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
    background-color: #e1e1e1;
    border-radius: 10px;
    border-right: 8px solid #f6f8fa;
  }
}

.left-menu {
  transition: transform .3s ease-out;
  height: 100%;
  border-color: #e1e1e1;
}

@media screen and (max-width: 640px) {
  .left-menu {
    font-size: 24px;
    width: 100%;
  }

}
</style>
