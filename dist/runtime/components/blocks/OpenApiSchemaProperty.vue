<template>
  <li
    v-if="resolvedSchema"
    class="oapi-prop"
    :class="classes"
  >
    <div class="oapi-prop-body">
      <div class="oapi-prop-head">
        <button
          v-if="(isObject && hasProperties) || isOneOf"
          class="oapi-prop-head__expand"
          :class="{'oapi-prop-head__expand--is-open': isOpen}"
          @click="toggle"
        >
          <OpenApiExpandIcon />
        </button>
        <div
          v-if="name"
          class="oapi-prop__name"
        >
          <code>{{ name }}</code>
        </div>
        <div class="oapi-prop__type">
          {{ computedType }}
        </div>
        <div
          v-if="required"
          class="oapi-prop__required"
        >
          {{ $openapidoc.getLocaleText('openapidoc.required') }}
        </div>
      </div>
      <div class="oapi-prop__content">
        <div
          v-if="resolvedSchema.title && !hideTitleDescription"
          class="oapi-prop__title"
        >
          {{ $openapidocRef.tr(resolvedSchema, 'title', currentLocale) }}
        </div>
        <div
          v-if="resolvedSchema.description && !hideTitleDescription"
          class="oapi-prop__description"
          v-html="$openapidocRef.tr(resolvedSchema, 'description', currentLocale)"
        />
        <div
          v-if="resolvedSchema.externalDocs"
          class="oapi-prop__ext-docs"
        >
          <div
            v-if="resolvedSchema.externalDocs.description"
            class="oapi-prop__ext-docs-md"
            v-html="$openapidocRef.tr(resolvedSchema.externalDocs, 'description', currentLocale)"
          />
          <a
            :href="resolvedSchema.externalDocs.url"
            target="_blank"
          >{{ $openapidoc.getLocaleText('openapidoc.external_docs') }}</a>
        </div>
        <div
          v-if="genExample"
          class="oapi-prop-add-info"
        >
          {{ $openapidoc.getLocaleText('openapidoc.example') }}:
          <code v-html="genExample" />
        </div>
        <div
          v-if="resolvedSchema.multipleOf !== undefined"
          class="oapi-prop-add-info"
        >
          {{ $openapidoc.getLocaleText('openapidoc.multiple_of') }}: <code>{{ resolvedSchema.multipleOf }}</code>
        </div>
        <div
          v-if="resolvedSchema.maximum !== undefined"
          class="oapi-prop-add-info"
        >
          <code>{{ resolvedSchema.exclusiveMaximum ? '<' : '<=' }} {{ resolvedSchema.maximum }}</code>
        </div>
        <div
          v-if="resolvedSchema.minimum !== undefined"
          class="oapi-prop-add-info"
        >
          <code>{{ resolvedSchema.exclusiveMinimum ? '>' : '>=' }} {{ resolvedSchema.minimum }}</code>
        </div>
        <div
          v-if="resolvedSchema.maxLength !== undefined"
          class="oapi-prop-add-info"
        >
          {{ $openapidoc.getLocaleText('openapidoc.maximum') }}: <code>{{ resolvedSchema.maxLength }}</code>
        </div>
        <div
          v-if="resolvedSchema.minLength !== undefined"
          class="oapi-prop-add-info"
        >
          {{ $openapidoc.getLocaleText('openapidoc.minimum') }}: <code>{{ resolvedSchema.minLength }}</code>
        </div>
        <div
          v-if="resolvedSchema.maxItems !== undefined"
          class="oapi-prop-add-info"
        >
          {{ $openapidoc.getLocaleText('openapidoc.maximum') }}: <code>{{ resolvedSchema.maxItems }}</code>
        </div>
        <div
          v-if="resolvedSchema.minItems !== undefined"
          class="oapi-prop-add-info"
        >
          {{ $openapidoc.getLocaleText('openapidoc.maximum') }}: <code>{{ resolvedSchema.minItems }}</code>
        </div>
        <div
          v-if="resolvedSchema.maxProperties !== undefined"
          class="oapi-prop-add-info"
        >
          {{ $openapidoc.getLocaleText('openapidoc.maximum_props') }}: <code>{{ resolvedSchema.maxProperties }}</code>
        </div>
        <div
          v-if="resolvedSchema.minProperties !== undefined"
          class="oapi-prop-add-info"
        >
          {{ $openapidoc.getLocaleText('openapidoc.minimum_props') }}: <code>{{ resolvedSchema.minProperties }}</code>
        </div>
        <div
          v-if="resolvedSchema.additionalProperties !== undefined && typeof resolvedSchema.additionalProperties === 'boolean'"
          class="oapi-prop-add-info"
        >
          {{ $openapidoc.getLocaleText('openapidoc.additional_properties') }}: <code>{{ !!resolvedSchema.additionalProperties }}</code>
        </div>
        <div
          v-if="resolvedSchema.pattern"
          class="oapi-prop-add-info"
        >
          {{ $openapidoc.getLocaleText('openapidoc.pattern') }}: <code v-html="resolvedSchema.pattern" />
        </div>
        <div
          v-if="resolvedSchema.enum"
          class="oapi-prop-add-info oapi-prop-add-info--enums"
        >
          {{ $openapidoc.getLocaleText('openapidoc.enum') }}:
          <span
            v-for="item in resolvedSchema.enum"
            :key="item"
          >
            <code>{{ item }}</code>{{ ' ' }}
          </span>
        </div>
        <div
          v-if="flags.length"
          class="oapi-prop-flags"
        >
          <span
            v-for="flag in flags"
            :key="flag"
            class="oapi-prop-flags__flag"
          >{{ flag }}</span>
        </div>
      </div>
      <OpenApiSchemaSubObject
        v-if="resolvedSchema.not && (!isObject || isOpen)"
        :current-locale="currentLocale"
        :title="`${$openapidoc.getLocaleText('openapidoc.not')}:`"
      >
        <OpenApiSchemaProperty
          :current-locale="currentLocale"
          :schema="resolvedSchema.not"
        />
      </OpenApiSchemaSubObject>
      <div
        v-if="isObject && isOpen && hasProperties"
        class="oapi-prop__props-title"
      >
        {{ $openapidoc.getLocaleText('openapidoc.properties') }}:
      </div>
    </div>
    <div
      v-if="isObject && isOpen && hasProperties"
      class="oapi-prop-sub"
    >
      <ul
        class="oapi-object__list"
      >
        <OpenApiSchemaProperty
          v-for="(property, key) in resolvedSchema.properties"
          :key="key"
          :schema="property"
          :name="key"
          :current-locale="currentLocale"
          :required="requiredProps.includes(key)"
        />
      </ul>
    </div>
    <OpenApiSchemaSubObject
      v-if="resolvedSchema.additionalProperties && typeof resolvedSchema.additionalProperties === 'object' && isObject"
      :title="`${$openapidoc.getLocaleText('openapidoc.additional_properties')}:`"
      :current-locale="currentLocale"
    >
      <OpenApiSchemaProperty
        :schema="resolvedSchema.additionalProperties"
        :current-locale="currentLocale"
      />
    </OpenApiSchemaSubObject>
    <div
      v-if="(isOneOf || isAnyOf) && isOpen"
      class="oapi-prop__props-title"
    >
      <span v-if="isOneOf">{{ $openapidoc.getLocaleText('openapidoc.one_of') }}:</span>
      <span v-if="!isOneOf && isAnyOf">{{ $openapidoc.getLocaleText('openapidoc.any_of') }}:</span>
    </div>
    <ul
      v-if="(isOneOf || isAnyOf) && isOpen"
      class="oapi-prop-items-of"
    >
      <OpenApiSchemaProperty
        v-for="(item, i) in computedOneAnyOf"
        :key="i"
        :schema="item"
        :current-locale="currentLocale"
      />
    </ul>
    <OpenApiSchemaSubObject
      v-if="isArray"
      title="Items:"
      :current-locale="currentLocale"
    >
      <OpenApiSchemaProperty
        :schema="resolvedSchema.items"
        :current-locale="currentLocale"
      />
    </OpenApiSchemaSubObject>
  </li>
</template>

<script>
import OpenApiExpandIcon from '../icons/OpenApiExpandIcon.vue'
import OpenApiSchemaSubObject from './OpenApiSchemaSubObject.vue'
import {sample} from "./modules/openapi-sampler/openapi-sampler";

export default {
  name: 'OpenApiSchemaProperty',
  components: { OpenApiSchemaSubObject, OpenApiExpandIcon },
  props: {
    name: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
    },
    schema: {
      type: Object,
      required: true,
    },
    noLines: {
      type: Boolean,
    },
    hideTitleDescription: {
      type: Boolean,
    },
    open: {
      type: Boolean,
    },
    currentLocale: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
      isOpen: false,
    }
  },
  computed: {
    resolvedSchema() {
      return this.schema;
    },
    isPlainArray() {
      if (!this.resolvedSchema) return false;
      const flatTypes = ['string', 'integer', 'number', 'boolean'];
      return this.resolvedSchema.type === 'array' && this.resolvedSchema.items && flatTypes.includes(this.resolvedSchema.items.type);
    },
    isObject() {
      if (!this.resolvedSchema) return false;
      return this.resolvedSchema.type === 'object';
    },
    isArray() {
      if (!this.resolvedSchema) return false;
      return this.resolvedSchema.type === 'array';
    },
    isOneOf() {
      return !!(this.resolvedSchema && this.resolvedSchema.oneOf);
    },
    isAnyOf() {
      return !!(this.resolvedSchema && this.resolvedSchema.anyOf);
    },
    hasProperties() {
      return !!Object.keys(this.resolvedSchema.properties || {}).length;
    },
    exampleString() {
      if (!this.resolvedSchema.example) return '';
      if (typeof this.resolvedSchema.example === 'object') return JSON.stringify(this.resolvedSchema.example, null, 2);
      return this.resolvedSchema.example.toString();
    },
    genExample() {
      try {
        return JSON.stringify(sample(this.resolvedSchema, {quiet: true}));
      } catch (e){
        return null;
      }
    },
    computedOneAnyOf() {
      if (!this.resolvedSchema) return [];
      return this.resolvedSchema.oneOf || this.resolvedSchema.anyOf;
    },
    computedType() {
      let defType = this.resolvedSchema.type || 'any';
      if (this.isPlainArray) {
        defType = `array<${this.getType(this.resolvedSchema.items)}>`;
        if (this.resolvedSchema.nullable) {
          defType = `${defType} or null`;
        }
        return defType;
      }

      return this.getType(this.resolvedSchema);
    },
    flags() {
      const flags = [];
      if (this.resolvedSchema.deprecated) {
        flags.push('Deprecated');
      }
      if (this.resolvedSchema.readOnly) {
        flags.push('ReadOnly');
      }
      if (this.resolvedSchema.writeOnly) {
        flags.push('WriteOnly');
      }
      if (this.resolvedSchema.uniqueItems) {
        flags.push('UniqueItems');
      }
      return flags;
    },
    requiredProps() {
      if (this.isObject && this.resolvedSchema.required && Array.isArray(this.resolvedSchema.required)) {
        return this.resolvedSchema.required;
      }
      return [];
    },
    classes() {
      return {
        'oapi-prop--is-object': this.isObject,
        'oapi-prop--no-lines': this.noLines,
        'oapi-prop--no-name': !this.name,
        'oapi-prop--deprecated': !!this.resolvedSchema.deprecated,
      }
    }
  },
  created () {
    if (this.isOneOf) {
      this.isOpen = true;
    }
    if (this.open) {
      this.isOpen = true;
    }
  },
  methods: {
    getType(schema) {
      let defType = schema.type || 'any';
      if (!schema) return defType;
      if (schema.oneOf || schema.anyOf) {
        const arr = schema.oneOf || schema.anyOf || [];
        if (arr.length > 0 && arr[0].type && arr.every((item) => item.type && item.type === arr[0].type )) {
          return arr[0].type;
        } else {
          return 'mixed';
        }
      } else {
        if (schema.format) {
          defType = `${defType}:${schema.format}`;
        }
      }
      if (schema.nullable) {
        defType = `${defType} or null`;
      }
      return defType;
    },
    toggle() {
      this.isOpen = !this.isOpen;
    }
  },
}
</script>

<style>
.oapi-prop__name {
  position: relative;
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;
}
.oapi-prop__name code {
  font-size: 0.85rem;
}
.oapi-prop__type {
  color: #7F8286;
  flex: 0 0 auto;
}
.oapi-prop__required {
  color: #e3a637;
  flex: 0 0 auto;
  text-transform: lowercase;
}
.oapi-prop__content {
  padding-left: 4px;
}
.oapi-prop--no-name .oapi-prop__content {
  padding-left: 0;
}
.oapi-prop__title {
  font-weight: 600;
  color: #7F8286;
  margin-bottom: 4px;
}
.oapi-prop__description {
  margin-bottom: 0.5rem;
}
.oapi-prop--deprecated .oapi-prop__name::before {
  content: "";
  height: 1px;
  background: #9d6c6c;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
}
.oapi-prop--deprecated .oapi-prop__name,
.oapi-prop--deprecated .oapi-prop__type,
.oapi-prop--deprecated .oapi-prop__required,
.oapi-prop--deprecated .oapi-prop__description,
.oapi-prop--deprecated .oapi-prop__title {
  opacity: 0.6;
}
.oapi-prop__props-title {
  font-weight: 600;
  font-size: 0.825rem;
  color: #999;
}

.oapi-prop-head {
  position: relative;
  display: flex;
  align-items: center;
}
.oapi-prop-head::before {
  width: 24px;
  height: 1px;
  background: #E2E2E2;
  content: "";
  position: absolute;
  left: -32px;
}
.oapi-prop--no-lines > .oapi-prop-body > .oapi-prop-head::before {
  display: none;
}
.oapi-prop-head > * {
  margin-right: 1rem;
}
.oapi-prop-head > *:last-child {
  margin-right: 0;
}
.oapi-prop-head button.oapi-prop-head__expand {
  cursor: pointer;
  background: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0;
  margin-left: -24px;
  margin-right: 8px;
  z-index: 1;
}
.oapi-prop-head button.oapi-prop-head__expand svg {
  transition: transform 0.3s ease-in-out;
  width: 16px;
  height: 16px;
  transform: rotate(-90deg);
}
.oapi-prop-head button.oapi-prop-head__expand--is-open svg {
  transform: none;
}

.oapi-prop-add-info {
  color: #7F8286;
  font-size: 0.875rem;
  margin-bottom: 4px;
}
.oapi-prop-add-info code {
  color: #333;
}
.oapi-prop-add-info--enums code {
  margin-bottom: 4px;
  margin-right: 4px;
}

.oapi-prop-sub {
  padding-top: 8px;
  margin-left: 4px;
}

.oapi-prop-items-of {
  margin-left: 4px;
  padding-top: 8px;
  padding-left: 32px;
  border-left: 1px solid #E2E2E2;
}

.oapi-prop-flags {
  display: flex;
  flex-wrap: wrap;
  padding-top: 4px;
}
.oapi-prop-flags__flag {
  display: inline-block;
  white-space: nowrap;
  padding: 2px 8px;
  border: 1px solid #E2E2E2;
  font-size: 0.7rem;
  border-radius: 4px;
  margin: 0 8px 8px 0;
}

.oapi-prop__ext-docs {
  margin-bottom: 8px;
}
</style>
