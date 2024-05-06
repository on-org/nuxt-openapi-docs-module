# Custom pages

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
