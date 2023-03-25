<template>
  <div class="schema border border-gray-300 rounded p-5 mb-10">
    <div class="schema-row flex items-center">
      <div class="schema-row-label font-bold mr-2">Type:</div>
      <div class="schema-row-value">{{ schemaRef.type }}</div>
    </div>
    <div class="schema-row flex items-center" v-if="schemaRef.format">
      <div class="schema-row-label font-bold mr-2">Format:</div>
      <div class="schema-row-value">{{ schemaRef.format }}</div>
    </div>
    <div class="schema-row flex items-center" v-if="schemaRef.enum">
      <div class="schema-row-label font-bold mr-2">Enum:</div>
      <div class="schema-row-value">
        <span v-for="(value, index) in schemaRef.enum" :key="index">{{ value }}</span>
      </div>
    </div>
    <div class="schema-row flex items-center" v-if="schemaRef.default">
      <div class="schema-row-label font-bold mr-2">Default:</div>
      <div class="schema-row-value">{{ schemaRef.default }}</div>
    </div>
    <div class="schema-row flex items-center" v-if="schemaRef.pattern">
      <div class="schema-row-label font-bold mr-2">Pattern:</div>
      <div class="schema-row-value">{{ schemaRef.pattern }}</div>
    </div>
    <div class="schema-row flex items-center" v-if="schemaRef.items">
      <div class="schema-row-label font-bold mr-2">Items:</div>
      <div class="schema-row-value">
        <OpenApiSchema :components="props.components" :current-locale="props.currentLocale" :schema="schemaRef.items" />
      </div>
    </div>
    <div class="schema-row items-center" v-if="schemaRef.properties">
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
          <tr v-for="(property, key) in schemaRef.properties" :key="key">
            <td class="border px-4 py-2">{{ key }}</td>
            <td class="border px-4 py-2">{{ property.type }}</td>
            <td class="border px-4 py-2">{{ tr(property, 'description', props.currentLocale) }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="schema-row items-center" v-if="additionalPropertiesRef.length">
      <div class="schema-row-label font-bold mr-2">Additional Properties:</div>
      <div class="schema-row-value">
        <OpenApiSchema :components="props.components" :current-locale="props.currentLocale" :schema="additionalPropertiesRef" />
      </div>
    </div>
    <div class="schema-row items-center" v-if="schemaRef.allOf">
      <div class="schema-row-label font-bold mr-2">All Of:</div>
      <div class="schema-row-value">
        <div v-for="(allOf, index) in schemaRef.allOf" :key="index">
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

const additionalPropertiesRef = computed(() => {
  if(schemaRef.additionalProperties) {
    return []
  }
  let res = [];
  for (let i in schemaRef.additionalProperties) {
    let param = schemaRef.additionalProperties[i]
    if (param.$ref) {
      const link = getSchemaValsFromPath(param.$ref)
      if(props.components[link.path] && props.components[link.path][link.name]) {
        param = props.components[link.path][link.name];
      }
    }
    param.path = i;

    res.push(param);
  }
  return res;
})

const schemaRef = computed(() => {
  if (props.schema.$ref) {
    const link = getSchemaValsFromPath(props.schema.$ref)
    if(props.components[link.path] && props.components[link.path][link.name]) {
      return props.components[link.path][link.name];
    }
  }

  return props.schema;
})
</script>

