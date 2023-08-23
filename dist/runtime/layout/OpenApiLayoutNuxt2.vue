<template>
  <div class="oapi-layout">
    <OpenApiMainHeader :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu">
      <template #logo>
        <nuxt-link to="/" :active-class="''">
          <span v-html="logo"></span>
        </nuxt-link>
      </template>
      <template #button>
        <OpenApiHeader
          :current-locale="currentLocale"
          :files="files"
          :locales="locales"
          :file="fileName"
          :path="path_doc"
        />
      </template>
    </OpenApiMainHeader>
    <div class="oapi-layout__body">
      <OpenApiMainLeftMenu :isMenuOpen="isMenuOpen" :isMobile="isMobile">
        <OpenApiMenu :routes="pathsByTags" :current-locale="currentLocale" :file="fileName" :path="path_doc" :files="files" :locales="locales" :locales-reload="localesReload" :servers="servers" />
      </OpenApiMainLeftMenu>

      <OpenApiMainContent>
        <transition name="oapi-fade" tag="div">
          <Nuxt />
        </transition>
        <template #footer>
          <footer class="oapi-footer" v-if="footer" v-html="footer"></footer>
        </template>
      </OpenApiMainContent>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line @ts-ignore
const localesReload = <%= options.localesReload ?? false %>;
// eslint-disable-next-line @ts-ignore
const pathsByTags = <%= JSON.stringify(options.pathsByTags) %>;
// eslint-disable-next-line @ts-ignore
const files = <%= JSON.stringify(options.files) %>;
// eslint-disable-next-line @ts-ignore
const path_doc = '<%= options.path %>';
// eslint-disable-next-line @ts-ignore
const locales = <%= JSON.stringify(options.locales) %>;
// eslint-disable-next-line @ts-ignore
const name = '<%= options.name %>';
// eslint-disable-next-line @ts-ignore
const fileName = '<%= options.fileName %>';
// eslint-disable-next-line @ts-ignore
const servers = <%= JSON.stringify(options.doc.servers ?? {}) %>;

function genHead() {
  return {
    htmlAttrs: { class: 'oapi' }
  }
}

export default {
  name: 'openapi-docs',
  async fetch() {
    try {
      if(!this.$openapidoc.hasAccess(this.fileName)) {
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
      pathsByTags: pathsByTags,
      files: files,
      path_doc: path_doc,
      locales: locales,
      name: name,
      servers: servers,
      isMenuOpen: true,
      isMobile: false,
      localesReload: localesReload,
      fileName: fileName,
    };
  },
  head() {
    return genHead();
  },
  computed: {
    currentLocale() {
      return this.$openapidoc.currentLocale()
    },
    footer() {
      return this.$openapidoc.getFooter()
    },
    logo() {
      return this.$openapidoc.getLogo().replace(':name', this.name)
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleResize() {
      this.isDesktop = window.innerWidth >= 1110;
      this.isMobile = window.innerWidth < 1110;
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
      this.isMobile = window.innerWidth < 1110;
      this.isMenuOpen = window.innerWidth >= 1110;
      window.addEventListener('resize', this.handleResize)
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
.oapi-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.oapi-layout__body {
  display: flex;
  overflow: hidden;
  flex: 1 1 0;
  position: relative;
}

.oapi blockquote {
  font-style: italic;
  margin-left: 20px;
  padding-left: 10px;
  border-left: 5px solid #ccc;
}
.oapi-route a {
  color: #4299e1;
  text-decoration: none;
  border-bottom: 1px solid #4299e1;
}
.oapi-route a:hover {
  color: #2c5282;
  border-bottom: 1px solid #2c5282;
}
.oapi-route img {
  max-width: 100%;
  margin: 1.5rem 0;
}

.oapi-fade-enter-active, .oapi-fade-leave-active {
  transition: opacity 0.3s;
}

.oapi-fade-enter, .oapi-fade-leave-to {
  opacity: 0;
}

.oapi-footer {
  border-top: 1px solid #e2e2e2;
  padding: 8px 0;
  font-size: 0.875rem;
}

p, .p {
  font-weight: 400;
}

.table {
  background-color: white;
  margin-bottom: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  transition: box-shadow 0.1s;
  width: 100%;
  border-collapse: collapse !important;
}
.table td, .table th, .table tr {
  border: 1px solid #dae1e7;
}
.table td:hover, .table th:hover, .table tr:hover {
  background-color: #f8fafc;
}
.table td, .table th {
  padding: 0.2rem 0.5rem;
}
.table th {
  background-color: #2396f3;
  color: #ffffff;
  border-width: 1px;
  border-color: #ffffff;
}
.table th:hover {
  background-color: #158eef;
}
</style>
