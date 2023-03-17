<template>
  <div>
    <h2 class="text-2xl font-bold">{{ tr(info, 'title', currentLocale) }}</h2>
    <p class="my-4">
      <MarkdownRender :markdown="tr(info, 'description', currentLocale)"></MarkdownRender>
    </p>
    <h3 class="text-lg font-bold">Servers</h3>
    <ul class="list-disc list-inside">
      <li v-for="server in info.servers" :key="server.url">
        <a class="text-blue-500 hover:underline" :href="server.url">{{ server.url }}</a>
      </li>
    </ul>
    <h3 v-if="info.externalDocs" class="text-lg font-bold">External documentation</h3>
    <ul v-if="info.externalDocs" class="list-disc list-inside">
      <li>
        <a class="text-blue-500 hover:underline" :href="info.externalDocs.url">{{ tr(info.externalDocs, 'description', currentLocale) }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import MarkdownRender from "./lib/MarkdownRender";

import {tr} from "./helpers";
import {ref} from "vue";

export default {
  components: {
    MarkdownRender
  },
  props: {
    info: {
      type: Object,
      required: true
    },
    currentLocale: {
      type: String,
      required: true,
    },
  },
  setup() {
    const open = ref(null)

    // expose to template and other options API hooks
    return {
      open
    }
  },
  methods: {
    tr,
  }
}


</script>
<style>
/* Add any custom styles here if necessary */
</style>
