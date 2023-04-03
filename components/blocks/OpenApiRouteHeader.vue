<template>
  <div class="border border-gray-300 p-4 mb-8 doc-info">
    <h1 class="text-2xl font-bold mb-2">
      <span class="text-xl font-medium mr-2 px-2.5 py-0.5 rounded" :class="getTagColor(method)">{{ method }}</span>
      {{ path }}
    </h1>
    <div v-if="deprecated" class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      <div>
        <span class="font-medium">Deprecated!</span>
      </div>
    </div>
    <h2 class="text-lg font-bold mb-2">{{ summary }}</h2>
    <p class="mb-2">
      <span v-for="(tag, index) in tags" :key="index" class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{{ tag }}</span>
    </p>
    <p class="mb-2" v-html="description"></p>
  </div>
</template>


<script>
import {getTagColor, tr} from "../helpers";

export default {
  props: {
    path: String,
    method: String,
    tags: Array,
    summary: String,
    description: String,
    deprecated: Boolean,
    currentLocale: {
      type: String,
      required: true,
    },
  },
  methods: {
    tr, getTagColor
  }
};
</script>



