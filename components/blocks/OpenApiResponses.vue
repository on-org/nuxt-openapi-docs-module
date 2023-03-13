<template>
  <div>
    <h2 class="text-lg font-bold mb-2">Responses:</h2>
    <table class="w-full border-collapse">
      <thead>
      <tr class="border bg-gray-100 border-b border-gray-300">
        <th class="border p-3 font-semibold text-left">Status</th>
        <th class="border p-3 font-semibold text-left">Description</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(response, status) in responses" :key="status" class="border-b border-gray-300">
        <td class="border p-3">{{ status }}</td>
        <td class="border p-3">
          <p class="mb-2">{{ tr(response, 'description', currentLocale) }}</p>
          <OpenApiExamples v-if="response.examples" :examples="response.examples" :current-locale="currentLocale" />
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import OpenApiExamples from './OpenApiExamplesResponse.vue';
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
  },
  components: {
    OpenApiExamples,
  },
  methods: {
    tr
  }
};
</script>
