import { defineNuxtConfig } from "nuxt/config";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      'nuxt-openapi-docs-module',
      {
        folder: './docs/openapi',
        name: 'Api Docs',
        locales: {en: 'English', ru: 'Русский'},
        files: function(ctx: any) {
          return {
            'petstore_extended': 'Petstore Extended Api',
          }
        },
        params: function(ctx: any) {
          return [{ in: 'queryString', name: 'apikey', value: '1111'}]
        }
      }
    ],
  ],
})
