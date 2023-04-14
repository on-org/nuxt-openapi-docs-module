<template>
  <div class="openapi-menu">
    <div class="files">
      <CustomDropdown :placeholder="files[file]" :options="filesAccessor" :value="file" :route-function="changeDoc">
        <template v-slot:default="{ option, index, isSelected }">
          {{ option }}
        </template>
      </CustomDropdown>
    </div>
    <div class="locales mt-4" v-if="isLocalization" >
      <CustomDropdown :placeholder="locales[currentLocale]" :options="locales" :value="currentLocale" :route-function="changeLocale">
        <template v-slot:default="{ option, index, isSelected }">
          {{ option }}
        </template>
      </CustomDropdown>
    </div>

    <h2 class="text-xl font-bold mb-2">{{ $openapidoc.getLocaleText(currentLocale, 'API documentation') }}</h2>
    <p class="mb-4">{{ $openapidoc.getLocaleText(currentLocale, 'Select a route from the list below:') }}</p>


    <ul class="menu list-none mb-4">
      <li>
        <nuxt-link :to="getRoute('info')" class="relative inline-flex items-center w-full text-base font-medium border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
          <svg class="w-4 h-4 mr-2 fill-current" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path></svg>
          <b>{{ $openapidoc.getLocaleText(currentLocale, 'Info') }}</b>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="getRoute('components')" class="relative inline-flex items-center w-full text-base font-medium border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
          <svg class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
          <b>{{ $openapidoc.getLocaleText(currentLocale, 'Components') }}</b>
        </nuxt-link>
      </li>
      <MainLeftMenuSubMenu v-for="(sub_routes, tag) in routes" :key="tag" class="sub-menu" :title="tr(sub_routes, 'name', currentLocale)" :description="tr(sub_routes, 'description', currentLocale)" :is-open="sub_routes.isOpen">
        <li v-for="(route) in sub_routes.items" class="menu-item hover:bg-gray-200 dark:hover:bg-gray-700" :class="`menu-item-${route.type}`">
          <nuxt-link :to="getSubRoute(route)" @click.native.stop.prevent class="block-btn py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700">
            <div class="flex flex-col">
              <div class="font-semibold item-path">
                <span class="px-1 font-medium method-icon" v-if="route.icon" v-html="route.icon"></span>
                <span class="px-1 font-medium method-tag" v-else-if="route.type !== 'custom'" :class="getTagColor(route.type)">{{ getRouteType(route.type) }} </span>
                {{ route.name }}
              </div>
              <div class="description text-sm text-gray-600 dark:text-gray-300/75 overflow-hidden overflow-ellipsis whitespace-nowrap">{{ tr(route, 'description', currentLocale) }}</div>
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
    isLocalization() {
      return Object.keys(this.locales).length > 1;
    },
    filesAccessor() {
      const result = {}
      for (let i in this.files) {
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
      if (route.type === 'custom') {
        return `/${this.path}/${this.file}/${this.currentLocale}/${type}/${path}`
      }

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

<style scoped>
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
