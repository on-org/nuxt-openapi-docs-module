<template>
  <div class="flex flex-col h-screen dark:bg-gray-900 dark:text-gray-300/75">
    <MainHeader :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu" class="dark:bg-black dark:text-gray-300/75">
      <template #logo>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="30">
          <rect width="100" height="30" rx="5" fill="#1A202C" />
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="16">API Docs</text>
        </svg>
      </template>
      <div slot="button">
        <OpenApiHeader
            :current-locale="currentLocale"
            :files="files"
            :file="file"
            :is-dark-mode="isDarkMode"
            @toggleDarkMode="toggleDarkMode"
        />
      </div>
    </MainHeader>
    <div class="flex flex-1 overflow-hidden">
      <MainLeftMenu :isMenuOpen="isMenuOpen" :isMobile="isMobile">
        <OpenApiMenu :routes="doc.paths" :current-locale="currentLocale" :file="file" />
      </MainLeftMenu>
      <MainContent>
        <OpenApiInfo v-if="isInfo" :info="doc.info" :current-locale="currentLocale"></OpenApiInfo>
        <OpenApiComponents v-else-if="isComponents" :components="doc.components" :current-locale="currentLocale"></OpenApiComponents>
        <OpenApiRoute v-else-if="getActiveRoute" :route="getActiveRoute" :current-locale="currentLocale" :method="type" :components="doc.components" :url="path" :server="server" />
        <NotFound v-else />
      </MainContent>
    </div>
  </div>
</template>

<script>
import MainHeader from './lib/MainHeader.vue';
import MainLeftMenu from './lib/MainLeftMenu.vue';
import MainContent from './lib/MainContent.vue';
import OpenApiHeader from './OpenApiHeader.vue';
import OpenApiMenu from './OpenApiMenu.vue';
import OpenApiInfo from './OpenApiInfo.vue';
import OpenApiComponents from './OpenApiComponents.vue';
import OpenApiRoute from './OpenApiRoute.vue';
import NotFound from './NotFound.vue';

export default {
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
      let doc = {};
      if (process.server || process.static) {
        const protocol = ctx.req.headers['x-forwarded-proto'] || ctx.req.protocol || (ctx.req.connection.encrypted ? 'https:' : 'http:');
        const host = ctx.req.headers.host;
        const response = await fetch(`${protocol}//${host}/docs/api?name=${ctx.route.params.file}`);
        doc = await response.json();
      } else if (process.client) {
        const protocol = window.location.protocol;
        const host = window.location.host;
        const response = await fetch(`${protocol}//${host}/docs/api?name=${ctx.route.params.file}`);
        doc = await response.json();
      }

      return {
        doc,
        currentLocale: ctx.route.params.locale,
        file: ctx.route.params.file,
        type: ctx.route.params.type,
        path: decodeURI(ctx.route.params.path),
      }
    } catch (e) {
      console.error(e);
    }

    return {
      currentLocale: ctx.route.params.locale,
      file: ctx.route.params.file,
      type: ctx.route.params.type,
      path: decodeURI(ctx.route.params.path),
    }
  },
  data() {
    return {
      isMenuOpen: true,
      isMobile: false,
      currentLocale: 'en',
      file: '',
      type: '',
      path: '',
      doc: {},
      files: {},
      isDarkMode: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleDarkMode(val) {
      if(process.client) {
        this.isDarkMode = val
        localStorage.setItem('isDarkMode', val)
        if(val) document.querySelector('html').classList.add('dark')
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
    isInfo() {
      return this.path === 'info'
    },
    isComponents() {
      return this.path === 'components'
    },
    getActiveRoute() {
      if(!this.doc.paths) return null;
      if(!this.doc.paths[this.path]) return null;
      return this.doc.paths[this.path][this.type] ?? null
    },
    server() {
      if (!this.doc.servers || !this.doc.servers[0]) {
        return null;
      }
      return this.doc.servers[0].url ?? null
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
};
</script>
<style>
p {
  font-size: 18px;
  line-height: 1.5;
  //color: #333;
}
h2, h3, h4 {
  //color: #666;
  margin-top: 20px;
  margin-bottom: 10px;
}
ul, ol {
  margin-left: 20px;
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
  //background-color: #f2f2f2;
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


.content {
  @apply pt-60 pl-340;
}
table {
  @apply w-full mb-4 bg-transparent border-collapse;
}
th,
td {
  @apply py-2 border-t border-gray-300;
}
th {
  @apply font-bold bg-gray-200;
}
tbody tr:nth-of-type(odd) {
  @apply bg-gray-100;
}
tfoot {
  @apply font-bold border-t-2 border-gray-300;
}
tfoot td {
  @apply border-t-0;
}
</style>
