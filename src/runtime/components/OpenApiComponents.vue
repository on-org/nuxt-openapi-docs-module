<template>
  <div>
    <div v-if="components.schemas">
      <h2 id="schemas">
        {{ $openapidoc.getLocaleText('openapidoc.schemas') }}
      </h2>
      <div
        v-for="(schema, name) in components.schemas"
        :key="name"
        class="oapi-schema-block"
      >
        <h3 :id="name" v-text="name" />
        <div
          v-if="schema.title"
          class="oapi-schema-block__title"
          v-html="$openapidocRef.tr(schema, 'title', currentLocale)"
        />
        <div
          v-if="schema.description"
          class="oapi-schema-block__description"
          v-html="$openapidocRef.tr(schema, 'description', currentLocale)"
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
        {{ $openapidoc.getLocaleText('openapidoc.examples') }}
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
        {{ $openapidoc.getLocaleText('openapidoc.request_bodies') }}
      </h2>
      <div
        v-for="(reqBody, name) in components.requestBodies"
        :key="name"
        class="oapi-schema-block"
      >
        <h3 :id="name" v-text="name" />
        <div class="oapi-schema-block__required">
          {{ $openapidoc.getLocaleText('openapidoc.required') }}
        </div>
        <div
          v-if="reqBody.description"
          class="oapi-schema-block__description"
          v-html="$openapidocRef.tr(reqBody, 'description', currentLocale)"
        />
        <OpenApiMediaTypes
          :data="reqBody.content"
          :current-locale="currentLocale"
        />
      </div>
    </div>

    <div v-if="components.responses">
      <h2 id="responses">
        {{ $openapidoc.getLocaleText('openapidoc.responses') }}
      </h2>
      <div
        v-for="(response, name) in components.responses"
        :key="name"
        class="oapi-schema-block"
      >
        <h3 :id="name" v-text="name" />
        <div
          v-if="response.description"
          class="oapi-schema-block__description"
          v-html="$openapidocRef.tr(response, 'description', currentLocale)"
        />
        <OpenApiResponse
          :response="response"
          :current-locale="currentLocale"
        />
      </div>
    </div>

    <div v-if="components.parameters">
      <h2 id="parameters">
        {{ $openapidoc.getLocaleText('openapidoc.parameters') }}
      </h2>
      <div
        v-for="(parameter, name) in components.parameters"
        v-if="name !== 'Authorization'"
        :key="name"
        class="oapi-schema-block"
      >
        <h3 :id="name" v-text="name" />
        <div
          v-if="parameter.description"
          class="oapi-schema-block__description"
          v-html="$openapidocRef.tr(parameter, 'description', currentLocale)"
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
        {{ $openapidoc.getLocaleText('openapidoc.headers') }}
      </h2>
      <div
        v-for="(header, name) in components.headers"
        :key="name"
        class="oapi-schema-block"
      >
        <h3 :id="name" v-text="name" />
        <div
          v-if="header.description"
          class="oapi-schema-block__description"
          v-html="$openapidocRef.tr(header, 'description', currentLocale)"
        />
        <OpenApiParameter
          :data="header"
          :current-locale="currentLocale"
          hide-name
          hide-description
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
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

<style lang="scss">

</style>
