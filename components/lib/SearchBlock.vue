<template>
  <div class="relative">
    <div class="fixed fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" v-if="isSearchOpen">
      <div class="w-full max-w-lg mx-auto">
        <div class="bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden">
          <div class="px-4 py-3 shadow border-gray-200 dark:border-gray-800" style="height: 300px; overflow-x: scroll">
            <input type="text"
                   v-model="search"
                   class="w-full border-gray-200 dark:bg-black dark:border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                   placeholder="Search...">

            <div class="mt-4" v-for="item in list">
              <nuxt-link :to="item.url">
                <div class="mt-2">
                  <div class="bg-gray-100 dark:bg-gray-900 rounded-md px-3 py-2">
                    <h5 class="text-base font-medium text-gray-700" v-html="item.title"></h5>
                    <p class="text-sm text-gray-400" style="font-size: 10px;" v-text="item.path"></p>
                    <p class="text-sm text-gray-500" v-html="item.description"></p>
                  </div>
                </div>
              </nuxt-link>

            </div>
          </div>
        </div>
      </div>
      <button class="absolute top-0 right-0 m-3 text-gray-800 hover:text-gray-900 shadow bg-white/50 dark:text-gray-300/75" @click="toggleSearch">
        <svg class="w-10 h-10 shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
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
      this.$nuxt.$on('toggleSearchDoc', this.toggleSearch);
    }
  },
  beforeDestroy() {
    this.$nuxt.$off('toggleSearchDoc', this.toggleSearch);
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

      let summary = this.tr(this.doc.info, 'title', this.currentLocale).toLowerCase();
      let description = this.tr(this.doc.info, 'description', this.currentLocale).toLowerCase();

      let index = description.indexOf(query);
      if (index !== -1) {
        let start = Math.max(index - 50, 0);
        let end = Math.min(index + query.length + 50, description.length);
        let result = '...' + description.substring(start, end) + '...';
        result = result.replace(query, "<b>" + query + "</b>");
        this.list.push({
          path: 'info',
          title: summary,
          description: result,
          url: `/${this.path}/${this.file}/${this.currentLocale}/get/info`,
        });
      }


      for (let path in this.doc.paths) {
        if(path === 'parameters') continue;
        let paths = this.doc.paths[path];
        for (let method in paths) {
          let obj = paths[method];

          let summary = this.tr(obj, 'summary', this.currentLocale).toLowerCase();
          let description = this.tr(obj, 'description', this.currentLocale).toLowerCase();

          let apper = null;

          let index = summary.indexOf(query);
          if (index !== -1) {
            let result = description.substring(0, 100) + '...';
            apper = {
              path: obj.path,
              title: summary.replace(query, "<b>" + query + "</b>"),
              description: result + '...',
              url: `/${this.path}/${this.file}/${this.currentLocale}/${method}/${path}`,
            };
          }

          index = description.indexOf(query);
          if (index !== -1) {
            let start = Math.max(index - 50, 0);
            let end = Math.min(index + query.length + 50, description.length);
            let result = '...' + description.substring(start, end) + '...';
            result = result.replace(query, "<b>" + query + "</b>");
            if(!apper) {
              apper = {
                path: obj.path,
                title: summary,
                description: result,
                url: `/${this.path}/${this.file}/${this.currentLocale}/${method}/${path}`,
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
} </script>
<style> /* Add custom styles here */ </style>
