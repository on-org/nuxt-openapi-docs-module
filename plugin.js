export default ({ app }, inject) => {
    const options = <%= JSON.stringify(options) %>
    const openapi_files = <%= options.files %>

    // Добавляем свойство $helloString в контекст Vue.js
    app.$openapidoc = options
    app.$openapidoc_files = openapi_files
    inject('openapidoc', options)
    inject('openapidoc_files', openapi_files)
}
