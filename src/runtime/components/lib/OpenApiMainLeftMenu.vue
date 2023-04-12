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
  align-self: stretch;
  width: var(--aside-width);
  border-right: 1px solid #f4f4f7;
  padding: 16px 24px 40px;
  overflow-y: auto;
  height: 100%;
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ebebeb;
    border-radius: 10px;
    border-right: 4px solid #fff;
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
