<template>
  <div>
    <h2 id="parameters"><span v-text="title" /></h2>

    <OpenApiParameter
      v-for="parameter in parameters"
      :key="`${parameter.name}-${parameter.in || 'def'}`"
      :data="parameter"
      :current-locale="currentLocale"
    />
  </div>
</template>

<script>
import OpenApiParameter from './OpenApiParameter.vue'

export default {
  components: { OpenApiParameter },
  props: {
    title: {
      type: String,
      required: false,
      default: 'Parameters',
    },
    parameters: {
      type: Array,
      required: true,
    },
    currentLocale: {
      type: String,
      required: true,
    },
    components: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>

</style>
