<template>
  <div class="openapi-examples">
    <h3 class="text-lg font-bold mb-2">{{ $openapidoc.getLocaleText(currentLocale, 'Examples') }}: </h3>
    <div v-for="(example, name) in examples" :key="name">
      <h4 class="text-lg font-medium">{{ name }}</h4>

      <OpenApiTable>
        <template v-slot:header>
          <OpenApiTableHeader :flex="1">{{ $openapidoc.getLocaleText(currentLocale, 'Media Type') }}</OpenApiTableHeader>
          <OpenApiTableHeader :flex="1">{{ $openapidoc.getLocaleText(currentLocale, 'Summary') }}</OpenApiTableHeader>
          <OpenApiTableHeader :flex="1">{{ $openapidoc.getLocaleText(currentLocale, 'Value') }}</OpenApiTableHeader>
        </template>
        <template v-slot:body>
          <OpenApiTableRow v-for="(value, mediaType) in example" :key="mediaType" :has-nested-table="false">
            <OpenApiTableColl :flex="1">{{ mediaType }}</OpenApiTableColl>
            <OpenApiTableColl :flex="1" v-html="tr(value, 'summary', currentLocale)"></OpenApiTableColl>
            <OpenApiTableColl :flex="1">
              <pre class="m-0 whitespace-pre-wrap w-full">{{ JSON.stringify(value, null, 2) }}</pre>
            </OpenApiTableColl>
          </OpenApiTableRow>
        </template>
      </OpenApiTable>
    </div>
  </div>
</template>

<script>
import {tr} from "../helpers";

export default {
  props: {
    examples: {
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

<style scoped>
.openapi-examples {
  margin-bottom: 1.5rem;
}

.openapi-examples h4 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}
</style>
