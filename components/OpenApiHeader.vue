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
    <div class="yaml">
      <button
        @click="downloadYaml"
        type="button"
        class="inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-black dark:text-gray-300/75"
        aria-haspopup="true"
      >
        Yaml
      </button>
    </div>
    <div class="search">
      <Search :doc="doc" :current-locale="currentLocale" :file="file" :path="path" />
    </div>
  </div>
</template>
<script>
import Search from './lib/Search.vue'
import CustomDropdown from './lib/CustomDropdown.vue'
import DarkModeToggle from './lib/DarkModeToggle.vue'
export default {
  components: {
    CustomDropdown,
    DarkModeToggle,
    Search
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
    path: {
      type: String,
      required: true,
    },
    files: {
      type: Object,
      required: true,
    },
    doc: {
      type: Object,
      required: true
    },
    isDarkMode: {
      type: Boolean,
      required: true,
    },
    locales: {
      type: Object,
      required: true,
    },
  },
  computed: {

  },
  methods: {
    changeDoc(option) {
      return '/' + this.path + '/' + option + '/' + this.currentLocale + '/get/info';
    },
    changeLocale(option) {
      return '/' + this.path + '/' + this.file + '/' + option + '/get/info';
    },
    downloadYaml() {
      const json = JSON.stringify(this.doc);
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = this.file + '.yaml';
      document.body.appendChild(link);

      link.click();

      // Очистить ссылку и объект URL после скачивания файла
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
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

.files, .locales, .yaml {
  padding-right: 10px;
}
.selected {
  background-color: #ccc;
}
</style>
