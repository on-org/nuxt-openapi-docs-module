<template>
  <div>
    <h2 class="text-lg font-bold mb-2">{{ $openapidoc.getLocaleText(currentLocale, 'Responses') }}:</h2>

    <OpenApiTable>
      <template v-slot:header>
        <OpenApiTableHeader :flex="1">{{ $openapidoc.getLocaleText(currentLocale, 'Status') }}</OpenApiTableHeader>
        <OpenApiTableHeader :flex="1">{{ $openapidoc.getLocaleText(currentLocale, 'Description') }}</OpenApiTableHeader>
      </template>
      <template v-slot:body>
        <OpenApiTableRow v-for="(response, status) in responses" :key="status" :has-nested-table="!!response.examples || !!response.content || !!response.schema">
          <OpenApiTableColl :flex="1">{{ status }}</OpenApiTableColl>
          <OpenApiTableColl :flex="1" v-html="tr(response, 'description', currentLocale)"></OpenApiTableColl>


          <template v-slot:nested-table>
            <OpenApiExamples v-if="response.examples" :examples="response.examples" :current-locale="currentLocale" :components="components" />

            <OpenApiTabs v-if="response.content">
              <template v-for="(val, key) in response.content" :slot="key">
                <pre class="mt-2 p-2 rounded-md" v-text="key"></pre>
                <OpenApiSchema :schema="val.schema" :current-locale="currentLocale" :components="components" class="mt-4" />
              </template>
            </OpenApiTabs>

            <OpenApiSchema v-if="response.schema" :schema="response.schema" :current-locale="currentLocale" :components="components" class="mt-4" />
          </template>

        </OpenApiTableRow>
      </template>
    </OpenApiTable>
  </div>
</template>

<script>
import {tr} from "../helpers";

export default {
  name: 'OpenApiResponses',
  props: {
    responses: {
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
  methods: {
    tr
  }
};
</script>
