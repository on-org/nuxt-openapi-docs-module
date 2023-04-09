<template>
  <div>
    <OpenApiInfo v-if="isInfo" :info="doc.info" :servers="doc.servers" :current-locale="currentLocale"></OpenApiInfo>
    <OpenApiComponents v-else-if="isComponents" :components="doc.components" :current-locale="currentLocale"></OpenApiComponents>
    <OpenApiRoute v-else-if="activeRoute" :route="activeRoute" :current-locale="currentLocale" :method="type" :components="doc.components" :url="path" :path_doc="path_doc" :file="file" :server="server" :sub-params="subParams" />
    <NotFound v-else />
    <SearchBlock :current-locale="currentLocale" :doc="doc" :path="options.path" :file="file" />
  </div>
</template>


<script>

const isNuxt3 = <%= options.isNuxt3 %>;
const isNuxt2 = <%= options.isNuxt2 %>;

if(isNuxt3) {
  definePageMeta({
    layout: `<%= options.layoutName %>`,
  });
}

export default {
  name: 'AppDocs',
  layout: `<%= options.layoutName %>`,
  transition: {
    name: 'fade'
  },
  head() {
    if (this.isInfo) {
      return {
        title: `[${this.file}] - Info Docs`,
        description: '',
      };
    }
    if (this.isComponents) {
      return {
        title: `[${this.file}] - Components Docs`,
        description: '',
      };
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
      const currentLocale = ref(route.params.locale ?? route.meta.locale)
      const type = ref(route.params.type ?? route.meta.type)
      const path = ref(route.params.path ?? route.meta.path)

      return {
        currentLocale,
        type,
        path
      }
    }
  },
  async fetch() {
    const ctx = this.$nuxt.context
    try {
      this.currentLocale = ctx.route.params.locale ?? ctx.route.meta[0].locale;
      this.type = ctx.route.params.type ?? ctx.route.meta[0].type;
      this.path = ctx.route.params.path ?? ctx.route.meta[0].path;
    } catch (e) {
      console.error(e)
      console.error(ctx.route)
    }
  },
  created() { if(this && this.$fetch) this.$fetch(); },
  data() {
    return {
      options: <%= JSON.stringify(options) %>,
      path_doc: '<%= options.path %>',
      file: '<%= options.fileName %>',
      // currentLocale: 'en',
      // type: '',
      // path: '',
    };
  },
  watch: {
    '$route.meta': {
      handler: function(val) {
        this.currentLocale = val.locale;
        this.type = val.type;
        this.path = val.path;
      },
      deep: true
    },
  },
  methods: {
    downloadYaml() {
      const json = JSON.stringify(this.doc, null, 4);
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = this.file + '.yaml';
      document.body.appendChild(link);

      link.click();

      // Очистить ссылку и объект URL после скачивания файла
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  },
  computed: {
    doc() {
      return this.options.doc
    },
    name() {
      return this.options.name
    },
    isInfo() {
      return this.path === 'info'
    },
    isComponents() {
      return this.path === 'components'
    },
    activeRoute() {
      if(!this.options.doc.paths) return null;
      if(!this.options.doc.paths[this.path]) return null;
      return this.options.doc.paths[this.path][this.type] ?? null
    },

    subParams() {
      if(!this.options.doc.paths) return null;
      if(!this.options.doc.paths[this.path]) return null;
      return this.options.doc.paths[this.path]['parameters'] ?? null
    },

    server() {
      if(this.options.doc.paths && this.options.doc.paths[this.path] && this.options.doc.paths[this.path]['servers'] && this.options.doc.paths[this.path]['servers'][0]) {
        return this.options.doc.paths[this.path]['servers'][0].url ?? null
      }

      if (!this.options.doc.servers || !this.options.doc.servers[0]) {
        return null;
      }
      return this.options.doc.servers[0].url ?? null
    },
  },
  mounted() {
    if(process.client) {
      this.$openapidocBus.$on('downloadYamlDoc', this.downloadYaml);
    }
  },
  unmounted() {
    this.$openapidocBus.$off('downloadYamlDoc', this.downloadYaml);
  },
  destroyed() {
    this.$openapidocBus.$off('downloadYamlDoc', this.downloadYaml);
  },
}
</script>

<style>
</style>
