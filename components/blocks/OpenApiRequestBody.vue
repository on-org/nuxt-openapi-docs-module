<template>
  <div>
    <h3 class="text-lg font-medium">Request Body:</h3>
    <pre class="mt-2 bg-gray-100 p-2 rounded-md">{{ tr(requestBody, 'description', currentLocale) }}</pre>
    <OpenApiSchema :schema="requestBody.content['application/json'].schema" :current-locale="currentLocale" :components="components" class="mt-4" />
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

<script>
import OpenApiSchema from './OpenApiSchema.vue';
import {tr} from "../helpers";

export default {
  name: 'OpenApiRequestBody',
  props: {
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
  },
  components: {
    OpenApiSchema,
  },
  methods: {
    tr
  }
};
</script>
