<template>
  <div>
    <h3 class="text-lg font-bold mb-2">Request Bodies: </h3>
    <div v-for="(requestBody, name) in props.requestBodies" :key="name" class="mt-4">
      <h3 class="text-lg font-medium">{{ name }}</h3>
      <OpenApiRequestBody :requestBody="requestBody" :current-locale="props.currentLocale" />
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
<script setup>
import OpenApiRequestBody from './OpenApiRequestBody.vue';

const props = defineProps({
  requestBodies: {
    type: Object,
    required: true,
  },
  currentLocale: {
    type: String,
    required: true,
  },
})
</script>
