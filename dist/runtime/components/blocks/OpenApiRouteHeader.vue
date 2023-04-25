<template>
  <div
    class="oapi-route-header"
    :class="{'oapi-route-header--deprecated': deprecated}"
  >
    <h1 class="oapi-route-header__title">
      <span
        class="oapi-method-tag"
        :class="`oapi-method-tag--${method}`"
      >{{ method }}</span>
      {{ path }}
    </h1>
    <div
      v-if="deprecated"
      class="oapi-route-header__deprecated"
      role="alert"
    >
      <span>{{ $openapidoc.getLocaleText('openapidoc.deprecated') }}</span>
    </div>
    <div class="oapi-route-header__summary">
      {{ summary }}
    </div>
    <div class="oapi-route-header__tags">
      <span
        v-for="tag in tags"
        :key="tag"
        class="oapi-route-header__tag"
      >{{ tag }}</span>
    </div>
    <div
      class="oapi-route-header__description"
      v-html="description"
    />
  </div>
</template>


<script>
import {getTagColor} from "../helpers";

export default {
  props: {
    path: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      default: () => ([]),
    },
    summary: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    deprecated: Boolean,
    currentLocale: {
      type: String,
      required: true,
    },
  },
  methods: {
    getTagColor
  }
};
</script>

<style>
.oapi-route-header__title {
  font-family: var(--oapi-mono) !important;
}
.oapi-route-header__summary {
  color: #999;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 16px;
}
.oapi-route-header .oapi-method-tag {
  user-select: none;
  border-radius: 6px;
  margin-right: 6px;
  border: 2px solid #ddd;
  font-size: 1.5rem;
}
.oapi-route-header--deprecated .oapi-route-header__title {
  opacity: 0.6;
}
.oapi-route-header__deprecated {
  margin-bottom: 8px;
}
.oapi-route-header__deprecated span {
  display: inline-block;
  padding: 8px 16px;
  background: #e1e1e1;
  color: #666;
  border-radius: 4px;
  font-weight: 600;
}
.oapi-route-header__tags {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 -4px 16px;
}
.oapi-route-header__tag {
  display: inline-flex;
  align-items: center;
  padding: 6px 8px;
  margin: 0 4px 4px;
  border-radius: 4px;
  line-height: 1;
  border: 1px solid #ccc;
}
</style>

