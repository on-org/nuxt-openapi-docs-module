import MyModule from '../../../src/module'

export default defineNuxtConfig({
  modules: [
    MyModule,
    [
      'nuxt-i18n-micro',
      {
        locale: 'en',
        defaultLocale: 'en',
        translationDir: 'lang',
        disablePageLocales: true,
        autoDetectLanguage: false,
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

  openApiDocs: {
    folder: './docs',
    name: 'Api Docs',
    debug: true,
    list: true,
    footer: '<div><b>Nuxt OpenApi doc panel</b> - [<a href="https://on-org.github.io/nuxt-openapi-docs-module/docs/petstore-extended/components">Example</a>] [<a href="https://github.com/on-org/nuxt-openapi-docs-module">Info</a>] by <a href="https://github.com/s00d">s00d</a></div>',
    files: function() {
      return {
        'petstore_extended': 'Petstore Extended Api',
        'page': 'Custom Page',
        'localization': 'Localization',
        'no-access': 'no access',
        'test-yaml.yaml': 'yaml ext',
        'test-json.json': 'json ext',
        'https://petstore.swagger.io/v2/swagger.json': 'petstore url',
        "markdown-headings": "markdown-headings",
        "markdown": "markdown",
      }
    }
  },

  compatibilityDate: '2024-09-05'
})
