# Plugin

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

## Plugin Interface

The module provides a plugin interface to add parameters, clear them, handle localization, and set access controls dynamically:

```javascript
// Example of setting access control
context.$openapidoc.setAccess((file) => {
  return file !== 'no-access';
});

// Example of setting a custom footer
context.$openapidoc.setFooter('<div><b>Nuxt OpenApi doc panel</b> </div>')
```
