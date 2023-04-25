<template>
  <div class="oapi-responses">
    <component
      :is="isCb ? 'h3' : 'h2'"
      :id="`${hPrefix}responses`"
    >
      {{ $openapidoc.getLocaleText('openapidoc.responses') }}
    </component>

    <div
      v-for="(response, status) in responses"
      :key="status"
      class="oapi-responses-item"
    >
      <component
        :is="isCb ? 'h4' : 'h3'"
        :id="`${hPrefix}response-${status}`"
        class="oapi-responses-item__status"
      >
        {{ status }}
      </component>
      <div
        class="oapi-responses-item__description"
        v-html="$openapidocRef.tr(response, 'description', currentLocale)"
      />
      <OpenApiResponse
        lite
        :current-locale="currentLocale"
        :response="response"
      />
    </div>
  </div>
</template>

<script>
import OpenApiResponse from './OpenApiResponse.vue'

export default {
  name: 'OpenApiResponses',
  components: { OpenApiResponse },
  props: {
    isCb: Boolean,
    hPrefix: {
      type: String,
      default: '',
    },
    responses: {
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
};
</script>

<style>
.oapi-responses-item .oapi-response {
  margin-top: 16px;
}
</style>
