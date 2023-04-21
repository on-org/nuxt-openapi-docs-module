<template>
  <div class="oapi-req-body">
    <component
      :is="isCb ? 'h3' : 'h2'"
      :id="`${hPrefix}request-body`"
    >
      {{ $openapidoc.getLocaleText('openapidoc.request_body') }}
    </component>
    <div
      v-if="requestBody.required"
      class="oapi-req-body__required"
    >
      {{ $openapidoc.getLocaleText('openapidoc.required') }}
    </div>
    <div
      v-if="requestBody.description"
      class="oapi-req-body__description"
      v-html="tr(requestBody, 'description', currentLocale)"
    />

    <OpenApiMediaTypes
      v-if="requestBody.content"
      :data="requestBody.content"
      :current-locale="currentLocale"
    />
  </div>
</template>

<script>
import {tr} from "../helpers";
import OpenApiMediaTypes from './OpenApiMediaTypes.vue'

export default {
  name: 'OpenApiRequestBody',
  components: { OpenApiMediaTypes },
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
    isCb: Boolean,
    hPrefix: {
      type: String,
      default: '',
    }
  },
  methods: {
    tr,
  }
};
</script>

<style lang="scss">
.oapi-req-body {
  &__required {
    font-weight: 600;
    font-size: 0.875rem;
    margin-top: -12px;
    color: #e3a637;
    margin-bottom: 4px;
  }
  .oapi-req-body-obj {
    margin-top: 16px;
  }
}
</style>
