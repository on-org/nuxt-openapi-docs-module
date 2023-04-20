<template>
  <div class="oapi-sec-scheme">
    <div class="oapi-sec-scheme__type">
      <span>{{ securityScheme.type }}</span>
    </div>
    <div
      v-if="securityScheme.type === 'http' && securityScheme.scheme"
      class="oapi-sec-scheme__param"
    >
      {{ $openapidoc.getLocaleText(currentLocale, 'Scheme') }}: <code>{{ securityScheme.scheme }}</code>
    </div>
    <div
      v-if="securityScheme.type === 'http' && securityScheme.scheme === 'bearer' && securityScheme.bearerFormat"
      class="oapi-sec-scheme__param"
    >
      {{ $openapidoc.getLocaleText(currentLocale, 'Bearer format') }}: <code>{{ securityScheme.bearerFormat }}</code>
    </div>
    <div
      v-if="securityScheme.type === 'apiKey' && securityScheme.in"
      class="oapi-sec-scheme__param"
    >
      {{ $openapidoc.getLocaleText(currentLocale, 'In') }}: <code>{{ securityScheme.in }}</code>
    </div>
    <div
      v-if="securityScheme.type === 'apiKey' && formattedIn && securityScheme.name"
      class="oapi-sec-scheme__param"
    >
      {{ formattedIn }} name: <code>{{ securityScheme.name }}</code>
    </div>

    <div
      v-if="securityScheme.type === 'oauth2' && securityScheme.flows"
      class="oapi-sec-scheme__flows"
    >
      <div
        v-for="(flowData, flowName) in securityScheme.flows"
        :key="flowName"
        class="oapi-sec-scheme__flow"
      >
        <h4>{{ flowName }}</h4>
        <div
          v-if="flowData.authorizationUrl"
          class="oapi-sec-scheme__param"
        >
          {{ $openapidoc.getLocaleText(currentLocale, 'Authorization URL') }}: <code>{{ flowData.authorizationUrl }}</code>
        </div>
        <div
          v-if="flowData.tokenUrl"
          class="oapi-sec-scheme__param"
        >
          {{ $openapidoc.getLocaleText(currentLocale, 'Token URL') }}: <code>{{ flowData.tokenUrl }}</code>
        </div>
        <div
          v-if="flowData.refreshUrl"
          class="oapi-sec-scheme__param"
        >
          {{ $openapidoc.getLocaleText(currentLocale, 'Refresh URL') }}: <code>{{ flowData.refreshUrl }}</code>
        </div>
        <div
          v-if="flowData.scopes && Object.keys(flowData.scopes).length"
          class="oapi-sec-scheme-scopes"
        >
          <span class="oapi-sec-scheme-scopes__title">{{ $openapidoc.getLocaleText(currentLocale, 'Scopes') }}:</span>
          <ul class="oapi-sec-scheme-scopes__list">
            <li
              v-for="(scopeDescription, scopeName) in flowData.scopes"
              :key="scopeName"
              class="oapi-sec-scheme-scope"
            >
              <code>{{ scopeName }}</code>
              <div
                v-if="scopeDescription"
                class="oapi-sec-scheme-scope__descr"
              >
                {{ scopeDescription }}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {tr} from "../helpers";

export default {
  props: {
    securityScheme: {
      type: Object,
      required: true,
    },
    currentLocale: {
      type: String,
      required: true,
    },
  },
  computed: {
    formattedIn() {
      if (!this.securityScheme.in) return null;
      const str = this.securityScheme.in.toString();
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  },
  methods: {
    tr
  }
};
</script>

<style lang="scss">
.oapi-sec-scheme {
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 6px;
  border: 1px solid #E2E2E2;
  &__type {
    margin-bottom: 1rem;
    span {
      display: inline-block;
      line-height: 1.2;
      padding: 8px 16px;
      border: 1px solid #E2E2E2;
      color: #999;
      border-radius: 16px;
      font-size: 0.825rem;
      font-weight: 600;
      background: rgba(#000, 0.03);
      font-family: var(--oapi-mono);
    }
  }

  &__param {
    font-size: .875rem;
    margin-bottom: .5rem;
  }
}

.oapi-sec-scheme-scopes {
  font-size: 0.875rem;
  &__title {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
  }
  &__list {
    list-style: none;
    margin: 0;
    padding: 0 0 0 1rem;
  }
  .oapi-sec-scheme-scope {
    margin: 0 0 16px;
  }
}
</style>
