const isDev = process.env.NODE_ENV !== 'production';
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // target: 'static',
  head: {
    title: 'nuxt-text-docs',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/auth' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
  ],

  router: {
    base: isDev ? '/' : '/nuxt-openapi-docs-module'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '../src/module',
      {
        folder: './docs/openapi',
        name: 'Api Docs',
        debug: true,
        files: function() {
          if(process.env.NODE_ENV !== 'production') {
            return {
              'petstore_extended': 'Petstore Extended Api',
              'localization': 'Localization',
              'no-access': 'no access',
              'test-yaml.yaml': 'yaml ext',
              'test-json.json': 'json ext',
              "oneof": "oneof",
              'https://petstore.swagger.io/v2/swagger.json': 'petstore url',
            }
          }
           return {
             'petstore_extended': 'Petstore Extended Api',
             'localization': 'Localization',
             'no-access': 'no access',

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
             // // "perf-v2": "perf-v2",
             // // "perf-v3": "perf-v3",
             "petstore": "petstore",
             "post-nobody": "post-nobody",
             "request-body-multiple": "request-body-multiple",
             "schema-title-and-descriptions": "schema-title-and-descriptions",
             "schema": "schema",
             "server-override": "server-override",
             "server": "server",
             "toomany-example-generation": "toomany-example-generation",
             "xml": "xml",
           }
        }
      }
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // babel: {
    //   compact: true,
    // },
  }
}
