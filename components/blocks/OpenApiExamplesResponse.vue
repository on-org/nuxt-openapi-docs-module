<template>
  <div class="examples-container">
    <h4 class="text-xl font-medium mb-2">Examples:</h4>
    <div v-for="(example, exampleName) in examples" :key="exampleName">
      <h5 class="text-lg font-medium mb-2">{{ exampleName }}</h5>
      <div class="example">
        <template v-if="example.summary">
          <p class="mb-1"><strong>Summary:</strong> {{ tr(example, 'summary', currentLocale) }}</p>
        </template>
        <template v-if="example.description">
          <p class="mb-1"><strong>Description:</strong> {{ tr(example, 'description', currentLocale) }}</p>
        </template>
        <template v-if="example.value">
          <open-api-schema :schema="example.schema" :current-locale="currentLocale" />
          <template v-if="isJsonMediaType(mediaType)">
            <pre class="mt-2"><code :class="'language-json'">{{ example.value }}</code></pre>
          </template>
          <template v-else-if="isXmlMediaType(mediaType)">
            <pre class="mt-2"><code :class="'language-xml'">{{ example.value }}</code></pre>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import openApiSchema from './OpenApiSchema.vue';
import {tr} from "../helpers";

export default {
  name: 'OpenApiExamples',
  components: {
    openApiSchema,
  },
  props: {
    examples: {
      type: Object,
      required: true,
    },
    mediaType: {
      type: String,
      default: '',
    },
    currentLocale: {
      type: String,
      required: true,
    },
  },
  methods: {
    tr,
    isJsonMediaType(mediaType) {
      return mediaType.includes('json');
    },
    isXmlMediaType(mediaType) {
      return mediaType.includes('xml');
    },
  },
};
</script>

<style scoped>
.examples-container {
  margin-bottom: 1rem;
}

.example {
  margin-bottom: 1rem;
}

.example pre {
  margin: 0;
}

.text-xl {
  font-size: 1.5rem;
}

.text-lg {
  font-size: 1.25rem;
}

.mb-1 {
  margin-bottom: 0.25rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.language-json {
  color: #c5a5c5;
}

.language-xml {
  color: #f5874f;
}
</style>
