<template>
  <div>
    <h2 v-if="parameters.length" class="text-lg font-bold mb-2"><span v-text="title"></span>:</h2>

    <OpenApiTable v-if="parameters.length">
      <template v-slot:header>
        <OpenApiTableHeader :flex="1">{{ $openapidoc.getLocaleText(currentLocale, 'Parameter Name') }}</OpenApiTableHeader>
        <OpenApiTableHeader :flex="2">{{ $openapidoc.getLocaleText(currentLocale, 'Description') }}</OpenApiTableHeader>
        <OpenApiTableHeader :flex="1">{{ $openapidoc.getLocaleText(currentLocale, 'In') }}</OpenApiTableHeader>
        <OpenApiTableHeader :flex="1">{{ $openapidoc.getLocaleText(currentLocale, 'Required') }}</OpenApiTableHeader>
        <OpenApiTableHeader :flex="1">{{ $openapidoc.getLocaleText(currentLocale, 'Example') }}</OpenApiTableHeader>
      </template>
      <template v-slot:body>
        <OpenApiTableRow v-for="(param, index) in parameters" :has-nested-table="!!param.schema">
          <OpenApiTableColl :flex="1">{{ tr(param, 'name', currentLocale) }}</OpenApiTableColl>
          <OpenApiTableColl :flex="2" v-html="tr(param, 'description', currentLocale)"></OpenApiTableColl>
          <OpenApiTableColl :flex="1">{{ param.in ? param.in : '-' }}</OpenApiTableColl>
          <OpenApiTableColl :flex="1">{{ param.required ? 'Yes' : 'No' }}</OpenApiTableColl>
          <OpenApiTableColl :flex="1">{{ param.example ? param.example : '-' }}</OpenApiTableColl>


          <template v-slot:nested-table>
            <OpenApiSchema :schema="param.schema" :current-locale="currentLocale" :components="components" class="p-0" />
          </template>

        </OpenApiTableRow>
      </template>
    </OpenApiTable>

  </div>
</template>

<script>
import {tr} from "../helpers";

export default {
  props: {
    title: {
      type: String,
      required: false,
      default: 'Parameters',
    },
    parameters: [Object, Array],
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

<style scoped>
.open-api-param {
  margin-bottom: 20px;
}
.open-api-param h4 {
  margin-top: 0;
}
</style>
