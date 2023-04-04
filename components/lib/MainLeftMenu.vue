<template>
  <aside v-if="!isMobile || isMenuOpen"
       class="left-menu fixed bg-gray-100 text-gray-800 dark:bg-slate dark:text-gray-300/75 sm:w-60 p-2 border-r z-10 h-full transition duration-300 transform overflow-y-auto"
       :class="{ '-translate-x-full': !isMenuOpen && isMobile, 'translate-x-0': isMenuOpen && isMobile }">
    <slot />
  </aside>
</template>

<script>
export default {
  props: {
    isMenuOpen: Boolean,
    isMobile: Boolean,
  },
};
</script>

<style scoped>
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
