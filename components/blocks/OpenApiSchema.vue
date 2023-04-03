<template>
  <div class="schema border border-gray-300 rounded p-2" v-if="schema">
    <div class="schema-row items-center" v-if="schema.title">
      <span class="schema-row-label font-bold mr-2">Title:</span>
      <span class="schema-row-value" v-html="tr(schema, 'title', currentLocale)"></span>
    </div>
    <div class="schema-row items-center" v-if="schema.description">
      <span class="schema-row-label font-bold mr-2">Description:</span>
      <span class="schema-row-value" v-html="tr(schema, 'description', currentLocale)"></span>
    </div>
    <div class="schema-row items-center" v-if="schema.type">
      <span class="schema-row-label font-bold mr-2">Type:</span>
      <span class="schema-row-value">{{ schema.type }}</span>
    </div>
    <div class="schema-row items-center" v-if="schema.format">
      <span class="schema-row-label font-bold mr-2">Format:</span>
      <span class="schema-row-value">{{ schema.format }}</span>
    </div>
    <div class="schema-row items-center" v-if="schema.enum">
      <div class="schema-row-label font-bold mr-2">Enum:</div>
      <div class="schema-row-value p-2">
        <ul class="list-disc">
          <li v-for="(value, index) in schema.enum" :key="index">{{ value }}</li>
        </ul>
      </div>
    </div>
    <div class="schema-row items-center" v-if="schema.default">
      <span class="schema-row-label font-bold mr-2">Default:</span>
      <span class="schema-row-value">{{ schema.default }}</span>
    </div>
    <div class="schema-row items-center" v-if="schema.pattern">
      <span class="schema-row-label font-bold mr-2">Pattern:</span>
      <span class="schema-row-value">{{ schema.pattern }}</span>
    </div>
    <div class="schema-row items-center" v-if="schema.items">
      <div class="schema-row-label font-bold mr-2">Items:</div>
      <div class="schema-row-value">
        <open-api-schema :components="components" :current-locale="currentLocale" :schema="schema.items" />
      </div>
    </div>
    <div class="schema-row items-center" v-if="schema.properties">
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
          <tr v-for="(property, key) in schema.properties" :key="key">
            <td class="border px-4 py-2">{{ key }}</td>
            <td class="border px-4 py-2">{{ property.type }}</td>
            <td class="border px-4 py-2">
              <div class="schema-row items-center" v-if="property.title">
                <span class="schema-row-label font-bold mr-2">Title:</span>
                <span class="schema-row-value" v-html="tr(property, 'title', currentLocale)"></span>
              </div>
              <div class="schema-row items-center" v-if="property.type">
                <span class="schema-row-label font-bold mr-2">Type:</span>
                <span class="schema-row-value" v-text="property.type"></span>
              </div>
              <div class="schema-row items-center" v-if="property.description">
                <span class="schema-row-label font-bold mr-2">Description:</span>
                <span class="schema-row-value" v-html="tr(property, 'description', currentLocale)"></span>
              </div>
              <div v-if="key === 'reference'">
                <open-api-schema :components="components" :current-locale="currentLocale" :schema="property" />
              </div>
              <div class="border px-4 py-2" v-if="property.items">
                <open-api-schema :components="components" :current-locale="currentLocale" :schema="property.items" />
              </div>
              <div class="border px-4 py-2" v-if="property.properties">
                <open-api-schema v-for="(sproperty, key) in property.properties" :key="key" :components="components" :current-locale="currentLocale" :schema="sproperty" />
              </div>

              <div class="schema-row items-center" v-if="property.oneOf">
                <div class="schema-row-label font-bold mr-2">One Of:</div>
                <div class="schema-row-value">
                  <div v-for="(oneOf, index) in property.oneOf" :key="index">
                    <open-api-schema :components="components" :schema="oneOf" :current-locale="currentLocale" />
                  </div>
                </div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="schema-row items-center" v-if="schema.additionalProperties">
      <div class="schema-row-label font-bold mr-2">Additional Properties:</div>
      <div class="schema-row-value">
        <open-api-schema :components="components" :current-locale="currentLocale" :schema="schema.additionalProperties" />
      </div>
    </div>
    <div class="schema-row items-center" v-if="schema.allOf">
      <div class="schema-row-label font-bold mr-2">All Of:</div>
      <div class="schema-row-value">
        <div v-for="(allOf, index) in schema.allOf" :key="index">
          <open-api-schema :components="components" :schema="allOf" :current-locale="currentLocale" />
        </div>
      </div>
    </div>

    <div class="schema-row items-center" v-if="schema.oneOf">
      <div class="schema-row-label font-bold mr-2">One Of:</div>
      <div class="schema-row-value">
        <div v-for="(oneOf, index) in schema.oneOf" :key="index">
          <open-api-schema :components="components" :schema="oneOf" :current-locale="currentLocale" />
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

  },
  methods: {
    tr,
  },
};
</script>

