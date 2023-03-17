<template>
  <button class="mr-2" @click="() => $emit('change', !value)">
    {{ value ? 'Light' : 'Dark' }} Mode
  </button>
</template>

<script setup>
const props = defineProps({
  value: {
    type: Boolean,
    required: true
  },
})
</script>
