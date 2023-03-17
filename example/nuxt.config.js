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

  ],


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'nuxt-openapi-docs-module',
      {
        folder: './docs/openapi',
        name: 'Api Docs',
        locales: {en: 'English', ru: 'Русский'},
        files: function(ctx) {
          var docs = {
            'petstore_extended': 'Petstore Extended Api',
          };
          if (ctx.$auth) {
            docs['News-API'] = 'News API'
          }
           return docs
        },
        params: function(ctx) {
          return [{ in: 'queryString', name: 'apikey', value: '1111'}]
        }
      }
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
