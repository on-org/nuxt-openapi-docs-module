<template>
  <div class="oapi-route">
    <OpenApiRouteHeader
      :path="url"
      :method="method"
      :server="server"
      :tags="resolvedSchema.tags"
      :summary="$openapidocRef.tr(route, 'summary', currentLocale)"
      :description="$openapidocRef.tr(route, 'description', currentLocale)"
      :deprecated="route.deprecated"
      :current-locale="currentLocale"
    />

    <div v-if="resolvedSchema.servers" class="oapi-route__servers">
      <h2 id="servers">{{ $openapidoc.getLocaleText('openapidoc.servers') }}</h2>
      <OpenApiServer
        v-for="routeServer in resolvedSchema.servers"
        :key="routeServer.url"
        :server="routeServer"
        :current-locale="currentLocale"
      />
    </div>

    <div v-if="routeInfo">
      <h2 id="info">
        {{ $openapidoc.getLocaleText('openapidoc.info') }}
      </h2>
      <div class="oapi-doc-info" v-html="routeInfo" />
    </div>

    <OpenApiSecurity
      v-if="resolvedSchema.security"
      :security="resolvedSchema.security"
      :path_doc="path_doc"
      :file="file"
      :current-locale="currentLocale"
    />

    <OpenApiParameters
      v-if="resolvedSchema.parameters"
      :parameters="resolvedSchema.parameters"
      :current-locale="currentLocale"
      :components="components"
    />

    <OpenApiParameters
      v-if="subParams"
      :parameters="subParams"
      :current-locale="currentLocale"
      :components="components"
      title="Global params"
    />

    <OpenApiRequestBody
      v-if="resolvedSchema.requestBody"
      :request-body="resolvedSchema.requestBody"
      :current-locale="currentLocale"
      :components="components"
    />

    <OpenApiResponses
      v-if="resolvedSchema.responses"
      :responses="resolvedSchema.responses"
      :current-locale="currentLocale"
      :components="components"
    />

    <client-only v-if="url">
      <h2 id="code_simple" class="text-lg font-bold mb-2">
        {{ $openapidoc.getLocaleText('openapidoc.code_simple') }}:
      </h2>
      <CodeSimples
        :url="url"
        :base-url="server"
        :method="method"
        :mime-type="mimeType"
        :params="params"
      />
    </client-only>

    <OpenApiExamples
      v-if="resolvedSchema.examples"
      :examples="resolvedSchema.examples"
      :current-locale="currentLocale"
    />

    <OpenApiCallbacks
      v-if="resolvedSchema.callbacks"
      :callbacks="resolvedSchema.callbacks"
      :server="server"
      :current-locale="currentLocale"
      :components="components"
      :simples="simples"
      :params="params"
      :file="file"
      :path_doc="path_doc"
    />
  </div>
</template>

<script>
import OpenApiCallbacks from './blocks/OpenApiCallbacks.vue'
import OpenApiExamples from './blocks/OpenApiExamples.vue'
import OpenApiParameters from './blocks/OpenApiParameters.vue'
import OpenApiRequestBody from './blocks/OpenApiRequestBody.vue'
import OpenApiResponses from './blocks/OpenApiResponses.vue'
import OpenApiRouteHeader from './blocks/OpenApiRouteHeader.vue'
import OpenApiSecurity from './blocks/OpenApiSecurity.vue'
import OpenApiServer from './blocks/OpenApiServer.vue'
import CodeSimples from './lib/CodeSimples.vue'
import { repReplace } from "../helpers/replacer";

export default {
  name: 'OpenApiRoute',
  components: {
    OpenApiCallbacks,
    OpenApiResponses,
    OpenApiRequestBody,
    OpenApiSecurity,
    OpenApiParameters,
    OpenApiExamples,
    CodeSimples,
    OpenApiServer,
    OpenApiRouteHeader,
    // CodeSimples: () => import('./lib/CodeSimples.vue')
  },
  props: {
    route: {
      type: [Object, Array],
      required: true,
    },
    subParams: {
      required: false,
    },
    path_doc: {
      type: String,
      required: true,
    },
    file: {
      type: String,
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
  computed: {
    resolvedSchema() {
      return repReplace(this.route, [], this.$openapidocRef.definitions, this.$openapidocRef.components)
    },
    routeInfo() {
      return this.$openapidoc.getRouteInfo(this.file, this.url, this.method)
    },
  },
  mounted() {
    this.genParamsToSimple();
  },
  methods: {
    genParamsToSimple() {
      this.params = [];

      if (this.resolvedSchema.requestBody && Object.keys(this.resolvedSchema.requestBody).length) {
        const pos = Object.keys(this.resolvedSchema.requestBody)[0];
        const req = this.resolvedSchema.requestBody[pos];

        if (req && Object.keys(req).length) {
          this.mimeType = Object.keys(req)[0];
          const params = req[this.mimeType];

          if (params.schema) {
            const properties = params.schema.properties;
            for (const propertyName in properties) {
              const property = properties[propertyName] || {};

              let def = '';
              if (property.example) {
                def = property.example ?? '';
              }

              if (def === '' && property.type) {
                def = this.convertStringFormatToMd(property.type, propertyName);
              }

              if (property.type === 'array') {
                // Handle array types
                if (property.items.type) {
                  if (property.items.type === 'array' || property.items.type === 'object') {
                    def = [this.handleNestedArrayOrObject(property, propertyName)];
                  } else {
                    def = [this.convertStringFormatToMd(property.items.type, propertyName)];
                  }
                } else if (property.items.enum) {
                  def = [property.items.enum[0]];
                } else if (property.items.properties || property.items.additionalProperties) {
                  def = [this.handleNestedArrayOrObject(property.items, propertyName)];
                }

                this.params.push({
                  in: 'postData',
                  name: propertyName,
                  value: JSON.parse(JSON.stringify(def))
                });
              } else if (property.type === 'object') {
                // Handle object types
                if (property.additionalProperties && property.additionalProperties.type) {
                  def = {
                    [propertyName]: this.convertStringFormatToMd(property.additionalProperties.type, propertyName)
                  };
                } else if (property.properties) {
                  def = {};
                  for (const subPropertyName in property.properties) {
                    const subProperty = property.properties[subPropertyName] || {};
                    if (subProperty.type) {
                      def[subPropertyName] = this.convertStringFormatToMd(subProperty.type, subPropertyName);
                    } else if (subProperty.properties || subProperty.additionalProperties) {
                      def[subPropertyName] = this.handleNestedArrayOrObject(subProperty, propertyName);
                    }
                  }
                }
                this.params.push({
                  in: 'postData',
                  name: propertyName,
                  value: JSON.parse(JSON.stringify(def))
                });
              } else {
                this.params.push({
                  in: 'postData',
                  name: propertyName,
                  value: def.toString()
                });
              }
            }
          }
        }
      }

      for (const i in this.resolvedSchema.parameters) {
        const param = this.resolvedSchema.parameters[i];

        const p_name = param.name ?? '';
        const p_in = param.in ?? '';

        let def = '';
        if (param.schema) {
          def = param.schema.default ?? '';
        } else {
          def = param.default ?? '';
        }

        if (def === '' && param.type) {
          def = this.convertStringFormatToMd(param.type, p_name);
        }

        if (def === '' && param.schema && param.schema.type) {
          def = this.convertStringFormatToMd(param.schema.type, p_name);
        }

        if (def === '' && param.enum) {
          def = param.enum[0] ?? '';
        }

        this.params.push({
          in: p_in,
          name: p_name,
          value: def.toString()
        });
      }

      const globalParams = this.$openapidoc.getParams();

      for (const i in globalParams) {
        const param = globalParams[i];
        if (param.value === '' && param.type) {
          param.value = this.convertStringFormatToMd(param.type, param.name);
        }

        this.params.push({
          in: param.pos,
          name: param.name,
          value: JSON.parse(JSON.stringify(param.value))
        });
      }
    },

    handleNestedArrayOrObject(property, propertyName) {
      if (property.type === 'array') {
        // Handle nested array
        if (property.items.type) {
          if (property.items.type === 'array') {
            return [this.handleNestedArrayOrObject(property.items, propertyName)];
          } else if (property.items.type === 'object') {
            return [this.handleNestedObject(property.items)];
          } else {
            return [this.convertStringFormatToMd(property.items.type)];
          }
        } else if (property.items.enum) {
          return [property.items.enum[0]];
        } else if (property.items.properties || property.items.additionalProperties) {
          return [this.handleNestedObject(property.items)];
        }
      } else if (property.type === 'object') {
        // Handle nested object
        return this.handleNestedObject(property);
      }
      return '';
    },

    handleNestedObject(property) {
      if (property.additionalProperties && property.additionalProperties.type) {
        return {
          [propertyName]: this.convertStringFormatToMd(property.additionalProperties.type, propertyName)
        };
      } else if (property.properties) {
        const obj = {};
        for (const subPropertyName in property.properties) {
          const subProperty = property.properties[subPropertyName] || {};
          if (subProperty.type) {
            obj[subPropertyName] = this.convertStringFormatToMd(subProperty.type, subPropertyName);
          } else if (subProperty.properties || subProperty.additionalProperties) {
            obj[subPropertyName] = this.handleNestedArrayOrObject(subProperty, subPropertyName);
          }
        }
        return obj;
      }
      return '';
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
        case 'number':
          return '1';
        case 'string':
          return `{${name}}`;
        default:
          return format;
      }
    }
  }
};
</script>
<style lang="scss">
  .oapi-doc-info {
    margin-bottom: 20px;
    box-sizing: border-box;
    background: #eafffd;
    padding: 8px 16px;
  }
</style>
