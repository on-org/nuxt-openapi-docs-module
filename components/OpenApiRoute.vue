<template>
  <div>
    <OpenApiRouteHeader
        :path="route.path"
        :method="route.method"
        :tags="route.tags"
        :summary="tr(route, 'summary', currentLocale)"
        :description="tr(route, 'description', currentLocale)"
        :deprecated="route.deprecated"
        :current-locale="currentLocale"
    />
    <OpenApiParameters v-if="route.parameters" :parameters="route.parameters" :current-locale="currentLocale"  :components="components" />

    <OpenApiRequestBody v-if="route.requestBody" :requestBody="route.requestBody" :current-locale="currentLocale" :components="components" />

    <client-only>
      <h2 class="text-lg font-bold mb-2">Code simples:</h2>
      <CodeSimples
        :url="route.path"
        :baseUrl="server"
        :simples="simples"
        :method="method"
        :mime-type="mimeType"
        :params="params"
      ></CodeSimples>
    </client-only>

    <OpenApiSecurity v-if="route.security" :security="route.security" :current-locale="currentLocale" />

    <OpenApiResponses v-if="route.responses" :responses="route.responses" :current-locale="currentLocale" :components="components" />
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

import { tr} from "./helpers";

export default {
  name: 'OpenApiRoute',
  components: {
    OpenApiRouteHeader,
    OpenApiRequestBody,
    OpenApiSecurity,
    OpenApiParameters,
    OpenApiResponses,
    OpenApiExamples,
    CodeSimples: () => import('./lib/CodeSimples.vue')
  },
  props: {
    simples: {
      type: [Object, Array],
      required: true,
    },
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

  data() {
    return {
      lang: 'javascript',
      mimeType: 'application/x-www-form-urlencoded',
      params: [],
    }
  },
  methods: {
    tr,
    genParamsToSimple() {
      if(this.route.requestBody && Object.keys(this.route.requestBody).length) {
        const pos = Object.keys(this.route.requestBody)[0]
        const req = this.route.requestBody[pos]
        if(Object.keys(req).length) {
          this.mimeType = Object.keys(req)[0]
          const params = req[this.mimeType];

          if (params.schema) {
            const properties = params.schema.properties;
            for (const propertyName in properties) {
              const property = properties[propertyName] || {};

              let def = '';
              if(property.example) {
                def = property.example ?? ''
              }


              if (def === '' && property.type) {
                def = this.convertStringFormatToMd(property.type, propertyName);
              }

              this.params.push({
                in: 'postData',
                name: propertyName,
                value: def.toString()
              })
            }

          }
        }

      }

      for (let i in this.route.parameters) {
        const param = this.route.parameters[i]

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
          def = this.convertStringFormatToMd(param.schema.type, p_name);
        }

        this.params.push({
          in: p_in,
          name: p_name,
          value: def.toString()
        })
      }

      const append = this.simples;
      for (let i in append) {
        this.params.push({
          in: append[i].in,
          name: append[i].name,
          value: append[i].value
        })
      }
    },
    convertStringFormatToMd(format, name) {
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
        case 'string':
          return `{${name}}`;
        default:
          return format;
      }
    }
  },
  mounted() {
    this.genParamsToSimple();
  }
};
</script>
