<template>
  <div class="security-scheme border border-gray-300 p-4 mb-8">
    <h4 class="security-scheme__name text-xl font-bold mb-4" style="margin-top: 0">
      {{ tr(securityScheme, 'name', currentLocale) }}
    </h4>
    <div v-if="securityScheme.type === 'http'" class="security-scheme__details">
      <p><strong>Type:</strong> {{ securityScheme.type }}</p>
      <p><strong>Scheme:</strong> {{ securityScheme.scheme }}</p>
      <p v-if="securityScheme.bearerFormat">
        <strong>Bearer format:</strong> {{ securityScheme.bearerFormat }}
      </p>
      <p v-if="securityScheme.description">
        <strong>Description:</strong> {{ tr(securityScheme, 'description', currentLocale) }}
      </p>
    </div>
    <div v-else-if="securityScheme.type === 'apiKey'" class="security-scheme__details">
      <p><strong>Type:</strong> {{ securityScheme.type }}</p>
      <p><strong>Name:</strong> {{ securityScheme.name }}</p>
      <p><strong>In:</strong> {{ securityScheme.in }}</p>
      <p v-if="securityScheme.description">
        <strong>Description:</strong> {{ tr(securityScheme, 'description', currentLocale) }}
      </p>
    </div>
    <div v-else-if="securityScheme.type === 'oauth2'" class="security-scheme__details">
      <p><strong>Type:</strong> {{ securityScheme.type }}</p>
      <p v-if="securityScheme.flows"><strong>Flows:</strong></p>
      <ul>
        <li v-for="(flow, index) in securityScheme.flows" :key="index">
          <p><strong>{{ index }}:</strong></p>
          <ul>
            <li v-if="flow.authorizationUrl">
              <strong>{{ $openapidoc.getLocaleText(currentLocale, 'Authorization URL') }}:</strong> {{ flow.authorizationUrl }}
            </li>
            <li v-if="flow.tokenUrl">
              <strong>{{ $openapidoc.getLocaleText(currentLocale, 'Token URL') }}:</strong> {{ flow.tokenUrl }}
            </li>
            <li v-if="flow.refreshUrl">
              <strong>{{ $openapidoc.getLocaleText(currentLocale, 'Refresh URL') }}:</strong> {{ flow.refreshUrl }}
            </li>
            <li v-if="flow.scopes">
              <strong>{{ $openapidoc.getLocaleText(currentLocale, 'Scopes') }}:</strong>
              <ul>
                <li v-for="(description, name) in flow.scopes" :key="name">
                  <strong>{{ name }}:</strong> {{ description }}
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <div v-if="securityScheme.description">
        <strong>{{ $openapidoc.getLocaleText(currentLocale, 'Description') }}:</strong>
        <div v-html="tr(securityScheme, 'description', currentLocale)"></div>
      </div>
    </div>
  </div>
</template>

<style>
.security-scheme__name {
  margin-top: 0;
  margin-bottom: 10px;
}

.security-scheme {
  padding: 1rem;
  margin-bottom: 2rem;
}

.security-scheme__details ul {
  list-style: disc;
  margin: 6px 10px;
  padding: 1px;
}
</style>

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
  methods: {
    tr
  }
};
</script>
