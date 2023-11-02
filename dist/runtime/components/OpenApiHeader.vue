<template>
  <div class="oapi-header-actions">
    <div
      v-if="false"
      class="files pr-4"
    >
      <OpenApiDarkModeToggle/>
    </div>
    <button
      type="button"
      class="oapi-header-btn oapi-header-actions__json"
      aria-haspopup="true"
      @click="downloadJson"
    >
      Json
      <svg
        width="1em"
        height="1em"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      ><path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" /></svg>
    </button>
    <OpenApiSearch
      :current-locale="currentLocale"
      :file="file"
      :path="path"
    />
  </div>
</template>
<script>
import OpenApiDarkModeToggle from './lib/OpenApiDarkModeToggle.vue'
import OpenApiSearch from './lib/OpenApiSearch.vue'

export default {
  components: { OpenApiDarkModeToggle, OpenApiSearch },
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
  },
  computed: {

  },
  methods: {
    downloadJson() {
      this.$openapidocBus.$emit('downloadJsonDoc');
    }
  },
};
</script>
<style>
.oapi-header-actions {
  display: flex;
  align-items: center;
}
.oapi-header-actions__json {
  margin-right: 16px !important;
}
.oapi-header-actions__json svg {
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 8px;
  fill: #666;
}
</style>
