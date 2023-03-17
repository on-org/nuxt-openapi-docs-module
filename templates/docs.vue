<template>
  <div class="flex flex-col h-screen dark:bg-gray-900 dark:text-gray-300/75">
    <MainHeader :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu" class="dark:bg-black dark:text-gray-300/75">
      <template #logo>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="30">
          <rect width="100" height="30" rx="5" fill="#1A202C" />
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="16" v-text="name"></text>
        </svg>
      </template>
      <template #button>
        <OpenApiHeader
            :current-locale="locale"
            :files="files"
            :file="file"
            :locales="locales"
            :path="route_path"
            :is-dark-mode="isDarkMode"
            @toggleDarkMode="toggleDarkMode"
        />
      </template>
    </MainHeader>
    <div class="flex flex-1 overflow-hidden">
      <MainLeftMenu :isMenuOpen="isMenuOpen" :isMobile="isMobile">
        <OpenApiMenu :routes="doc.paths" :current-locale="locale" :file="file" :path="route_path" />
      </MainLeftMenu>
      <MainContent>
        <OpenApiInfo v-if="isInfo" :info="doc.info" :current-locale="locale"></OpenApiInfo>
        <OpenApiComponents v-else-if="isComponents" :components="doc.components" :current-locale="locale"></OpenApiComponents>
        <OpenApiRoute v-else-if="getActiveRoute" :route="getActiveRoute" :current-locale="locale" :method="type" :components="doc.components" :url="path" :server="server" />
        <NotFound v-else />
      </MainContent>
    </div>
  </div>
</template>

<script setup>
import MainHeader from '../components/lib/MainHeader.vue';
import MainLeftMenu from '../components/lib/MainLeftMenu.vue';
import MainContent from '../components/lib/MainContent.vue';
import OpenApiHeader from '../components/OpenApiHeader.vue';
import OpenApiMenu from '../components/OpenApiMenu.vue';
import OpenApiInfo from '../components/OpenApiInfo.vue';
import OpenApiComponents from '../components/OpenApiComponents.vue';
import OpenApiRoute from '../components/OpenApiRoute.vue';
import NotFound from '../components/NotFound.vue';

const { $openapidoc, $openapidoc_files, $openapidoc_simples} = useNuxtApp()
const route = useRoute()

console.log(route.params, route.meta)

const file = route.params.file ?? route.meta.file;
const locale = route.params.locale ?? route.meta.locale;
const type = route.params.type ?? route.meta.type
const path = route.params.path ?? route.meta.path;

let isMenuOpen = true;
let isDarkMode = false;
let isDesktop = true;

const doc = computed(() => $openapidoc.docs[file])
const locales = computed(() => $openapidoc.locales)
const name = computed(() => $openapidoc.name)
const route_path = computed(() => $openapidoc.path)
const isMobile = computed(() => process.client ? window.innerWidth >= 768 : false)

const isInfo = computed(() => path === 'info')
const files = computed(() => $openapidoc_files(useNuxtApp()))
const isComponents = computed(() => path === 'components')
const getActiveRoute = computed(() => {
  if(!doc.value.paths) return null;
  if(!doc.value.paths[path]) return null;
  return doc.value.paths[path][type] ?? null
})
const server = computed(() => {
  if (!doc.value.servers || !doc.value.servers[0]) {
    return null;
  }
  return doc.value.servers[0].url ?? null
})

if(process.client) {
  isDarkMode = localStorage.getItem('isDarkMode') === 'true'
  if(isDarkMode) document.querySelector('html').classList.add('dark')
}

function toggleMenu() {
  isMenuOpen = !isMenuOpen;
}

function toggleDarkMode() {
  if(process.client) {
    isDarkMode = !isDarkMode
    // localStorage.setItem('isDarkMode', isDarkMode)
    if(isDarkMode) document.querySelector('html').classList.add('dark')
    else document.querySelector('html').classList.remove('dark');
  }
}

function handleResize() {
  isDesktop = window.innerWidth >= 768 // set breakpoint here
  if (!isDesktop) {
    isMenuOpen = false
  }
}

if(process.client) {
  isMenuOpen = window.innerWidth > 640;
  window.addEventListener('resize', handleResize)
  // isDarkMode = localStorage.getItem('isDarkMode') === 'true'
  if(isDarkMode) document.querySelector('html').classList.add('dark')
}
</script>

<style>
@import "../tailwindcss.css";
p {
  font-size: 18px;
  line-height: 1.5;
//color: #333;
}
h2, h3, h4 {
//color: #666;
  margin-top: 20px;
  margin-bottom: 10px;
}
ul, ol {
  margin-left: 5px;
}
li {
  margin-bottom: 5px;
}
blockquote {
  font-style: italic;
  margin-left: 20px;
  padding-left: 10px;
  border-left: 5px solid #ccc;
}
table {
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  border: 2px solid gray;
}

th,
td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

th {
  font-weight: bold;
//background-color: #f2f2f2;
}

tbody tr:nth-of-type(even) {
  background-color: rgba(0, 0, 0, 0.05);
}

tfoot {
  font-weight: bold;
  border-top: 2px solid #dee2e6;
}

tfoot td {
  border-top: none;
}
</style>

