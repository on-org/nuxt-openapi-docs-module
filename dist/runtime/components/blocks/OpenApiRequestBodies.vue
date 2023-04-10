<template>
  <div>
    <h3 class="text-lg font-bold mb-2">{{ $openapidoc.getLocaleText(currentLocale, 'Request Bodies') }}: </h3>
    <div v-for="(requestBody, name) in requestBodies" :key="name" class="mt-4">
      <h3 class="text-lg font-medium">{{ name }}</h3>
      <OpenApiRequestBody :requestBody="requestBody" :current-locale="currentLocale" />
    </div>
  </div>
</template>
<style>
.mt-4 {
  margin-top: 1rem;
}
.text-lg {
  font-size: 1.125rem;
}
.font-medium {
  font-weight: 500;
}
</style>
<script>
import {tr} from "../helpers";

export default {
  name: 'OpenApiRequestBodies',
  props: {
    requestBodies: {
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
