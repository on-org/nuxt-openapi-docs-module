<template>
  <AppHeader />

  <div class="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 sm:items-center pt-24 body">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <NuxtPage />
  </div>
</template>

<script setup>
import AppHeader from '~/components/AppHeader.vue'
</script>

<style>
.body {
  padding-bottom: 100px;
}
</style>
