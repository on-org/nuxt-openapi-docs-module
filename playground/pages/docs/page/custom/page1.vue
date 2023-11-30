<template>
  <div class="items-top min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <client-only>
      <div v-html="content"></div>
    </client-only>
    <hr>
    <div>my custom page</div>
  </div>
</template>

<script setup lang="ts">
import {definePageMeta, ref, onMounted, useOpenApiDataState, useFetch} from "#imports";
import axios from 'axios'

definePageMeta({
  layout: 'open-api-layout',
});

const { data } = useOpenApiDataState()
const { data: result } = await useFetch("/docs/query/file/page.json")

data.value = {
  ...result.value as any,
  name: 'page'
}

const content = ref('')

onMounted(async () => {
  const result = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  content.value = `<b>${result.data.title}</b>`
})
</script>
