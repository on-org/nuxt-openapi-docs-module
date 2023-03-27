<template>
  <div class="col regular-font request-panel code-simple">

    <CustomDropdownWithSubMenu :items="config" @select="onLangClick"></CustomDropdownWithSubMenu>

    <div class="code-panel">
      <div class="code-panel-body relative">
        <button class="toolbar-btn absolute top-2 right-2" @click.stop.prevent='copy'>Copy</button>
        <pre class="language line-numbers" :class="`language-${snippetIndex}`"><code class="language"
                                                                                     v-html="html"></code></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import RequestTemplater from "request-templater/dist/request-templater.es";
import CustomDropdownWithSubMenu from '../lib/CustomDropdownWithSubMenu.vue';
import {copyToClipboard} from '../helpers';

const requestTemplater = new RequestTemplater();

// const config = {};
const config = requestTemplater.config();

const props = defineProps({
  simples: {
    type: [Object, Array],
    required: false,
  },
  baseUrl: {
    type: String,
    required: false,
    default: ''
  },
  url: {
    type: String,
    required: true,
  },
  method: {
    type: String,
    required: false,
    default: 'GET'
  },
  params: {
    type: Array,
    required: false,
    default: () => ([]),
  },
  mimeType: {
    type: String,
    required: false,
    default: 'application/x-www-form-urlencoded'
  },
})


let snippetIndex = ref('javascript');
let snippetLibraryIndex = ref('xmlhttprequest');
let code = ref('');
let html = ref('');
let vals = [];

function onLangClick(snippet, library = null) {
  snippetIndex.value = snippet;
  snippetLibraryIndex.value = library;
  genCode()
}

function copy(e) {
  copyToClipboard(this.code, e)
}

function genCode() {
  const method = props.method.toUpperCase();
  let baseUrl = props.baseUrl || `${location.protocol}//${location.host}/`;

  requestTemplater.baseUrl(baseUrl);
  requestTemplater.url(props.url);
  requestTemplater.method(method);
  requestTemplater.params(JSON.parse(JSON.stringify(props.params)));
  requestTemplater.mimeType(props.mimeType);
  requestTemplater.lang(snippetIndex.value);
  requestTemplater.library(snippetLibraryIndex.value);

  code.value = requestTemplater.generate();
  html.value = requestTemplater.generateHighlight();
}

genCode();
</script>

<style>
pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}

code.hljs {
  padding: 3px 5px
}

.hljs-comment, .hljs-meta {
  color: #565f89
}

.hljs-deletion, .hljs-doctag, .hljs-regexp, .hljs-selector-attr, .hljs-selector-class, .hljs-selector-id, .hljs-selector-pseudo, .hljs-tag, .hljs-template-tag, .hljs-variable.language_ {
  color: #f7768e
}

.hljs-link, .hljs-literal, .hljs-number, .hljs-params, .hljs-template-variable, .hljs-type, .hljs-variable {
  color: #ff9e64
}

.hljs-attribute, .hljs-built_in {
  color: #e0af68
}

.hljs-keyword, .hljs-property, .hljs-subst, .hljs-title, .hljs-title.class_, .hljs-title.class_.inherited__, .hljs-title.function_ {
  color: #7dcfff
}

.hljs-selector-tag {
  color: #73daca
}

.hljs-addition, .hljs-bullet, .hljs-quote, .hljs-string, .hljs-symbol {
  color: #9ece6a
}

.hljs-code, .hljs-formula, .hljs-section {
  color: #7aa2f7
}

.hljs-attr, .hljs-char.escape_, .hljs-keyword, .hljs-name, .hljs-operator {
  color: #bb9af7
}

.hljs-punctuation {
  color: #c0caf5
}

.hljs {
  background: #1a1b26;
  color: #9aa5ce
}

.hljs-emphasis {
  font-style: italic
}

.hljs-strong {
  font-weight: 700
}

:not(pre) > code[class*="language-"], pre[class*="language-"] {
  background: #001529;
  color: #d3d3d3;
}

.toolbar-btn {
  cursor: pointer;
  padding: 4px;
  margin: 0px 2px;
  font-size: 12px;
  min-width: 50px;
  color: #fff;
  border: none;
  background-color: #00a2fb;
  top: 10px;
  right: 10px;
  z-index: 99;
}


pre {
  font-family: monospace;
  border: 1px solid #f7f7f7;
  padding: 10px;
  border-radius: 5px;
  overflow-x: auto;
}

code {
  font-family: monospace;
}

.keyword {
  font-weight: bold;
  color: #0077c2;
}

.operator {
  color: #a90d91;
}

.string {
  color: #2a9d8f;
}

.punctuation {
  color: #a90d91;
}

</style>
