<template>
  <div>
<!--    <h2 class="text-2xl font-bold">Components</h2>-->

    <div v-if="components.schemas">
      <h3 class="text-lg font-bold">Schemas</h3>
      <div v-for="(schema, name) in components.schemas">
        <h4 class="text-base font-bold" v-text="name"></h4>
        <open-api-schema :components="components" :schema="schema" :current-locale="currentLocale"></open-api-schema>
      </div>
    </div>

    <div v-if="components.schema">
      <open-api-schema :components="components" :schema="components.schema" :current-locale="currentLocale"></open-api-schema>
    </div>
    <div v-if="components.examples">
      <open-api-examples :examples="components.examples" :current-locale="currentLocale"></open-api-examples>
    </div>
    <div v-if="components.requestBodies">
      <open-api-request-bodies :requestBodies="components.requestBodies" :current-locale="currentLocale"></open-api-request-bodies>
    </div>
    <div v-if="components.responses">
<!--      <h3 class="text-lg font-bold mb-2">Responses</h3>-->
      <open-api-responses :responses="components.responses" :current-locale="currentLocale"></open-api-responses>
    </div>
    <div v-if="components.parameters">
<!--      <h3 class="text-lg font-bold mb-2">Parameters</h3>-->
      <open-api-parameters :parameters="components.parameters" :current-locale="currentLocale"></open-api-parameters>
    </div>
    <div v-if="components.securitySchemes">
<!--      <h3 class="text-lg font-bold mb-2">Security Schemes</h3>-->
      <open-api-security-schemes :securitySchemes="components.securitySchemes" :current-locale="currentLocale"></open-api-security-schemes>
    </div>
  </div>
</template>

<script>
import OpenApiSchema from './blocks/OpenApiSchema.vue';
import OpenApiExamples from './blocks/OpenApiExamples.vue';
import OpenApiRequestBodies from './blocks/OpenApiRequestBodies.vue';
import OpenApiResponses from './blocks/OpenApiResponses.vue';
import OpenApiParameters from './blocks/OpenApiParameters.vue';
import OpenApiSecuritySchemes from './blocks/OpenApiSecuritySchemes.vue';

export default {
  components: {
    OpenApiSchema,
    OpenApiExamples,
    OpenApiRequestBodies,
    OpenApiResponses,
    OpenApiParameters,
    OpenApiSecuritySchemes,
  },
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
