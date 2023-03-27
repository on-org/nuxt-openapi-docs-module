<template>
  <div>
    <h2 v-if="props.parameters.length" class="text-lg font-bold mb-2">Parameters:</h2>
    <table v-if="props.parameters.length" class="table-auto w-full">
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
      <tr v-for="(param, index) in props.parameters" :key="index" class="open-api-param">
        <td class="border px-4 py-2 font-semibold">{{ tr(param, 'name', props.currentLocale) }}</td>
        <td class="border px-4 py-2" v-html="tr(param, 'description', props.currentLocale)"></td>
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

<script setup>
import {tr} from "../helpers";


const props = defineProps({
  parameters: [Object, Array],
  currentLocale: {
    type: String,
    required: true,
  },
  components: {
    type: Object,
    default: () => ({}),
  },
})

</script>

<style scoped>
.open-api-param {
  margin-bottom: 20px;
}
.open-api-param h4 {
  margin-top: 0;
}
</style>
