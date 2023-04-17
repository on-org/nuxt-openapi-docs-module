<template>
  <div class="openapi-security-requirement">
    <ul>
      <li v-for="(scopes, scheme) in securityRequirement"  :key="scheme">
        <nuxt-link :to="getRoute(scheme)" class="openapi-security-requirement__item bg-blue-100 text-blue-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300" style="display: block;">
          <span class="font-bold mr-2">{{ scheme }}</span>
          <ul class="list-disc ml-8">
            <li v-for="scope in scopes" :key="scope">
              <span class="bg-green-50/50 text-black font-medium mr-2 px-2.5 py-0.5 rounded">{{ scope }}</span>
            </li>
          </ul>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.openapi-security-requirement {
  margin-bottom: 20px;
}


.openapi-security-requirement__item {
  list-style: none;
}

.openapi-security-requirement__scope-badge {
  display: inline-block;
  background-color: #ccc;
  padding: 2px 5px;
  margin-right: 5px;
}

.openapi-security-requirement__scope-badge:last-child {
  margin-right: 0;
}
</style>

<script>
import {tr} from "../helpers";

export default {
  name: 'OpenApiSecurityRequirement',
  props: {
    securityRequirement: {
      type: Object,
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
    tr,
    getRoute(scheme) {
      return {name: `openapi-${this.path_doc}/${this.file}/${this.currentLocale}-components`, hash: '#'+scheme, meta: {locale: 'en', path: 'components', file: this.file, type: 'get'}};
    }
  }
};
</script>
