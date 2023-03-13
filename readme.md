# OpenApiDocs Nuxt Module
This module provides a simple way to display OpenAPI documentation in a Nuxt.js 2 application. It allows you to define an OpenAPI specification file and renders it using a set of reusable Vue.js components.

![alt text](https://raw.githubusercontent.com/on-org/nuxt-openapi-docs-module/main/img/desktop.png)
![alt text](https://raw.githubusercontent.com/on-org/nuxt-openapi-docs-module/main/img/mobile.png)

Installation
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
            openApiDocsFolder: './docs/openapi',
            componentName: 'OpenApiDocs',
            infoComponentName: 'OpenApiInfo',
            componentsComponentName: 'OpenApiComponents',
        }
    ],
],
// ...
}
```
- openApiDocsFolder (default: ./docs/openapi): the folder where your OpenAPI specification files are located.
- componentName (default: OpenApiDocs): the name of the main component used to render the OpenAPI documentation.
- infoComponentName (default: OpenApiInfo): the name of the component used to render the OpenAPI specification information.
- componentsComponentName (default: OpenApiComponents): the name of the component used to render the OpenAPI components.

### Folder Structure
The default folder structure for your OpenAPI specification files should look like this:

```markdown
docs/
    openapi/
        api1.yaml
        Components
```
This module provides several reusable Nuxt.js components to render your OpenAPI documentation:

- OpenApiDocs: the main component used to render the OpenAPI documentation.
- OpenApiHeader: the component used to render the header section of the OpenAPI documentation.
- OpenApiInfo: the component used to render the OpenAPI specification information.
- OpenApiComponents: the component used to render the OpenAPI components.
- OpenApiRoute: the component used to render a single OpenAPI route.
- componentsPath: the component url for docs.
You can customize these components by modifying the corresponding .vue files in the components/ folder.

### License
MIT
