[![npm version](https://badge.fury.io/js/nuxt-openapi-docs-module.svg)](https://badge.fury.io/js/nuxt-openapi-docs-module)
[![npm downloads](https://img.shields.io/npm/dw/nuxt-openapi-docs-module)](https://badge.fury.io/js/nuxt-openapi-docs-module)
[![NPM license](https://img.shields.io/npm/l/nuxt-openapi-docs-module)](https://github.com/on-org/nuxt-openapi-docs-module/blob/master/LICENSE)
[![npm type definitions](https://img.shields.io/npm/types/nuxt-openapi-docs-module)](https://github.com/on-org/nuxt-openapi-docs-module)
[![donate](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.me/s00d)
[![GitHub Repo stars](https://img.shields.io/github/stars/on-org/nuxt-openapi-docs-module?style=social)](https://github.com/on-org/nuxt-openapi-docs-module)

# OpenApiDocs Nuxt Module
This module provides a simple way to display OpenAPI documentation in a Nuxt.js 2 application. It allows you to define an OpenAPI specification file and renders it using a set of reusable Vue.js components.

work with static and server target

![alt text](https://raw.githubusercontent.com/on-org/nuxt-openapi-docs-module/main/img/desktop.png)
![alt text](https://raw.githubusercontent.com/on-org/nuxt-openapi-docs-module/main/img/black.png)
![alt text](https://raw.githubusercontent.com/on-org/nuxt-openapi-docs-module/main/img/mobile.png)

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
            locales: {en: 'English'},
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
- `locales`: object with locales, {en: 'English'}.
- `files`: function with files list in OpenApiDocs folder, files: function(ctx) {return { 'News-API': 'News API'}}.
- `params`: function with files list in OpenApiDocs folder, params: function(ctx) {return [{ in: 'queryString', name: 'key', value: '1111'}]}.
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

locales: moduleOptions.locales ?? {en: 'English'},
files: moduleOptions.files ?? function (ctx) { return {} },
