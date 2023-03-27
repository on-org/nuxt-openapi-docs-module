<template>
  <div class="schema border border-gray-300 rounded p-5 mb-10">
    <div class="schema-row flex items-center">
      <div class="schema-row-label font-bold mr-2">Type:</div>
      <div class="schema-row-value">{{ props.schema.type }}</div>
    </div>
    <div class="schema-row flex items-center" v-if="props.schema.format">
      <div class="schema-row-label font-bold mr-2">Format:</div>
      <div class="schema-row-value">{{ props.schema.format }}</div>
    </div>
    <div class="schema-row flex items-center" v-if="props.schema.enum">
      <div class="schema-row-label font-bold mr-2">Enum:</div>
      <div class="schema-row-value">
        <span v-for="(value, index) in props.schema.enum" :key="index">{{ value }}</span>
      </div>
    </div>
    <div class="schema-row flex items-center" v-if="props.schema.default">
      <div class="schema-row-label font-bold mr-2">Default:</div>
      <div class="schema-row-value">{{ props.schema.default }}</div>
    </div>
    <div class="schema-row flex items-center" v-if="props.schema.pattern">
      <div class="schema-row-label font-bold mr-2">Pattern:</div>
      <div class="schema-row-value">{{ props.schema.pattern }}</div>
    </div>
    <div class="schema-row flex items-center" v-if="props.schema.items">
      <div class="schema-row-label font-bold mr-2">Items:</div>
      <div class="schema-row-value">
        <OpenApiSchema :components="props.components" :current-locale="props.currentLocale" :schema="props.schema.items" />
      </div>
    </div>
    <div class="schema-row items-center" v-if="props.schema.properties">
      <div class="schema-row-label font-bold mr-2">Properties:</div>
      <div class="schema-row-value">
        <table class="table-auto">
          <thead>
          <tr>
            <th class="px-4 py-2">Name</th>
            <th class="px-4 py-2">Type</th>
            <th class="px-4 py-2">Description</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(property, key) in props.schema.properties" :key="key">
            <td class="border px-4 py-2">{{ key }}</td>
            <td class="border px-4 py-2">{{ property.type }}</td>
            <td class="border px-4 py-2">{{ tr(property, 'description', props.currentLocale) }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="schema-row items-center" v-if="props.schema.additionalProperties && props.schema.additionalProperties.length">
      <div class="schema-row-label font-bold mr-2">Additional Properties:</div>
      <div class="schema-row-value">
        <OpenApiSchema :components="props.components" :current-locale="props.currentLocale" :schema="props.schema.additionalProperties" />
      </div>
    </div>
    <div class="schema-row items-center" v-if="props.schema.allOf">
      <div class="schema-row-label font-bold mr-2">All Of:</div>
      <div class="schema-row-value">
        <div v-for="(allOf, index) in props.schema.allOf" :key="index">
          <OpenApiSchema :components="props.components" :schema="allOf" :current-locale="props.currentLocale" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {getSchemaValsFromPath, tr} from "../helpers";

const props = defineProps({
  schema: {
    type: Object,
    required: true,
  },
  currentLocale: {
    type: String,
    required: true,
  },
  components: {
    type: Object,
    default: () => ({}),
  },
})


</script>

