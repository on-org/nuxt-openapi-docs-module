<template>
  <div
    class="oapi-object"
    :class="{'oapi-object--lite': lite}"
  >
    <ul class="oapi-object__list">
      <OpenApiSchemaProperty
        :hide-title-description="!lite"
        :schema="resolvedSchema"
        :current-locale="currentLocale"
        no-lines
        open
      />
    </ul>
  </div>
</template>

<script>
import OpenApiSchemaProperty from './OpenApiSchemaProperty.vue'

export default {
  name: 'OpenApiObjectModel',
  components: { OpenApiSchemaProperty },
  props: {
    lite: Boolean,
    schema: {
      type: Object,
      required: true,
    },
    currentLocale: {
      type: String,
      required: true,
    },
  },
  data () {
    return {}
  },
  computed: {
    resolvedSchema() {
      return this.$openapidocRef.repReplace(this.schema)
    },
    requiredProps() {
      if (this.resolvedSchema.required && Array.isArray(this.resolvedSchema.required)) {
        return this.resolvedSchema.required;
      }
      return [];
    }
  },
  methods: {},
}
</script>

<style>
.oapi-object {
  margin-bottom: 16px;
  padding: 16px 8px;
  border-radius: 6px;
  border: 1px solid #E2E2E2;
}
.oapi-object .oapi-prop {
  margin-bottom: 16px;
}
.oapi-object--lite {
  border: none;
  border-radius: 0;
  padding: 0;
  margin-bottom: 0;
}
.oapi-object__list {
  margin: 0;
  list-style: none;
  padding: 0 0 0 32px;
  border-left: 1px solid #E2E2E2;
}
.oapi-object__list ul {
  list-style: none;
}
.oapi-object > .oapi-object__list {
  padding: 0 0 0 24px;
  border-left: none;
}
</style>
