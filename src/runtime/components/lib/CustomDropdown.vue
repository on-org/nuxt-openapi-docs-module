<template>
  <div class="relative inline-block w-full">
    <div class="dropdown-toggle flex items-center justify-between px-4 py-2 border border-gray-300 bg-white/75 dark:bg-slate dark:text-gray-300/75 rounded-md cursor-pointer" @click="isOpen = !isOpen" :class="{open: isOpen}">
      <span class="text-gray-500 dark:text-gray-300/75">
        {{ placeholder ?? selectedOption }}
      </span>
      <svg class="w-4 h-4 fill-current rotate-icon" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
      </svg>
    </div>
    <div class="dropdown-menu absolute w-full top-full left-0 z-50 py-2 bg-white rounded-md shadow-lg dark:bg-slate dark:text-gray-300/75" v-if="isOpen">
      <nuxt-link v-for="(option, index) in options" :key="index" class="dropdown-item px-4 py-2 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-gray-900" :class="{'bg-gray-300 dark:text-gray-900': index === selectedOption}" :to="routeFunction(index)" @click.native="selectOption(index)">
        <slot v-bind:option="option" v-bind:index="index">{{ option }}</slot>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    options: {
      required: true,
    },
    placeholder: {
      type: String,
      default: 'Select an option',
    },
    value: {
      type: String,
      default: '',
    },
    routeFunction: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      isOpen: false,
      selectedOption: '',
    };
  },
  created() {
    this.selectedOption = this.value;
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
      this.isOpen = false;
      this.$emit('input', option);
    },
  },
};
</script>
<style scoped>
.dropdown-menu {
  z-index: 999;
  margin-top: 4px;
}

.dropdown-item {
  display: block;
}

.selected {
  background-color: #ccc;
}
</style>
