<template>
  <div class="oapi-sec-requirement">
    <ul>
      <li
        v-for="(scopes, scheme) in securityRequirement"
        :key="scheme"
        :data-scheme="scheme"
      >
        <nuxt-link
          :to="getRoute(scheme)"
          class="oapi-sec-requirement-item"
        >
          <span class="oapi-sec-requirement-item__scheme">{{ scheme }}</span>
          <ul class="oapi-sec-requirement-item__scopes">
            <li
              v-for="scope in scopes"
              :key="scope"
            >
              <code>{{ scope }}</code>
            </li>
          </ul>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
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
    getRoute(scheme) {
      return {
        name: `openapi-${this.path_doc}-${this.file}${this.$openapidoc.I18nLocaleSuffix()}`,
        params: {
          type: 'components'
        },
        hash: '#'+scheme
      };
    },
  }
};
</script>

<style scoped>
.oapi-sec-requirement {
  margin-bottom: 20px;
}
.oapi-sec-requirement > ul > li {
  margin-bottom: 8px;
}
.oapi-sec-requirement > ul > li:last-child {
  margin-bottom: 0;
}
.oapi-sec-requirement ul {
  list-style: none;
  margin: 0;
}

.oapi-sec-requirement-item {
  list-style: none;
  background: #eaf5ff;
  display: block;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
}
.oapi-sec-requirement-item__scheme {
  color: #000;
  font-family: var(--oapi-mono);
}
.oapi-sec-requirement-item__scopes {
  padding-top: 8px;
  padding-left: 16px;
}
.oapi-sec-requirement-item__scopes li {
  margin-bottom: 6px;
}
.oapi-sec-requirement-item__scopes li code {
  background: #fff;
  color: #333;
}
</style>
