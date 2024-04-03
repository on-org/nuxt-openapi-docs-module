<template>
  <div class="content-container">
    <OpenApiInfo v-if="isInfo && doc.info" :info="doc.info" :servers="doc.servers" :current-locale="currentLocale"></OpenApiInfo>
    <OpenApiAuth v-else-if="isAuth && doc.components" :components="doc.components" :current-locale="currentLocale"></OpenApiAuth>
    <OpenApiComponents v-else-if="isComponents && doc.components" :components="doc.components" :current-locale="currentLocale"></OpenApiComponents>
    <OpenApiRoute v-else-if="activeRoute" :route="activeRoute" :current-locale="currentLocale" :method="type" :components="doc.components" :url="url" :path_doc="path_doc" :file="fileName" :server="server" :sub-params="subParams" />
    <OpenApiRoute v-else-if="activeWebhook" :route="activeWebhook" :current-locale="currentLocale" :method="type" :components="doc.components" :url="url" :path_doc="path_doc" :file="fileName" :server="server" :sub-params="subParams" />
    <NotFound v-else />
    <client-only>
      <SearchBlock :current-locale="currentLocale" :doc="doc" :path="path_doc" :file="fileName" />
    </client-only>
  </div>
</template>

<script setup lang="ts">
defineI18nRoute({
  locales: <%= JSON.stringify(Object.keys(options.locales)).replace(/"/g, "'") %>
})
import {
  computed,
  onMounted,
  onUnmounted,
  ref,
  useNuxtApp,
  useRoute,
  useRouter,
  definePageMeta, defineI18nRoute, useHead
} from "#imports";

import doc_data from '#build/openapi/docs.<%= options.filename %>.mjs';
import data from '#build/openapi/docs.<%= options.filename %>.config.mjs';

const route = useRoute()
const router = useRouter()

const { $openapidoc, $openapidocBus, $openapidocRef } = useNuxtApp()

definePageMeta({
  layout: "open-api-layout-<%= options.filename %>",
});

const url = ref('')
const currentServer = ref(0)

const path_doc = ref<string>((data.path ?? '').toString())
const doc = ref<{[key: string]: any}>(doc_data ?? {})

const fileName = computed<string>(() => "<%= options.filename %>");
const type = computed<string>(() => route.params.type.toString());
const mathod = computed<string>(() => (route.params.mathod ?? 'default').toString());
const isInfo = computed(() => type.value === 'info')
const isAuth = computed(() => type.value === 'auth')
const isComponents = computed(() => type.value === 'components')
const currentLocale = computed((): string => $openapidoc.currentLocale())

$openapidocRef.setComponents(doc_data.components)
$openapidocRef.setDefinitions(doc_data.definitions)
$openapidocRef.setDocPath(path_doc.value)
$openapidocRef.setFile(fileName.value)

const activePath = computed((): { [key: string]: any }|null => {
  const paths = { ...doc_data.paths };
  if(!paths) return null;
  for (const selectPath in paths) {
    let routePath = selectPath.toString();
    if (routePath.startsWith('/')) routePath = routePath.substring(1);
    if (routePath.endsWith('/')) routePath = routePath.substring(-1);

    routePath = routePath.replace(/[/\\.?+=&{}]/gumi, '_')
      .replace(/__+/, '_')

    if(routePath === mathod.value) {
      url.value = selectPath.toString();
      return paths[selectPath] ?? null
    }
  }
  return null;
})

const activeWebhook = computed((): { [key: string]: any }|null => {
  const webhooks = { ...doc_data.webhooks };
  if(!webhooks) return null;
  for (const selectPath in webhooks) {
    let routePath = selectPath.toString();
    if (routePath.startsWith('/')) routePath = routePath.substring(1);
    if (routePath.endsWith('/')) routePath = routePath.substring(-1);

    routePath = routePath.replace(/[/\\.?+=&{}]/gumi, '_')
      .replace(/__+/, '_')

    if(routePath === mathod.value) {
      url.value = selectPath.toString();
      return webhooks[selectPath][type.value] ?? null
    }
  }

  return null;
})

const activeRoute = computed((): string|null => {
  if(!activePath.value) return null;
  return activePath.value[type.value] ?? null;
})

const subParams = computed((): string|null => {
  if(!activePath.value) return null;
  return activePath.value['parameters'] ?? null;
})


const title = computed(() => {
  const locale = $openapidoc.currentLocale() ?? '';
  if (isInfo.value) return `[<%= options.filename %>] - Info Docs`;
  if (isAuth.value) return `[<%= options.filename %>] - Authorization`;
  if (isComponents.value) return `[<%= options.filename %>] - Components Docs`;
  if (!activeRoute.value) return ''

  const title = activeRoute.value[`x-summary-`+locale.value] || activeRoute.value['summary'] || ''
  return `[<%= options.filename %>] - ` + title;
});

const description = computed(() => {
  const locale = $openapidoc.currentLocale() ?? '';
  if (isInfo.value) return `[<%= options.filename %>] - Info Docs`;
  if (isAuth.value) return `[<%= options.filename %>] - Authorization`;
  if (isComponents.value) return `[<%= options.filename %>] - Components Docs`;
  if (!activeRoute.value) return ''

  return activeRoute.value[`x-description-`+locale.value] || activeRoute.value['description'] || ''
});

useHead({
  title: title.value,
  meta: [
    { name: 'description', content: description.value }
  ],
  htmlAttrs: {
    lang: currentLocale.value,
  },
  bodyAttrs: {
    class: 'oapi'
  },
})

const server = computed((): string => {
  if (activePath.value) {
    if(activePath.value.servers && activePath.value.servers[0]) {
      return activePath.value.servers[0].url ?? null
    }

    if(activePath.value[type.value] && activePath.value[type.value].servers && activePath.value[type.value].servers[0]) {
      return activePath.value[type.value].servers[0].url ?? null
    }
  }

  if (activeWebhook.value) {
    if(activeWebhook.value.servers && activeWebhook.value.servers[0]) {
      return activeWebhook.value.servers[0].url ?? null
    }

    if(activeWebhook.value[type.value] && activeWebhook.value[type.value].servers && activeWebhook.value[type.value].servers[0]) {
      return activeWebhook.value[type.value].servers[0].url ?? null
    }
  }

  let cs = currentServer.value;

  if (cs > 0 && doc_data.servers && !doc_data.servers[cs]) {
    cs = 0;
  }

  if (!doc_data.servers || !doc_data.servers[cs]) {
    return '';
  }

  if (doc_data.servers[cs].variables) {
    const variables = Object.values(doc_data.servers[cs].variables) ?? [];
    if (variables && variables.length) {
      const select = variables[0] as any
      return select.default
    }
  }

  return doc_data.servers[cs].url ?? ''
})

function onChangeServer(option: number) {
  currentServer.value = option
}

function enableTitleClick() {
  const headers = document.querySelector('.content-container')?.querySelectorAll('h1[id], h2[id], h3[id], h4[id]') ?? [];

  headers.forEach(header => {
    header.addEventListener('click', e => {
      const headerId = header.getAttribute('id');
      const select = window.location.origin + window.location.pathname + '#' + headerId;

      $openapidoc.copyToClipboard(select, e, false)

      router.push({
        path: route.path,
        hash: '#' + headerId
      })

      setTimeout(() => {
        header.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    });
  });
}

function setScrollPosition() {
  if (route.hash) return;

  const el = document.querySelector('.oapi-content');
  if (!el) return;

  el.scrollTop = 0;
}


onMounted(() => {
  if(import.meta.client) {
    $openapidocBus.$on('changeServer', onChangeServer);
    setScrollPosition();
    enableTitleClick();
  }
})

onUnmounted(() => {
  $openapidocBus.$off('changeServer', onChangeServer);
})

</script>

<style>

</style>
