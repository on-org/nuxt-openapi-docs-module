<template>
  <div class="schema bg-gray-100 border border-gray-300 rounded p-5 mb-10">
    <div class="schema-row flex items-center">
      <div class="schema-row-label font-bold mr-2">Type:</div>
      <div class="schema-row-value">{{ schema.type }}</div>
    </div>
    <div class="schema-row flex items-center" v-if="schema.format">
      <div class="schema-row-label font-bold mr-2">Format:</div>
      <div class="schema-row-value">{{ schema.format }}</div>
    </div>
    <div class="schema-row flex items-center" v-if="schema.enum">
      <div class="schema-row-label font-bold mr-2">Enum:</div>
      <div class="schema-row-value">
        <span v-for="(value, index) in schema.enum" :key="index">{{ value }}</span>
      </div>
    </div>
    <div class="schema-row flex items-center" v-if="schema.default">
      <div class="schema-row-label font-bold mr-2">Default:</div>
      <div class="schema-row-value">{{ schema.default }}</div>
    </div>
    <div class="schema-row flex items-center" v-if="schema.pattern">
      <div class="schema-row-label font-bold mr-2">Pattern:</div>
      <div class="schema-row-value">{{ schema.pattern }}</div>
    </div>
    <div class="schema-row flex items-center" v-if="schema.items">
      <div class="schema-row-label font-bold mr-2">Items:</div>
      <div class="schema-row-value"><open-api-schema :schema="schema.items" /></div>
    </div>
    <div class="schema-row flex items-center" v-if="schema.properties">
      <div class="schema-row-label font-bold mr-2">Properties:</div>
      <div class="schema-row-value">
        <table class="table-auto">
          <thead>
          <tr>
            <th class="px-4 py-2">Name</th>
            <th v-if="schema.properties[key].type !== 'array'" class="px-4 py-2">Type</th>
            <th class="px-4 py-2">Description</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(property, key) in schema.properties" :key="key">
            <td class="border px-4 py-2">{{ key }}</td>
            <td v-if="property.type !== 'array'" class="border px-4 py-2">{{ property.type }}</td>
            <td class="border px-4 py-2">{{ tr(property, 'description', currentLocale) }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="schema-row flex items-center" v-if="schema.additionalProperties">
      <div class="schema-row-label font-bold mr-2">Additional Properties:</div>
      <div class="schema-row-value">
        <open-api-schema :current-locale="currentLocale" :schema="schema.additionalProperties" />
      </div>
    </div>
    <div class="schema-row flex items-center" v-if="schema.allOf">
      <div class="schema-row-label font-bold mr-2">All Of:</div>
      <div class="schema-row-value">
        <div v-for="(allOf, index) in schema.allOf" :key="index">
          <open-api-schema :schema="allOf" :current-locale="currentLocale" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {tr} from "../helpers";

export default {
  name: 'OpenApiSchema',
  props: {
    schema: {
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

