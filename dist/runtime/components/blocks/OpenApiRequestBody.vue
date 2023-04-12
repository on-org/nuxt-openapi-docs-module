<template>
  <div>
    <h2 class="text-lg font-bold">{{ $openapidoc.getLocaleText(currentLocale, 'Request Body') }}:</h2>
    <div class="mt-2 p-2 rounded-md" v-if="requestBody.description" v-html="tr(requestBody, 'description', currentLocale)"></div>

    <OpenApiTabs>
      <template v-for="(val, key) in requestBody.content" :slot="key">
        <pre class="mt-2 p-2 rounded-md" v-text="key"></pre>
        <OpenApiSchema :schema="val.schema" :current-locale="currentLocale" :components="components" class="mt-4" />
      </template>
    </OpenApiTabs>
  </div>
</template>
<style>
.text-lg {
  font-size: 1.125rem;
}
.font-medium {
  font-weight: 500;
}
.mt-2 {
  margin-top: 0.5rem;
}
.bg-gray-100 {
  background-color: #f3f4f6;
}
.p-2 {
  padding: 0.5rem;
}
.rounded-md {
  border-radius: 0.375rem;
}
.mt-4 {
  margin-top: 1rem;
}
</style>

<script>
import {tr} from "../helpers";

export default {
  name: 'OpenApiRequestBody',
  props: {
    requestBody: {
      type: Object,
      required: true,
    },
    currentLocale: {
      type: String,
      required: true,
    },
    components: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    tr
  },
  computed: {

  }
};
</script>
