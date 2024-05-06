# Localization

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
