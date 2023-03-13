<template>
  <div class="right flex items-center">
    <div class="files pr-4">
      <CustomDropdown :options="files" v-model="file">
        <template v-slot:default="{ option, index, isSelected }">
          <nuxt-link :class="{ 'selected': isSelected }" :to="{ name: 'nuxt-openapi-docs-route', params: { locale: currentLocale, file: file, type: 'get', path: 'info' }, props: {locales: locales}}" class="font-medium hover:text-gray-900">
            {{ option }}
          </nuxt-link>
        </template>
      </CustomDropdown>
    </div>
    <div class="locales">
      <CustomDropdown :options="locales" v-model="currentLocale">
        <template v-slot:default="{ option, index, isSelected }">
          <nuxt-link :class="{ 'selected': isSelected }" :to="{ name: 'nuxt-openapi-docs-route', params: { locale: option, file: file, type: 'get', path: 'info' }, props: {locales: locales}}" class="font-medium hover:text-gray-900">
            {{ option }}
          </nuxt-link>
        </template>
      </CustomDropdown>
    </div>
  </div>
</template>
<script>
import CustomDropdown from './lib/CustomDropdown.vue'
export default {
  components: {
    CustomDropdown
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
  },
  methods: {

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
