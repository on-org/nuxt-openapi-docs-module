<template>
  <div class="col regular-font request-panel code-simple">

    <CustomDropdownWithSubMenu :items="configs" @select="onLangClick"></CustomDropdownWithSubMenu>

    <CodeView :lang="snippet" :code="code"></CodeView>
  </div>
</template>

<script setup>
import CustomDropdownWithSubMenu from '../lib/CustomDropdownWithSubMenu.vue';
import {CodeGenerator} from "./CodeGenerator";
import CodeView from './CodeView.vue'

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


let snippetIndex = ref(1);
let snippetLibraryIndex = ref('XMLHttpRequest');
let code = ref('');
let vals = [];
const configs = [
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
  {
    snippet: 'python',
    libraries: {
      'Python 3': 'python',
      'Requests': 'requests',
    },
  },
  {
    snippet: 'go',
  },
  {
    snippet: 'c',
  },
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
      cURL: 'curl',
      guzzle: 'guzzle',
      http1: 'http 1.1',
      http2: 'http 2',
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
    snippet: 'rust',
  },
  {
    snippet: 'swift',
  },
  {
    snippet: 'objectivec',
  },
  {
    snippet: 'cpp',
    libraries: {
      iostream: 'iostream',
      arduino: 'arduino',
    }
  },
  {
    snippet: 'dart',
  },
  {
    snippet: 'scala',
  },
  {
    snippet: 'lua',
  },
  {
    snippet: 'perl',
  },
  {
    snippet: 'brainfuck',
  },
];

function onLangClick(snippet, library = null) {
  snippetIndex.value = snippet;
  snippetLibraryIndex.value = library;
  genCode()
}

const snippet = computed(() => {
  if(snippetIndex.value === null || !configs[snippetIndex.value]) return null

  return configs[snippetIndex.value].snippet
})

const snippetLibrary = computed(() => {
  if(snippetIndex.value === null || !configs[snippetIndex.value]) return null
  if(snippetLibraryIndex.value === null)  return null;
  if(!configs[snippetIndex.value].libraries) return null;

  return configs[snippetIndex.value].libraries[snippetLibraryIndex.value]
})

function genCode() {
  const method = props.method.toUpperCase();
  let baseUrl = props.baseUrl || `${location.protocol}//${location.host}/`;

  const generator = new CodeGenerator();
  generator.baseUrl(baseUrl);
  generator.url(props.url);
  generator.method(method);
  generator.params(JSON.parse(JSON.stringify(props.params)));
  generator.mimeType(props.mimeType);
  generator.lang(snippet.value);
  generator.library(snippetLibrary.value);

  code.value = generator.convert();
}

genCode();
</script>

<style>



pre {
  font-family: monospace;
  background-color: #f7f7f7;
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
