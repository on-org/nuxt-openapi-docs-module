<template>
  <div class="openapi-menu">
    <h2 class="text-xl font-bold mb-2">API documentation</h2>
    <p class="mb-4">Select a route from the list below:</p>
    <ul class="menu list-none mb-4">
      <li>
        <nuxt-link :to="getRoute('info')" class="block px-2 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
          OpenAPI Info
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="getRoute('components')" class="block px-2 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
          OpenAPI Components
        </nuxt-link>
      </li>
      <li v-for="(routes, tag) in pathsByTags" :key="tag" class="sub-menu">
        <div :class="{ 'selected': open === tag }" class="block px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900">
          <div class="menu-title flex justify-between items-center" @click="toggleOpen(tag)">
            <span class="font-bold">{{ tag }}</span>
            <span class="menu-item__icon">{{ open !== tag ? '▼' : '▲' }}</span>
          </div>
          <ul v-if="open === tag" v-cloak class="pl-2">
            <li v-for="(route) in routes" class="menu-item hover:bg-gray-200 dark:hover:bg-gray-700" :class="`menu-item-${route.type}`">
              <nuxt-link :to="getSubRoute(route)" @click.native.stop.prevent class="block-btn py-2 px-4 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
                <div class="flex flex-col">
                  <div class="font-bold item-path">{{ getRouteType(route.type) }} {{ route.name }}</div>
                  <div class="description text-sm text-gray-600 dark:text-gray-300/75 overflow-hidden overflow-ellipsis whitespace-nowrap">{{ route.description }}</div>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
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
  },
  data() {
    return {
      open: null,
    };
  },
  methods: {
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
          return '🗑️ DELETE';
        default:
          return '';
      }
    },
    genUrl(path) {
      return encodeURI(path)
    },
    toggleOpen(tag) {
      this.open = this.open === tag ? null : tag;
      localStorage.setItem('menu_open', this.open)
    },
    getRoute(path) {
      return '/' + this.$openapidoc.path + '/' + this.file + '/' + this.currentLocale + '/get/' + path;
    },
    getSubRoute(route) {
      return '/' + this.$openapidoc.path + '/' + this.file + '/' + this.currentLocale + '/' + route.type + '/' + this.genUrl(route.path);
    }
  },
  computed: {
    pathsByTags() {
      const paths = this.routes;
      const pathKeys = Object.keys(paths);
      const pathsByTags = {};

      pathKeys.forEach((route_path) => {
        const valses = Object.keys(paths[route_path]);
        valses.forEach((type) => {
          const path = paths[route_path][type];
          const tags = path.tags;

          if (tags && tags.length) {
            tags.forEach((tag) => {
              if (!pathsByTags[tag]) {
                pathsByTags[tag] = [];
              }
              pathsByTags[tag].push({
                name: path.path,
                path: route_path,
                type: type,
                description: path.description,
              });
            });
          }
        })
      });

      return pathsByTags;
    },
  },
  mounted() {
    if(process.client) {
      this.open = localStorage.getItem('menu_open') ?? null
    }
  },
};
</script>

<style scoped>
.block-btn {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
//color: #374151;
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
//color: #374151; /* цвет ссылок по умолчанию в TailwindCSS */
}

.openapi-menu a.block:hover {
//background-color: #edf2f7; /* аналогично hover:bg-gray-200 */
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
//padding-top: 0.5rem;
//padding-bottom: 0.5rem;
}

.openapi-menu li.menu-item-get {
  border-left: 0.25rem solid #38a169; /* аналогично border-l-4 и соответствует зеленому цвету для GET-запросов в TailwindCSS */
}

.openapi-menu li.menu-item-post {
  border-left: 0.25rem solid #3856a1; /* аналогично border-l-4 и соответствует зеленому цвету для GET-запросов в TailwindCSS */
}

.openapi-menu li.menu-item-delete {
  border-left: 0.25rem solid #a13838; /* аналогично border-l-4 и соответствует зеленому цвету для GET-запросов в TailwindCSS */
}

.openapi-menu li.menu-item-options {
  border-left: 0.25rem solid #a13838; /* аналогично border-l-4 и соответствует зеленому цвету для GET-запросов в TailwindCSS */
}

.openapi-menu li.menu-item-put {
  border-left: 0.25rem solid #5b38a1; /* аналогично border-l-4 и соответствует зеленому цвету для GET-запросов в TailwindCSS */
}

.openapi-menu li.menu-item-patch {
  border-left: 0.25rem solid #a19338; /* аналогично border-l-4 и соответствует зеленому цвету для GET-запросов в TailwindCSS */
}

</style>
