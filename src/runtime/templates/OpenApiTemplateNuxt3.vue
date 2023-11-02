<template>
  <div class="content-container">
    <OpenApiInfo v-if="isInfo" :info="doc.info" :servers="doc.servers" :current-locale="currentLocale"></OpenApiInfo>
    <OpenApiAuth v-else-if="isAuth" :components="doc.components" :current-locale="currentLocale"></OpenApiAuth>
    <OpenApiComponents v-else-if="isComponents" :components="doc.components" :current-locale="currentLocale"></OpenApiComponents>
    <OpenApiRoute v-else-if="activeRoute" :route="activeRoute" :current-locale="currentLocale" :method="type" :components="doc.components" :url="url" :path_doc="path_doc" :file="fileName" :server="server" :sub-params="subParams" />
    <OpenApiRoute v-else-if="activeWebhook" :route="activeWebhook" :current-locale="currentLocale" :method="type" :components="doc.components" :url="url" :path_doc="path_doc" :file="fileName" :server="server" :sub-params="subParams" />
    <NotFound v-else />
    <client-only>
      <SearchBlock :current-locale="currentLocale" :doc="doc" :path="mathod" :file="fileName" />
    </client-only>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  onMounted,
  onUnmounted,
  ref,
  useNuxtApp,
  useRoute,
  useRouter,
  useOpenApiDataState,
  definePageMeta, defineI18nRoute, toRaw, useHead
} from "#imports";


const route = useRoute()
const router = useRouter()

const { $openapidoc, $openapidocBus, $openapidocRef } = useNuxtApp()

definePageMeta({
  layout: "open-api-layout",
});

const url = ref('')
const currentServer = ref(0)

const data = useOpenApiDataState().data;

const options: any = undefined;
defineI18nRoute({
  locales: <%= JSON.stringify(Object.keys(options.locales)).replace(/"/g, "'") %>
})

const path_doc = ref<string>((data.value.path ?? '').toString())
const doc = ref<{[key: string]: any}>(data.value.doc ?? {})

const fileName = computed<string>(() => route.params.name.toString());
const type = computed<string>(() => route.params.type.toString());
const mathod = computed<string>(() => (route.params.mathod ?? 'default').toString());
const isInfo = computed(() => type.value === 'info')
const isAuth = computed(() => type.value === 'auth')
const isComponents = computed(() => type.value === 'components')
const currentLocale = computed((): string => $openapidoc.currentLocale())

$openapidocRef.setComponents(data.value.doc?.components)
$openapidocRef.setDefinitions(data.value.doc?.definitions)
$openapidocRef.setDocPath(path_doc.value)
$openapidocRef.setFile(fileName.value)

const activePath = computed((): { [key: string]: any }|null => {
  if(!doc.value.paths) return null;
  for (let selectPath in doc.value.paths) {
    let routePath = selectPath;
    if (routePath.startsWith('/')) routePath = routePath.substring(1);
    if (routePath.endsWith('/')) routePath = routePath.substring(-1);
    routePath = routePath.replace(/[/\\.?+=&{}]/gumi, '_').replace(/__+/, '_')

    if(routePath === mathod.value) {
      url.value = selectPath;
      return doc.value.paths[selectPath] ?? null
    }
  }
  return null;
})

const activeWebhook = computed((): { [key: string]: any }|null => {
  if(!doc.value.webhooks) return null;
  for (let selectPath in doc.value.webhooks) {
    let routePath = selectPath;
    if (routePath.startsWith('/')) routePath = routePath.substring(1);
    if (routePath.endsWith('/')) routePath = routePath.substring(-1);
    routePath = routePath.replace(/[/\\.?+=&{}]/gumi, '_').replace(/__+/, '_')

    if(routePath === mathod.value) {
      url.value = selectPath;
      return doc.value.webhooks[selectPath][type.value] ?? null
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

  let cs = currentServer.value;

  if (cs > 0 && doc.value.servers && !doc.value.servers[cs]) {
    cs = 0;
  }

  if (!doc.value.servers || !doc.value.servers[cs]) {
    return '';
  }

  if (doc.value.servers[cs].variables) {
    const variables = Object.values(doc.value.servers[cs].variables) ?? [];
    if (variables && variables.length) {
      const select = variables[0] as any
      return select.default
    }
  }

  return doc.value.servers[cs].url ?? ''
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

      $openapidoc.copyToClipboard(select, e)

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

function downloadJson() {
  const json = JSON.stringify(doc.value, null, 4);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = fileName.value + '.json';
  document.body.appendChild(link);

  link.click();

  // Очистить ссылку и объект URL после скачивания файла
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

onMounted(() => {
  if(process.client) {
    $openapidocBus.$on('downloadJsonDoc', downloadJson);
    $openapidocBus.$on('changeServer', onChangeServer);
    setScrollPosition();
    enableTitleClick();
  }
})

onUnmounted(() => {
  $openapidocBus.$off('downloadJsonDoc', downloadJson);
  $openapidocBus.$off('changeServer', onChangeServer);
})

</script>

<style>
.highlighted {
  background-color: yellow;
  font-weight: bold;
}


h1[id],
h2[id],
h3[id],
h4[id] {
  position: relative;
  cursor: pointer;


  &::before {
    content: '#';
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:hover {
    opacity: 0.8;

    &::before {
      opacity: 1;
    }
  }

  &:active::before {
    opacity: 0.5;
  }
}
</style>
