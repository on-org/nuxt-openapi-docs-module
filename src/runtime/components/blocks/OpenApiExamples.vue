<template>
  <div class="openapi-examples">
    <h2 id="examples">
      {{ $openapidoc.getLocaleText(currentLocale, 'Examples') }}
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
import {tr} from "../helpers";
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
  methods: {
    tr
  }
};
</script>

<style scoped>
.openapi-examples {
  margin-bottom: 1.5rem;
}

.openapi-examples h4 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}
</style>
