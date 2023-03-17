export default defineNuxtPlugin((nuxt) => {
  const options = <%= JSON.stringify(options) %>
  const openapi_files = <%= options.files %>
  const openapidoc_simples = <%= options.params %>

    // Добавляем свойство $helloString в контекст Vue.js
  nuxt.$openapidoc = options
  nuxt.$openapidoc_files = openapi_files
  nuxt.$openapidoc_simples = openapidoc_simples
  // inject('openapidoc', options)
  // inject('openapidoc_files', openapi_files)
  // inject('openapidoc_simples', openapidoc_simples)
})
