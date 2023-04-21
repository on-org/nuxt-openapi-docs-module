<template>
  <div class="schema border border-gray-300 rounded p-2" v-if="schema">
    <div class="schema-row items-center" v-if="title">
      <span class="schema-row-label font-bold mr-2">{{ $openapidoc.getLocaleText('openapidoc.title') }}:</span>
      <span class="schema-row-value">{{ title }}</span>
    </div>
    <div class="schema-row items-center" v-if="schema.title">
      <span class="schema-row-label font-bold mr-2">{{ $openapidoc.getLocaleText('openapidoc.title') }}:</span>
      <span class="schema-row-value" v-html="tr(schema, 'title', currentLocale)"></span>
    </div>
    <div class="schema-row items-center" v-if="schema.description">
      <span class="schema-row-label font-bold mr-2">{{ $openapidoc.getLocaleText('openapidoc.description') }}:</span>
      <span class="schema-row-value" v-html="tr(schema, 'description', currentLocale)"></span>
    </div>
    <div class="schema-row items-center" v-if="schema.type">
      <span class="schema-row-label font-bold mr-2">{{ $openapidoc.getLocaleText('openapidoc.type') }}:</span>
      <span class="schema-row-value">{{ schema.type }}</span>
    </div>
    <div class="schema-row items-center" v-if="schema.format">
      <span class="schema-row-label font-bold mr-2">{{ $openapidoc.getLocaleText('openapidoc.format') }}:</span>
      <span class="schema-row-value">{{ schema.format }}</span>
    </div>
    <div class="schema-row items-center" v-if="schema.enum">
      <div class="schema-row-label font-bold mr-2">{{ $openapidoc.getLocaleText('openapidoc.enum') }}:</div>
      <div class="schema-row-value p-2">
        <ul class="list-disc">
          <li v-for="(value, index) in schema.enum" :key="index">{{ value }}</li>
        </ul>
      </div>
    </div>
    <div class="schema-row items-center" v-if="schema.default">
      <span class="schema-row-label font-bold mr-2">{{ $openapidoc.getLocaleText('openapidoc.default') }}:</span>
      <span class="schema-row-value">{{ schema.default }}</span>
    </div>
    <div class="schema-row items-center" v-if="schema.pattern">
      <span class="schema-row-label font-bold mr-2">{{ $openapidoc.getLocaleText('openapidoc.pattern') }}:</span>
      <span class="schema-row-value">{{ schema.pattern }}</span>
    </div>
    <div class="schema-row items-center" v-if="schema.items">
      <div class="schema-row-label font-bold mr-2">{{ $openapidoc.getLocaleText('openapidoc.items') }}:</div>
      <div class="schema-row-value">
        <open-api-schema :components="components" :current-locale="currentLocale" :schema="schema.items" />
      </div>
    </div>
    <div class="schema-row items-center" v-if="schema.properties">
      <div class="schema-row-label font-bold mr-2">{{ $openapidoc.getLocaleText('openapidoc.properties') }}:</div>
      <div class="schema-row-value">

        <OpenApiTable :open="open">
          <template v-slot:header>
            <OpenApiTableHeader :flex="1">{{ $openapidoc.getLocaleText('openapidoc.name') }}</OpenApiTableHeader>
            <OpenApiTableHeader :flex="1">{{ $openapidoc.getLocaleText('openapidoc.type') }}</OpenApiTableHeader>
            <OpenApiTableHeader :flex="1">{{ $openapidoc.getLocaleText('openapidoc.description') }}</OpenApiTableHeader>
          </template>
          <template v-slot:body>
            <OpenApiTableRow v-for="(property, key) in schema.properties" :key="key" :has-nested-table="key === 'reference' || !!property.properties || !!property.items || !!property.oneOf || !!property.allOf">
              <OpenApiTableColl :flex="1">{{ key }}</OpenApiTableColl>
              <OpenApiTableColl :flex="1">{{ property.type }}</OpenApiTableColl>
              <OpenApiTableColl :flex="1" style="display: block;">
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
              </OpenApiTableColl>


              <template v-slot:nested-table>
                <div v-if="key === 'reference'">
                  <open-api-schema :components="components" :current-locale="currentLocale" :schema="property" title="reference" />
                </div>
                <div class="border px-2 py-2" v-if="property.items">
                  <open-api-schema :components="components" :current-locale="currentLocale" :schema="property.items" />
                </div>
                <div class="border px-2 py-2" v-if="property.properties">
                  <open-api-schema v-for="(sproperty, key) in property.properties" :key="key" :components="components" :current-locale="currentLocale" :schema="sproperty" title="properties" />
                </div>
                <div class="border px-2 py-2" v-if="property.allOf">
                  <div v-for="(allOf, index) in property.allOf" :key="index">
                    <open-api-schema :components="components" :schema="allOf" :current-locale="currentLocale" />
                  </div>
                </div>
                <div class="schema-row items-center" v-if="property.oneOf">
                  <div class="schema-row-label font-bold mr-2">{{ $openapidoc.getLocaleText('openapidoc.one_of') }}:</div>
                  <div class="schema-row-value">
                    <div v-for="(oneOf, index) in property.oneOf" :key="index">
                      <open-api-schema :components="components" :schema="oneOf" :current-locale="currentLocale" />
                    </div>
                  </div>
                </div>
              </template>

            </OpenApiTableRow>
          </template>
        </OpenApiTable>

      </div>
    </div>
    <div class="schema-row items-center" v-if="schema.additionalProperties">
      <div class="schema-row-value">
        <open-api-schema :components="components" :current-locale="currentLocale" :schema="schema.additionalProperties" :title="$openapidoc.getLocaleText('openapidoc.additional_properties')" :open="false" />
      </div>
    </div>


    <div class="schema-row items-center" v-if="schema.allOf">
      <open-api-schema :components="components" :schema="assignAllOf(schema.allOf)" :current-locale="currentLocale" :open="false" />
    </div>

    <div class="schema-row items-center" v-if="schema.oneOf">
      <div class="schema-row-label font-bold mr-2">{{ $openapidoc.getLocaleText('openapidoc.one_of') }}:</div>
      <div class="schema-row-value">
        <div v-for="(oneOf, index) in schema.oneOf" :key="index">
          <open-api-schema :components="components" :schema="oneOf" :current-locale="currentLocale" :open="false" />
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
    components: {
      type: Object,
      default: () => ({}),
    },
    title: {
      default: null,
    },
    open: {
      type: Boolean,
      default: true,
    },
  },
  computed: {

  },
  methods: {
    tr,
    assignAllOf(allOf) {
      return {
        properties: allOf.reduce((acc, curr) => {
          return { ...acc, ...curr.properties };
        }, {}),
      };
    },
    assign(allOf) {
      return {
        properties: allOf.reduce((acc, curr) => {
          return { ...acc, ...curr };
        }, {}),
      };
    }
  }
};
</script>

