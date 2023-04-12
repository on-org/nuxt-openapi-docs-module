<template>
  <div class="oapi-aside-content">
    <div class="oapi-aside-content__dds">
      <div class="files">
        <CustomDropdown
          :placeholder="files[file]"
          :options="filesAccessor"
          :value="file"
          :route-function="changeDoc"
        >
          <template #default="{ option, index, isSelected }">
            {{ option }}
          </template>
        </CustomDropdown>
      </div>
      <div
        v-if="isLocalization"
        class="locales mt-4"
      >
        <CustomDropdown
          :placeholder="locales[currentLocale]"
          :options="locales"
          :value="currentLocale"
          :route-function="changeLocale"
        >
          <template #default="{ option, index, isSelected }">
            {{ option }}
          </template>
        </CustomDropdown>
      </div>
    </div>

    <ul class="oapi-menu">
      <li>
        <nuxt-link
          :to="getRoute('info')"
          class="oapi-menu-item"
          active-class="oapi-menu-item--is-active"
        >
          {{ $openapidoc.getLocaleText(currentLocale, 'Info') }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          :to="getRoute('components')"
          class="oapi-menu-item"
          active-class="oapi-menu-item--is-active"
        >
          {{ $openapidoc.getLocaleText(currentLocale, 'Components') }}
        </nuxt-link>
      </li>
      <MainLeftMenuSubMenu
        v-for="(sub_routes, tag) in routes"
        :key="tag"
        class="sub-menu"
        :title="tr(sub_routes, 'name', currentLocale)"
        :description="tr(sub_routes, 'description', currentLocale)"
        :is-open="sub_routes.isOpen"
      >
        <li
          v-for="(route) in sub_routes.items"
          :key="`${route.type}-${route.name}`"
        >
          <nuxt-link
            :to="getSubRoute(route)"
            class="oapi-menu-item"
            active-class="oapi-menu-item--is-active"
            @click.native.stop.prevent
          >
            <div class="oapi-menu-item__title">
              <span
                class="oapi-menu-item-tag"
                :class="{[`oapi-menu-item-tag--${route.type.toLowerCase()}`]: true}"
              >
                {{ route.type.toUpperCase() }}
              </span>
              <span class="oapi-mono">
                {{ route.name }}
              </span>
            </div>
            <div
              v-if="tr(route, 'description', currentLocale)"
              class="oapi-menu-description"
            >
              {{ tr(route, 'description', currentLocale) }}
            </div>
          </nuxt-link>
        </li>
      </MainLeftMenuSubMenu>
    </ul>
  </div>
</template>

<script>
import {getTagColor, tr} from "./helpers";
export default {
  props: {
    routes: {
      type: Object,
      required: true,
    },
    currentLocale: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    files: {
      type: Object,
      required: true,
    },
    locales: {
      type: Object,
      required: true,
    },
  },
  computed: {
    currentRouteName() {
      return this.$route.name || '';
    },
    isLocalization() {
      return Object.keys(this.locales).length > 1;
    },
    filesAccessor() {
      const result = {}
      for (const i in this.files) {
        if (this.$openapidoc.hasAccess(i)) {
          result[i] = this.files[i];
        }
      }
      return result
    }
  },
  methods: {
    tr,
    getTagColor,
    getRouteType(method) {
      switch (method.toUpperCase()) {
        case 'GET':
          return '🔍 GET';
        case 'POST':
          return '💾 POST';
        case 'PUT':
          return '💾 PUT';
        case 'PATCH':
          return '💾 PATCH';
        case 'DELETE':
          return '🗑️ DEL';
        default:
          return '';
      }
    },
    genUrl(path) {
      return encodeURI(path)
    },
    getRoute(path) {
      return {name: `openapi-${this.path}/${this.file}/${this.currentLocale}-${path}`, meta: {locale: 'en', path: path, file: this.file, type: 'get'}};
    },
    getSubRoute(route) {
      const path = this.genUrl(route.path);
      const type = route.type;
      return {name: `openapi-${this.path}/${this.file}/${this.currentLocale}-${type}-${path}`, meta: {locale: this.currentLocale, path: path, file: this.file, type: type}};
    },
    changeDoc(option) {
      return {name: `openapi-${this.path}/${option}/en-info`, meta: {locale: 'en', path: option, type: 'get',  file: this.file}};
    },
    changeLocale(option) {
      return {name: `openapi-${this.path}/${this.file}/${option}-info`, meta: {locale: option, path: this.file, type: 'get',  file: this.file}};
    },
  },
};
</script>

<style lang="scss">
.oapi-aside-content {
  &__dds {
    margin-bottom: 16px;
  }
}
.oapi-menu {
  margin: 0;
  font-size: 16px;
  li {
    margin-bottom: 4px;
  }
}
.oapi-menu-item {
  display: block;
  padding: 8px 12px;
  line-height: 22px;
  margin-bottom: 0;
  color: #6e7281;
  border-radius: 6px;
  &:not(&--is-active):hover {
    color: #000;
    background: rgba(#000, .03);
  }
  &--is-active {
    color: #007afb;
    .oapi-menu-item-tag {
      color: #fff;
      &--get {
        background: #72AFF8;
        border-color: #72AFF8;
      }
      &--post {
        background: #70C995;
        border-color: #70C995;
      }
      &--patch {
        background: #7CE0C3;
        border-color: #7CE0C3;
      }
      &--put {
        background: #F0A44B;
        border-color: #F0A44B;
      }
      &--delete {
        background: #E64F47;
        border-color: #E64F47;
      }
    }
  }
  &__title {
    display: flex;
    align-items: center;
    font-size: 14px;
    overflow: hidden;
    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

.oapi-menu-description {
  padding-top: 4px;
  color: #868a8d;
  font-size: 12px !important;
  * {
    font-size: 12px !important;
  }
}
.oapi-menu-item-tag {
  min-width: 45px;
  flex: 0 0 auto;
  text-align: center;
  display: inline-flex;
  justify-content: center;
  font-size: .65rem;
  line-height: 1;
  padding: 3px 5px;
  border-radius: 4px;
  margin-right: 6px;
  border: 1px solid #ddd;
  font-family: monospace, monospace;
  font-weight: 600;
  &--get, &--post, &--put, &--patch, &--delete {
    border-color: currentColor;
  }
  &--get {
    color: #72AFF8;
  }
  &--post {
    color: #70C995
  }
  &--patch {
    color: #7CE0C3;
  }
  &--put {
    color: #F0A44B;
  }
  &--delete {
    color: #E64F47;
  }
}

.method-tag {
  width: 45px;
  display: inline-block;
  text-align: center;
  font-size: .55rem;
  line-height: 0.75rem;
  margin-right: 0.05rem;
  vertical-align: text-top;
  padding-top: 1px;
  padding-bottom: 1px;
}
.rotate-icon {
  transition: transform 0.3s ease-in-out;
}

.open .rotate-icon {
  transform: rotate(180deg);
}

.block-btn {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  width: 50px;
  display: contents;
}

.item-path {
  white-space: nowrap;
  overflow: hidden;
  font-size: 14px;
}

.openapi-menu {
  padding-bottom: 100px;
}

.openapi-menu h2 {
  font-size: 1.5rem; /* аналогично text-xl */
  font-weight: bold; /* аналогично font-bold */
  margin-bottom: 0.5rem; /* аналогично mb-2 */
}

.openapi-menu p {
  margin-bottom: 1rem; /* аналогично mb-4 */
}

.openapi-menu ul.menu {
  list-style: none; /* аналогично list-none */
  margin-bottom: 1rem; /* аналогично mb-4 */
}

.openapi-menu li {
  margin-bottom: 0.5rem; /* аналогично mb-2 */
}

.openapi-menu a.block {
  display: block;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem; /* аналогично rounded-md */
}

.openapi-menu li.sub-menu > a.block {
  position: relative;
}

.menu-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.openapi-menu li.sub-menu > a.block .menu-title .menu-item__icon {
  font-size: 0.75rem;
  line-height: 1rem;
  margin-left: 0.25rem;
}

.openapi-menu li.sub-menu > a.block .menu-title .menu-item__icon::before {
  content: attr(data-icon); /* добавляем значок ▼ или ▲ через псевдоэлемент */
}

.openapi-menu li.sub-menu > a.block.selected .menu-title .menu-item__icon::before {
  content: attr(data-icon-open);
}

.openapi-menu ul.pl-2 {
  padding-left: 0.3rem; /* аналогично pl-2 */
  margin-left: 4px;
}

.openapi-menu li.menu-item {
  padding: 3px;
  margin-left: 3px;
}

.openapi-menu li.menu-item-get {
  border-left: 0.35rem solid #38a169; /* аналогично border-l-4 и соответствует зеленому цвету для GET-запросов в TailwindCSS */
}

.openapi-menu li.menu-item-post {
  border-left: 0.35rem solid #3856a1; /* аналогично border-l-4 и соответствует зеленому цвету для GET-запросов в TailwindCSS */
}

.openapi-menu li.menu-item-delete {
  border-left: 0.35rem solid #a13838; /* аналогично border-l-4 и соответствует зеленому цвету для GET-запросов в TailwindCSS */
}

.openapi-menu li.menu-item-options {
  border-left: 0.35rem solid #a13838; /* аналогично border-l-4 и соответствует зеленому цвету для GET-запросов в TailwindCSS */
}

.openapi-menu li.menu-item-put {
  border-left: 0.35rem solid #5b38a1; /* аналогично border-l-4 и соответствует зеленому цвету для GET-запросов в TailwindCSS */
}

.openapi-menu li.menu-item-patch {
  border-left: 0.25rem solid #a19338; /* аналогично border-l-4 и соответствует зеленому цвету для GET-запросов в TailwindCSS */
}


.nuxt-link-active {
  pointer-events: none;
  opacity: 0.8;
}

.nuxt-link-active div {
  opacity: 0.8;
}
</style>
