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
          :file="file"
          :path="path_doc"
        />
      </template>
    </OpenApiMainHeader>
    <div class="oapi-layout__body">
      <OpenApiMainLeftMenu :isMenuOpen="isMenuOpen" :isMobile="isMobile">
        <OpenApiMenu :routes="pathsByTags" :current-locale="currentLocale" :file="file" :path="path_doc" :files="files" :locales="locales" />
      </OpenApiMainLeftMenu>

      <OpenApiMainContent>
        <transition name="oapi-fade" tag="div">
          <% if (options.isNuxt2) {print('<Nuxt />');} %>
          <% if (options.isNuxt3) {print(' <div><slot></slot></div>');} %>
        </transition>
        <template #footer>
          <footer class="oapi-footer" v-if="footer" v-html="footer"></footer>
        </template>
      </OpenApiMainContent>
    </div>
  </div>
</template>

<script>
<% if (options.isNuxt3 ?? false) {
  print('import {useNuxtApp, showError, useRoute, useHead} from "#app";');
} %>

const isNuxt3 = <%= options.isNuxt3 ?? false %>;
const isNuxt2 = <%= options.isNuxt2 ?? false %>;

function genHead() {
  return {
    htmlAttrs: { class: 'oapi' }
  }
}

export default {
  name: 'openapi-docs',
  setup() {
    if(isNuxt3) {
      const file = '<%= options.fileName %>';
      const { $openapidoc } = useNuxtApp()
      useHead(genHead());
      if(!$openapidoc.hasAccess(file)) {
        showError({
          statusCode: 404,
          message: 'page not found',
        })
      }
      // @ts-ignore
      const route = useRoute()
      return {}
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
      // @ts-ignore
      locales: <%= JSON.stringify(options.locales) %>,
      name: '<%= options.name %>',
      isMenuOpen: true,
      isMobile: false,
      file: '<%= options.fileName %>',
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
.oapi .doc-info a {
  color: #4299e1;
  text-decoration: none;
  border-bottom: 1px solid #4299e1;
}
.oapi .doc-info a:hover {
  color: #2c5282;
  border-bottom: 1px solid #2c5282;
}
.oapi .doc-info img {
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
</style>
