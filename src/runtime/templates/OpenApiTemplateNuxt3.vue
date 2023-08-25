<template>
  <NuxtLayout class="content-container" name="open-api-layout-nuxt3">
    <OpenApiInfo v-if="isInfo" :info="doc.info" :servers="doc.servers" :current-locale="currentLocale"></OpenApiInfo>
    <OpenApiAuth v-else-if="isAuth" :components="doc.components" :current-locale="currentLocale"></OpenApiAuth>
    <OpenApiComponents v-else-if="isComponents" :components="doc.components" :current-locale="currentLocale"></OpenApiComponents>
    <OpenApiRoute v-else-if="activeRoute" :route="activeRoute" :current-locale="currentLocale" :method="type" :components="doc.components" :url="url" :path_doc="path_doc" :file="fileName" :server="server" :sub-params="subParams" />
    <OpenApiRoute v-else-if="activeWebhook" :route="activeWebhook" :current-locale="currentLocale" :method="type" :components="doc.components" :url="url" :path_doc="path_doc" :file="fileName" :server="server" :sub-params="subParams" />
    <NotFound v-else />
    <client-only>
      <SearchBlock :current-locale="currentLocale" :doc="doc" :path="mathod" :file="fileName" />
    </client-only>
  </NuxtLayout>
</template>

<script setup lang="ts">
import {computed, onMounted, onUnmounted, ref, useFetch, useNuxtApp, useRoute, useRouter} from "#imports";

const route = useRoute()
const router = useRouter()

const { $openapidoc, $openapidocBus } = useNuxtApp()

const fileName = ref(route.params.name.toString());
const type = ref(route.params.type.toString());
const mathod = ref((route.params.mathod ?? 'default').toString());
const url = ref('')
const currentServer = ref(0)

console.log("/docs/query/file/" + fileName.value)

const { data } = await useFetch("/docs/query/file/" + fileName.value)

const path_doc = ref<string>(data.value.path ?? '')
const doc = ref(data.value.doc ?? {})

const isInfo = computed(() => {
  return type.value === 'info'
})
const isAuth = computed(() => {
  return type.value === 'auth'
})
const isComponents = computed(() => {
  return type.value === 'components'
})
const currentLocale = computed((): string => {
  return $openapidoc.currentLocale()
})
const activePath = computed((): string => {
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
const activeWebhook = computed((): string => {
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

const activeRoute = computed((): string => {
  if(!activePath.value) return null;
  return activePath.value[type.value] ?? null;
})

const subParams = computed((): string => {
  if(!activePath.value) return null;
  return activePath.value['parameters'] ?? null;
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
    return null;
  }

  if (doc.value.servers[cs].variables) {
    const variables = Object.values(doc.value.servers[cs].variables);
    if (variables && variables.length && variables[0].default) {
      return variables[0].default
    }
  }

  return doc.value.servers[cs].url ?? null
})

function onChangeServer(option: number) {
  currentServer.value = option
}

function enableTitleClick() {
  const headers = document.querySelector('.content-container').querySelectorAll('h1[id], h2[id], h3[id], h4[id]');

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
    // enableTitleClick();
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
