<template>
  <div>
    <h2 class="text-2xl font-bold">{{ tr(info, 'title', currentLocale) }}</h2>
    <p class="my-4 description" v-html="tr(info, 'description', currentLocale)"></p>
    <h3 class="text-lg font-bold">Servers</h3>
    <ul class="list-disc list-inside">
      <li v-for="server in servers" :key="server.url">
        <a class="text-blue-500 hover:underline" :href="server.url">{{ server.url }}</a>
      </li>
    </ul>
    <h3 v-if="info.externalDocs" class="text-lg font-bold">External documentation</h3>
    <ul v-if="info.externalDocs" class="list-disc list-inside">
      <li>
        <a class="text-blue-500 hover:underline" :href="info.externalDocs.url">{{ tr(info.externalDocs, 'description', currentLocale) }}</a>
      </li>
    </ul>
    <div v-if="info.version">
      <h3 class="text-lg font-bold">version: {{ info.version }}</h3>
    </div>
  </div>
</template>
<script>
import {tr} from "./helpers";
export default {
  props: {
    info: {
      type: Object,
      required: true
    },
    servers: {
      type: [Object, Array],
      required: true
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
