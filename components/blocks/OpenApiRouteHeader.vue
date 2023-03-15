<template>
  <div class="border border-gray-300 p-4 mb-8">
    <h1 class="text-2xl font-bold mb-2">{{ path }}</h1>
    <h2 class="text-lg font-bold mb-2">{{ summary }}</h2>
    <p class="text-gray-600 mb-2">{{ method }}</p>
    <p class="mb-2">
      <span v-for="(tag, index) in tags" :key="index"
            class="inline-block bg-gray-300 dark:bg-blue-200 dark:text-black px-2 py-1 rounded mr-2">
        {{ tag }}
      </span>
    </p>
    <p class="mb-2" v-html="html(description)"></p>
    <p class="text-red-600 font-bold mb-2" v-if="deprecated">Deprecated</p>
  </div>
</template>


<script>
import {html, tr} from "../helpers";

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
    html, tr
  }
};
</script>



