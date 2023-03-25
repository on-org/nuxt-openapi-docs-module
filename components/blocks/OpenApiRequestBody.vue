<template>
  <div>
    <h3 class="text-lg font-medium">Request Body:</h3>
    <pre class="mt-2 p-2 rounded-md">{{ tr(requestBodyRef, 'description', currentLocale) }}</pre>
    <div v-for="(val, key) in requestBodyRef.content">
      <pre class="mt-2 p-2 rounded-md" v-text="key"></pre>
      <OpenApiSchema :schema="val.schema" :current-locale="currentLocale" :components="components" class="mt-4" />
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

<script>
import OpenApiSchema from './OpenApiSchema.vue';
import {getSchemaValsFromPath, tr} from "../helpers";

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
  },
  computed: {
    requestBodyRef() {
      if (this.requestBody.$ref) {
        const link = getSchemaValsFromPath(this.requestBody.$ref)
        if(this.components[link.path] && this.components[link.path][link.name]) {
          return this.components[link.path][link.name];
        }
      }

      return this.requestBody;
    }
  }
};
</script>
