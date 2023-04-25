<template>
  <div>
    <div v-if="components.securitySchemes">
      <h2 id="security-schemes">
        {{ $openapidoc.getLocaleText('openapidoc.security_schemes') }}
      </h2>
      <div
        v-for="(secScheme, name) in components.securitySchemes"
        :key="name"
        class="oapi-schema-block"
      >
        <h3 v-text="name" />
        <div
          v-if="secScheme.description"
          class="oapi-schema-block__description"
          v-html="$openapidocRef.tr(secScheme, 'description', currentLocale)"
        />
        <OpenApiSecurityScheme
          :current-locale="currentLocale"
          :security-scheme="secScheme"
        />
      </div>
    </div>
  </div>
</template>

<script>
import OpenApiExampleObject from './blocks/OpenApiExampleObject.vue'
import OpenApiMediaTypes from './blocks/OpenApiMediaTypes.vue'
import OpenApiObjectModel from './blocks/OpenApiObjectModel.vue'
import OpenApiParameter from './blocks/OpenApiParameter.vue'
import OpenApiResponse from './blocks/OpenApiResponse.vue'
import OpenApiSecurityScheme from './blocks/OpenApiSecurityScheme.vue'
export default {
  components: { OpenApiParameter, OpenApiResponse, OpenApiSecurityScheme, OpenApiMediaTypes, OpenApiExampleObject, OpenApiObjectModel },
  props: {
    components: {
      type: Object,
      default: () => ({}),
    },
    currentLocale: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>

</style>
