<template>
  <div class="oapi-aside-content">
    <div class="oapi-aside-content__dds">
      <OpenApiDropdown
        v-if="isMultipleFiles"
        class="oapi-aside-content__files"
        :options="filesAccessor"
        :placeholder="files[file]"
        :value="file"
      >
        <template #default="{ item }">
          <nuxt-link :to="changeDoc(item.value)">
            {{ item.text }}
          </nuxt-link>
        </template>
      </OpenApiDropdown>
      <OpenApiDropdown
        v-if="isLocalization"
        class="oapi-aside-content__locales"
        :options="localesOptions"
        :placeholder="locales[currentLocale]"
        :value="currentLocale"
      >
        <template #default="{ item }">
          <div @click="onLocalesReload">
            <nuxt-link :to="changeLocale(item.value)">
              {{ item.text }}
            </nuxt-link>
          </div>
        </template>
      </OpenApiDropdown>
    </div>

    <ul class="oapi-menu">
      <li>
        <nuxt-link
          :to="getRoute('info')"
          class="oapi-menu-item oapi-menu-item-head"
          active-class="oapi-menu-item--is-active"
        >
          {{ $openapidoc.getLocaleText('openapidoc.info') }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          :to="getRoute('auth')"
          class="oapi-menu-item oapi-menu-item-head"
          active-class="oapi-menu-item--is-active"
        >
          {{ $openapidoc.getLocaleText('openapidoc.auth') }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          :to="getRoute('components')"
          class="oapi-menu-item oapi-menu-item-head"
          active-class="oapi-menu-item--is-active"
        >
          {{ $openapidoc.getLocaleText('openapidoc.components') }}
        </nuxt-link>
      </li>

      <MainLeftMenuSubMenu
        v-for="(sub_routes, tag) in routes"
        :key="tag"
        class="sub-menu"
        :title="$openapidocRef.tr(sub_routes, 'name', currentLocale)"
        :description="$openapidocRef.tr(sub_routes, 'description', currentLocale)"
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
                :class="[`oapi-menu-item-tag--${route.type.toLowerCase()}`]"
                v-if="route.type.toLowerCase() !== 'custom'"
              >
                {{ route.type.toUpperCase() }}
              </span>
              <span class="oapi-mono bold" :class="{deprecated: route.deprecated}">
                {{ $openapidocRef.tr(route, 'name', currentLocale) }}
              </span>
            </div>
            <div
              v-if="$openapidocRef.tr(route, 'description', currentLocale)"
              class="oapi-menu-description"
            >
              {{ $openapidocRef.tr(route, 'description', currentLocale) }}
            </div>
          </nuxt-link>
        </li>
      </MainLeftMenuSubMenu>
    </ul>
  </div>
</template>

<script>
import {getTagColor} from "./helpers";
import MainLeftMenuSubMenu from './lib/MainLeftMenuSubMenu.vue'
import OpenApiDropdown from './lib/OpenApiDropdown.vue'

export default {
  components: {MainLeftMenuSubMenu, OpenApiDropdown},
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
    localesReload: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    currentRouteName() {
      return this.$route.name || '';
    },
    localesOptions() {
      return Object.keys(this.locales).map((key) => ({
        value: key,
        text: this.locales[key],
      }));
    },
    isMultipleFiles() {
      return Object.keys(this.files).length > 1;
    },
    isLocalization() {
      return this.$openapidoc.hasI18n() && Object.keys(this.locales).length > 1;
    },
    filesAccessor() {
      const arr = [];
      for (const i in this.files) {
        if (this.$openapidoc.hasAccess(i)) {
          arr.push({value: i, text: this.files[i]})
        }
      }
      return arr
    }
  },
  methods: {
    getTagColor,
    genUrl(path) {
      return encodeURI(path)
    },
    onLocalesReload(e) {
      if (this.localesReload) {
        setTimeout(() => {
          location.reload();
        }, 1000)
      }
    },
    getRoute(path) {
      return {
        name: `openapi-${this.path}/${this.file}/${path}${this.$openapidoc.I18nLocaleSuffix()}`,
        meta: {path: path, file: this.file, type: 'get'}
      };
    },
    getSubRoute(route) {
      const path = this.genUrl(route.path);
      const type = route.type;
      if (route.type === 'custom') {
        return {name: `${this.path}-${this.file}-${type}-${path}${this.$openapidoc.I18nLocaleSuffix()}`};
      }


      return {
        name: `openapi-${this.path}/${this.file}/type-path${this.$openapidoc.I18nLocaleSuffix()}`,
        meta: {path: path, file: this.file, type: type},
        params: { type: type, path: path }
      };
    },
    changeDoc(option) {
      return {
        name: `openapi-${this.path}/${option}/info${this.$openapidoc.I18nLocaleSuffix('en')}`,
        meta: {path: option, type: 'get', file: this.file}
      };
    },
    changeLocale(option) {
      return {
        name: `openapi-${this.path}/${this.file}/info${this.$openapidoc.I18nLocaleSuffix(option)}`,
        meta: {path: this.file, type: 'get', file: this.file}
      };
    },
  },
};
</script>

<style lang="scss">
.oapi-aside-content {
  &__dds {
    margin-bottom: 16px;
  }

  &__files, &__locales {
    margin-bottom: 8px;

    .oapi-dd-popup__list-item {
      position: relative;

      a {
        text-decoration: none;
        color: inherit;

        &::before {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          content: '';
        }
      }
    }
  }
}

.oapi-menu {
  font-size: 16px;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    margin-bottom: 4px;
  }

  a {
    text-decoration: none;
    color: #777;
  }
}

.oapi-menu-item {
  display: block;
  padding: 2px 12px;
  line-height: 22px;
  margin-bottom: 0;
  color: #6e7281;
  border-radius: 6px;
  font-weight: 600;

  &-head {
    padding: 8px 12px;
  }

  &:not(&--is-active):hover {
    color: #000;
    background: rgba(#000, .03);
  }

  &--is-active {
    background: #fff !important;
    color: black !important;

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
    margin-bottom: 0 !important;
    margin-top: 0 !important;
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

.method-icon {
  width: 24px;
  display: inline-block;
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
