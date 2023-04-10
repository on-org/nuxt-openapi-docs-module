<template>
  <div class="openapi-examples">
    <h3 class="text-lg font-bold mb-2">{{ $openapidoc.getLocaleText(currentLocale, 'Examples') }}: </h3>
    <div v-for="(example, name) in examples" :key="name">
      <h4 class="text-lg font-medium">{{ name }}</h4>
      <table class="w-full mt-2">
        <thead>
        <tr>
          <th class="px-4 py-2 border-b border-gray-300">{{ $openapidoc.getLocaleText(currentLocale, 'Media Type') }}</th>
          <th class="px-4 py-2 border-b border-gray-300">{{ $openapidoc.getLocaleText(currentLocale, 'Summary') }}</th>
          <th class="px-4 py-2 border-b border-gray-300">{{ $openapidoc.getLocaleText(currentLocale, 'Value') }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(value, mediaType) in example" :key="mediaType">
          <td class="px-4 py-2 border-b border-gray-300">{{ mediaType }}</td>
          <td class="px-4 py-2 border-b border-gray-300">{{ tr(value, 'summary', currentLocale) }}</td>
          <td class="px-4 py-2 border-b border-gray-300">
            <pre class="m-0 whitespace-pre-wrap">{{ value.value }}</pre>
          </td>
        </tr>
        </tbody>
      </table>
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
