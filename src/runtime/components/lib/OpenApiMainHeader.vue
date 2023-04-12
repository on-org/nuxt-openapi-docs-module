<template>
  <header class="oapi-header">
    <!-- Mobile menu button -->
    <button class="menu-icon sm:hidden" @click="toggleMenu">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>

    <!-- Left part of header (logo slot) -->
    <div class="oapi-header__logo">
      <slot name="logo">
        <!-- Default logo here -->
      </slot>
    </div>
    <!-- Right part of header (button slot) -->
    <div class="oapi-header__content">
      <slot name="button">
        <!-- Default button here -->
      </slot>
    </div>
  </header>
</template>

<script>

export default {
  props: {
    isMenuOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggleMenu() {
      this.$emit('toggleMenu');
    },
  },
};
</script>
<style scoped lang="scss">

.oapi-header {
  background: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02);
  padding: 12px 32px;
  z-index: 10;
  &__logo {
    flex: 0 0 auto;
  }
  &__content {
    margin-left: auto;
  }
}


.menu-icon {
  width: 30px;
}
</style>
