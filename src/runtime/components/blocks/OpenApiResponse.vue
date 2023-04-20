<template>
  <div
    v-if="!isEmpty"
    class="oapi-response"
  >
    <div
      v-if="response.description && !lite"
      class="oapi-response__description"
      v-html="tr(response, 'description', currentLocale)"
    />
    <div
      v-if="response.headers"
      class="oapi-response__section"
    >
      <strong class="oapi-response__section-title">{{ $openapidoc.getLocaleText(currentLocale, 'Headers') }}</strong>
      <div
        v-for="(header, name) in response.headers"
        :key="name"
        class="oapi-response-header"
      >
        <div class="oapi-response-header__name">
          <code>{{ name }}</code>
        </div>
        <OpenApiParameter
          :data="header"
          :current-locale="currentLocale"
          hide-name
        />
      </div>
    </div>
    <div
      v-if="response.content"
      class="oapi-response__section"
    >
      <strong
        v-if="response.headers"
        class="oapi-response__section-title"
      >{{ $openapidoc.getLocaleText(currentLocale, 'Content') }}</strong>
      <div class="oapi-response-media-types">
        <OpenApiMediaTypes
          :data="response.content"
          :current-locale="currentLocale"
          lite
        />
      </div>
    </div>
    <div
      v-if="response.schema"
      class="oapi-response__schema"
    >
      <strong
        v-if="response.headers || response.content"
        class="oapi-response__section-title"
      >{{ $openapidoc.getLocaleText(currentLocale, 'Schema') }}</strong>
      <div class="oapi-response-media-types">
        <OpenApiObjectModel
          :schema="response.schema"
          :current-locale="currentLocale"
          lite
        />
      </div>
    </div>
  </div>
</template>

<script>
import { tr } from '../helpers.js'
import OpenApiMediaTypes from './OpenApiMediaTypes.vue'
import OpenApiObjectModel from './OpenApiObjectModel.vue'
import OpenApiParameter from './OpenApiParameter.vue'

export default {
  name: 'OpenApiResponse',
  components: { OpenApiParameter, OpenApiObjectModel, OpenApiMediaTypes },
  props: {
    /*
    * OpenAPI Response Object
    * https://spec.openapis.org/oas/v3.0.3#responseObject
    */
    response: {
      type: Object,
      required: true,
    },
    currentLocale: {
      type: String,
      required: true,
    },
    /* Do not show description */
    lite: Boolean,
  },
  data () {
    return {
    }
  },
  computed: {
    isEmpty() {
      const noDescription = !this.response.description || this.lite;
      return noDescription
        && (!this.response.headers || !Object.keys(this.response.headers).length)
        && !this.response.content
        && !this.response.schema;
    }
  },
  created () {
  },
  methods: { tr },
}

</script>

<style lang="scss">
.oapi-response {
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 6px;
  border: 1px solid #E2E2E2;
  &__section-title {
    display: block;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.25;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }
  &__section {
    margin-bottom: 2rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__description {
    margin-bottom: 1rem;
  }
  &-media-types {
    .oapi-req-body-obj {
      border: none;
      margin-bottom: 0;
    }
  }
  &-header {
    &__name {
      margin-bottom: .5rem;
    }
    .oapi-res-param {
      border: none;
    }
  }
}
</style>
