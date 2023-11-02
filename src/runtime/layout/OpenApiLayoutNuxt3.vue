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
import {computed, ref, useNuxtApp, useOpenApiDataState, useRoute, watch} from "#imports";

const data = useOpenApiDataState().data;
const route = useRoute()
const { $openapidoc, $openapidocBus } = useNuxtApp()

let ser = data.value.servers;
if(!Array.isArray(ser)) ser = [];

const servers = ref<Array<any>>(ser);
const path = ref('<%= options.path %>');
const isMenuOpen = ref(false)
const isMobile = ref(false)

const fileName = computed((): string => route.params.name.toString())
const name = computed((): string => data.value.name)
const files = computed((): string => data.value.files)
const pathsByTags = computed((): string => data.value.pathsByTags)
const localesReload = computed<boolean>((): string => data.value.localesReload ?? false)
const locales = computed((): string => data.value.locales)
const currentLocale = computed((): string => $openapidoc.currentLocale())
const logo = computed((): string => $openapidoc.getLogo().replace(':name', name.value))
const footer = computed((): string => $openapidoc.getFooter())

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
$color_1: #24292e;
$color_2: #d73a49;
$color_3: #6f42c1;
$color_4: #005cc5;
$color_5: #032f62;
$color_6: #e36209;
$color_7: #6a737d;
$color_8: #22863a;
$color_9: #735c0f;
$color_10: #b31d28;
$background-color_1: #f0fff4;
$background-color_2: #ffeef0;

.hljs {
  color: $color_1;
  background: #ffffff;


  &-doctag {
    color: $color_2;
  }


  &-keyword {
    color: $color_2;
  }
  &-meta {
    .hljs-keyword {
      color: $color_2;
    }
    color: $color_4;
    .hljs-string {
      color: $color_5;
    }
  }
  &-template-tag {
    color: $color_2;
  }
  &-template-variable {
    color: $color_2;
  }
  &-type {
    color: $color_2;
  }
  &-variable.language_ {
    color: $color_2;
  }
  &-title {
    color: $color_3;
  }
  &-title.class_ {
    color: $color_3;
  }
  &-title.class_.inherited__ {
    color: $color_3;
  }
  &-title.function_ {
    color: $color_3;
  }
  &-attr {
    color: $color_4;
  }
  &-attribute {
    color: $color_4;
  }
  &-literal {
    color: $color_4;
  }
  &-number {
    color: $color_4;
  }
  &-operator {
    color: $color_4;
  }
  &-variable {
    color: $color_4;
  }
  &-selector-attr {
    color: $color_4;
  }
  &-selector-class {
    color: $color_4;
  }
  &-selector-id {
    color: $color_4;
  }
  &-regexp {
    color: $color_5;
  }
  &-string {
    color: $color_5;
  }
  &-built_in {
    color: $color_6;
  }
  &-symbol {
    color: $color_6;
  }
  &-comment {
    color: $color_7;
  }
  &-code {
    color: $color_7;
  }
  &-formula {
    color: $color_7;
  }
  &-name {
    color: $color_8;
  }
  &-quote {
    color: $color_8;
  }
  &-selector-tag {
    color: $color_8;
  }
  &-selector-pseudo {
    color: $color_8;
  }
  &-subst {
    color: $color_1;
  }
  &-section {
    color: $color_4;
    font-weight: bold;
  }
  &-bullet {
    color: $color_9;
  }
  &-emphasis {
    color: $color_1;
    font-style: italic;
  }
  &-strong {
    color: $color_1;
    font-weight: bold;
  }
  &-addition {
    color: $color_8;
    background-color: $background-color_1;
  }
  &-deletion {
    color: $color_10;
    background-color: $background-color_2;
  }
}


html.oapi {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

.oapi {

  body {
    margin: 0;
  }

  main {
    display: block;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  a {
    background-color: transparent;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }
}

$oapi-base-font-size: 16px;

:root {
  --aside-width: 350px;
  --primary-color: #409eff;
  --oapi-system-ui: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --oapi-mono: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
  --oapi-text-color: #1f2328;
  --oapi-bg-code-multi: #f6f8fa;
  --oapi-bg-code-single: rgba(175,184,193,0.2);
  --oapi-method-color-get: #72AFF8;
  --oapi-method-color-post: #70C995;
  --oapi-method-color-put: #F0A44B;
  --oapi-method-color-delete: #E64F47;
  --oapi-method-color-patch: #7CE0C3;
  --oapi-method-color-options: #0d5aa7;
  --oapi-method-color-trace: #000;
  --oapi-method-color-head: #9012fe;
}

html.oapi {
  font-weight: 400;
  line-height: 1.75;
  color: var(--oapi-text-color);
  font-size: 16px;
  font-family: var(--oapi-system-ui);

  * {
    box-sizing: border-box;
  }
}

.oapi {
  &, & body {
    margin: 0;
    padding: 0;
  }

  p {
    margin-bottom: 1rem;
  }

  h1, h2, h3, h4, h5 {
    font-family: var(--oapi-system-ui);
    font-weight: 600;
    line-height: 1.25;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2em
  }

  h2 {
    padding-bottom: .3em;
    border-bottom: 1px solid var(--color-border-muted)
  }

  h2 {
    font-size: 1.5em
  }

  h3 {
    font-size: 1.25em
  }

  h4 {
    font-size: 1em
  }

  h5 {
    font-size: .875em
  }

  h6 {
    font-size: .85em;
    color: var(--color-fg-muted)
  }

  small, .text_small {
    font-size: 0.833rem;
  }

  .hljs {
    background: var(--oapi-bg-code-multi);
  }

  code {
    font-family: var(--oapi-mono);
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: .75rem;
    white-space: break-spaces;
    border-radius: 4px;
    &:not(pre > code) {
      display: inline-block;
      background-color: var(--oapi-bg-code-single);
    }
  }

  pre {
    border: 1px solid #e1e4e8;
    background: var(--oapi-bg-code-multi);
    color: #444;
    font-size: .75rem;
    padding: 16px;
    font-family: var(--oapi-mono);
    border-radius: 6px;
    overflow-x: auto;
    margin-bottom: 1rem;

    code {
      padding: 0;
    }
  }

  .oapi-method-tag {
    text-align: center;
    display: inline-flex;
    justify-content: center;
    line-height: 1;
    padding: 3px 5px;
    border-radius: 4px;
    border: 1px solid #ddd;
    font-family: var(--oapi-mono);
    font-weight: 600;
    font-size: 2rem;
    text-transform: uppercase;
    &--get, &--post, &--put, &--patch, &--delete, &--options, &--head, &--trace {
      border-color: currentColor !important;
    }
    &--get {
      color: var(--oapi-method-color-get);
    }
    &--post {
      color: var(--oapi-method-color-post);
    }
    &--patch {
      color: var(--oapi-method-color-patch);
    }
    &--put {
      color: var(--oapi-method-color-put);
    }
    &--delete {
      color: var(--oapi-method-color-delete);
    }
    &--head {
      color: var(--oapi-method-color-head);
    }
    &--trace {
      color: var(--oapi-method-color-trace);
    }
    &--trace {
      color: var(--oapi-method-color-options);
    }
  }

  .oapi-schema-block {
    margin-bottom: 3rem;
    &__title {
      font-weight: 600;
      color: #7F8286;
      margin-bottom: 4px;
    }
    &__required {
      color: #e3a637;
      margin-bottom: 4px;
      margin-top: -12px;
    }
    &__description {
      margin-bottom: 1rem;
    }
    &__model {
      margin-top: 16px;
    }
  }
}

.oapi-mono {
  font-family: var(--oapi-mono);
}

.bold {
  font-weight: bold;
}

.deprecated {
  text-decoration: line-through;
}


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
