
<template>
  <div class="col regular-font request-panel code-simple">

    <CustomDropdownWithSubMenu :items="configs" @select="onLangClick"></CustomDropdownWithSubMenu>

    <div class="code-panel">
      <div class="code-panel-body relative">
        <button class="toolbar-btn absolute top-2 right-2" @click.stop.prevent='copyToClipboard'>Copy</button>
        <pre class="prism p-4" :class="[snippet, `language-${snippet}`]" v-html="htmlCode"></pre>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs';
/** Addons */
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-clojure';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-http';
import 'prismjs/components/prism-kotlin';
import 'prismjs/components/prism-powershell';
import 'prismjs/components/prism-r';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-ocaml';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-textile';
import 'prismjs/components/prism-go';
import "prismjs/components/prism-markup-templating.js";
import 'prismjs/components/prism-php';

import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/keep-markup/prism-keep-markup.js';
</script>

<script setup>
const {$openapidoc_simples} = useNuxtApp()
/** Mode */


import {copyToClipboard} from '../helpers';
import HTTPSnippet from 'httpsnippet';

import CustomDropdownWithSubMenu from '../lib/CustomDropdownWithSubMenu.vue';

const props = defineProps({
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
  cookies: {
    type: Array,
    required: false,
    default: () => ([]),
  },
  headers: {
    type: Array,
    required: false,
    default: () => ([]),
  },
  query: {
    type: Array,
    required: false,
    default: () => ([]),
  },
  path: {
    type: Array,
    required: false,
    default: () => ([]),
  },
  postData: {
    type: Array,
    required: false,
    default: () => ([]),
  },
  mimeType: {
    type: String,
    required: false,
    default: 'application/x-www-form-urlencoded'
  }
})

let snippetIndex = 1;
let snippetLibraryIndex = 'XMLHttpRequest';
let showPopup = false;
let onPopupIndex = null;
let vals = [];
const config = [
  {
    snippet: 'shell',
    libraries: {
      cURL: 'curl',
      HTTPie: 'httpie',
      Wget: 'wget',
    },
  },
  {
    snippet: 'javascript',
    libraries: {
      XMLHttpRequest: 'xmlhttprequest',
      jQuery: 'jquery',
      Fetch: 'fetch',
      Axios: 'axios',
    },
  },
  // {
  //   snippet: 'node',
  //   libraries: {
  //     Native: 'native',
  //     Request: 'request',
  //     Unirest: 'unirest',
  //   },
  // },
  {
    snippet: 'python',
    libraries: {
      'Python 3': 'python3',
      Requests: 'requests',
    },
  },
  {
    snippet: 'go',
  },
  {
    snippet: 'c',
  },
  // 'Objective-C': {
  //     snippet: 'objectivec',
  // },
  {
    snippet: 'ocaml',
  },
  {
    snippet: 'csharp',
    libraries: {
      HttpClient: 'httpclient',
      RestSharp: 'restsharp',
    },
  },
  {
    snippet: 'java',
    libraries: {
      AsyncHttp: 'asynchttp',
      NetHttp: 'nethttp',
      OkHttp: 'okhttp',
      Unirest: 'unirest',
    },
  },
  {
    snippet: 'http',
  },
  {
    snippet: 'clojure',
  },
  {
    snippet: 'kotlin',
  },
  {
    snippet: 'php',
    libraries: {
      'pecl/http 1': 'http1',
      'pecl/http 2': 'http2',
      cURL: 'curl',
    },
  },
  {
    snippet: 'powershell',
    libraries: {
      WebRequest: 'webrequest',
      RestMethod: 'restmethod',
    },
  },
  {
    snippet: 'r',
  },
  {
    snippet: 'ruby',
  },
  {
    snippet: 'swift',
  },
];


function onLangClick(snippet, library = null) {
  snippetIndex = snippet;
  snippetLibraryIndex = library;
}

const snippet = computed(() => {
  if(snippetIndex === null || !config[snippetIndex]) return null
  return config[snippetIndex].snippet
})

const snippetLibrary = computed(() => {
  if(snippetIndex === null || !config[snippetIndex]) return null
  if(snippetLibraryIndex === null)  return null;
  if(!config[snippetIndex].libraries) return null;

  return config[snippetIndex].libraries[snippetLibraryIndex]
})

const htmlCode = computed(() => {
  if (Prism.languages[snippet.value]) {
    Prism.highlightAll()
    const htmlCode = Prism.highlight(genCode, Prism.languages[snippet.value], snippet.value);
    return `<pre class="prism ${snippet.value} language-${snippet.value}">${htmlCode}</pre>`;
  }
  return genCode;
})

const genCode = computed(() => {
  const method = props.method.toUpperCase();
  let baseUrl = props.baseUrl || `${location.protocol}//${location.host}/`;
  if (!baseUrl.endsWith('/')) {
    baseUrl += '/';
  }
  const fxurl = props.url.startsWith('/') ? props.url.substring(1) : props.url;
  let url = baseUrl + fxurl;

  for (const [name, value] of Object.entries(props.path)) {
    url = url.replaceAll(`{${value.name}}`, value.value);
  }

  const param = {
    method,
    url,
    headers: JSON.parse(JSON.stringify(props.headers)),
    queryString: JSON.parse(JSON.stringify(props.query)),
    cookies: JSON.parse(JSON.stringify(props.cookies)),
  };

  if (method === 'POST' && props.postData.length > 0) {
    param.postData = { mimeType: props.mimeType, params: JSON.parse(JSON.stringify(props.postData)) };
  }

  const append = $openapidoc_simples(useNuxtApp());
  for (let i in append) {
    param[append[i].in].push({
      name: append[i].name, value: append[i].value
    })
  }


  const snippet = new HTTPSnippet(param);
  return snippet.convert(snippet.value, snippetLibrary.value) || '';
})

</script>

<style>
pre[class*="language-"].line-numbers {
  position: relative;
  padding-left: 3.8em;
  counter-reset: linenumber;
}

pre[class*="language-"].line-numbers > code {
  position: relative;
  white-space: inherit;
}

.line-numbers .line-numbers-rows {
  position: absolute;
  pointer-events: none;
  top: 0;
  font-size: 100%;
  left: -3.8em;
  width: 3em; /* works for line-numbers below 1000 lines */
  letter-spacing: -1px;
  border-right: 1px solid #999;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

}

.line-numbers-rows > span {
  display: block;
  counter-increment: linenumber;
}

.line-numbers-rows > span:before {
  content: counter(linenumber);
  color: #999;
  display: block;
  padding-right: 0.8em;
  text-align: right;
}

code[class*="language-"], pre[class*="language-"] {
  color: #f8f8f2;
  background: none;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 0.9em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  border: 0;
}
/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
  //border-radius: 0.3em;
}
:not(pre) > code[class*="language-"], pre[class*="language-"] {
  background: #001529;
}
/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: 0.1em;
  //border-radius: 0.3em;
  white-space: normal;
}
.token.comment, .token.prolog, .token.doctype, .token.cdata {
  color: #8292a2;
}
.token.punctuation {
  color: #f8f8f2;
}
.token.namespace {
  opacity: 0.7;
}
.token.property, .token.tag, .token.constant, .token.symbol, .token.deleted {
  color: #f92672;
}
.token.boolean, .token.number {
  color: #ae81ff;
}
.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted {
  color: #a6e22e;
}
.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string, .token.variable {
  color: #f8f8f2;
}
.token.atrule, .token.attr-value, .token.function, .token.class-name {
  color: #e6db74;
}
.token.keyword {
  color: #66d9ef;
}
.token.regex, .token.important {
  color: #fd971f;
}
.token.important, .token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}
.token.entity {
  cursor: help;
}
.selector {
  cursor: pointer;
}
.code-panel {
  //border-radius: 5px;
  min-height: 300px;
  outline: 2px solid rgba(0, 0, 0, 0);
  outline-offset: 2px;
  overflow: hidden;
  width: 100%;
  margin-bottom: 20px;
}
.code-panel-header {
  align-items: center;
  display: flex;
  background-color: #e0e6f0;
  border-color: #e0e6f0;
  color: #66676b;
  font-size: 14px;
  line-height: 1;
  padding-left: 16px;
  padding-right: 12px;
  position: relative;
  user-select: none;
  height: 30px;
}
.code-panel-body {
  background-color: #f2f5fb;
  padding: 0;
  position: relative;
}
.code-popup {
  background-color: #fff;
  border: 1px solid #ccd0d1;
  //border-radius: 2px;
  box-sizing: border-box;
  left: 19px;
  padding-bottom: 8px;
  padding-top: 8px;
  position: absolute;
  top: 27px;
  width: 273px;
  z-index: 100000;

  //height: 300px;
  //overflow: scroll;
}
.code-popup-item {
  align-items: center;
  display: flex;
  font-size: 12px;
  padding: 4px 12px 4px 4px;
  white-space: nowrap;
}
.code-popup-item-icon {
  right: 10px;
  position: absolute;
}
.code-popup-sublist {
  background-color: #fff;
  border: 1px solid #ccd0d1;
  //border-radius: 2px;
  left: 271px;
  position: absolute;
  z-index: 10;
}
.toolbar-btn {
  cursor: pointer;
  padding: 4px;
  margin: 0px 2px;
  font-size: 12px;
  min-width: 50px;
  color: #fff;
  //border-radius: 2px;
  border: none;
  background-color: #00a2fb;
  top: 10px;
  right: 10px;
}
.code-selector {
  color: black;
  padding: 7px 0px;
}
.code-popup-item.active > .code-selector {
  color: white;
}
.code-popup-item.active {
  background-color: rgba(26, 171, 255, 1);
  color: white;
}

</style>
