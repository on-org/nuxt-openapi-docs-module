<template>
  <% if (options.isNuxt3 ?? false) {print('<NuxtLayout :name="layout">');} %>
    <div>
      <OpenApiInfo v-if="isInfo" :info="doc.info" :servers="doc.servers" :current-locale="currentLocale"></OpenApiInfo>
      <OpenApiAuth v-else-if="isAuth" :components="doc.components" :current-locale="currentLocale"></OpenApiAuth>
      <OpenApiComponents v-else-if="isComponents" :components="doc.components" :current-locale="currentLocale"></OpenApiComponents>
      <OpenApiRoute v-else-if="activeRoute" :route="activeRoute" :current-locale="currentLocale" :method="type" :components="doc.components" :url="url" :path_doc="path_doc" :file="file" :server="server" :sub-params="subParams" />
      <OpenApiRoute v-else-if="activeWebhook" :route="activeWebhook" :current-locale="currentLocale" :method="type" :components="doc.components" :url="url" :path_doc="path_doc" :file="file" :server="server" :sub-params="subParams" />
      <NotFound v-else />
      <SearchBlock :current-locale="currentLocale" :doc="doc" :path="options.path" :file="file" />
    </div>
  <% if (options.isNuxt3 ?? false) {print('</NuxtLayout>');} %>
</template>

<script>
<% if (options.isNuxt3 ?? false) {
  print('import {useRoute} from "#app";');
} %>

const isNuxt3 = <%= options.isNuxt3 ?? false %>;
export default {
  name: 'AppDocs',
  nuxtI18n: {
    // @ignore
    locales: <%= JSON.stringify(Object.keys(options.locales)) %>,
  },
  layout: `<%= options.layoutName %>`,
  transition: {
    name: 'fade'
  },
  head() {
    if (this.isInfo) {
      return {
        title: '[' +this.file + '] - ' + 'Info Docs',
        description: '',
      };
    }
    if (this.isComponents) {
      return {
        title: '[' +this.file + '] - ' + 'Components Docs',
        description: '',
      };
    }

    if (!this.activeRoute) {
      return {}
    }

    const title = this.activeRoute[`x-summary-${this.currentLocale}`] ?? this.activeRoute['summary'] ?? ''
    const description = this.activeRoute[`x-description-${this.currentLocale}`] ?? this.activeRoute['description'] ?? ''

    return {
      title: '[' +this.file + '] - ' + title,
      description: description,
    };
  },
  setup() {
    if(isNuxt3) {
      const route = useRoute()
      return {
        type: route.params.type ?? route.meta.type,
        path: route.params.path ?? route.meta.path,
        url: route.params.url ?? route.meta.url,
        file: route.params.file ?? route.meta.file,
      }
    }
  },
  async fetch() {
    const ctx = this.$nuxt.context
    try {
      this.type = ctx.route.params.type ?? ctx.route.meta[0].type;
      this.path = ctx.route.params.path ?? ctx.route.meta[0].path;
      this.url = ctx.route.params.url ?? ctx.route.meta[0].url;
      this.file = ctx.route.params.file ?? ctx.route.meta[0].file;
    } catch (e) {
      console.error(e)
      console.error(ctx.route)
    }
  },
  created() { if(this && this.$fetch) this.$fetch(); },
  data() {
    return {
      layout: `<%= options.layoutName %>`,
      options: <%= JSON.stringify(options) %>,
      path_doc: '<%= options.path %>',
      // file: '<%= options.fileName %>',
      // currentLocale: 'en',
      // type: '',
      // path: '',
    };
  },
  watch: {
    '$route.meta': {
      handler: function(val) {
        this.type = val.type;
        this.path = val.path;
        this.url = val.url;
      },
      deep: true
    },
  },
  methods: {
    downloadJson() {
      const json = JSON.stringify(this.doc, null, 4);
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = this.file + '.json';
      document.body.appendChild(link);

      link.click();

      // Очистить ссылку и объект URL после скачивания файла
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  },
  computed: {
    currentLocale() {
      return this.$openapidoc.currentLocale()
    },
    doc() {
      return this.options.doc
    },
    name() {
      return this.options.name
    },
    isInfo() {
      return this.path === 'info'
    },
    isAuth() {
      return this.path === 'auth'
    },
    isComponents() {
      return this.path === 'components'
    },
    activeRoute() {
      if(!this.options.doc.paths) return null;
      if(!this.options.doc.paths[this.url]) return null;
      return this.options.doc.paths[this.url][this.type] ?? null
    },
    activeWebhook() {
      if(!this.options.doc.webhooks) return null;
      if(!this.options.doc.webhooks[this.url]) return null;
      return this.options.doc.webhooks[this.url][this.type] ?? null
    },

    subParams() {
      if(!this.options.doc.paths) return null;
      if(!this.options.doc.paths[this.url]) return null;
      return this.options.doc.paths[this.url]['parameters'] ?? null
    },

    server() {
      if(this.options.doc.paths && this.options.doc.paths[this.url] && this.options.doc.paths[this.url]['servers'] && this.options.doc.paths[this.url]['servers'][0]) {
        return this.options.doc.paths[this.url]['servers'][0].url ?? null
      }

      if (!this.options.doc.servers || !this.options.doc.servers[0]) {
        return null;
      }
      return this.options.doc.servers[0].url ?? null
    },
  },
  mounted() {
    if(process.client) {
      this.$openapidocBus.$on('downloadJsonDoc', this.downloadJson);
    }
  },
  unmounted() {
    this.$openapidocBus.$off('downloadJsonDoc', this.downloadJson);
  },
  destroyed() {
    this.$openapidocBus.$off('downloadJsonDoc', this.downloadJson);
  },
}
</script>

<style>
</style>
