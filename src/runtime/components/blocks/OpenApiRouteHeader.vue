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
      {{ summary }}
    </h1>
    <div class="oapi-route-header__path" @click="(e) => copyToClipboard(requestUrl, e)" >
      <code v-text="requestUrl"></code>
    </div>
    <div
      v-if="deprecated"
      class="oapi-route-header__deprecated"
      role="alert"
    >
        <span>{{ $openapidoc.getLocaleText('openapidoc.deprecated') }}</span>
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
import {copyToClipboard} from '../helpers';

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
    server: {
      type: String,
      required: false,
      default: ''
    },
  },
  computed: {
    requestUrl() {
      return this.server + '' + this.path
    }
  },
  methods: {
    getTagColor,
    copyToClipboard
  }
};
</script>

<style lang="scss">
.oapi-route-header {
  &__title {
    font-family: var(--oapi-mono) !important;
  }
  &__path {
    margin-bottom: 3px;
    cursor: pointer;

    code {
      color: #696969;
      font-size: 0.8rem;
      font-weight: 600;
      margin-bottom: 16px;
    }
  }
  .oapi-method-tag {
    user-select: none;
    border-radius: 6px;
    margin-right: 6px;
    border: 2px solid #ddd;
    font-size: 1.5rem;
  }
  &--deprecated &__title {
    opacity: .6;
  }
  &__deprecated {
    margin-bottom: 8px;
    span {
      display: inline-block;
      padding: 8px 16px;
      background: #f84545;
      color: #fff;
      border-radius: 4px;
      font-weight: 600;
    }
  }

  &__tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 -4px 16px;
  }
  &__tag {
    display: inline-flex;
    align-items: center;
    padding: 6px 8px;
    margin: 0 4px 4px;
    border-radius: 4px;
    line-height: 1;
    border: 1px solid #ccc;
  }
}
</style>

