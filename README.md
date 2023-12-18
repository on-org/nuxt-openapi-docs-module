[![npm version](https://badge.fury.io/js/nuxt-openapi-docs-module.svg)](https://badge.fury.io/js/nuxt-openapi-docs-module)
[![npm downloads](https://img.shields.io/npm/dw/nuxt-openapi-docs-module)](https://badge.fury.io/js/nuxt-openapi-docs-module)
[![NPM license](https://img.shields.io/npm/l/nuxt-openapi-docs-module)](https://github.com/on-org/nuxt-openapi-docs-module/blob/master/LICENSE)
[![npm type definitions](https://img.shields.io/npm/types/nuxt-openapi-docs-module)](https://github.com/on-org/nuxt-openapi-docs-module)
[![donate](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.me/s00d)
[![GitHub Repo stars](https://img.shields.io/github/stars/on-org/nuxt-openapi-docs-module?style=social)](https://github.com/on-org/nuxt-openapi-docs-module)

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


- [✨ &nbsp;Release Notes](https://github.com/on-org/nuxt-openapi-docs-module/blob/main/changelog.md)
- [🛠 Demo](https://on-org.github.io/nuxt-openapi-docs-module/)


<img src="https://raw.githubusercontent.com/on-org/nuxt-openapi-docs-module/main/img/white1.jpeg"  width="400" alt="white image">
<img src="https://raw.githubusercontent.com/on-org/nuxt-openapi-docs-module/main/img/white2.jpeg"  width="400" alt="white image 2">
<img src="https://raw.githubusercontent.com/on-org/nuxt-openapi-docs-module/main/img/mobile1.jpeg"  width="400" alt="black image">
<img src="https://raw.githubusercontent.com/on-org/nuxt-openapi-docs-module/main/img/mobile2.jpeg"  width="400" alt="mobile image">

## Quick Setup

1. Add `nuxt-openapi-docs-module` dependency to your project

```bash
# Using yarn
yarn add --dev nuxt-openapi-docs-module

# Using npm
npm install --save-dev nuxt-openapi-docs-module
```

2. Add `nuxt-openapi-docs-module` to the `modules` section of `nuxt.config.ts`

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

3. create `docs/openapi` folder in root project dir(not src) or change path - `folder` parameter

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
- `folder` (default: ./docs/openapi): the folder where your OpenAPI specification files are located.
- `name` (default: OpenApiDocs): the name of the main component used to render the OpenAPI documentation.
- `path`: the component url for docs.
- `files`: function with files list in OpenApiDocs folder, files: function() {return { 'News-API': 'News API'}}.
- `debug`: print debug information to console, Default: false
- `list`: Toggling the list of documents, Default: false
- `locales`: array wit enabled locales, Default: `['en']` Support: `['en', 'fr', 'de', 'ru', 'ch', 'es', 'hi', 'ar', 'zh', 'pt']`
- `logo`: svg logo in string
- `footer`: doc footer
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

[wiki](https://github.com/on-org/nuxt-openapi-docs-module/wiki/Localization)


### Plugin

[wiki](https://github.com/on-org/nuxt-openapi-docs-module/wiki/Plugin)


### Development

[wiki](https://github.com/on-org/nuxt-openapi-docs-module/wiki/Development)

### Custom pages

[wiki](https://github.com/on-org/nuxt-openapi-docs-module/wiki/Custom-pages)

