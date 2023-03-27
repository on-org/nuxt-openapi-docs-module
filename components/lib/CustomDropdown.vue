<template>
  <div class="relative inline-block w-full">
    <div class="dropdown-toggle flex items-center justify-between px-4 py-2 border border-gray-300 bg-white/75 dark:bg-black dark:text-gray-300/75 rounded-md cursor-pointer" @click="isOpen = !isOpen">
      <span class="text-gray-500 dark:text-gray-300/75">
        {{ props.placeholder ?? selectedOption }}
      </span>
      <svg class="w-4 h-4 ml-2 fill-current dark:fill-white/50" viewBox="0 0 20 20">
        <path v-if="!isOpen" d="M5 8h10l-5 7z" />
        <path v-else d="M5 12h10l-5-7z" />
      </svg>
    </div>
    <div class="dropdown-menu absolute w-full top-full left-0 z-50 py-2 bg-white rounded-md shadow-lg dark:bg-black dark:text-gray-300/75" v-if="isOpen">
      <nuxt-link v-for="(option, index) in props.options" :key="index" class="dropdown-item px-4 py-2 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-gray-900" :class="{'bg-gray-300 dark:text-gray-900': index === selectedOption}" :to="props.routeFunction(index)" @click="selectOption(index)">
        <slot v-bind:option="option" v-bind:index="index">{{ option }}</slot>
      </nuxt-link>
    </div>
  </div>
</template>
<script setup>
const emit = defineEmits(['input'])

const props = defineProps({
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
})


let isOpen = ref(false);
let selectedOption = props.value;

function selectOption(option) {
  selectedOption = option;
  isOpen = false;
  emit('input', option);
}
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
