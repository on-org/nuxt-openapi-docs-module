<template>
  <nav class="bg-gray-800 text-white w-full">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <div class="flex justify-start">
          <NuxtLink :class="linkClass('/')" to="/">Home</NuxtLink>
          <NuxtLink :class="linkClass('/overview')" to="/overview">Module Overview</NuxtLink>
          <NuxtLink :class="linkClass('/changelog')" to="/changelog">Changelog</NuxtLink>
          <a href="https://github.com/on-org/nuxt-openapi-docs-module" target="_blank" class="nav-link px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-300 cursor-pointer">GitHub</a>
          <a href="https://on-org.github.io/nuxt-openapi-docs-module/" target="_blank" class="nav-link px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-300 cursor-pointer">Demo</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from '#imports';

const route = useRoute();

function linkClass(path: string) {
  return [
    'px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-300 cursor-pointer',
    route.path === path ? 'bg-gray-900' : ''
  ];
}
</script>

<style scoped>
.nav-link, .nuxt-link-exact-active {
  transition: background-color 0.3s;
  cursor: pointer;
}
.nav-link:hover, .nuxt-link-exact-active:hover {
  background-color: #666;
}
</style>
