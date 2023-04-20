<template>
  <div>
    <div v-if="components.schemas">
      <h2 id="schemas">
        {{ $openapidoc.getLocaleText(currentLocale, 'Schemas') }}
      </h2>
      <div
        v-for="(schema, name) in components.schemas"
        :key="name"
        class="oapi-schema-block"
      >
        <h3 v-text="name" />
        <div
          v-if="schema.title"
          class="oapi-schema-block__title"
          v-html="tr(schema, 'title', currentLocale)"
        />
        <div
          v-if="schema.description"
          class="oapi-schema-block__description"
          v-html="tr(schema, 'description', currentLocale)"
        />
        <OpenApiObjectModel
          class="oapi-schema-block__model"
          :schema="schema"
          :current-locale="currentLocale"
          root
        />
      </div>
    </div>

    <div v-if="components.examples">
      <h2 id="examples">
        {{ $openapidoc.getLocaleText(currentLocale, 'Examples') }}
      </h2>
      <div
        v-for="(example, name) in components.examples"
        :key="name"
        class="oapi-schema-block"
      >
        <OpenApiExampleObject
          :example="example"
          :name="name"
          :current-locale="currentLocale"
          name-tag="h3"
        />
      </div>
    </div>

    <div v-if="components.requestBodies">
      <h2 id="request-bodies">
        {{ $openapidoc.getLocaleText(currentLocale, 'Request bodies') }}
      </h2>
      <div
        v-for="(reqBody, name) in components.requestBodies"
        :key="name"
        class="oapi-schema-block"
      >
        <h3 v-text="name" />
        <div class="oapi-schema-block__required">
          {{ $openapidoc.getLocaleText(currentLocale, 'Required') }}
        </div>
        <div
          v-if="reqBody.description"
          class="oapi-schema-block__description"
          v-html="tr(reqBody, 'description', currentLocale)"
        />
        <OpenApiMediaTypes
          :data="reqBody.content"
          :current-locale="currentLocale"
        />
      </div>
    </div>

    <div v-if="components.responses">
      <h2 id="responses">
        {{ $openapidoc.getLocaleText(currentLocale, 'Responses') }}
      </h2>
      <div
        v-for="(response, name) in components.responses"
        :key="name"
        class="oapi-schema-block"
      >
        <h3 v-text="name" />
        <div
          v-if="response.description"
          class="oapi-schema-block__description"
          v-html="tr(response, 'description', currentLocale)"
        />
        <OpenApiResponse
          :response="response"
          :current-locale="currentLocale"
        />
      </div>
    </div>

    <div v-if="components.parameters">
      <h2 id="parameters">
        {{ $openapidoc.getLocaleText(currentLocale, 'Parameters') }}
      </h2>
      <div
        v-for="(parameter, name) in components.parameters"
        :key="name"
        class="oapi-schema-block"
      >
        <h3 v-text="name" />
        <div
          v-if="parameter.description"
          class="oapi-schema-block__description"
          v-html="tr(parameter, 'description', currentLocale)"
        />
        <OpenApiParameter
          :data="parameter"
          hide-description
          :current-locale="currentLocale"
        />
      </div>
    </div>

    <div v-if="components.headers">
      <h2 id="headers">
        {{ $openapidoc.getLocaleText(currentLocale, 'Headers') }}
      </h2>
      <div
        v-for="(header, name) in components.headers"
        :key="name"
        class="oapi-schema-block"
      >
        <h3 v-text="name" />
        <div
          v-if="header.description"
          class="oapi-schema-block__description"
          v-html="tr(header, 'description', currentLocale)"
        />
        <OpenApiParameter
          :data="header"
          :current-locale="currentLocale"
          hide-name
          hide-description
        />
      </div>
    </div>

    <div v-if="components.securitySchemes">
      <h2 id="security-schemes">
        {{ $openapidoc.getLocaleText(currentLocale, 'Security schemes') }}
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
          v-html="tr(secScheme, 'description', currentLocale)"
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
import { tr } from './helpers.js'

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
  methods: { tr },
};
</script>

<style lang="scss">

</style>
