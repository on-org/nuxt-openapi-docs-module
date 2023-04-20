<template>
  <div class="oapi-search">
    <div
      v-if="isSearchOpen"
      class="oapi-search-overlay"
    >
      <div class="oapi-search__wrapper">
        <div class="oapi-search-box">
          <div class="oapi-search-box__inner">
            <input
              v-model="search"
              type="text"
              class="oapi-search-box__input"
              placeholder="Search..."
            >

            <div
              v-for="(item, i) in list"
              :key="i"
              class="oapi-search-box__list"
            >
              <nuxt-link
                :to="item.url"
                :active-class="''"
              >
                <div class="oapi-search-item">
                  <h5
                    class="oapi-search-item__title"
                    v-html="item.title"
                  />
                  <p
                    class="oapi-search-item__path"
                    v-text="item.path"
                  />
                  <p
                    class="oapi-search-item__text"
                    v-html="item.description"
                  />
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <button
        class="oapi-search__close"
        @click="toggleSearch"
      >
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
import {tr} from "../helpers";

export default {
  props: {
    currentLocale: {
      type: String,
      required: true,
    },
    doc: {
      type: Object,
      required: true
    },
    file: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isSearchOpen: false,
      search: '',
      list: []
    }
  },
  watch: {
    search(val) {
      this.searchInPaths(val)
    },
  },
  mounted() {
    if(process.client) {
      this.$openapidocBus.$on('toggleSearchDoc', this.toggleSearch);
    }
  },
  beforeUnmount() {
    this.$openapidocBus.$off('toggleSearchDoc', this.toggleSearch);
  },
  methods: {
    tr,
    toggleSearch() {
      this.isSearchOpen = !this.isSearchOpen;
      if (this.isSearchOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    },
    searchInPaths(query) {
      query = query.toLowerCase();
      this.list = [];

      if(query === '') return;

      const summary = this.tr(this.doc.info, 'title', this.currentLocale).toLowerCase();
      const description = this.tr(this.doc.info, 'description', this.currentLocale).toLowerCase();

      const index = description.indexOf(query);
      if (index !== -1) {
        const start = Math.max(index - 50, 0);
        const end = Math.min(index + query.length + 50, description.length);
        let result = '...' + description.substring(start, end) + '...';
        result = result.replace(query, "<b>" + query + "</b>");
        this.list.push({
          path: 'info',
          title: summary,
          description: result,
          url: `/${this.path}/${this.file}/${this.currentLocale}/info`,
        });
      }


      for (const path in this.doc.paths) {
        if(path === 'parameters') continue;
        const paths = this.doc.paths[path];
        for (const method in paths) {
          const obj = paths[method];

          let routePath = path
          if (routePath.startsWith('/')) routePath = routePath.substring(1);
          if (routePath.endsWith('/')) routePath = routePath.substring(-1);
          routePath = routePath.replace(/[/\\.?+=&{}]/gumi, '_').replace(/__+/, '_')

          const summary = this.tr(obj, 'summary', this.currentLocale).toLowerCase();
          const description = this.tr(obj, 'description', this.currentLocale).toLowerCase();

          let apper = null;

          let index = summary.indexOf(query);
          if (index !== -1) {
            const result = description.substring(0, 100) + '...';
            apper = {
              path: path,
              title: summary.replace(query, "<b>" + query + "</b>"),
              description: result + '...',
              url: `/${this.path}/${this.file}/${this.currentLocale}/${method}/${routePath}`,
            };
          }

          index = description.indexOf(query);
          if (index !== -1) {
            const start = Math.max(index - 50, 0);
            const end = Math.min(index + query.length + 50, description.length);
            let result = '...' + description.substring(start, end) + '...';
            result = result.replace(query, "<b>" + query + "</b>");
            if(!apper) {
              apper = {
                path: path,
                title: summary,
                description: result,
                url: `/${this.path}/${this.file}/${this.currentLocale}/${method}/${routePath}`,
              };
            } else {
              apper.description = result;
            }

          }

          if(apper) {
            this.list.push(apper);
          }
        }

      }
    }
  }
};
</script>

<style>
.oapi-search {
  position: relative;
}
.oapi-search__wrapper {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 32rem;
}
.oapi-search button.oapi-search__close {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.75rem;
  padding: 0;
  color: #1F2937;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background-color: hsla(0, 0%, 100%, 0.5);
  border: none;
  cursor: pointer;
}
.oapi-search button.oapi-search__close svg {
  width: 2.5rem;
  height: 2.5rem;
}
.oapi-search button.oapi-search__close:hover {
  color: #111827;
}

.oapi-search-overlay {
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
}

.oapi-search-box {
  overflow: hidden;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.oapi-search-box__inner {
  padding: 1.2rem;
  border-color: #E5E7EB;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  height: 300px;
  overflow-x: scroll;
}
.oapi-search-box input.oapi-search-box__input {
  appearance: none;
  background-color: #fff;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.5rem 0.75rem;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid #E5E7EB;
}
.oapi-search-box input.oapi-search-box__input:focus {
  border-color: #3B82F6;
  outline: none;
}
.oapi-search-box__list {
  margin-top: 1rem;
}
.oapi-search-box__list a {
  color: inherit;
  text-decoration: inherit;
}

.oapi-search-item {
  padding: 0.5rem 0.75rem;
  background-color: #F3F4F6;
  border-radius: 0.375rem;
}
.oapi-search-item__title {
  color: #374151;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
}
.oapi-search-item__path {
  color: #9CA3AF;
  font-size: 0.625rem;
  line-height: 1.25rem;
}
.oapi-search-item__text {
  color: #6B7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
</style>
