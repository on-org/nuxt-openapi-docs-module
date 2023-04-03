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

You can use this table to determine which version of the package supports which versions of Nuxt. Version 1.0.0 supports only Nuxt 1.x, while version 2.0.0 supports only Nuxt 2.x. Note that a newer version of the package may not work with an older version of Nuxt.

![desktop image](https://raw.githubusercontent.com/on-org/nuxt-openapi-docs-module/main/img/desktop.png)
![black image](https://raw.githubusercontent.com/on-org/nuxt-openapi-docs-module/main/img/black.png)
![mobile image](https://raw.githubusercontent.com/on-org/nuxt-openapi-docs-module/main/img/mobile.png)

# Example

[Show](https://on-org.github.io/nuxt-openapi-docs-module/)

# Installation
```bash
npm install nuxt-openapi-docs-module
```

Usage
Add the `nuxt-openapi-docs-module` to your Nuxt.js application by adding it to the modules section in your nuxt.config.js file:

```javascript
module.exports = {
modules: [
'nuxt-openapi-docs-module',
],
// ...
}
```
This will automatically include the necessary components and set up the routes for your OpenAPI documentation.

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
            files: function(ctx) {return { 'News-API': 'News API'}},
        }
    ],
],
// ...
}
```
- `folder` (default: ./docs/openapi): the folder where your OpenAPI specification files are located.
- `name` (default: OpenApiDocs): the name of the main component used to render the OpenAPI documentation.
- `path`: the component url for docs.
- `files`: function with files list in OpenApiDocs folder, files: function(ctx) {return { 'News-API': 'News API'}}.
- `params`: function with params list add to code block, params: function(ctx) {return [{ in: 'queryString', name: 'key', value: '1111'}]}.
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
