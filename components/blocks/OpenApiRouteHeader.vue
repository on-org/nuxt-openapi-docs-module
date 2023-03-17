<template>
  <div class="border border-gray-300 p-4 mb-8">
    <h1 class="text-2xl font-bold mb-2">{{ props.path }}</h1>
    <h2 class="text-lg font-bold mb-2">{{ props.summary }}</h2>
    <p class="text-gray-600 mb-2">{{ props.method }}</p>
    <p class="mb-2">
      <span v-for="(tag, index) in props.tags" :key="index"
            class="inline-block bg-gray-300 dark:bg-blue-200 dark:text-black px-2 py-1 rounded mr-2">
        {{ tag }}
      </span>
    </p>
    <p class="mb-2" v-if="props.description">
      <MarkdownRender :markdown="props.description"></MarkdownRender>
    </p>
    <p class="text-red-600 font-bold mb-2" v-if="props.deprecated">Deprecated</p>
  </div>
</template>


<script setup>
import MarkdownRender from "../lib/MarkdownRender";

const props = defineProps({
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
})
</script>



