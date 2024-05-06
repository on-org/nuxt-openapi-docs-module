# OpenApiDocs Nuxt Module Documentation

<p align="center">
<img src="https://raw.githubusercontent.com/on-org/nuxt-openapi-docs-module/main/img/logo_long.png" alt="logo">
</p>

## Introduction

The OpenApiDocs Nuxt Module is designed to seamlessly integrate OpenAPI documentation into Nuxt.js applications, supporting both Nuxt 2.x and 3.x. It utilizes Vue.js components to render the OpenAPI specifications dynamically. This module is ideal for developers looking to embed API documentation directly into their Nuxt.js projects.

work with static and server target

# Package Version Information

| Version                                                                             | 	Supported Nuxt Version |
|-------------------------------------------------------------------------------------|-------------------------|
| [4.x](https://github.com/on-org/nuxt-openapi-docs-module/blob/v4/README.md)         | 	2.x and 3.x            |
| [5.0,5.1](https://github.com/on-org/nuxt-openapi-docs-module/blob/v5.0.4/README.md) | 	3.x                    |
| >=5.2                                                                               | 	>=3.7                  |

for nuxt 3 need add vite.config.ts

## Documentation and Support

- **Version Information:** The module is compatible with various Nuxt versions, supporting specific features based on the version.
- **Demo and Examples:** [View Live Demo](/docs)
- **Images:** [View Live Images](/images)
- **Release Notes:** [Browse Change Log](/changelog)
- **Live Example:** [Interactive Example on StackBlitz](https://stackblitz.com/edit/github-j7idul?file=README.md)
- **Localization:** [Explore Localization Features](/localization)
- **Plugin:** [Learn About Plugins](/plugin)
- **Custom Pages:** [Custom Pages Overview](/custom_pages)
- **Development and Customization:** [Guide to Development and Customization](/development)
- **Module Overview:** [Module Overview](/overview)

## Features

- **Support for Nuxt 2.x and 3.x**: Works with both major versions of Nuxt.
- **Dynamic Documentation Rendering**: Automatically renders OpenAPI specifications using Vue.js components.
- **Customizable**: Offers several options to customize the documentation setup.
- **Localization Support**: Integrates with the i18n plugin for multi-language support.
- **Development Tools**: Includes tools and setups for development and customization of the module.

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
const logo = readFileSync(`./assets/svg/logo.svg`);

module.exports = {
  modules: [
    [
      'nuxt-openapi-docs-module',
      {
        folder: './docs/openapi',  // Path to the folder containing OpenAPI specification files
        name: 'OpenApiDocs',       // Name of the main component
        files: function() {        // Function returning an object mapping file names to display names
          return { 
            'news-api': 'News API',
            'pages-api': 'Pages API docs' 
          }
        },
        debug: true,              // Enable debug mode to print information to the console
        list: true,               // Toggle the display of document listings
        locales: ['en', 'fr', 'es'],  // Define supported locales
        logo: logo.toString(), // Path to a custom logo in SVG format
        footer: '© 2024 Company Name. All rights reserved.'  // Custom footer content
      }
    ]
  ],
  // Additional configurations...
}
```

### Options Table

| Option      | Description                                                       |
|-------------|-------------------------------------------------------------------|
| **folder**  | Path to the folder containing OpenAPI specification files.        |
| **name**    | Name of the main component.                                       |
| **files**   | Function returning an object mapping file names to display names. |
| **debug**   | Enable debug mode to print information to the console.            |
| **list**    | Toggle the display of document listings.                          |
| **locales** | Define supported locales.                                         |
| **logo**    | Custom logo in SVG format.                                        |
| **footer**  | Custom footer content.                                            |

## Folder Structure

Place your OpenAPI specification files (e.g., **'api1.yaml'**', **'api2.yaml'**) in the specified **'folder'**.

