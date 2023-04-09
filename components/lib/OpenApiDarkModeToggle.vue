<template>
  <button class="mr-2" @click="() => $emit('change', !value)">
    {{ value ? 'Light' : 'Dark' }}
  </button>
</template>

<script>

export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
