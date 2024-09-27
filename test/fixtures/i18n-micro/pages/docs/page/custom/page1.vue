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
import {definePageMeta, ref, onMounted, useNuxtApp} from "#imports";
import axios from 'axios'

definePageMeta({
  layout: 'open-api-layout-page',
});


const { $defineI18nRoute } = useNuxtApp()
const content = ref('')

onMounted(async () => {
  const result = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  content.value = `<b>${result.data.title}</b>`
})

$defineI18nRoute({
  locales: ['en']
})
</script>
