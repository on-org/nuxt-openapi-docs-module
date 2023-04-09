<template>
  <div>
    <h2 class="text-lg font-bold mb-2">{{ $openapidoc.getLocaleText(currentLocale, 'Responses') }}:</h2>
    <table class="w-full border-collapse">
      <thead>
      <tr class="border border-b border-gray-300">
        <th class="border p-3 font-semibold text-left">{{ $openapidoc.getLocaleText(currentLocale, 'Status')  }}</th>
        <th class="border p-3 font-semibold text-left" style="width: 25%">{{ $openapidoc.getLocaleText(currentLocale, 'Description') }}</th>
        <th class="border p-3 font-semibold text-left">{{ $openapidoc.getLocaleText(currentLocale, 'Content') }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(response, status) in responses" :key="status" class="border-b border-gray-300">
        <td class="border p-3">{{ status }}</td>
        <td class="border p-3">
          <p class="mb-2" v-html="tr(response, 'description', currentLocale)"></p>
          <OpenApiExamples v-if="response.examples" :examples="response.examples" :current-locale="currentLocale" :components="components" />
        </td>
        <td class="border p-3">
          <div v-for="(val, key) in response.content">
            <pre class="mt-2 p-2 rounded-md" v-text="key"></pre>
            <OpenApiSchema :schema="val.schema" :current-locale="currentLocale" :components="components" class="mt-4" />
          </div>

          <OpenApiSchema v-if="response.schema" :schema="response.schema" :current-locale="currentLocale" :components="components" class="mt-4" />
        </td>
      </tr>
      </tbody>
    </table>
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
