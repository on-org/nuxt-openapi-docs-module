<template>
  <div class="openapi-examples">
    <h2 id="examples">
      {{ $openapidoc.getLocaleText('openapidoc.examples') }}
    </h2>
    <div
      v-for="(example, name) in examples"
      :key="name"
      class="oapi-schema-block"
    >
      <OpenApiExampleObject
        :current-locale="currentLocale"
        :example="example"
        :name="name"
        name-tag="h3"
      />
    </div>
  </div>
</template>

<script>
import OpenApiExampleObject from './OpenApiExampleObject.vue'

export default {
  components: { OpenApiExampleObject },
  props: {
    examples: {
      type: Object,
      required: true,
    },
    currentLocale: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.openapi-examples{margin-bottom:1.5rem}.openapi-examples h4{margin-bottom:.5rem;margin-top:1.5rem}
</style>
