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
import {getSchemaValsFromPath, tr} from "../helpers";


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

const parametersRef = computed(() => {
  if(!props.parameters) {
    return []
  }
  let res = [];
  for (let i in props.parameters) {
    let param = props.parameters[i]
    if (param.$ref) {
      const link = getSchemaValsFromPath(param.$ref)
      if(props.components[link.path] && props.components[link.path][link.name]) {
        param = props.components[link.path][link.name];
      }
    }
    param.path = i;

    res.push(param);
  }
  return res;
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
