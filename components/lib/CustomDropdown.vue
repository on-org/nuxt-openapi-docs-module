<template>
  <div class="relative inline-block">
    <div class="dropdown-toggle flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md cursor-pointer" @click="isOpen = !isOpen">
      <span class="text-gray-500">{{ selectedOption || placeholder }}</span>
      <svg class="w-4 h-4 ml-2 fill-current" viewBox="0 0 20 20">
        <path v-if="!isOpen" d="M5 8h10l-5 7z" />
        <path v-else d="M5 12h10l-5-7z" />
      </svg>
    </div>
    <div class="dropdown-menu absolute top-full left-0 z-50 py-2 bg-white rounded-md shadow-lg" v-if="isOpen">
      <div v-for="(option, index) in options" :key="index" class="dropdown-item px-4 py-2 hover:bg-gray-100" @click="selectOption(option)">
        <slot v-bind:option="option" v-bind:index="index" v-bind:isSelected="option === selectedOption">{{ option }}</slot>
      </div>
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
.dropdown-toggle {
  @apply inline-flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md cursor-pointer text-gray-500;
}

.dropdown-item {
  @apply px-4 py-2 hover:bg-gray-100;
}

.dropdown-menu {
  @apply absolute top-full left-0 z-50 py-2 bg-white rounded-md shadow-lg;
}

.dropdown-menu.hidden {
  @apply hidden;
}

.dropdown-menu.visible {
  @apply block;
}

</style>
