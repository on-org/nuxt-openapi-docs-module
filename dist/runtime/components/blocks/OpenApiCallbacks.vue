<template>
  <div v-if="callbacks">
    <h2 class="text-lg font-bold mb-2">{{ $openapidoc.getLocaleText(currentLocale, 'Callbacks') }}:</h2>
    <div class="list-disc list-inside">
      <div v-for="(item, name) in callbacks" :key="name">
        <div  v-for="(callback, method) in item" :key="name">
          <h3 class="text-md font-bold mb-1">{{ method }} - {{ name }}</h3>
          <div class="text-sm mb-2"> {{ callback.description }}</div>
          <div v-for="(operation, opName) in callback" :key="opName">
            <div class="mb-2">
              <span class="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">{{ opName }}</span>
              <div class="text-sm mb-2">{{ operation.description }}</div>
              <OpenApiParameters
                v-if="operation.parameters"
                :parameters="operation.parameters"
                :current-locale="currentLocale"
                :components="components"
              />
              <OpenApiRequestBody
                v-if="operation.requestBody"
                :requestBody="operation.requestBody"
                :current-locale="currentLocale"
                :components="components"
              />
              <OpenApiResponses
                v-if="operation.responses"
                :responses="operation.responses"
                :current-locale="currentLocale"
                :components="components"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OpenApiCallbacks",
  props: {
    callbacks: {
      type: Object,
      default: () => ({}),
    },
    currentLocale: {
      type: String,
      default: "",
    },
    components: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
