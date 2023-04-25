<template>
  <div class="oapi-sec-scheme">
    <div class="oapi-sec-scheme__type">
      <span>{{ securityScheme.type }}</span>
    </div>
    <div
      v-if="securityScheme.type === 'http' && securityScheme.scheme"
      class="oapi-sec-scheme__param"
    >
      {{ $openapidoc.getLocaleText('openapidoc.scheme') }}: <code>{{ securityScheme.scheme }}</code>
    </div>
    <div
      v-if="securityScheme.type === 'http' && securityScheme.scheme === 'bearer' && securityScheme.bearerFormat"
      class="oapi-sec-scheme__param"
    >
      {{ $openapidoc.getLocaleText('openapidoc.bearer_format') }}: <code>{{ securityScheme.bearerFormat }}</code>
    </div>
    <div
      v-if="securityScheme.type === 'apiKey' && securityScheme.in"
      class="oapi-sec-scheme__param"
    >
      {{ $openapidoc.getLocaleText('openapidoc.in') }}: <code>{{ securityScheme.in }}</code>
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
          {{ $openapidoc.getLocaleText('openapidoc.authorization_url') }}: <code>{{ flowData.authorizationUrl }}</code>
        </div>
        <div
          v-if="flowData.tokenUrl"
          class="oapi-sec-scheme__param"
        >
          {{ $openapidoc.getLocaleText('openapidoc.token_url') }}: <code>{{ flowData.tokenUrl }}</code>
        </div>
        <div
          v-if="flowData.refreshUrl"
          class="oapi-sec-scheme__param"
        >
          {{ $openapidoc.getLocaleText('openapidoc.refresh_url') }}: <code>{{ flowData.refreshUrl }}</code>
        </div>
        <div
          v-if="flowData.scopes && Object.keys(flowData.scopes).length"
          class="oapi-sec-scheme-scopes"
        >
          <span class="oapi-sec-scheme-scopes__title">{{ $openapidoc.getLocaleText('openapidoc.scopes') }}:</span>
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
};
</script>

<style>
.oapi-sec-scheme {
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 6px;
  border: 1px solid #E2E2E2;
}
.oapi-sec-scheme__type {
  margin-bottom: 1rem;
}
.oapi-sec-scheme__type span {
  display: inline-block;
  line-height: 1.2;
  padding: 8px 16px;
  border: 1px solid #E2E2E2;
  color: #999;
  border-radius: 16px;
  font-size: 0.825rem;
  font-weight: 600;
  background: rgba(0, 0, 0, 0.03);
  font-family: var(--oapi-mono);
}
.oapi-sec-scheme__param {
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.oapi-sec-scheme-scopes {
  font-size: 0.875rem;
}
.oapi-sec-scheme-scopes__title {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
}
.oapi-sec-scheme-scopes__list {
  list-style: none;
  margin: 0;
  padding: 0 0 0 1rem;
}
.oapi-sec-scheme-scopes .oapi-sec-scheme-scope {
  margin: 0 0 16px;
}
</style>
