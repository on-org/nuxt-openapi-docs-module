<template>
  <div class="oapi-schema-sub-obj">
    <div class="oapi-schema-sub-obj__head">
      <div class="oapi-schema-sub-obj__title">
        {{ title }}
      </div>
    </div>
    <div>
      <ul
        class="oapi-schema-sub-obj__content"
      >
        <slot />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OpenApiSchemaSubObject',
  props: {
    title: {
      type: String,
      default: '',
    },
    currentLocale: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
    }
  },
  methods: {
  },
}
</script>

<style>
.oapi-schema-sub-obj__head {
  display: flex;
  align-items: center;
}
.oapi-schema-sub-obj__title {
  font-weight: 600;
  font-size: 0.825rem;
  color: #999;
}
.oapi-schema-sub-obj__content {
  margin-left: 4px;
  padding-top: 8px;
  padding-left: 32px;
  border-left: 1px solid #E2E2E2;
}
</style>
