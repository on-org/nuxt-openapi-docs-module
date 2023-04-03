<template>
  <div>
    <h2 v-if="parameters.length" class="text-lg font-bold mb-2"><span v-text="title"></span>:</h2>
    <table v-if="parameters.length" class="table-auto w-full">
      <thead>
      <tr>
        <th class="border px-4 py-2">Parameter Name</th>
        <th class="border px-4 py-2" style="width: 25%">Description</th>
        <th class="border px-4 py-2">In</th>
        <th class="border px-4 py-2">Required</th>
        <th class="border px-4 py-2">schema</th>
        <th class="border px-4 py-2">Example</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(param, index) in parameters" :key="index" class="open-api-param">
        <td class="border px-4 py-2 font-semibold">{{ tr(param, 'name', currentLocale) }}</td>
        <td class="border px-4 py-2" v-html="tr(param, 'description', currentLocale)"></td>
        <td class="border px-4 py-2">{{ param.in ? param.in : '-' }}</td>
        <td class="border px-4 py-2">{{ param.required ? 'Yes' : 'No' }}</td>
        <td class="border px-4 py-2">
          <OpenApiSchema :schema="param.schema" :current-locale="currentLocale" :components="components" class="p-0" />
        </td>
        <td class="border px-4 py-2">{{ param.example ? param.example : '-' }}</td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import OpenApiSchema from './OpenApiSchema.vue';
import {tr} from "../helpers";

export default {
  components: {
    OpenApiSchema
  },
  props: {
    title: {
      type: String,
      required: false,
      default: 'Parameters',
    },
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
