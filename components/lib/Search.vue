<template>
  <div class="relative">
    <button
      class="inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-800 hover:text-gray-900 dark:text-gray-300/75 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-black dark:text-gray-300/75"
      @click="toggleSearch">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="20px" height="20px">
        <path class="fill-gray-800 dark:fill-gray-300/75"
              d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"/>
      </svg>
    </button>
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
                    <h5 class="text-base font-medium text-gray-700" v-text="item.title"></h5>
                    <p class="text-sm text-gray-500" v-html="item.description"></p>
                  </div>
                </div>
              </nuxt-link>

            </div>
          </div>
        </div>
      </div>
      <button class="absolute top-0 right-0 m-3 text-gray-800 hover:text-gray-900 shadow bg-white/50 dark:text-gray-300/75"
              @click="toggleSearch">
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
      // const paths = paths.map(path => path.toLowerCase());
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


          let index = description.indexOf(query);
          if (index !== -1) {
            let start = Math.max(index - 50, 0);
            let end = Math.min(index + query.length + 50, description.length);
            let result = '...' + description.substring(start, end) + '...';
            result = result.replace(query, "<b>" + query + "</b>");
            this.list.push({
              title: summary,
              description: result,
              url: `/${this.path}/${this.file}/${this.currentLocale}/${method}/${path}`,
            });
          }
        }

      }
    }
  }
} </script>
<style> /* Add custom styles here */ </style>
