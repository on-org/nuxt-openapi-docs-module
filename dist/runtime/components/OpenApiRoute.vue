<template>
  <div>
    <OpenApiRouteHeader
      :path="route.path"
      :method="method"
      :tags="route.tags"
      :summary="tr(route, 'summary', currentLocale)"
      :description="tr(route, 'description', currentLocale)"
      :deprecated="route.deprecated"
      :current-locale="currentLocale"
    />

    <div v-if="route.servers">
      <h3 class="text-lg font-bold">{{ $openapidoc.getLocaleText(currentLocale, 'Servers') }}</h3>
      <ul class="list-disc list-inside">
        <li v-for="server in route.servers" :key="server.url">
          <a class="text-blue-500 hover:underline" :href="server.url">{{ server.url }}</a>
        </li>
      </ul>
    </div>

    <div class="border border-gray-300 p-4 mb-8 doc-info" v-if="routeInfo">
      <h3 class="text-lg font-bold">{{ $openapidoc.getLocaleText(currentLocale, 'Info') }}:</h3>
      <div v-html="routeInfo"></div>
    </div>

    <OpenApiSecurity v-if="route.security" :security="route.security" :current-locale="currentLocale"
                     :path_doc="path_doc" :file="file"/>

    <OpenApiParameters v-if="route.parameters" :parameters="route.parameters" :current-locale="currentLocale"
                       :components="components"/>

    <OpenApiParameters v-if="subParams" :parameters="subParams" :current-locale="currentLocale" :components="components"
                       title="Global params"/>

    <OpenApiRequestBody v-if="route.requestBody" :requestBody="route.requestBody" :current-locale="currentLocale"
                        :components="components"/>

    <client-only v-if="route.path">
      <h2 class="text-lg font-bold mb-2">{{ $openapidoc.getLocaleText(currentLocale, 'Code simple') }}:</h2>
      <CodeSimples
        :url="route.path"
        :baseUrl="server"
        :method="method"
        :mime-type="mimeType"
        :params="params"
      ></CodeSimples>
    </client-only>

    <OpenApiResponses v-if="route.responses" :responses="route.responses" :current-locale="currentLocale"
                      :components="components"/>
    <OpenApiExamples v-if="route.examples" :examples="route.examples" :current-locale="currentLocale"/>

    <OpenApiCallbacks
      v-if="route.callbacks"
      :callbacks="route.callbacks"
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
import {tr} from "./helpers";

export default {
  name: 'OpenApiRoute',
  components: {
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
    routeInfo() {
      return this.$openapidoc.getRouteInfo(this.file, this.url, this.method)
    },
  },
  methods: {
    tr,
    genParamsToSimple() {
      this.params = [];

      if (this.route.requestBody && Object.keys(this.route.requestBody).length) {
        const pos = Object.keys(this.route.requestBody)[0];
        let req = this.route.requestBody[pos];

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

      for (let i in this.route.parameters) {
        const param = this.route.parameters[i];

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

      for (let i in globalParams) {
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
  },
  mounted() {
    this.genParamsToSimple();
  }
};
</script>
