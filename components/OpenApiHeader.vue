<template>
  <div class="right flex items-center">
    <div class="files pr-4">
      <DarkModeToggle :value="props.isDarkMode" @change="() => emit('toggleDarkMode')" />
    </div>
    <div class="files pr-4">
      <CustomDropdown :placeholder="props.files[file]" :options="props.files" :value="props.file" :route-function="changeDoc">
        <template v-slot:default="{ option, index, isSelected }">
          {{ option }}
        </template>
      </CustomDropdown>
    </div>
    <div class="locales">
      <CustomDropdown :placeholder="props.locales[currentLocale]" :options="props.locales" :value="props.currentLocale" :route-function="changeLocale">
        <template v-slot:default="{ option, index, isSelected }">
          {{ option }}
        </template>
      </CustomDropdown>
    </div>
  </div>
</template>
<script setup>
import CustomDropdown from './lib/CustomDropdown.vue'
import DarkModeToggle from './lib/DarkModeToggle.vue'

const emit = defineEmits(['toggleDarkMode'])

const props = defineProps({
  currentLocale: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
  isDarkMode: {
    type: Boolean,
    required: true,
  },
  locales: {
    type: Object,
    required: true
  },
  files: {
    type: Object,
    required: true
  },
  path: {
    type: String,
    required: true
  },
})

function changeDoc(option) {
  return '/' + props.path + '/' + option + '/' + props.currentLocale + '/get/info';
}
function changeLocale(option) {
  return '/' + props.path + '/' + props.file + '/' + option + '/get/info';
}
</script>
<style scoped>
.fixed-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background-color: white;
  opacity: 0.99;
}

.logo text {
  font-size: 16px;
  fill: #fff;
}

.right {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.files, .locales {
  padding-right: 10px;
}
.selected {
  background-color: #ccc;
}
</style>
