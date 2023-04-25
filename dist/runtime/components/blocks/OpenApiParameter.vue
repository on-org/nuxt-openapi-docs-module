<template>
  <div class="oapi-res-param">
    <div
      v-if="data.name && !hideName"
      class="oapi-res-param__name"
    >
      <code>{{ data.name }}</code>
    </div>
    <div
      v-if="data.required"
      class="oapi-res-param__required"
    >
      {{ $openapidoc.getLocaleText('openapidoc.required') }}
    </div>
    <div
      v-if="flags.length"
      class="oapi-res-param-flags"
    >
      <span
        v-for="flag in flags"
        :key="flag"
        class="oapi-res-param-flags__flag"
      >{{ flag }}</span>
    </div>
    <div
      v-if="data.description && !hideDescription"
      class="oapi-res-param__description"
      v-html="$openapidocRef.tr(data, 'description', currentLocale)"
    />

    <div
      v-if="data.in"
      class="oapi-res-param__param"
    >
      {{ $openapidoc.getLocaleText('openapidoc.in') }}: <code>{{ data.in }}</code>
    </div>
    <div
      v-if="data.style"
      class="oapi-res-param__param"
    >
      {{ $openapidoc.getLocaleText('openapidoc.style') }}: <code>{{ data.style }}</code>
    </div>
    <div
      v-if="data.example"
      class="oapi-res-param__param"
    >
      {{ $openapidoc.getLocaleText('openapidoc.example') }}: <br v-if="exampleString.includes('\n')"><code v-html="exampleString" />
    </div>
    <div
      v-if="data.examples"
      class="oapi-res-param__examples"
    >
      <div class="oapi-res-param__muted">
        {{ $openapidoc.getLocaleText('openapidoc.examples') }}:
      </div>
      <div
        v-for="(example, exampleName) in data.examples"
        :key="exampleName"
        class="oapi-res-param-example"
      >
        <div class="oapi-res-param-example__name">
          {{ exampleName }}
        </div>
        <div
          v-if="example.summary"
          class="oapi-res-param-example__summary"
        >
          {{ $openapidocRef.tr(example, 'summary', currentLocale) }}
        </div>
        <div
          v-if="example.description"
          class="oapi-res-param-example__description"
          v-html="$openapidocRef.tr(example, 'description', currentLocale)"
        />
        <div
          v-if="example.value"
          class="oapi-res-param-example__value"
        >
          <pre v-html="JSON.stringify(example.value, null, 2)" />
        </div>
      </div>
    </div>

    <div
      v-if="data.schema"
      class="oapi-res-param__schema"
    >
      <div class="oapi-res-param__muted">
        {{ $openapidoc.getLocaleText('openapidoc.schema') }}:
      </div>
      <OpenApiObjectModel
        lite
        :schema="data.schema"
        :current-locale="currentLocale"
      />
    </div>

    <div
      v-if="data.content"
      class="oapi-res-param__content"
    >
      <div class="oapi-res-param__muted">
        {{ $openapidoc.getLocaleText('openapidoc.content') }}:
      </div>
      <OpenApiMediaTypes :current-locale="currentLocale" :data="data.content" />
    </div>
  </div>
</template>

<script>
import OpenApiMediaTypes from './OpenApiMediaTypes.vue'
import OpenApiObjectModel from './OpenApiObjectModel.vue'

export default {
  name: 'OpenApiParameter',
  components: { OpenApiMediaTypes, OpenApiObjectModel },
  props: {
    /*
    * OpenAPI Header Object or Parameter Object
    * https://spec.openapis.org/oas/v3.0.3#headerObject
    * https://spec.openapis.org/oas/v3.0.3#parameterObject
    */
    data: {
      type: Object,
      required: true,
    },
    hideName: Boolean,
    hideDescription: Boolean,
    lite: Boolean,
    currentLocale: {
      type: String,
      required: true,
    },
  },
  data () {
    return {}
  },
  computed: {
    flags() {
      const arr = [];
      if (this.data.deprecated) {
        arr.push('Deprecated');
      }
      if (this.data.allowEmptyValue) {
        arr.push('Allow empty');
      }
      if (this.data.allowReserved) {
        arr.push('Allow reserved');
      }
      if (this.data.allowEmptyValue) {
        arr.push('Explode');
      }
      return arr;
    },
    exampleString() {
      if (!this.data.example) return '';
      if (typeof this.data.example === 'object') return JSON.stringify(this.data.example, null, 2);
      return this.data.example.toString();
    },
  },
}
</script>

<style>
.oapi-res-param {
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 6px;
  border: 1px solid #E2E2E2;
}
.oapi-res-param__name {
  margin-bottom: 0.5rem;
}
.oapi-res-param__name code {
  font-size: 1rem;
}
.oapi-res-param__muted {
  font-weight: 600;
  font-size: 0.825rem;
  color: #999;
}
.oapi-res-param__schema {
  padding-top: 1rem;
  margin-bottom: 1rem;
}
.oapi-res-param__content .oapi-req-body-obj {
  border: none;
  padding: 0 0 0 24px;
}
.oapi-res-param__description {
  margin-bottom: 8px;
}
.oapi-res-param__param {
  font-size: 0.875rem;
  margin-bottom: 8px;
}

.oapi-res-param-example {
  padding-left: 24px;
}
.oapi-res-param-example__name {
  font-weight: 600;
  margin-bottom: 8px;
}
.oapi-res-param-example__summary {
  color: #999;
  font-size: 0.875rem;
  margin-top: -8px;
  margin-bottom: 8px;
}
.oapi-res-param-example__description {
  margin-bottom: 8px;
}

.oapi-res-param-flags {
  display: flex;
  flex-wrap: wrap;
  padding-top: 4px;
  margin-bottom: 4px;
}
.oapi-res-param-flags__flag {
  display: inline-block;
  white-space: nowrap;
  padding: 2px 8px;
  border: 1px solid #E2E2E2;
  font-size: 0.7rem;
  border-radius: 4px;
  margin: 0 8px 8px 0;
}
</style>
