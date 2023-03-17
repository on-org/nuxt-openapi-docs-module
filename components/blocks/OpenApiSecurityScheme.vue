<template>
  <div class="security-scheme border border-gray-300 p-4 mb-8">
    <h4 class="security-scheme__name text-xl font-bold mb-4" style="margin-top: 0">
      {{ tr(props.securityScheme, 'name', props.currentLocale) }}
    </h4>
    <div v-if="props.securityScheme.type === 'http'" class="security-scheme__details">
      <p><strong>Type:</strong> {{ props.securityScheme.type }}</p>
      <p><strong>Scheme:</strong> {{ props.securityScheme.scheme }}</p>
      <p v-if="props.securityScheme.bearerFormat">
        <strong>Bearer format:</strong> {{ props.securityScheme.bearerFormat }}
      </p>
      <p v-if="props.securityScheme.description">
        <strong>Description:</strong> {{ tr(props.securityScheme, 'description', props.currentLocale) }}
      </p>
    </div>
    <div v-else-if="props.securityScheme.type === 'apiKey'" class="security-scheme__details">
      <p><strong>Type:</strong> {{ props.securityScheme.type }}</p>
      <p><strong>Name:</strong> {{ props.securityScheme.name }}</p>
      <p><strong>In:</strong> {{ props.securityScheme.in }}</p>
      <p v-if="props.securityScheme.description">
        <strong>Description:</strong> {{ tr(props.securityScheme, 'description', props.currentLocale) }}
      </p>
    </div>
    <div v-else-if="props.securityScheme.type === 'oauth2'" class="security-scheme__details">
      <p><strong>Type:</strong> {{ props.securityScheme.type }}</p>
      <p v-if="props.securityScheme.flows"><strong>Flows:</strong></p>
      <ul>
        <li v-for="(flow, index) in props.securityScheme.flows" :key="index">
          <p><strong>{{ index }}:</strong></p>
          <ul>
            <li v-if="flow.authorizationUrl">
              <strong>Authorization URL:</strong> {{ flow.authorizationUrl }}
            </li>
            <li v-if="flow.tokenUrl">
              <strong>Token URL:</strong> {{ flow.tokenUrl }}
            </li>
            <li v-if="flow.refreshUrl">
              <strong>Refresh URL:</strong> {{ flow.refreshUrl }}
            </li>
            <li v-if="flow.scopes">
              <strong>Scopes:</strong>
              <ul>
                <li v-for="(description, name) in flow.scopes" :key="name">
                  <strong>{{ name }}:</strong> {{ description }}
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <p v-if="props.securityScheme.description">
        <strong>Description:</strong> {{ tr(props.securityScheme, 'description', props.currentLocale) }}
      </p>
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

<script setup>
import {tr} from "../helpers";

const props = defineProps({
  securityScheme: {
    type: Object,
    required: true,
  },
  currentLocale: {
    type: String,
    required: true,
  },
})
</script>
