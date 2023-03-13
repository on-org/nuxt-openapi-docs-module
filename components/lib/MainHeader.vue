<template>
  <header class="flex items-center justify-between bg-white text-gray-800 px-4 py-3 sm:px-6 h-16 shadow-md">
    <!-- Mobile menu button -->
    <button class="menu-icon sm:hidden" @click="toggleMenu">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>

    <!-- Left part of header (logo slot) -->
    <div class="flex-shrink-0">
      <slot name="logo">
        <!-- Default logo here -->
      </slot>
    </div>
    <!-- Right part of header (button slot) -->
    <div class="flex-shrink-0">
      <slot name="button">
        <!-- Default button here -->
      </slot>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    isMenuOpen: Boolean,
  },
  methods: {
    toggleMenu() {
      this.$emit('toggleMenu');
    },
  },
};
</script>
<style scoped>
.menu-icon {
  width: 30px;
}
</style>
