<template>
  <NuxtLayout :name="layout">
    <OpenApiInfo v-if="isInfo" :info="doc.info" :servers="doc.servers" :current-locale="currentLocale"></OpenApiInfo>
    <OpenApiAuth v-else-if="isAuth" :components="doc.components" :current-locale="currentLocale"></OpenApiAuth>
    <OpenApiComponents v-else-if="isComponents" :components="doc.components" :current-locale="currentLocale"></OpenApiComponents>
    <OpenApiRoute v-else-if="activeRoute" :route="activeRoute" :current-locale="currentLocale" :method="type" :components="doc.components" :url="url" :path_doc="path_doc" :file="file" :server="server" :sub-params="subParams" />
    <OpenApiRoute v-else-if="activeWebhook" :route="activeWebhook" :current-locale="currentLocale" :method="type" :components="doc.components" :url="url" :path_doc="path_doc" :file="file" :server="server" :sub-params="subParams" />
    <NotFound v-else />
    <SearchBlock :current-locale="currentLocale" :doc="doc" :path="options.path" :file="file" />
  </NuxtLayout>
</template>

<script>
import {useRoute, useNuxtApp} from "#app";

// eslint-disable-next-line @ts-ignore
const options = <%= JSON.stringify(options) %>;
// eslint-disable-next-line @ts-ignore
const layoutName = `<%= options.layoutName %>`;
// eslint-disable-next-line @ts-ignore
const routePath = '<%= options.path %>';
// eslint-disable-next-line @ts-ignore
const pathDoc = '<%= options.path %>';

export default {
  name: 'AppDocs',

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
    const route = useRoute()
    const { $openapidocRef } = useNuxtApp()

    const file = route.params.file ?? route.meta.file;

    $openapidocRef.setComponents(options.doc.components)
    $openapidocRef.setDefinitions(options.doc.definitions)
    $openapidocRef.setDocPath('<%= options.path %>')
    $openapidocRef.setFile(file)
    return {
      type: route.params.type ?? route.meta.type  ?? 'get',
      path: route.params.path ?? route.meta.path,
      file: file,
    }
  },
  data() {
    return {
      layout: layoutName,
      options: options,
      path_doc: pathDoc,
      url: '',
      // file: '',
      // type: '',
      // path: '',
    };
  },
  watch: {
    '$route.meta': {
      handler: function(val) {
        this.type = val.type;
        this.path = val.path;
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
    activePath() {
      if(!this.options.doc.paths) return null;
      for (let path in this.options.doc.paths) {
        let routePath = path;
        if (routePath.startsWith('/')) routePath = routePath.substring(1);
        if (routePath.endsWith('/')) routePath = routePath.substring(-1);
        routePath = routePath.replace(/[/\\.?+=&{}]/gumi, '_').replace(/__+/, '_')

        if(routePath === this.path) {
          this.url = path;
          return this.options.doc.paths[path] ?? null
        }
      }
      return null;
    },
    activeRoute() {
      if(!this.activePath) return null;
      return this.activePath[this.type] ?? null;
    },
    subParams() {
      if(!this.activePath) return null;
      return this.activePath['parameters'] ?? null;
    },
    activeWebhook() {
      if(!this.options.doc.webhooks) return null;
      for (let path in this.options.doc.webhooks) {
        let routePath = path;
        if (routePath.startsWith('/')) routePath = routePath.substring(1);
        if (routePath.endsWith('/')) routePath = routePath.substring(-1);
        routePath = routePath.replace(/[/\\.?+=&{}]/gumi, '_').replace(/__+/, '_')

        if(routePath === this.path) {
          this.url = path;
          return this.options.doc.webhooks[path][this.type] ?? null
        }
      }

      return null;
    },

    server() {
      if(this.activePath && this.activePath['servers'] && this.activePath['servers'][0]) {
        return this.activePath['servers'][0].url ?? null
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
  nuxtI18n: {
    // eslint-disable-next-line @ts-ignore
    locales: <%= JSON.stringify(Object.keys(options.locales)) %>,
  },
}
</script>

<style>
</style>
