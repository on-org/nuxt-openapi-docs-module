<template>
  <div
    v-if="callbacks"
    class="oapi-callbacks"
  >
    <h2 id="callbacks">{{ $openapidoc.getLocaleText('openapidoc.callbacks') }}</h2>
    <div class="oapi-callbacks__list">
      <div
        v-for="(item, name) in callbacks"
        :key="name"
      >
        <div
          v-for="(callback, method) in item"
          :key="method"
          class="oapi-callback-method"
        >
          <h3 :id="method +'-'+ name" class="oapi-callback-method__name">
            <code>{{ method }}</code> - {{ name }}
          </h3>
          <div
            v-if="callback.description"
            class="oapi-callback-method__description"
            v-html="callback.description"
          />
          <div
            v-for="(operation, opName) in callback"
            :key="opName"
            class="oapi-callback-op"
          >
            <div class="oapi-callback-op__name">
              <span
                class="oapi-method-tag"
                :class="`oapi-method-tag--${opName}`"
              >{{ opName }}</span>
            </div>
            <div
              v-if="operation.description"
              class="oapi-callback-op__description"
              v-html="operation.description"
            />
            <OpenApiParameters
              v-if="operation.parameters"
              :parameters="operation.parameters"
              :current-locale="currentLocale"
              :components="components"
            />
            <OpenApiRequestBody
              v-if="operation.requestBody"
              is-cb
              :h-prefix="`${name}-${opName}-${method}`"
              :request-body="operation.requestBody"
              :current-locale="currentLocale"
              :components="components"
            />
            <OpenApiResponses
              is-cb
              :h-prefix="`${name}-${opName}-${method}`"
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
</template>

<script>

import OpenApiParameters from './OpenApiParameters.vue'
import OpenApiRequestBody from './OpenApiRequestBody.vue'
import OpenApiResponses from './OpenApiResponses.vue'

export default {
  name: "OpenApiCallbacks",
  components: { OpenApiResponses, OpenApiRequestBody, OpenApiParameters },
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
<style lang="scss">
.oapi-callbacks {
  margin-top: 42px;
  border-top: 2px solid #e2e2e2;
  &__list {
    padding-left: 16px;
  }
}
.oapi-callback-method {
  &__name {
    code {
      font-size: inherit;
    }
  }
}
.oapi-callback-op {
  padding-left: 16px;
  &__name {
    .oapi-method-tag {
      font-size: 1.2rem;
    }
  }
}
</style>
