<template>
  <div>
    <h3 class="text-lg font-bold mb-2">Security Schemes: </h3>
    <div v-for="(securityScheme, name) in props.securitySchemes" :key="name">
      <h3>{{ name }}</h3>
      <OpenApiSecurityScheme :securityScheme="securityScheme" :current-locale="props.currentLocale" />
    </div>
  </div>
</template>

<script setup>
import OpenApiSecurityScheme from './OpenApiSecurityScheme.vue';
import {tr} from "../helpers";

const props = defineProps({
  securitySchemes: {
    type: Object,
    required: true,
  },
  currentLocale: {
    type: String,
    required: true,
  },
})
</script>
