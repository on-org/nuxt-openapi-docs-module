<template>
  <div>
    <OpenApiInfo v-if="isInfo" :info="doc.info" :servers="doc.servers" :current-locale="currentLocale"></OpenApiInfo>
    <OpenApiComponents v-else-if="isComponents" :components="doc.components" :current-locale="currentLocale"></OpenApiComponents>
    <OpenApiRoute v-else-if="activeRoute" :route="activeRoute" :current-locale="currentLocale" :method="type" :components="doc.components" :url="path" :path_doc="path_doc" :file="file" :simples="simples" :server="server" :sub-params="subParams" />
    <NotFound v-else />
    <SearchBlock :current-locale="currentLocale" :doc="doc" :path="options.path" :file="file" />
  </div>
</template>

<script>
import OpenApiInfo from '../components/OpenApiInfo.vue';
import OpenApiComponents from '../components/OpenApiComponents.vue';
import OpenApiRoute from '../components/OpenApiRoute.vue';
import NotFound from '../components/NotFound.vue';
import SearchBlock from '../components/lib/SearchBlock.vue';

const simples = <%= options.params %>;

export default {
  name: 'AppDocs',
  layout(ctx) {
    return (`apidocs-layout-${ctx.route.params.file ?? ctx.route.meta[0].file}`)
      .replace(/["']/g, "")
      .replace(/./g, "-");
  },
  components: {
    OpenApiInfo,
    OpenApiComponents,
    OpenApiRoute,
    NotFound,
    SearchBlock,
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
  created() { this.$fetch(); },
  data() {
    return {
      options: <%= JSON.stringify(options) %>,
      path_doc: '<%= options.path %>',
      file: '<%= options.fileName %>',
      currentLocale: 'en',
      type: '',
      path: '',
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
    simples() {
      return simples(this)
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
      this.$nuxt.$on('downloadYamlDoc', this.downloadYaml);
    }
  },
  destroyed() {
    if(process.client) {
      this.$nuxt.$off('downloadYamlDoc', this.downloadYaml);
    }
  },
}
</script>

<style>
</style>
