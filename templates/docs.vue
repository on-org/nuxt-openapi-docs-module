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
          :locales="options.locales"
          :file="file"
          :path="options.path"
          :is-dark-mode="isDarkMode"
          @toggleDarkMode="toggleDarkMode"
        />
      </div>
    </MainHeader>
    <div class="flex flex-1 overflow-hidden">
      <MainLeftMenu :isMenuOpen="isMenuOpen" :isMobile="isMobile">
        <OpenApiMenu v-if="doc.paths" :routes="doc.paths" :current-locale="currentLocale" :file="file" :path="options.path" />
      </MainLeftMenu>
      <MainContent>
        <OpenApiInfo v-if="isInfo" :info="doc.info" :servers="doc.servers" :current-locale="currentLocale"></OpenApiInfo>
        <OpenApiComponents v-else-if="isComponents" :components="doc.components" :current-locale="currentLocale"></OpenApiComponents>
        <OpenApiRoute v-else-if="getActiveRoute" :route="getActiveRoute" :current-locale="currentLocale" :method="type" :components="doc.components" :url="path" :simples="simples" :server="server" />
        <NotFound v-else />
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

const files = <%= options.files %>;
const simples = <%= options.params %>;

export default {
  name: 'AppDocs',
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
  async asyncData(ctx) {
    try {
      const file = ctx.route.params.file ?? ctx.route.meta[0].file;
      const locale = ctx.route.params.locale ?? ctx.route.meta[0].locale;
      const type = ctx.route.params.type ?? ctx.route.meta[0].type;
      const path = ctx.route.params.path ?? ctx.route.meta[0].path;
      return {
        currentLocale: locale,
        file: file,
        type: type,
        path: path,
      }
    } catch (e) {
      console.error(e)
      console.error(ctx.route)
    }
  },
  data() {
    return {
      options: <%= JSON.stringify(options) %>,
      isMenuOpen: true,
      isMobile: false,
      currentLocale: 'en',
      file: '',
      type: '',
      path: '',
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
    doc() {
      return this.options.doc
    },
    name() {
      return this.options.name
    },
    files() {
      return files(this)
    },
    simples() {
      return simples(this)
    },
    isInfo() {
      return this.path === 'info'
    },
    isComponents() {
      return this.path === 'components'
    },
    getActiveRoute() {
      if(!this.options.doc.paths) return null;
      if(!this.options.doc.paths[this.path]) return null;
      return this.options.doc.paths[this.path][this.type] ?? null
    },
    server() {
      if (!this.options.doc.servers || !this.options.doc.servers[0]) {
        return null;
      }
      return this.options.doc.servers[0].url ?? null
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
</style>
