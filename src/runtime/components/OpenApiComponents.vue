<template>
  <div>
    <div v-if="components.schemas">
      <h3 class="text-lg font-bold">Schemas</h3>
      <div v-for="(schema, name) in components.schemas">
        <h4 class="text-base font-bold" v-text="name"></h4>
        <OpenApiSchema :components="components" :schema="schema" :current-locale="currentLocale"></OpenApiSchema>
      </div>
    </div>

    <div v-if="components.schema">
      <OpenApiSchema :components="components" :schema="components.schema" :current-locale="currentLocale"></OpenApiSchema>
    </div>
    <div v-if="components.examples">
      <OpenApiExamples :examples="components.examples" :current-locale="currentLocale"></OpenApiExamples>
    </div>
    <div v-if="components.requestBodies">
      <OpenApiRequestBodies :requestBodies="components.requestBodies" :current-locale="currentLocale"></OpenApiRequestBodies>
    </div>
    <div v-if="components.responses">
<!--      <h3 class="text-lg font-bold mb-2">Responses</h3>-->
      <OpenApiResponses :responses="components.responses" :current-locale="currentLocale"></OpenApiResponses>
    </div>
    <div v-if="components.parameters">
<!--      <h3 class="text-lg font-bold mb-2">Parameters</h3>-->
      <OpenApiParameters :parameters="components.parameters" :current-locale="currentLocale"></OpenApiParameters>
    </div>
    <div v-if="components.securitySchemes">
<!--      <h3 class="text-lg font-bold mb-2">Security Schemes</h3>-->
      <OpenApiSecuritySchemes :securitySchemes="components.securitySchemes" :current-locale="currentLocale"></OpenApiSecuritySchemes>
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
