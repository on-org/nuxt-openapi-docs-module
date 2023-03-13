<template>
  <div>
    <h2 v-if="noRefParam.length" class="text-lg font-bold mb-2">Parameters:</h2>
    <table v-if="noRefParam.length" class="table-auto w-full">
      <thead>
      <tr class="bg-gray-100">
        <th class="border px-4 py-2">Parameter Name</th>
        <th class="border px-4 py-2">Description</th>
        <th class="border px-4 py-2">In</th>
        <th class="border px-4 py-2">Required</th>
        <th class="border px-4 py-2">Type</th>
        <th class="border px-4 py-2">Possible Values</th>
        <th class="border px-4 py-2">Default</th>
        <th class="border px-4 py-2">Example</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(param, index) in noRefParam" :key="index" class="open-api-param bg-white">
        <td class="border px-4 py-2 font-semibold">{{ tr(param, 'name', currentLocale) }}</td>
        <td class="border px-4 py-2" v-html="tr(param, 'description', currentLocale)"></td>
        <td class="border px-4 py-2">{{ param.in ? param.in : '-' }}</td>
        <td class="border px-4 py-2">{{ param.required ? 'Yes' : 'No' }}</td>
        <td class="border px-4 py-2">{{ param.schema ? param.schema.type : '-' }}</td>
        <td class="border px-4 py-2">{{ param.schema && param.schema.enum ? param.schema.enum.join(', ') : '-' }}</td>
        <td class="border px-4 py-2">{{ param.schema && param.schema.default ? param.schema.default : param.default ? param.default : '-' }}</td>
        <td class="border px-4 py-2">{{ param.example ? param.example : '-' }}</td>
      </tr>
      </tbody>
    </table>

    <h2 v-if="noRefParam.length" class="text-lg font-bold mb-2">Code simples:</h2>
    <client-only>
      <code-simples
          v-if="noRefParam.length"
          :url="url"
          :baseUrl="server"
          :method="method"
          :cookies="cookies"
          :headers="headers"
          :query="query"
          :path="path"
          :postData="postData"
      ></code-simples>
    </client-only>
  </div>
</template>

<script>
import {getSchemaValsFromPath, tr} from "../helpers";
import CodeSimples from "../lib/CodeSimples.vue";

export default {
  components: {
    CodeSimples
  },
  props: {
    parameters: [Object, Array],
    currentLocale: {
      type: String,
      required: true,
    },
    server: {
      type: String,
      required: false,
      default: ''
    },
    url: {
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
      cookies: [],
      headers: [],
      query: [],
      path: [],
      postData: [],
    }
  },
  computed: {
    noRefParam() {
      let res = [];
      for (let i in this.parameters) {
        let param = this.parameters[i]
        if (param.$ref) {
          const link = getSchemaValsFromPath(param.$ref)
          if(this.components[link.path] && this.components[link.path][link.name]) {
            param = this.components[link.path][link.name];
          }
        }
        param.path = i;

        res.push(param);
      }
      return res;
    }
  },
  methods: {
    tr,
    genParamsToSimple() {
      for (let i in this.parameters) {
        const param = this.parameters[i]

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
          def = this.convertStringFormatToMd(param.schema.type);
        }

        if(this[p_in] && Array.isArray(this[p_in])) {
          this[p_in].push({
            name: p_name,
            value: def.toString()
          })
        }
      }
    },
    convertStringFormatToMd(format) {
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
  },
  mounted() {
    this.genParamsToSimple();
  }
};
</script>

<style scoped>
.open-api-param {
  margin-bottom: 20px;
}
.open-api-param h4 {
  margin-top: 0;
}
</style>
