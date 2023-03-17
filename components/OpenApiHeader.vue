<template>
  <div class="right flex items-center">
    <div class="files pr-4">
      <DarkModeToggle :value="isDarkMode" @change="() => $emit('toggleDarkMode')" />
    </div>
    <div class="files pr-4">
      <CustomDropdown :placeholder="files[file]" :options="files" :value="file" :route-function="changeDoc">
        <template v-slot:default="{ option, index, isSelected }">
          {{ option }}
        </template>
      </CustomDropdown>
    </div>
    <div class="locales">
      <CustomDropdown :placeholder="locales[currentLocale]" :options="locales" :value="currentLocale" :route-function="changeLocale">
        <template v-slot:default="{ option, index, isSelected }">
          {{ option }}
        </template>
      </CustomDropdown>
    </div>
  </div>
</template>
<script>
import CustomDropdown from './lib/CustomDropdown.vue'
import DarkModeToggle from './lib/DarkModeToggle.vue'
export default {
  components: {
    CustomDropdown,
    DarkModeToggle
  },
  props: {
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
  },
  computed: {
    locales() {
      return this.$openapidoc.locales;
    },
    files() {
      return this.$openapidoc_files(this);
    }
  },
  methods: {
    changeDoc(option) {
      return '/' + this.$openapidoc.path + '/' + option + '/' + this.currentLocale + '/get/info';
    },
    changeLocale(option) {
      return '/' + this.$openapidoc.path + '/' + this.file + '/' + option + '/get/info';
    }
  },
};
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
