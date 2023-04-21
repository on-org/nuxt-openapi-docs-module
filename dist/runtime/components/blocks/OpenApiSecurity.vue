<template>
  <div class="oapi-route-sec">
    <h2>
      {{ $openapidoc.getLocaleText('openapidoc.security') }}
    </h2>
    <ul class="oapi-route-sec__list">
      <li
        v-for="(securityRequirement, index) in security"
        :key="index"
      >
        <OpenApiSecurityRequirement
          :security-requirement="securityRequirement"
          :current-locale="currentLocale"
          :path_doc="path_doc"
          :file="file"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import {tr} from "../helpers";
import OpenApiSecurityRequirement from './OpenApiSecurityRequirement.vue'

export default {
  name: 'OpenApiSecurity',
  components: { OpenApiSecurityRequirement },
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
  methods: {
    tr
  }
};
</script>
<style>
.oapi-route-sec__list, .oapi-route-sec__list ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
