<div class="links">
    <a href="https://badge.fury.io/js/nuxt-openapi-docs-module" target="_blank">
        <img src="https://badge.fury.io/js/nuxt-openapi-docs-module.svg" alt="npm version">
    </a>
    <a href="https://badge.fury.io/js/nuxt-openapi-docs-module" target="_blank">
        <img src="https://img.shields.io/npm/dw/nuxt-openapi-docs-module" alt="npm downloads">
    </a>
    <a href="https://github.com/on-org/nuxt-openapi-docs-module/blob/master/LICENSE" target="_blank">
        <img src="https://img.shields.io/npm/l/nuxt-openapi-docs-module" alt="NPM license">
    </a>
    <a href="https://github.com/on-org/nuxt-openapi-docs-module" target="_blank">
        <img src="https://img.shields.io/npm/types/nuxt-openapi-docs-module" alt="npm type definitions">
    </a>
    <a href="https://www.paypal.me/s00d" target="_blank">
        <img src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" alt="donate">
    </a>
    <a href="https://github.com/on-org/nuxt-openapi-docs-module" target="_blank">
        <img src="https://img.shields.io/github/stars/on-org/nuxt-openapi-docs-module?style=social" alt="GitHub Repo stars">
    </a>
</div>

# OpenApiDocs Nuxt Module

<p align="center">
<img src="https://raw.githubusercontent.com/on-org/nuxt-openapi-docs-module/main/img/logo_long.png" alt="logo">
</p>

This module provides a simple way to display OpenAPI documentation in a Nuxt.js 2 & 3 application. It allows you to define an OpenAPI specification file and renders it using a set of reusable Vue.js components.

work with static and server target

# Package Version Information

| Version | 	Supported Nuxt Version |
|---------|-------------------------|
| 3.0     | 	2.x and 3.x            |
| 4.0     | 	2.x and 3.x            |
| 5.0     | 	3.x                    |
| 5.2     | 	> 3.7                  |

for nuxt 3 need add vite.config.ts

```js
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      external: ["vue/server-renderer"],
    },
  },
});

```

## Documentation and Support

- **Version Information:** The module is compatible with various Nuxt versions, supporting specific features based on the version.
- **Release Notes:** [View Changes and Updates](https://github.com/on-org/nuxt-openapi-docs-module/blob/main/changelog.md)
- **Demo and Examples:** [See it in Action](https://on-org.github.io/nuxt-openapi-docs-module/)
- **Live Example:** [Lite example on StackBlitz](https://stackblitz.com/edit/github-j7idul?file=README.md)

For detailed instructions, please refer to the official GitHub repository or the provided demo links.

<img src="https://raw.githubusercontent.com/on-org/nuxt-openapi-docs-module/main/img/white1.jpeg"  width="400" alt="white image">
<img src="https://raw.githubusercontent.com/on-org/nuxt-openapi-docs-module/main/img/white2.jpeg"  width="400" alt="white image 2">
<img src="https://raw.githubusercontent.com/on-org/nuxt-openapi-docs-module/main/img/mobile1.jpeg"  width="400" alt="black image">
<img src="https://raw.githubusercontent.com/on-org/nuxt-openapi-docs-module/main/img/mobile2.jpeg"  width="400" alt="mobile image">

## Quick Setup

1. Add **'nuxt-openapi-docs-module'** dependency to your project

```bash
npx nuxi@latest module add nuxt-openapi-docs-module
```

2. Add **'nuxt-openapi-docs-module'** to the **'modules'** section of **'nuxt.config.ts'**

nuxt 3
```js
export default defineNuxtConfig({
  modules: [
    'nuxt-openapi-docs-module'
  ]
})
```

nuxt 2
```js
module.exports = {
  modules: [
    'nuxt-openapi-docs-module',
  ],
}
```

3. create **'docs/openapi;** folder in root project dir(not src) or change path - **'folder'** parameter

4. You can use [Vue Devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) "Routes" section to see new routes.

## Configuration
You can customize the behavior of the module by providing options in the nuxt.config.js file.

```javascript
module.exports = {
modules: [
    [
        'nuxt-openapi-docs-module',
        {
            folder: './docs/openapi',
            name: 'OpenApiDocs',
            files: function() {return { 'News-API': 'News API'}},
        }
    ],
],
// ...
}
```
- **'folder'** (default: ./docs/openapi): the folder where your OpenAPI specification files are located.
- **'name'** (default: OpenApiDocs): the name of the main component used to render the OpenAPI documentation.
- **'path'**: the component url for docs.
- **'files'**: function with files list in OpenApiDocs folder, files: function() {return { 'News-API': 'News API'}}.
- **'debug'**: print debug information to console, Default: false
- **'list'**: Toggling the list of documents, Default: false
- **'locales'**: array wit enabled locales, Default: **['en']** Support: `['en', 'fr', 'de', 'ru', 'ch', 'es', 'hi', 'ar', 'zh', 'pt''bn', 'it', 'ja', 'jv', 'ko', 'pa', 'ta', 'te', 'tr']`
- **'logo'**: svg logo in string
- **'footer'**: doc footer
-
### Folder Structure
The default folder structure for your OpenAPI specification files should look like this:

```markdown
docs/
    openapi/
        api1.yaml
        api2.yaml
```


### Localization

Localization works together with the i18n plugin

1. Add info - x-locales
2.
```yaml
info:
  #  ...
  x-locales:
    en: English
    ru: Русский
```

2. Add locale text
```yaml
  /pet:
    post:
      # ...
      summary: Add a new pet to the store
      x-summary-ru: Добавить нового питомца в магазин
```

Example: ```playground2/docs/openapi/localization.yaml``` and ```playground2/nuxt.config.js```


### Plugin


Here's a description of all the properties and methods of the OpenApiPlugin interface:

- `addParam(pos: 'headers'|'query'|'postData'|'path'|'cookie', name: string, value: string, type?: string): void`
  This method allows you to add a parameter to the API documentation. The pos parameter specifies the position of the parameter (headers, query, postData, path, or cookie), while name and value specify the name and value of the parameter, respectively. The type parameter is optional and specifies the data type of the parameter.
- `clearParams(): void`
  This method clears all the parameters that have been added to the API documentation.
- `addLocale(lang: string, locale: {[key: string]: string}): void`
  This method allows you to add a translation for a specific language. The lang parameter specifies the language code (e.g., "en", "fr", "es"), while the locale parameter is an object that maps translation keys to their respective translations.
- `setAccess(accessor: (path: string) => boolean): boolean`
  This method sets the accessor function that determines whether the user has access to a specific file. The accessor function takes a file path as input and returns a boolean indicating whether the user has access.
- `setRouteInfo(routeInfo: (file: string, url: string, method: string) => string|null): void;`
  add route info to path

Example: example/plugins/auth.js


```js
 context.$openapidoc.setAccess((file) => {
    return file !== 'no-access';
  })

  context.$openapidoc.setFooter('<div><b>Nuxt OpenApi doc panel</b> </div>')
```



### Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground with nuxt
npm run dev

# Build the playground
npm run dev:build
```

### Custom pages

1. Create custom page, for example `pages/docs/petstore_extended/:locale/custom/page1.vue`

- **'docs'** - path from config (docs default)
- **'petstore_extended'** - doc name
- **':locale'** - locale (en default)
- **'custom'** - static path
- **'page1'** - page name

2. create vue component, for example `page1.vue`

```js
<template>
  <div class="items-top min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <client-only>
      <div v-html="content"></div>
    </client-only>
    <hr>
    <div>my custom page</div>
  </div>
</template>

<script setup lang="ts">
defineI18nRoute({
  locales: ['en', 'ru'],
});

definePageMeta({
  layout: 'open-api-layout-petstore_extended',
});
</script>

```

where open-api-layout-petstore_extended is `open-api-layout-${doc_name}`

here you need to replace the page parameter to you page name

3. add custom routes to openapi specification

```js
x-custom-path:
  title: 'Custom'
  description: 'Custom pages'
  paths:
    page1:
      title: 'Custom page 1'
      description: 'Custom pages 1'
```

page1 - your file name

Example `playground2/docs/openapi/page.yaml`

