<template>
  <li class="sub-menu">
    <div :class="{ 'selected': open }" class="block rounded-md">
      <div class="menu-title flex justify-between items-center px-2 hover:bg-gray-200 dark:hover:bg-gray-900" @click.stop.prevent="toggleOpen">
        <svg class="w-4 h-4 mr-2 fill-current" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path>
        </svg>
        <span class="font-bold" style="flex: auto;">{{ title }}</span>
        <span class="menu-item__icon" :class="{ 'open': open }">
          <svg class="w-4 h-4 mr-2 fill-current rotate-icon" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
          </svg>
        </span>
      </div>
      <ul v-if="open" v-cloak class="pl-2">
        <li class="text-xs" v-if="description && description !== ''" v-html="description"></li>
        <slot/>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    isOpen: Boolean,
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggleOpen() {
      this.open = this.open = !this.open;
      this.$emit('change', this.open)
    },
  },
  watch: {
    isOpen(val) {
      this.open = val
    }
  },
  mounted() {
    this.open = this.isOpen
  }
};
</script>

<style scoped>

</style>
