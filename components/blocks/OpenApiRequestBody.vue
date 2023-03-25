<template>
  <div>
    <h3 class="text-lg font-medium">Request Body:</h3>
    <pre class="mt-2 p-2 rounded-md">{{ tr(requestBodyRef, 'description', currentLocale) }}</pre>
    <div v-for="(val, key) in requestBodyRef.content">
      <pre class="mt-2 p-2 rounded-md" v-text="key"></pre>
      <OpenApiSchema :schema="val.schema" :current-locale="props.currentLocale" :components="props.components" class="mt-4" />
    </div>

  </div>
</template>
<style>
.text-lg {
  font-size: 1.125rem;
}
.font-medium {
  font-weight: 500;
}
.mt-2 {
  margin-top: 0.5rem;
}
.bg-gray-100 {
  background-color: #f3f4f6;
}
.p-2 {
  padding: 0.5rem;
}
.rounded-md {
  border-radius: 0.375rem;
}
.mt-4 {
  margin-top: 1rem;
}
</style>

<script setup>
import OpenApiSchema from './OpenApiSchema.vue';
import {getSchemaValsFromPath, tr} from "../helpers";

const props = defineProps({
  requestBody: {
    type: Object,
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
})

const requestBodyRef = computed(() => {
  if (props.requestBody.$ref) {
    const link = getSchemaValsFromPath(props.requestBody.$ref)
    if(props.components[link.path] && props.components[link.path][link.name]) {
      return props.components[link.path][link.name];
    }
  }

  return this.requestBody;
})
</script>
