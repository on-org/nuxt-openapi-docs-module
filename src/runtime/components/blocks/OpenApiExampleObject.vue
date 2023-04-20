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
      v-html="tr(example, 'summary', currentLocale)"
    />
    <div
      v-if="example.description"
      class="oapi-example-obj__description"
      v-html="tr(example, 'description', currentLocale)"
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
import { tr } from '../helpers.js'

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
  },
  methods: { tr },
}
</script>

<style lang="scss">
.oapi-example-obj {
  &__summary {
    font-weight: 600;
    font-size: 0.825rem;
    color: #999;
    margin-bottom: .5rem;
    margin-top: -0.8rem;
  }
  &__description {
    margin-bottom: 1rem;
  }
}
</style>
