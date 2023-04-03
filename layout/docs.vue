<template>
  <div class="flex flex-col h-screen dark:bg-gray-900 dark:text-gray-300/75">
    <MainHeader :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu" class="dark:bg-black dark:text-gray-300/75">
      <template #logo>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="30">
          <rect width="100" height="30" rx="5" fill="#1A202C" />
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="16" v-text="name"></text>
        </svg>
      </template>
      <div slot="button">
        <OpenApiHeader
          :current-locale="currentLocale"
          :files="files"
          :locales="locales"
          :file="file"
          :path="path_doc"
          :is-dark-mode="isDarkMode"
          @toggleDarkMode="toggleDarkMode"
        />
      </div>
    </MainHeader>
    <div class="flex flex-1 overflow-hidden">
      <MainLeftMenu :isMenuOpen="isMenuOpen" :isMobile="isMobile">
        <OpenApiMenu :routes="pathsByTags" :current-locale="currentLocale" :file="file" :path="path_doc" :files="files" :locales="locales" />
      </MainLeftMenu>
      <MainContent>
        <transition name="fade" tag="div">
          <Nuxt />
        </transition>
      </MainContent>
    </div>
  </div>
</template>

<script>
import MainHeader from '../components/lib/MainHeader.vue';
import MainLeftMenu from '../components/lib/MainLeftMenu.vue';
import MainContent from '../components/lib/MainContent.vue';
import OpenApiHeader from '../components/OpenApiHeader.vue';
import OpenApiMenu from '../components/OpenApiMenu.vue';
import OpenApiInfo from '../components/OpenApiInfo.vue';
import OpenApiComponents from '../components/OpenApiComponents.vue';
import OpenApiRoute from '../components/OpenApiRoute.vue';
import NotFound from '../components/NotFound.vue';
import {options} from "marked";

const files = <%= options.files %>;

export default {
  name: 'openapi-docs',
  components: {
    MainHeader,
    MainLeftMenu,
    MainContent,
    OpenApiHeader,
    OpenApiInfo,
    OpenApiComponents,
    OpenApiRoute,
    OpenApiMenu,
    NotFound,
  },
  async fetch() {
    try {
      const ctx = this.$nuxt.context
      this.currentLocale = ctx.route.params.locale ?? ctx.route.meta[0].locale;
    } catch (e) {
      console.error(e)
    }
  },
  created() { this.$fetch(); },
  watch: {
    '$route.meta': {
      handler: function(val) {
        this.currentLocale = val.locale;
      },
      deep: true
    },
  },
  data() {
    return {
      pathsByTags: <%= JSON.stringify(options.pathsByTags) %>,
      path_doc: '<%= options.path %>',
      locales: <%= JSON.stringify(options.locales) %>,
      name: '<%= options.name %>',
      isMenuOpen: true,
      isMobile: false,
      currentLocale: 'en',
      file: '<%= options.fileName %>',
      isDarkMode: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleDarkMode() {
      if(process.client) {
        this.isDarkMode = !this.isDarkMode
        localStorage.setItem('isDarkMode', this.isDarkMode)
        if(this.isDarkMode) document.querySelector('html').classList.add('dark')
        else document.querySelector('html').classList.remove('dark');
      }
    },
    handleResize() {
      this.isDesktop = window.innerWidth >= 768 // set breakpoint here
      if (!this.isDesktop) {
        this.isMenuOpen = false
      }
    },
  },
  computed: {
    files() {
      return files(this)
    },
  },
  mounted() {
    if(process.client) {
      this.isMobile = window.innerWidth < 640;
      this.isMenuOpen = window.innerWidth > 640;
      window.addEventListener('resize', this.handleResize)
      this.isDarkMode = localStorage.getItem('isDarkMode') === 'true'
      if(this.isDarkMode) document.querySelector('html').classList.add('dark')
    }
  },
  beforeDestroy() {
    if(process.client) {
      window.removeEventListener('resize', this.handleResize)
    }
  },
}
</script>

<style>
@import "../tailwindcss.css";
@import 'highlight.js/styles/tokyo-night-dark.css';

:not(pre) > code[class*="language-"], pre[class*="language-"] {
  background: #001529;
  color: #d3d3d3;
}

.toolbar-btn {
  cursor: pointer;
  padding: 4px;
  margin: 0px 2px;
  font-size: 12px;
  min-width: 50px;
  color: #fff;
  border: none;
  background-color: #00a2fb;
  top: 10px;
  right: 10px;
  z-index: 99;
}



pre {
  font-family: monospace;
  border: 1px solid #f7f7f7;
  padding: 10px;
  border-radius: 5px;
  overflow-x: auto;
}

code {
  font-family: monospace;
}

.keyword {
  font-weight: bold;
  color: #0077c2;
}

.operator {
  color: #a90d91;
}

.string {
  color: #2a9d8f;
}

.punctuation {
  color: #a90d91;
}

p {
  font-size: 18px;
  line-height: 1.5;
}
h2, h3, h4 {
  margin-top: 20px;
  margin-bottom: 10px;
}
ul, ol {
  margin-left: 5px;
}
li {
  margin-bottom: 5px;
}
blockquote {
  font-style: italic;
  margin-left: 20px;
  padding-left: 10px;
  border-left: 5px solid #ccc;
}
table {
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  border: 2px solid gray;
}

th,
td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

th {
  font-weight: bold;
}

tbody tr:nth-of-type(even) {
  background-color: rgba(0, 0, 0, 0.05);
}

tfoot {
  font-weight: bold;
  border-top: 2px solid #dee2e6;
}

tfoot td {
  border-top: none;
}



.doc-info a {
  color: #4299e1;
  text-decoration: none;
  border-bottom: 1px solid #4299e1;
}
.doc-info a:hover {
  color: #2c5282;
  border-bottom: 1px solid #2c5282;
}

.doc-info img {
  max-width: 100%;
  margin: 1.5rem 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

pre {
  background: #001529;
  color: #d3d3d3;
  font-size: 12px;
  padding: 4px;
}

.text-xs p {
  font-size: .75rem;
  line-height: 1rem;
}
</style>
