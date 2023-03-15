<template>
  <div class="right flex items-center">
    <div class="files pr-4">
      <DarkModeToggle :value="isDarkMode" @change="() => $emit('toggleDarkMode', !isDarkMode)" />
    </div>
    <div class="files pr-4">
      <CustomDropdown :options="files" :value="file" @input="changeDoc">
        <template v-slot:default="{ option, index, isSelected }">
          {{ option }}
        </template>
      </CustomDropdown>
    </div>
    <div class="locales">
      <CustomDropdown :options="locales" :value="currentLocale" @input="changeLocale">
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
    locales: {
      type: Array,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
    files: {
      required: true,
    },
    isDarkMode: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    changeDoc(option) {
      this.$router.push({
        name: 'nuxt-openapi-docs-route',
        params: { locale: this.currentLocale, file: option, type: 'get', path: 'info' }, props: {locales: this.locales}
      })
    },
    changeLocale(option) {
      this.$router.push({
        name: 'nuxt-openapi-docs-route',
        params: { locale: option, file: this.file, type: 'get', path: 'info' }, props: {locales: this.locales}
      })
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
