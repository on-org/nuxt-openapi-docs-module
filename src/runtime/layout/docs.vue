<template>
  <div class="flex flex-col h-screen dark:bg-gray-900 dark:text-gray-300/75">
    <OpenApiMainHeader :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu" class="bg-blue dark:bg-blue">
      <template #logo>
        <span v-html="logo"></span>
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
    </OpenApiMainHeader>
    <div class="flex flex-1 overflow-hidden">
      <OpenApiMainLeftMenu :isMenuOpen="isMenuOpen" :isMobile="isMobile">
        <OpenApiMenu :routes="pathsByTags" :current-locale="currentLocale" :file="file" :path="path_doc" :files="files" :locales="locales" />
      </OpenApiMainLeftMenu>
      <OpenApiMainContent style="padding-bottom: 4rem">

        <transition name="fade" tag="div">
          <% if (options.isNuxt2) {print('<Nuxt />');} %>
          <% if (options.isNuxt3) {print(' <div><slot></slot></div>');} %>
        </transition>

        <footer class="fixed w-full bg-gray-900 py-8" v-if="footer">
          <div class="container mx-auto flex justify-between bg-gray-100 text-gray-800 border-t border-gray-700 dark:bg-slate dark:text-gray-300/75" v-html="footer">
          </div>
        </footer>
      </OpenApiMainContent>
    </div>
  </div>
</template>

<script>
<% if (options.isNuxt3) {
  print('import {useNuxtApp} from "#app";');
} %>


const isNuxt3 = <%= options.isNuxt3 %>;
const isNuxt2 = <%= options.isNuxt2 %>;

export default {
  name: 'openapi-docs',

  setup() {
    if(isNuxt3) {
      const file = '<%= options.fileName %>';
      const { $openapidoc } = useNuxtApp()

      if(!$openapidoc.hasAccess(file)) {
        throw createError({
          statusCode: 404,
          message: 'page not found',
        })
      }
    }
  },
  async fetch() {
    try {
      if(!this.$openapidoc.hasAccess(this.file)) {
        this.$nuxt.context.error({ status: 404, message: 'page not found' });
      }
    } catch (e) {
      console.error(e)
    }
  },
  created() {
    if(this && this.$fetch) this.$fetch();
  },
  watch: {
    '$route.meta': {
      handler: function(val) {
        this.currentLocale = val.locale;
      },
      deep: true
    },
    '$route': {
      handler: function(val) {
        if (this.isMobile) {
          this.isMenuOpen = false;
        }
      },
      deep: true
    },
  },
  data() {
    return {
      pathsByTags: <%= JSON.stringify(options.pathsByTags) %>,
      files: <%= JSON.stringify(options.files) %>,
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
  computed: {
    footer() {
      return this.$openapidoc.getFooter()
    },
    logo() {
      return this.$openapidoc.getLogo().replace(':name', this.name)
    },
    isVue2(){
      return isNuxt2
    },
    isVue3(){
      return isNuxt3
    }
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
      this.isDesktop = window.innerWidth >= 639
      this.isMobile = window.innerWidth < 639;
      if (!this.isDesktop && this.isMenuOpen) {
        this.isMenuOpen = false
      }
      if (this.isDesktop) {
        this.isMenuOpen = true
      }
    },
  },
  mounted() {
    if(process.client) {
      this.isMobile = window.innerWidth < 639;
      this.isMenuOpen = window.innerWidth > 639;
      window.addEventListener('resize', this.handleResize)
      this.isDarkMode = localStorage.getItem('isDarkMode') === 'true'
      if(this.isDarkMode) document.querySelector('html').classList.add('dark')
    }

  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
}
</script>

<style>
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
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  border: 2px solid gray;

  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;
}

@media (max-width: 1000px) {
  table {
    display: block;
  }
}

th,
td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;

  text-align: left;
  border-bottom: 1px solid #ddd;
}

@media (max-width: 768px) {
  th, td {
    white-space: nowrap;
  }
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

.doc-info h1 {
  font-weight: bold;
  font-size: 20px;
}

.doc-info h2 {
  font-weight: bold;
  font-size: 18px;
}

.doc-info h3 {
  font-weight: bold;
  font-size: 16px;
}

.doc-info h4 {
  font-weight: bold;
  font-size: 14px;
}

.doc-info ul {
  list-style-type: circle;
  margin-left: 20px;
}

.doc-info ul li {
  margin-bottom: 10px;
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

.bg-blue {
  background-color: #2d87e2;
  color: white;
}

.bg-blue {
  background-color: #2d87e2;
  color: white;
}

.dark .dark\:bg-blue {
  background-color: #001b35;
  color: rgba(209,213,219,.75);
}

a.bg-blue:hover, button.bg-blue:hover {
  background-color: rgb(144 192 240 / 57%);
  color: white;
}

.dark .dark\:bg-slate {
  background-color: rgb(2 6 23);
}

footer {
  right: 0;
  bottom: 0;
  height: 2.5rem;
  line-height: 2.5rem;

  @media (min-width: 640px) {
    padding-left: 15rem;
  }

}
footer .container {
  height: 100%;
  border-top: 1px solid #e1e1e1;
  padding-right: 10px;
  padding-left: 10px;
}

footer .container a {
  color: #4299e1;
  -webkit-text-decoration: none;
  text-decoration: none;
  border-bottom: 1px solid #4299e1;
}
footer .container a:hover {
  color: #2c5282;
  border-bottom: 1px solid #2c5282;
}
</style>
