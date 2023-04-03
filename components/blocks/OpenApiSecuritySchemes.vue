<template>
  <div>
    <h3 class="text-lg font-bold mb-2">Security Schemes: </h3>
    <div v-for="(securityScheme, name) in securitySchemes" :key="name">
      <h3 class="text-base font-bold mb-2" :id="name"> - {{ name }}</h3>
      <OpenApiSecurityScheme :securityScheme="securityScheme" :current-locale="currentLocale" />
    </div>
  </div>
</template>

<script>
import OpenApiSecurityScheme from './OpenApiSecurityScheme.vue';
import {tr} from "../helpers";

export default {
  name: 'OpenApiSecuritySchemes',
  props: {
    securitySchemes: {
      type: Object,
      required: true,
    },
    currentLocale: {
      type: String,
      required: true,
    },
  },
  components: {
    OpenApiSecurityScheme,
  },
  methods: {
    tr
  }
};
</script>
