[![npm version](https://badge.fury.io/js/nuxt-openapi-docs-module.svg)](https://badge.fury.io/js/nuxt-openapi-docs-module)
[![npm downloads](https://img.shields.io/npm/dw/nuxt-openapi-docs-module)](https://badge.fury.io/js/nuxt-openapi-docs-module)
[![NPM license](https://img.shields.io/npm/l/nuxt-openapi-docs-module)](https://github.com/on-org/nuxt-openapi-docs-module/blob/master/LICENSE)
[![npm type definitions](https://img.shields.io/npm/types/nuxt-openapi-docs-module)](https://github.com/on-org/nuxt-openapi-docs-module)
[![donate](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.me/s00d)
[![GitHub Repo stars](https://img.shields.io/github/stars/on-org/nuxt-openapi-docs-module?style=social)](https://github.com/on-org/nuxt-openapi-docs-module)

# OpenApiDocs Nuxt Module
This module provides a simple way to display OpenAPI documentation in a Nuxt.js 2 & 3 application. It allows you to define an OpenAPI specification file and renders it using a set of reusable Vue.js components.

work with static and server target

# Package Version Information

| Version | 	Supported Nuxt Version |
|---------|-------------------------|
| 1.0     | 	2.x                    |
| 2.0     | 	3.x                    |
| 3.0     | 	2.x and 3.x            |


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


- [✨ &nbsp;Release Notes](/changelog.md)
- [🛠 Demo](https://on-org.github.io/nuxt-openapi-docs-module/)
<!-- - [🏀 Online playground](https://stackblitz.com/github/on-org/nuxt-openapi-docs-module?file=playground/pages/index.vue) -->

![desktop image](https://raw.githubusercontent.com/on-org/nuxt-openapi-docs-module/main/img/white.png)
![desktop image](https://raw.githubusercontent.com/on-org/nuxt-openapi-docs-module/main/img/white2.png)
![black image](https://raw.githubusercontent.com/on-org/nuxt-openapi-docs-module/main/img/black.png)
![mobile image](https://raw.githubusercontent.com/on-org/nuxt-openapi-docs-module/main/img/mobile.png)

## Quick Setup

1. Add `nuxt-openapi-docs-module` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-openapi-docs-module

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
```javascript
module.exports = {
  modules: [
    'nuxt-openapi-docs-module',
  ],
}
```

That's it! You can now use Open Api Docs in your Nuxt app ✨



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
-
### Folder Structure
The default folder structure for your OpenAPI specification files should look like this:

```markdown
docs/
    openapi/
        api1.yaml
        Components
```
This module provides several reusable Nuxt.js components to render your OpenAPI documentation:

- `OpenApiDocs`: the main component used to render the OpenAPI documentation.
- `OpenApiHeader`: the component used to render the header section of the OpenAPI documentation.
- `OpenApiInfo`: the component used to render the OpenAPI specification information.
- `OpenApiComponents`: the component used to render the OpenAPI components.
- `OpenApiRoute`: the component used to render a single OpenAPI route.
  You can customize these components by modifying the corresponding .vue files in the components/ folder.

files: moduleOptions.files ?? function (ctx) { return {} },

### Localization

1. Add info - x-locales
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

Example: ```example/docs/openapi/localization.yaml```

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

- `setFooter(footer: null|string): void`
  This method sets the footer text that is displayed in the API documentation. The footer parameter is a string representing the text to be displayed. If null is passed as the parameter, the footer will be removed.

- `setLogo(logo: string): void`
  This method sets the html(or svg) of the logo that is displayed in the API documentation.

- `setRouteInfo(routeInfo: (file: string, url: string, method: string) => string|null): void;`
  add route info to path

Example: example/plugins/auth.js

```js
 context.$openapidoc.setAccess((file) => {
    return file !== 'no-access';
  })

  context.$openapidoc.setFooter('<div><b>Nuxt OpenApi doc panel</b> </div>')
```


### use open api url

```js
{
  // ...
  [
    [
      'nuxt-openapi-docs-module',
      {
        folder: './docs/openapi',
        name: 'OpenApiDocs',
        files: function() {
            return {
              'https://petstore.swagger.io/v2/swagger.json': 'petstore url'
            }
        },
      }
    ],
  ]
}
```


## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

