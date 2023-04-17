<template>
  <div>
    <div class="oapi-info-head">
      <h1>{{ tr(info, 'title', currentLocale) }}</h1>
      <span
        v-if="info.version"
        class="oapi-info-head__version"
      >
        {{ info.version }}
      </span>
    </div>
    <div
      class="oapi-info-block"
      v-html="tr(info, 'description', currentLocale)"
    />

    <div v-if="servers">
      <h2>Servers</h2>
      <ul class="list-disc list-inside">
        <li
          v-for="server in servers"
          :key="server.url"
        >
          <a
            class="text-blue-500 hover:underline"
            :href="getUrl(server)"
          >{{ getUrl(server) }}</a> - <span v-if="server.description">{{ server.description }}</span>
        </li>
      </ul>
    </div>

    <h2 v-if="info.externalDocs">
      External documentation
    </h2>
    <ul
      v-if="info.externalDocs"
      class="list-disc list-inside"
    >
      <li>
        <a
          class="text-blue-500 hover:underline"
          :href="info.externalDocs.url"
        >{{ tr(info.externalDocs, 'description', currentLocale) }}</a>
      </li>
    </ul>
    <div v-if="info.version">
      <h2 class="text-lg font-bold">
        version: {{ info.version }}
      </h2>
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

<style lang="scss">
.oapi-info-head {
  margin-bottom: 2rem;
  h1 {
    margin-bottom: 0;
    margin-top: 0;
    display: inline-block;
  }
  &__version {
    vertical-align: top;
    display: inline-block;
    margin-top: 8px;
    margin-left: 8px;
    padding: 0.2em 0.4em;
    font-size: .75rem;
    background-color: var(--oapi-bg-code-single);
    border-radius: 6px;
    white-space: nowrap;
  }
}
</style>
