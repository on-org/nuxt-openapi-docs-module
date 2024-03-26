const isDev = process.env.NODE_ENV !== 'production';
const currentDate = new Date();
const timestamp = currentDate.getTime();

export default defineNuxtConfig({
  app: {
    baseURL: isDev ? '/' : '/nuxt-openapi-docs-module',
    buildAssetsDir: 'assets'
  },
  experimental: {
    payloadExtraction: false
  },
  nitro: {
    inlineDynamicImports: true
  },
  plugins: [
    { src: '@/plugins/content' },
  ],
  runtimeConfig: {
    // The private keys which are only available within server-side
    timestamp,
    // Keys within public, will be also exposed to the client-side
    public: {
      timestamp
    }
  },
  vite: {
    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.esm-bundler.js',
      },
    },
  },
  // debug: true,
  modules: [
    [
      '../src/module',
      {
        folder: './docs/openapi',
        name: 'Api Docs',
        debug: true,
        list: true,
        footer: '<div><b>Nuxt OpenApi doc panel</b> - [<a href="https://on-org.github.io/nuxt-openapi-docs-module/docs/petstore-extended/components">Example</a>] [<a href="https://github.com/on-org/nuxt-openapi-docs-module">Info</a>] by <a href="https://github.com/s00d">s00d</a></div>',
        files: function() {
          if(process.env.NODE_ENV !== 'production') {
            return {
              'petstore_extended': 'Petstore Extended Api',
              // 'api.json': 'API Proxy',
              // "allof": "allof",
              // "webhook": "webhook",
              'page': 'Custom Page',
              // 'localization': 'Localization',
              // 'no-access': 'no access',
              // 'test-yaml.yaml': 'yaml ext',
              // 'test-json.json': 'json ext',
              // 'https://petstore.swagger.io/v2/swagger.json': 'petstore url',
            }
          }
          return {
            'petstore_extended': 'Petstore Extended Api',
            'localization': 'Localization',
            'no-access': 'no access',
            'page': 'Custom Page',
            "additional-props": "additional-props",
            "allof": "allof",
            "arr-of-arr": "arr-of-arr",
            "arrange-by-tags": "arrange-by-tags",
            "array-and-object-nesting": "array-and-object-nesting",
            "auth-test1": "auth-test1",
            "auth": "auth",
            "callback": "callback",
            "circular": "circular",
            "code-highlight": "code-highlight",
            "collapsable": "collapsable",
            "data-types-simple": "data-types-simple",
            "data-types": "data-types",
            "dynamic-form-params": "dynamic-form-params",
            "dynamic-query-params": "dynamic-query-params",
            "events": "events",
            "example-with-nested-refs": "example-with-nested-refs",
            "examples": "examples",
            "file-upload": "file-upload",
            "fill-example-test": "fill-example-test",
            "large-spec": "large-spec",
            "links": "links",
            "markdown-headings": "markdown-headings",
            "markdown": "markdown",
            "mock": "mock",
            "multi-datatypes-test": "multi-datatypes-test",
            "multi-datatypes": "multi-datatypes",
            "multipart-formdata": "multipart-formdata",
            "multiple-oneof": "multiple-oneof",
            "multiple-security-schemes": "multiple-security-schemes",
            "no-server": "no-server",
            "oauth-demo": "oauth-demo",
            "oauth-o365": "oauth-o365",
            "oauth-vendor-extension": "oauth-vendor-extension",
            "oauth": "oauth",
            "oneof-allof-nested": "oneof-allof-nested",
            "oneof-combinations": "oneof-combinations",
            "oneof-with-refs": "oneof-with-refs",
            "oneof": "oneof",
            "open-api-3-1-test": "open-api-3-1-test",
            "open-api-3-1": "open-api-3-1",
            "parameters": "parameters",
            // "perf-v2"rerf-v3",
            "petstore": "petstore",
            "post-nobody": "post-nobody",
            "request-body-multiple": "request-body-multiple",
            "schema-title-and-descriptions": "schema-title-and-descriptions",
            "schema": "schema",
            "server-override": "server-override",
            "server": "server",
            "toomany-example-generation": "toomany-example-generation",
            "webhook": "webhook",
            "xml": "xml",
          }
        }
      }
    ],
    [
      '@nuxtjs/i18n',
      {
        vueI18n: './i18n.config.ts',
        locale: 'en',
        defaultLocale: 'en',
        lazy: true,
        debug: false,
        langDir: 'lang',
        // compilation: {
        //   jit: false
        // },
        bundle: {
          runtimeOnly: false,
        },
        experimental: {
          jsTsFormatResource: true
        },
        locales: [
          {
            code: 'en',
            file: 'en.json'
          },
          {
            code: 'ru',
            file: 'ru.json'
          },
          {
            code: 'de',
            file: 'de.json'
          }
        ],
      }
    ],
  ],

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
})
