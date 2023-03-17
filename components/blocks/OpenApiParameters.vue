<template>
  <div>
    <h2 v-if="parametersRef.length" class="text-lg font-bold mb-2">Parameters:</h2>
    <table v-if="parametersRef.length" class="table-auto w-full">
      <thead>
      <tr>
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
      <tr v-for="(param, index) in parametersRef" :key="index" class="open-api-param">
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

  </div>
</template>

<script>
import {getSchemaValsFromPath, tr} from "../helpers";

export default {
  props: {
    parameters: [Object, Array],
    currentLocale: {
      type: String,
      required: true,
    },
    components: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    parametersRef() {
      if(!this.parameters) {
        return []
      }
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

  },

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
