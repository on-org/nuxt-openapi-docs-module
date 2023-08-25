<template>
  <div class="oapi-req-body-obj">
    <div class="oapi-req-body-obj-content-type">
      <span class="oapi-req-body-obj-content-type__label">
        {{ $openapidoc.getLocaleText('openapidoc.content_type') }}:
      </span>
      <OpenApiDropdown
        v-model="selectedMediaType"
        :options="types"
        text-prop="value"
        value-prop="value"
      />
    </div>
    <OpenApiTabs :key="selectedMediaType">
      <template
        v-if="medaTypeObject && medaTypeObject.schema"
        #Schema
      >
        <div
          class="oapi-req-body-obj__schema"
        >
          <OpenApiObjectModel
            :schema="medaTypeObject.schema"
            :current-locale="currentLocale"
            lite
          />
        </div>
      </template>
      <template
        v-if="medaTypeObject && medaTypeObject.example && !medaTypeObject.examples"
        #Example
      >
        <div
          class="oapi-req-body-obj__example"
        >
          <pre v-html="JSON.stringify(medaTypeObject.example, null, 2)"></pre>
        </div>
      </template>
      <template
        v-if="medaTypeObject && medaTypeObject.examples"
        #Examples
      >
        <div class="oapi-req-body-obj__examples">
          <OpenApiExampleObject
            v-for="(example, name) in medaTypeObject.examples"
            :key="name"
            :example="example"
            :name="name"
            :current-locale="currentLocale"
            name-tag="h4"
          />
        </div>
      </template>
    </OpenApiTabs>
  </div>
</template>

<script>
import OpenApiDropdown from '../lib/OpenApiDropdown.vue'
import OpenApiTabs from '../lib/OpenApiTabs.vue'
import OpenApiExampleObject from './OpenApiExampleObject.vue'
import OpenApiObjectModel from './OpenApiObjectModel.vue'

export default {
  name: 'OpenApiMediaTypes',
  components: { OpenApiExampleObject, OpenApiTabs, OpenApiObjectModel, OpenApiDropdown },
  props: {
    /* Record<string, MediaTypeObject> */
    data: {
      type: Object,
      required: true,
    },
    currentLocale: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
      selectedMediaType: null,
    }
  },
  computed: {
    types() {
      return Object.keys(this.data).map((item) => ({ value: item }));
    },
    medaTypeObject() {
      if (this.selectedMediaType === null) return null;
      return this.data[this.selectedMediaType] || null;
    }
  },
  created () {
    this.selectedMediaType = Object.keys(this.data || {})[0] || null;
  },
  methods: {}
}
</script>

<style>
.oapi-req-body-obj {
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 6px;
  border: 1px solid #E2E2E2;
}
.oapi-req-body-obj-content-type {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.oapi-req-body-obj-content-type__label {
  flex: 0 0 auto;
  margin-right: 1rem;
}
.oapi-req-body-obj-content-type .oapi-dd {
  flex: 0 0 auto;
  width: 200px;
  max-width: 100%;
}
@media (max-width: 422px) {
  .oapi-req-body-obj-content-type .oapi-dd {
    width: 150px;
  }
}
@media (max-width: 380px) {
  .oapi-req-body-obj-content-type .oapi-dd {
    width: 120px;
  }
}
</style>
