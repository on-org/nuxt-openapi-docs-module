<template>
  <div>
    <OpenApiRouteHeader
        :path="url"
        :method="route.method"
        :tags="route.tags"
        :summary="tr(route, 'summary', currentLocale)"
        :description="tr(route, 'description', currentLocale)"
        :deprecated="route.deprecated"
        :current-locale="currentLocale"
    />
    <OpenApiParameters v-if="route.parameters" :server="server" :url="url" :parameters="route.parameters" :current-locale="currentLocale" :method="method" :components="components" />

    <OpenApiRequestBody v-if="route.requestBody" :requestBody="route.requestBody" :current-locale="currentLocale" />
    <OpenApiSecurity v-if="route.security" :security="route.security" :current-locale="currentLocale" />

    <OpenApiResponses v-if="route.responses" :responses="route.responses" :current-locale="currentLocale" />
    <OpenApiExamples v-if="route.examples" :examples="route.examples" :current-locale="currentLocale" />
  </div>
</template>

<script>
import OpenApiRouteHeader from './blocks/OpenApiRouteHeader.vue';
import OpenApiRequestBody from './blocks/OpenApiRequestBody.vue';
import OpenApiSecurity from './blocks/OpenApiSecurity.vue';
import OpenApiParameters from './blocks/OpenApiParameters.vue';
import OpenApiResponses from './blocks/OpenApiResponses.vue';
import OpenApiExamples from './blocks/OpenApiExamples.vue';
import {tr} from "./helpers";

export default {
  name: 'OpenApiRoute',
  props: {
    route: {
      type: Object,
      required: true,
    },
    currentLocale: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: false,
      default: ''
    },
    server: {
      type: String,
      required: false,
      default: ''
    },
    method: {
      type: String,
      required: false,
      default: 'GET'
    },
    components: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    OpenApiRouteHeader,
    OpenApiRequestBody,
    OpenApiSecurity,
    OpenApiParameters,
    OpenApiResponses,
    OpenApiExamples,
  },
  methods: {
    tr
  }
};
</script>
