<template>
  <div>
    <h2 class="text-lg font-bold mb-2">Responses:</h2>
    <table class="w-full border-collapse">
      <thead>
      <tr class="border border-b border-gray-300">
        <th class="border p-3 font-semibold text-left">Status</th>
        <th class="border p-3 font-semibold text-left">Description</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(response, status) in props.responses" :key="status" class="border-b border-gray-300">
        <td class="border p-3">{{ status }}</td>
        <td class="border p-3">
          <p class="mb-2">{{ tr(response, 'description', props.currentLocale) }}</p>
          <OpenApiExamples v-if="response.examples" :examples="response.examples" :current-locale="props.currentLocale" :components="props.components" />
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import OpenApiExamples from './OpenApiExamplesResponse.vue';
import {tr} from "../helpers";

const props = defineProps({
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
})
</script>
