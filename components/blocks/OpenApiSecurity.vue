<template>
  <div class="py-4">
    <h3 class="text-xl font-semibold">{{ $openapidoc.getLocaleText(currentLocale, 'Security') }}:</h3>
    <ul class="list-disc ml-6">
      <li v-for="(securityRequirement, index) in security" :key="index" class="py-2">
        <OpenApiSecurityRequirement :securityRequirement="securityRequirement" :current-locale="currentLocale"  :path_doc="path_doc" :file="file" />
      </li>
    </ul>
  </div>
</template>

<script>
import OpenApiSecurityRequirement from './OpenApiSecurityRequirement.vue';
import {tr} from "../helpers";

export default {
  name: 'OpenApiSecurity',
  props: {
    security: {
      type: Array,
      required: true,
    },
    currentLocale: {
      type: String,
      required: true,
    },
    path_doc: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
  },
  components: {
    OpenApiSecurityRequirement,
  },
  methods: {
    tr
  }
};
</script>
<style scoped>
li {
  list-style: none;
}
</style>
