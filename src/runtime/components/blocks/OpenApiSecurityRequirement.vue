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

<style scoped lang="scss">
.oapi-sec-requirement {
  margin-bottom: 20px;
  &>ul {
    &>li {
      margin-bottom: 8px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  ul {
    list-style: none;
    margin: 0;
  }
}


.oapi-sec-requirement-item {
  list-style: none;
  background: #eaf5ff;
  display: block;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  &__scheme {
    color: #000;
    font-family: var(--oapi-mono);
  }
  &__scopes {
    padding-top: 8px;
    padding-left: 16px;
    li {
      margin-bottom: 6px;
    }
    li code {
      background: #fff;
      color: #333;
    }
  }
}
</style>
