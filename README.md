<div class="links">
    <a href="https://www.npmjs.com/package/nuxt-openapi-docs-module" target="_blank">
        <img src="https://img.shields.io/npm/v/nuxt-openapi-docs-module/latest?style=for-the-badge" alt="npm version">
    </a>
    <a href="https://www.npmjs.com/package/nuxt-openapi-docs-module" target="_blank">
        <img src="https://img.shields.io/npm/dw/nuxt-openapi-docs-module?style=for-the-badge" alt="npm downloads">
    </a>
    <a href="https://github.com/on-org/nuxt-openapi-docs-module/blob/master/LICENSE" target="_blank">
        <img src="https://img.shields.io/npm/l/nuxt-openapi-docs-module?style=for-the-badge" alt="NPM license">
    </a>
    <a href="https://github.com/on-org/nuxt-openapi-docs-module" target="_blank">
        <img src="https://img.shields.io/npm/types/nuxt-openapi-docs-module?style=for-the-badge" alt="npm type definitions">
    </a>
    <a href="https://github.com/on-org/nuxt-openapi-docs-module" target="_blank">
        <img src="https://img.shields.io/github/stars/on-org/nuxt-openapi-docs-module?style=for-the-badge" alt="GitHub Repo stars">
    </a>
</div>

# OpenApiDocs Nuxt Module Documentation

<p align="center">
<img src="https://raw.githubusercontent.com/on-org/nuxt-openapi-docs-module/main/img/logo_long.png" alt="logo">
</p>

## Introduction

The OpenApiDocs Nuxt Module is designed to seamlessly integrate OpenAPI documentation into Nuxt.js applications, supporting both Nuxt 2.x and 3.x. It utilizes Vue.js components to render the OpenAPI specifications dynamically. This module is ideal for developers looking to embed API documentation directly into their Nuxt.js projects.

work with static and server target

# Package Version Information

| Version | 	Supported Nuxt Version |
|---------|-------------------------|
| 3.0     | 	2.x and 3.x            |
| 4.0     | 	2.x and 3.x            |
| 5.0     | 	3.x                    |
| 5.2     | 	> 3.7                  |

for nuxt 3 need add vite.config.ts

## Documentation and Support

- **Version Information:** The module is compatible with various Nuxt versions, supporting specific features based on the version.
- **Release Notes:** [View Changes and Updates](https://github.com/on-org/nuxt-openapi-docs-module/blob/main/changelog.md)
- **Demo and Examples:** [See it in Action](https://on-org.github.io/nuxt-openapi-docs-module/)
- **Live Example:** [Lite example on StackBlitz](https://stackblitz.com/edit/github-j7idul?file=README.md)

## Features

- **Support for Nuxt 2.x and 3.x**: Works with both major versions of Nuxt.
- **Dynamic Documentation Rendering**: Automatically renders OpenAPI specifications using Vue.js components.
- **Customizable**: Offers several options to customize the documentation setup.
- **Localization Support**: Integrates with the i18n plugin for multi-language support.
- **Development Tools**: Includes tools and setups for development and customization of the module.

<p align="center">
<img src="https://raw.githubusercontent.com/on-org/nuxt-openapi-docs-module/main/img/white1.jpeg"  width="100%" alt="white image">
<img src="https://raw.githubusercontent.com/on-org/nuxt-openapi-docs-module/main/img/white2.jpeg"  width="100%" alt="white image 2">
<img src="https://raw.githubusercontent.com/on-org/nuxt-openapi-docs-module/main/img/mobile1.jpeg"  width="50%" alt="black image">
<img src="https://raw.githubusercontent.com/on-org/nuxt-openapi-docs-module/main/img/mobile2.jpeg"  width="50%" alt="mobile image">
</p>

## Installation

### Quick Setup

1. **Add the module to your project**:
```bash
  npx nuxi@latest module add nuxt-openapi-docs-module
```

2. **Configure the module in your Nuxt configuration**:

For Nuxt 3:
```javascript
export default defineNuxtConfig({
 modules: [
   'nuxt-openapi-docs-module'
 ]
})
```

For Nuxt 2:
```javascript
module.exports = {
 modules: [
   'nuxt-openapi-docs-module',
 ],
}
```

3. **Create the OpenAPI documentation folder**:
- Default folder: **'docs/openapi'**
- Alternatively, specify a custom folder using the **'folder'** option in the module configuration.

### Configuration

Customize the module by modifying the **'nuxt.config.js'** or **'nuxt.config.ts'** file:

```javascript
module.exports = {
  modules: [
    [
      'nuxt-openapi-docs-module',
      {
        folder: './docs/openapi',
        name: 'OpenApiDocs',
        files: function() { return { 'News-API': 'News API' } },
      }
    ],
  ],
  // Additional configurations...
}
```

### Options

- **'folder'**: Path to the folder containing OpenAPI specification files.
- **'name'**: Name of the main component.
- **'files'**: Function returning an object mapping file names to display names.
- **'debug'**: Enable debug mode to print information to the console.
- **'list'**: Toggle the display of document listings.
- **'locales'**: Define supported locales.
- **'logo'**: Custom logo in SVG format.
- **'footer'**: Custom footer content.

## Usage

### Folder Structure

Place your OpenAPI specification files (e.g., **'api1.yaml'**', **'api2.yaml'**) in the specified **'folder'**.

### Localization

To enable localization, add the **'x-locales'** and locale-specific summaries in your OpenAPI specification files:

```yaml
info:
  x-locales:
    en: English
    ru: Русский

paths:
  /pet:
    post:
      summary: Add a new pet to the store
      x-summary-ru: Добавить нового питомца в магазин
```

Example: **'playground2/docs/openapi/localization.yaml'** and **'playground2/nuxt.config.js'**


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

### Development and Customization

For developers looking to contribute or customize the module:

```bash
# Install dependencies
npm install

# Generate type stubs and start development
npm run dev:prepare
npm run dev

# Build the playground for production
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

### Plugin Interface

The module provides a plugin interface to add parameters, clear them, handle localization, and set access controls dynamically:

```javascript
// Example of setting access control
context.$openapidoc.setAccess((file) => {
  return file !== 'no-access';
});

// Example of setting a custom footer
context.$openapidoc.setFooter('<div><b>Nuxt OpenApi doc panel</b> </div>')
```
