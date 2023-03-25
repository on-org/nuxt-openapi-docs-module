<template>
  <div class="schema border border-gray-300 rounded p-5 mb-10">
    <div class="schema-row items-center" v-if="schemaRef.title">
      <div class="schema-row-label font-bold mr-2">Title:</div>
      <div class="schema-row-value">{{ schemaRef.title }}</div>
    </div>
    <div class="schema-row items-center" v-if="schemaRef.description">
      <div class="schema-row-label font-bold mr-2">Description:</div>
      <div class="schema-row-value">{{ schemaRef.description }}</div>
    </div>
    <div class="schema-row items-center" v-if="schemaRef.type">
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
        <open-api-schema :components="components" :current-locale="currentLocale" :schema="schemaRef.items" />
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
            <td class="border px-4 py-2">{{ tr(property, 'description', currentLocale) }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="schema-row items-center" v-if="additionalPropertiesRef.length">
      <div class="schema-row-label font-bold mr-2">Additional Properties:</div>
      <div class="schema-row-value">
        <open-api-schema :components="components" :current-locale="currentLocale" :schema="additionalPropertiesRef" />
      </div>
    </div>
    <div class="schema-row items-center" v-if="schemaRef.allOf">
      <div class="schema-row-label font-bold mr-2">All Of:</div>
      <div class="schema-row-value">
        <div v-for="(allOf, index) in schemaRef.allOf" :key="index">
          <open-api-schema :components="components" :schema="allOf" :current-locale="currentLocale" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getSchemaValsFromPath, tr} from "../helpers";

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
    components: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    schemaRef() {
      if (this.schema.$ref) {
        const link = getSchemaValsFromPath(this.schema.$ref)
        if(this.components[link.path] && this.components[link.path][link.name]) {
          return this.components[link.path][link.name];
        }
      }

      return this.schema;
    },
    additionalPropertiesRef() {
      if(this.schema.additionalProperties) {
        return []
      }
      let res = [];
      for (let i in this.schemaRef.additionalProperties) {
        let param = this.schemaRef.additionalProperties[i]
        if (param.$ref) {
          const link = getSchemaValsFromPath(param.$ref)
          if(this.components[link.path] && this.components[link.path][link.name]) {
            param = this.components[link.path][link.name];
          }
        }
        param.path = i;

        res.push(param);
      }
      return res;
    }
  },
  methods: {
    tr,
  },
};
</script>

