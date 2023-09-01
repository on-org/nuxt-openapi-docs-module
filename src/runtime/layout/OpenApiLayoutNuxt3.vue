<template>
  <div class="oapi-layout">
    <OpenApiMainHeader :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu">
      <template #logo>
        <nuxt-link to="/" :active-class="''">
          <span v-html="logo"></span>
        </nuxt-link>
      </template>
      <template #button>
        <OpenApiHeader
          :current-locale="currentLocale"
          :files="files"
          :locales="locales"
          :file="fileName"
          :path="path"
        />
      </template>
    </OpenApiMainHeader>
    <div class="oapi-layout__body">
      <OpenApiMainLeftMenu :isMenuOpen="isMenuOpen" :isMobile="isMobile">
        <template #menu>
          <OpenApiMenu
              :routes="pathsByTags"
              :current-locale="currentLocale"
              :file="fileName"
              :path="path"
              :files="files"
              :locales="locales"
              :locales-reload="localesReload"
              :servers="servers"
          />
        </template>
      </OpenApiMainLeftMenu>

      <OpenApiMainContent>
        <transition name="oapi-fade" tag="div">
          <div>
            <slot />
          </div>
        </transition>
        <template #footer>
          <footer class="oapi-footer" v-if="footer" v-html="footer"></footer>
        </template>
      </OpenApiMainContent>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref, useFetch, useNuxtApp, useOpenApiDataState, useRoute, watch} from "#imports";

console.log('reload')

const data = useOpenApiDataState().data;

const name = ref(data.value.name);
const files = ref(data.value.files);
const pathsByTags = ref(data.value.pathsByTags);
const locales = ref(data.value.locales);
const localesReload = ref<boolean>(data.value.localesReload ?? false);
const servers = ref<Array<any>>(data.value.servers);
const path = ref('<%= options.path %>');

const route = useRoute()
const { $openapidoc, $openapidocBus } = useNuxtApp()

const fileName = ref(route.params.name.toString());

const isMenuOpen = ref(false)
const isMobile = ref(false)

const currentLocale = computed((): string => {
  return $openapidoc.currentLocale()
})
const logo = computed((): string => {
  return $openapidoc.getLogo().replace(':name', name.value)
})
const footer = computed((): string => {
  return $openapidoc.getFooter()
})

watch(route, () => {
  if (isMobile.value) {
    isMenuOpen.value = false;
  }
}, {deep: true, immediate: true})
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>


<style lang="scss">

.oapi-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  &__body {
    display: flex;
    overflow: hidden;
    flex: 1 1 0;
    position: relative;
  }
}

.oapi {
  blockquote {
    font-style: italic;
    margin-left: 20px;
    padding-left: 10px;
    border-left: 5px solid #ccc;
  }

  &-content__container {
    a {
      color: #4299e1;
      text-decoration: none;
      border-bottom: 1px solid #4299e1;
    }

    a:hover {
      color: #2c5282;
      border-bottom: 1px solid #2c5282;
    }

    img {
      max-width: 100%;
      margin: 1.5rem 0;
    }
  }
}

.oapi-fade-enter-active, .oapi-fade-leave-active {
  transition: opacity .3s;
}
.oapi-fade-enter, .oapi-fade-leave-to {
  opacity: 0;
}
.oapi-footer {
  border-top: 1px solid #e2e2e2;
  padding: 8px 0;
  font-size: 0.875rem;
}

p, .p {
  font-weight: 400;
}

.table {
  background-color: white;
  margin-bottom: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  transition: box-shadow .1s;
  width: 100%;

  border-collapse: collapse !important;

  td,th,tr {
    border: 1px solid #dae1e7;
  }

  td:hover,th:hover,tr:hover {
    background-color: #f8fafc;
  }

  td,th {
    padding: 0.2rem 0.5rem;
  }

  th {
    background-color: #2396f3;
    color: #ffffff;
    border-width: 1px;
    border-color: #ffffff;
  }
  th:hover {
    background-color: #158eef;
  }
}
</style>
