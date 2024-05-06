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

| Version                                                                             | 	Supported Nuxt Version |
|-------------------------------------------------------------------------------------|-------------------------|
| [4.x](https://github.com/on-org/nuxt-openapi-docs-module/blob/v4/README.md)         | 	2.x and 3.x            |
| [5.0,5.1](https://github.com/on-org/nuxt-openapi-docs-module/blob/v5.0.4/README.md) | 	3.x                    |
| >=5.2                                                                               | 	>=3.7                  |


## Documentation and Support

- **Version Information:** The module is compatible with various Nuxt versions, supporting specific features based on the version.
- **Documentation:** [Browse Full Documentation](https://on-org.github.io/nuxt-openapi-docs-module/)
- **Release Notes:** [Browse Change Log](https://on-org.github.io/nuxt-openapi-docs-module/changelog)
- **Demo and Examples:** [View Live Demo](https://on-org.github.io/nuxt-openapi-docs-module/docs)
- **Live Example:** [Interactive Example on StackBlitz](https://stackblitz.com/edit/github-j7idul?file=README.md)
- **Localization:** [Explore Localization Features](https://on-org.github.io/nuxt-openapi-docs-module/localization)
- **Plugin:** [Learn About Plugins](https://on-org.github.io/nuxt-openapi-docs-module/plugin)
- **Custom Pages:** [Custom Pages Overview](https://on-org.github.io/nuxt-openapi-docs-module/custom_pages)
- **Development and Customization:** [Guide to Development and Customization](https://on-org.github.io/nuxt-openapi-docs-module/development)

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
