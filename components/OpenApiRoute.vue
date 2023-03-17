<template>
  <div>
    <OpenApiRouteHeader
        :path="props.route.path"
        :method="props.route.method"
        :tags="props.route.tags"
        :summary="tr(props.route, 'summary', props.currentLocale)"
        :description="tr(props.route, 'description', props.currentLocale)"
        :deprecated="props.route.deprecated"
        :current-locale="props.currentLocale"
    />
    <OpenApiParameters v-if="props.route.parameters" :parameters="props.route.parameters" :current-locale="props.currentLocale"  :components="props.components" />

    <OpenApiRequestBody v-if="props.route.requestBody" :requestBody="props.route.requestBody" :current-locale="props.currentLocale" :components="props.components" />

    <client-only>
      <h2 class="text-lg font-bold mb-2">Code simples:</h2>
<!--      <code-simples-->
<!--        :url="props.route.path"-->
<!--        :baseUrl="props.server"-->
<!--        :method="props.method"-->
<!--        :mime-type="mimeType"-->
<!--        :cookies="params.cookies"-->
<!--        :headers="params.headers"-->
<!--        :query="params.query"-->
<!--        :path="params.path"-->
<!--        :postData="params.postData"-->
<!--      ></code-simples>-->
    </client-only>

    <OpenApiSecurity v-if="props.route.security" :security="props.route.security" :current-locale="props.currentLocale" />

    <OpenApiResponses v-if="props.route.responses" :responses="props.route.responses" :current-locale="props.currentLocale" :components="props.components" />
    <OpenApiExamples v-if="props.route.examples" :examples="props.route.examples" :current-locale="props.currentLocale" />
  </div>
</template>

<script setup>
import OpenApiRouteHeader from './blocks/OpenApiRouteHeader.vue';
import OpenApiRequestBody from './blocks/OpenApiRequestBody.vue';
import OpenApiSecurity from './blocks/OpenApiSecurity.vue';
import OpenApiParameters from './blocks/OpenApiParameters.vue';
import OpenApiResponses from './blocks/OpenApiResponses.vue';
import OpenApiExamples from './blocks/OpenApiExamples.vue';
// import CodeSimples from "./lib/CodeSimples.vue";

import {tr} from "./helpers";

const props = defineProps({
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
})

let mimeType = ref('application/x-www-form-urlencoded');
let params = ref({
  cookies: [],
  headers: [],
  query: [],
  path : [],
  postData: [],
})


function genParamsToSimple() {
  if(props.route.requestBody && Object.keys(props.route.requestBody).length) {
    const pos = Object.keys(props.route.requestBody)[0]
    const req = props.route.requestBody[pos]
    if(Object.keys(req).length) {
      props.mimeType = Object.keys(req)[0]
      const params = req[props.mimeType];

      if (params.schema) {
        const properties = params.schema.properties;
        for (const propertyName in properties) {
          console.log(propertyName, properties[propertyName])
          const property = properties[propertyName] || {};

          let def = '';
          if(property.example) {
            def = property.example ?? ''
          }


          if (def === '' && property.type) {
            def = convertStringFormatToMd(property.type);
          }

          params.postData.push({
            name: propertyName,
            value: def.toString()
          })
        }

      }
    }

  }

  for (let i in props.route.parameters) {
    const param = props.route.parameters[i]

    if (param.$ref) {
      continue;
    }

    const p_name = param.name ?? '';
    const p_in = param.in ?? '';

    let def = '';
    if(param.schema) {
      def = param.schema.default ?? ''
    } else {
      def = param.default ?? '';
    }



    if (def === '' && param.schema && param.schema.type) {
      def = convertStringFormatToMd(param.schema.type);
    }

    if(params[p_in] && Array.isArray(params[p_in])) {
      params[p_in].push({
        name: p_name,
        value: def.toString()
      })
    }
  }
}
function convertStringFormatToMd(format) {
  switch (format) {
    case 'date':
      return 'YYYY-MM-DD';
    case 'date-time':
      return 'YYYY-MM-DDTHH:MM:SSZ';
    case 'email':
      return 'example@example.com';
    case 'hostname':
      return 'example.com';
    case 'ipv4':
      return '192.0.2.0';
    case 'ipv6':
      return '2001:0db8:85a3:0000:0000:8a2e:0370:7334';
    case 'uri':
      return 'https://example.com';
    case 'integer':
      return '1';
    default:
      return format;
  }
}

genParamsToSimple();
</script>
