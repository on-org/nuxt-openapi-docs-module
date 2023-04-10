<template>
  <div>
    <h2 class="text-2xl font-bold">{{ tr(info, 'title', currentLocale) }}</h2>
    <div class="my-4 description doc-info" v-html="tr(info, 'description', currentLocale)"></div>

    <div v-if="servers">
      <h3 class="text-lg font-bold">Servers</h3>
      <ul class="list-disc list-inside">
        <li v-for="server in servers" :key="server.url">
          <a class="text-blue-500 hover:underline" :href="getUrl(server)">{{ getUrl(server) }}</a> - <span v-if="server.description">{{ server.description }}</span>
        </li>
      </ul>
    </div>

    <h3 v-if="info.externalDocs" class="text-lg font-bold">External documentation</h3>
    <ul v-if="info.externalDocs" class="list-disc list-inside">
      <li>
        <a class="text-blue-500 hover:underline" :href="info.externalDocs.url">{{ tr(info.externalDocs, 'description', currentLocale) }}</a>
      </li>
    </ul>
    <div v-if="info.version">
      <h3 class="text-lg font-bold">version: {{ info.version }}</h3>
    </div>
  </div>
</template>
<script>
import {tr} from "./helpers";
export default {
  props: {
    info: {
      type: Object,
      required: true
    },
    servers: {
      required: true
    },
    currentLocale: {
      type: String,
      required: true,
    },
  },
  methods: {
    tr,
    getUrl(server) {
      let url = server.url;
      const variables = server.variables;

      // заменяем каждую переменную на ее значение
      for (const variableName in variables) {
        const variable = variables[variableName];
        const variableValue = variable.default;

        // если значение переменной не задано, используем значение по умолчанию
        if (variableValue) {
          const variablePattern = `{${variableName}}`;
          url = url.replace(variablePattern, variableValue);
        }
      }

      return url;
    }
  }
};
</script>
