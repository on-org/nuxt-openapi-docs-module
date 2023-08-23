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
          <div><slot></slot></div>
        </transition>
        <template #footer>
          <footer class="oapi-footer" v-if="footer" v-html="footer"></footer>
        </template>
      </OpenApiMainContent>
    </div>
  </div>
</template>

<script>
import {useNuxtApp, showError, useHead} from "#app";

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
  setup() {
    const { $openapidoc } = useNuxtApp()
    useHead(genHead());

    if(!$openapidoc.hasAccess(fileName)) {
      showError({
        statusCode: 404,
        message: 'page not found',
      })
    }
    return {}
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
      isMenuOpen: true,
      isMobile: false,
      localesReload: localesReload,
      fileName: fileName,
      servers: servers,
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

<style lang="scss">

.oapi-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  &__body {
    display: flex;
    overflow: hidden;
    flex: 1 1 0;
    position: relative;
  }
}

.oapi {
  blockquote {
    font-style: italic;
    margin-left: 20px;
    padding-left: 10px;
    border-left: 5px solid #ccc;
  }

  &-route {
    a {
      color: #4299e1;
      text-decoration: none;
      border-bottom: 1px solid #4299e1;
    }

    a:hover {
      color: #2c5282;
      border-bottom: 1px solid #2c5282;
    }

    img {
      max-width: 100%;
      margin: 1.5rem 0;
    }
  }
}

.oapi-fade-enter-active, .oapi-fade-leave-active {
  transition: opacity .3s;
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
  transition: box-shadow .1s;
  width: 100%;

  border-collapse: collapse !important;

  td,th,tr {
    border: 1px solid #dae1e7;
  }

  td:hover,th:hover,tr:hover {
    background-color: #f8fafc;
  }

  td,th {
    padding: 0.2rem 0.5rem;
  }

  th {
    background-color: #2396f3;
    color: #ffffff;
    border-width: 1px;
    border-color: #ffffff;
  }
  th:hover {
    background-color: #158eef;
  }
}
</style>
