<template>
  <div class="oapi-example-obj">
    <component
      :is="nameTag"
      v-if="name"
      class="oapi-example-obj__name"
    >
      {{ name }}
    </component>
    <div
      v-if="example.summary"
      class="oapi-example-obj__summary"
      v-html="$openapidocRef.tr(example, 'summary', currentLocale)"
    />
    <div
      v-if="example.description"
      class="oapi-example-obj__description"
      v-html="$openapidocRef.tr(example, 'description', currentLocale)"
    />
    <div
      v-if="valueFormatted"
      class="oapi-example-obj__value"
    >
      <pre v-html="valueFormatted" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'OpenApiExampleObject',
  props: {
    lite: Boolean,
    name: {
      type: String,
      default: '',
    },
    nameTag: {
      type: String,
      default: 'h3',
    },
    example: {
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
    valueFormatted() {
      if (!this.example.value) return null;
      return JSON.stringify(this.example.value, null, 2);
    }
  }
}
</script>

<style>
.oapi-example-obj__summary {
  font-weight: 600;
  font-size: 0.825rem;
  color: #999;
  margin-bottom: 0.5rem;
  margin-top: -0.8rem;
}
.oapi-example-obj__description {
  margin-bottom: 1rem;
}
</style>
