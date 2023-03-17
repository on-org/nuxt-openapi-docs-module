<template>
  <div class="py-4">
    <h3 class="text-xl font-semibold">Security:</h3>
    <ul class="list-disc ml-6">
      <li v-for="(securityRequirement, index) in props.security" :key="index" class="py-2">
        <OpenApiSecurityRequirement :securityRequirement="securityRequirement" :current-locale="props.currentLocale" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import OpenApiSecurityRequirement from './OpenApiSecurityRequirement.vue';

const props = defineProps({
  security: {
    type: Array,
    required: true,
  },
  currentLocale: {
    type: String,
    required: true,
  },
})
</script>
<style scoped>
li {
  list-style: none;
}
</style>
