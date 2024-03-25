<template>
  <div class="oapi-layout">
    <OpenApiMainHeader :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu">
      <template #logo>
        <a href="/" aria-label="logo">
          <span v-html="logo"></span>
        </a>
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
            v-if="pathsByTags"
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
import {computed, onMounted, onUnmounted, ref, useNuxtApp, useRoute, watch} from "#imports";

import config from '#build/openapi/config.mjs';
import doc_data from '#build/openapi/docs.<%= options.filename %>.config.mjs';

const path = ref('<%= options.path %>');

const route = useRoute()
const { $openapidoc, $openapidocBus } = useNuxtApp()

let ser = {...doc_data.servers};
if(!Array.isArray(ser)) ser = [];

const servers = ref<Array<any>>(ser);
const isMenuOpen = ref(false);
const isMobile = ref(false);

const fileName = computed((): string => "<%= options.filename %>");
const name = computed((): string => doc_data.name);
const files = computed(() => config.filesClean);
const pathsByTags = computed((): string => doc_data.paths_by_tags);

const localesReload = computed<boolean>(() => doc_data.localesReload ?? false);
const locales = computed((): string[] => doc_data.locales);
const currentLocale = computed((): string => $openapidoc.currentLocale());
const logo = computed((): string => config.logo.replace(':name', name.value));
const footer = computed((): string => config.footer);

watch(route, () => {
  if (isMobile.value) {
    isMenuOpen.value = false;
  }
}, {deep: true, immediate: true})

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function handleResize () {
  const isDesktop = window.innerWidth >= 1110;
  isMobile.value = window.innerWidth < 1110;
  if (!isDesktop && isMenuOpen.value) {
    isMenuOpen.value = false
  }
  if (isDesktop) {
    isMenuOpen.value = true
  }
}

onMounted(() => {
  if (import.meta.client) {
    isMobile.value = window.innerWidth < 1110;
    isMenuOpen.value = window.innerWidth >= 1110;
    window.addEventListener('resize', handleResize)
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>


<style>
.hljs {
  color: #24292e;
  background: #ffffff;
}
.hljs-doctag {
  color: #d73a49;
}
.hljs-keyword {
  color: #d73a49;
}
.hljs-meta {
  color: #005cc5;
}
.hljs-meta .hljs-keyword {
  color: #d73a49;
}
.hljs-meta .hljs-string {
  color: #032f62;
}
.hljs-template-tag {
  color: #d73a49;
}
.hljs-template-variable {
  color: #d73a49;
}
.hljs-type {
  color: #d73a49;
}
.hljs-variable.language_ {
  color: #d73a49;
}
.hljs-title {
  color: #6f42c1;
}
.hljs-title.class_ {
  color: #6f42c1;
}
.hljs-title.class_.inherited__ {
  color: #6f42c1;
}
.hljs-title.function_ {
  color: #6f42c1;
}
.hljs-attr {
  color: #005cc5;
}
.hljs-attribute {
  color: #005cc5;
}
.hljs-literal {
  color: #005cc5;
}
.hljs-number {
  color: #005cc5;
}
.hljs-operator {
  color: #005cc5;
}
.hljs-variable {
  color: #005cc5;
}
.hljs-selector-attr {
  color: #005cc5;
}
.hljs-selector-class {
  color: #005cc5;
}
.hljs-selector-id {
  color: #005cc5;
}
.hljs-regexp {
  color: #032f62;
}
.hljs-string {
  color: #032f62;
}
.hljs-built_in {
  color: #e36209;
}
.hljs-symbol {
  color: #e36209;
}
.hljs-comment {
  color: #6a737d;
}
.hljs-code {
  color: #6a737d;
}
.hljs-formula {
  color: #6a737d;
}
.hljs-name {
  color: #22863a;
}
.hljs-quote {
  color: #22863a;
}
.hljs-selector-tag {
  color: #22863a;
}
.hljs-selector-pseudo {
  color: #22863a;
}
.hljs-subst {
  color: #24292e;
}
.hljs-section {
  color: #005cc5;
  font-weight: bold;
}
.hljs-bullet {
  color: #735c0f;
}
.hljs-emphasis {
  color: #24292e;
  font-style: italic;
}
.hljs-strong {
  color: #24292e;
  font-weight: bold;
}
.hljs-addition {
  color: #22863a;
  background-color: #f0fff4;
}
.hljs-deletion {
  color: #b31d28;
  background-color: #ffeef0;
}

html.oapi {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

.oapi body {
  margin: 0;
}
.oapi main {
  display: block;
}
.oapi h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
.oapi hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
.oapi pre {
  font-family: monospace, monospace;
  font-size: 1em;
}
.oapi a {
  background-color: transparent;
}
.oapi abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}
.oapi b,
.oapi strong {
  font-weight: bolder;
}
.oapi code,
.oapi kbd,
.oapi samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
.oapi small {
  font-size: 80%;
}
.oapi sub,
.oapi sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
.oapi sub {
  bottom: -0.25em;
}
.oapi sup {
  top: -0.5em;
}
.oapi img {
  border-style: none;
}
.oapi button,
.oapi input,
.oapi optgroup,
.oapi select,
.oapi textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
.oapi button,
.oapi input {
  overflow: visible;
}
.oapi button,
.oapi select {
  text-transform: none;
}
.oapi button,
.oapi [type=button],
.oapi [type=reset],
.oapi [type=submit] {
  -webkit-appearance: button;
}
.oapi button::-moz-focus-inner,
.oapi [type=button]::-moz-focus-inner,
.oapi [type=reset]::-moz-focus-inner,
.oapi [type=submit]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
.oapi button:-moz-focusring,
.oapi [type=button]:-moz-focusring,
.oapi [type=reset]:-moz-focusring,
.oapi [type=submit]:-moz-focusring {
  outline: 1px dotted ButtonText;
}
.oapi fieldset {
  padding: 0.35em 0.75em 0.625em;
}
.oapi legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}
.oapi progress {
  vertical-align: baseline;
}
.oapi textarea {
  overflow: auto;
}
.oapi [type=checkbox],
.oapi [type=radio] {
  box-sizing: border-box;
  padding: 0;
}
.oapi [type=number]::-webkit-inner-spin-button,
.oapi [type=number]::-webkit-outer-spin-button {
  height: auto;
}
.oapi [type=search] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
.oapi [type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}
.oapi ::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
.oapi details {
  display: block;
}
.oapi summary {
  display: list-item;
}
.oapi template {
  display: none;
}
.oapi [hidden] {
  display: none;
}

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
}
html.oapi * {
  box-sizing: border-box;
}

.oapi, .oapi body {
  margin: 0;
  padding: 0;
}
.oapi p {
  margin-bottom: 1rem;
}
.oapi h1, .oapi h2, .oapi h3, .oapi h4, .oapi h5 {
  font-family: var(--oapi-system-ui);
  font-weight: 600;
  line-height: 1.25;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}
.oapi h1 {
  font-size: 2em;
}
.oapi h2 {
  padding-bottom: 0.3em;
  border-bottom: 1px solid var(--color-border-muted);
}
.oapi h2 {
  font-size: 1.5em;
}
.oapi h3 {
  font-size: 1.25em;
}
.oapi h4 {
  font-size: 1em;
}
.oapi h5 {
  font-size: 0.875em;
}
.oapi h6 {
  font-size: 0.85em;
  color: var(--color-fg-muted);
}
.oapi .highlighted {
  background-color: yellow;
  font-weight: bold;
}
.oapi h1[id],
.oapi h2[id],
.oapi h3[id],
.oapi h4[id] {
  position: relative;
  cursor: pointer;
}
.oapi h1[id]::before,
.oapi h2[id]::before,
.oapi h3[id]::before,
.oapi h4[id]::before {
  content: "#";
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  opacity: 0;
  transition: opacity 0.2s;
}
.oapi h1[id]:hover,
.oapi h2[id]:hover,
.oapi h3[id]:hover,
.oapi h4[id]:hover {
  opacity: 0.8;
}
.oapi h1[id]:hover::before,
.oapi h2[id]:hover::before,
.oapi h3[id]:hover::before,
.oapi h4[id]:hover::before {
  opacity: 1;
}
.oapi h1[id]:active::before,
.oapi h2[id]:active::before,
.oapi h3[id]:active::before,
.oapi h4[id]:active::before {
  opacity: 0.5;
}
.oapi small, .oapi .text_small {
  font-size: 0.833rem;
}
.oapi .hljs {
  background: var(--oapi-bg-code-multi);
}
.oapi code {
  font-family: var(--oapi-mono);
  padding: 0.2em 0.4em;
  margin: 0;
  font-size: 0.75rem;
  white-space: break-spaces;
  border-radius: 4px;
}
.oapi code:not(pre > code) {
  display: inline-block;
  background-color: var(--oapi-bg-code-single);
}
.oapi pre {
  border: 1px solid #e1e4e8;
  background: var(--oapi-bg-code-multi);
  color: #444;
  font-size: 0.75rem;
  padding: 16px;
  font-family: var(--oapi-mono);
  border-radius: 6px;
  overflow-x: auto;
  margin-bottom: 1rem;
}
.oapi pre code {
  padding: 0;
}
.oapi .oapi-method-tag {
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
}
.oapi .oapi-method-tag--get, .oapi .oapi-method-tag--post, .oapi .oapi-method-tag--put, .oapi .oapi-method-tag--patch, .oapi .oapi-method-tag--delete, .oapi .oapi-method-tag--options, .oapi .oapi-method-tag--head, .oapi .oapi-method-tag--trace {
  border-color: currentColor !important;
}
.oapi .oapi-method-tag--get {
  color: var(--oapi-method-color-get);
}
.oapi .oapi-method-tag--post {
  color: var(--oapi-method-color-post);
}
.oapi .oapi-method-tag--patch {
  color: var(--oapi-method-color-patch);
}
.oapi .oapi-method-tag--put {
  color: var(--oapi-method-color-put);
}
.oapi .oapi-method-tag--delete {
  color: var(--oapi-method-color-delete);
}
.oapi .oapi-method-tag--head {
  color: var(--oapi-method-color-head);
}
.oapi .oapi-method-tag--trace {
  color: var(--oapi-method-color-trace);
}
.oapi .oapi-method-tag--trace {
  color: var(--oapi-method-color-options);
}
.oapi .oapi-schema-block {
  margin-bottom: 3rem;
}
.oapi .oapi-schema-block__title {
  font-weight: 600;
  color: #7F8286;
  margin-bottom: 4px;
}
.oapi .oapi-schema-block__required {
  color: #e3a637;
  margin-bottom: 4px;
  margin-top: -12px;
}
.oapi .oapi-schema-block__description {
  margin-bottom: 1rem;
}
.oapi .oapi-schema-block__model {
  margin-top: 16px;
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
}
.oapi-layout__body {
  display: flex;
  overflow: hidden;
  flex: 1 1 0;
  position: relative;
}

.oapi blockquote {
  font-style: italic;
  margin-left: 20px;
  padding-left: 10px;
  border-left: 5px solid #ccc;
}
.oapi-content__container a {
  color: #2f55d1;
  text-decoration: none;
  border-bottom: 1px solid #2f55d1;
}
.oapi-content__container a:hover {
  color: #2c5282;
  border-bottom: 1px solid #2c5282;
}
.oapi-content__container img {
  max-width: 100%;
  margin: 1.5rem 0;
}

.oapi-fade-enter-active, .oapi-fade-leave-active {
  transition: opacity 0.3s;
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
  transition: box-shadow 0.1s;
  width: 100%;
  border-collapse: collapse !important;
}
.table td, .table th, .table tr {
  border: 1px solid #dae1e7;
}
.table td:hover, .table th:hover, .table tr:hover {
  background-color: #f8fafc;
}
.table td, .table th {
  padding: 0.2rem 0.5rem;
}
.table th {
  background-color: #2396f3;
  color: #ffffff;
  border-width: 1px;
  border-color: #ffffff;
}
.table th:hover {
  background-color: #158eef;
}
</style>
