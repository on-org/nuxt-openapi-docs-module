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
    { src: '@/plugins/content' },
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

  generate: {
    fallback: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'nuxt-openapi-docs-module',
      {
        folder: './docs/openapi',
        name: 'Api Docs',
        debug: true,
        files: function() {
          if(process.env.NODE_ENV !== 'production') {
            return {
              'petstore_extended': 'Petstore Extended Api',
              'Reseller-API-UN': 'Reseller-API-UN',
              // "post-nobody": "post-nobody",
              'localization': 'Localization',
              'page': 'Custom Page',
              "additional-props": "additional-props",
              // "array-and-object-nesting": "array-and-object-nesting",
              // 'no-access': 'no access',
              // 'test-yaml.yaml': 'yaml ext',
              // 'test-json.json': 'json ext',
              // "external-refs.yaml": "external-refs.yaml",
              // "external-refs2.yaml": "external-refs2.yaml",
              // 'https://petstore.swagger.io/v2/swagger.json': 'petstore url',
            }
          }
           return {
             'petstore_extended': 'Petstore Extended Api',
             'localization': 'Localization',
             'no-access': 'no access',
             'page': 'Custom Page',
             'webhook': 'webhook',
             "external-refs": "external-refs",
             "external-refs2": "external-refs2",

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
    [
      '@nuxtjs/i18n',
      {
        locales: ['en', 'ru', 'de'],
        defaultLocale: 'en',
        detectBrowserLanguage: false,
        seo: false,
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: {
              welcome: 'Welcome',
              openapidoc: {
                "api_documentation": "API documentation",
                "info": "Info",
                "components": "Components",
                "callbacks": "Callbacks",
                "examples": "Examples",
                "media_type": "Media Type",
                "summary": "Summary",
                "content": "Content",
                "title": "Title",
                "servers": "ServersServers",
                "code_simple": "Code simple",
                "type": "Type",
                "enum": "Enum",
                "pattern": "Pattern",
                "items": "Items",
                "properties": "Properties",
                "name": "Name",
                "security": "Security",
                "security_schemes": "Security Schemes",
                "one_of": "One Of",
                "all_of": "All Of",
                "additional_properties": "Additional Properties",
                "default": "Default",
                "format": "Format",
                "deprecated": "Deprecated!",
                "value": "Value",
                "parameter_name": "Parameter Name",
                "description": "Description",
                "required": "Required",
                "schema": "Schema",
                "example": "Example",
                "request_bodies": "Request Bodies",
                "request_body": "Request Body",
                "responses": "Responses",
                "status": "Status",
                "in": "In",
                "minimum": "Minimum string length",
                "maximum": "Maximum number of items",
                "maximum_props": "Maximum number of properties",
                "minimum_props": "Minimum number of properties",
                "not": "Not",
                "schemas": "Schemas",
                "bearer_format": "Bearer format",
                "authorization_url": "Authorization URL",
                "token_url": "Token URL",
                "refresh_url": "Refresh URL",
                "scopes": "Scopes",
                "content_type": "Content Type",
                "variables": "Variables",
                "scheme": "Scheme",
                "external_docs": "External Docs",
                "parameters": "Parameters",
                "style": "Style",
                "auth": "Authorization",
                "headers": "Headers"
              }
            },
            ru: {
              welcome: 'Добро пожаловать!',
              openapidoc: {
                "api_documentation": "Документация по API",
                "info": "Информация",
                "components": "Компоненты",
                "callbacks": "Обратные вызовы",
                "examples": "Примеры",
                "media_type": "Тип медиа",
                "summary": "Сводка",
                "content": "Содержание",
                "title": "Заголовок",
                "servers": "Серверы",
                "code_simple": "Простой код",
                "type": "Тип",
                "enum": "Перечисление",
                "pattern": "Шаблон",
                "items": "Элементы",
                "properties": "Свойства",
                "name": "Название",
                "security": "Безопасность",
                "security_schemes": "Схемы безопасности",
                "one_of": "Одно из",
                "all_of": "Все из",
                "additional_properties": "Дополнительные свойства",
                "default": "По умолчанию",
                "format": "Формат",
                "deprecated": "Устаревший!",
                "value": "Значение",
                "parameter_name": "Имя параметра",
                "description": "Описание",
                "required": "Обязательный",
                "schema": "Схема",
                "example": "Пример",
                "request_bodies": "Тела запросов",
                "request_body": "Тело запроса",
                "responses": "Ответы",
                "status": "Статус",
                "in": "В",
                "minimum": "Минимальная длина строки",
                "maximum": "Максимальное количество элементов",
                "maximum_props": "Максимальное количество свойств",
                "minimum_props": "Минимальное количество свойств",
                "not": "Не",
                "bearer_format": "Формат Bearer",
                "authorization_url": "URL авторизации",
                "token_url": "URL токена",
                "refresh_url": "URL обновления",
                "scopes": "Области",
                "schemas": "Схемы",
                "variables": "Переменные",
                "scheme": "Scheme",
                "external_docs": "External Docs",
                "parameters": "Parameters",
                "style": "Style",
                "auth": "Авторизация",
                "headers": "Headers"
              }
            },
            de: {
              welcome: 'Willkommen!',
              openapidoc: {
                "api_documentation": "API-Dokumentation",
                "info": "Info",
                "components": "Komponenten",
                "callbacks": "Rückrufe",
                "examples": "Beispiele",
                "media_type": "Medientyp",
                "summary": "Zusammenfassung",
                "content": "Inhalt",
                "title": "Titel",
                "servers": "Server",
                "code_simple": "Einfacher Code",
                "type": "Typ",
                "enum": "Enumeration",
                "pattern": "Muster",
                "items": "Elemente",
                "properties": "Eigenschaften",
                "name": "Name",
                "security": "Sicherheit",
                "security_schemes": "Sicherheitsschemas",
                "one_of": "Eins von",
                "all_of": "Alles von",
                "additional_properties": "Zusätzliche Eigenschaften",
                "default": "Standard",
                "format": "Format",
                "deprecated": "Veraltet!",
                "value": "Wert",
                "parameter_name": "Parametername",
                "description": "Beschreibung",
                "required": "Erforderlich",
                "schema": "Schema",
                "example": "Beispiel",
                "request_bodies": "Anforderungsbodies",
                "request_body": "Anforderungs-Body",
                "responses": "Antworten",
                "status": "Status",
                "in": "In",
                "schemas": "Schemas",
                "minimum": "Minimale Zeichenlänge",
                "maximum": "Maximale Anzahl von Elementen",
                "maximum_props": "Maximale Anzahl von Eigenschaften",
                "minimum_props": "Minimale Anzahl von Eigenschaften",
                "not": "Nicht",
                "bearer_format": "Bearer-Format",
                "authorization_url": "Autorisierungs-URL",
                "token_url": "Token-URL",
                "refresh_url": "Aktualisierungs-URL",
                "scopes": "Berechtigungen",
                "variables": "Variablen",
                "scheme": "Scheme",
                "external_docs": "External Docs",
                "parameters": "Parameters",
                "style": "Style",
                "auth": "Authorization",
                "headers": "Headers"
              }
            }
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
