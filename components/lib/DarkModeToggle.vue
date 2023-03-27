<template>
  <button class="mr-2" @click="() => $emit('change', !value)">
    {{ value ? 'Light' : 'Dark' }}
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
