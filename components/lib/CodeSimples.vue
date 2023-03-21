
<template>
  <div class="col regular-font request-panel code-simple">

    <CustomDropdownWithSubMenu :items="configs" @select="onLangClick"></CustomDropdownWithSubMenu>

    <CodeView :lang="snippet" :code="code"></CodeView>
  </div>
</template>

<script>
import CodeView from './CodeView.vue'
import CustomDropdownWithSubMenu from '../lib/CustomDropdownWithSubMenu.vue';
import {CodeGenerator} from "./CodeGenerator";


export default {
  name: 'code-simples',
  components: {
    CustomDropdownWithSubMenu,
    CodeView
  },
  props: {
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
    configs: {
      type: Array,
      required: false,
      default: function () {
        return [
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
            snippet: 'swift',
          },
          {
            snippet: 'brainfuck',
          },
        ];
      }
    }
  },

  data() {
    return {
      snippetIndex: 1,
      snippetLibraryIndex: 'XMLHttpRequest',
      code: '',
      showPopup: false,
      onPopupIndex: null,
      vals: [],
    }
  },

  watch: {},

  methods: {
    onLangClick(snippet, library = null) {
      this.snippetIndex = snippet;
      this.snippetLibraryIndex = library;
      this.genCode()
    },
    genCode() {
      const method = this.method.toUpperCase();

      const generator = new CodeGenerator();
      generator.baseUrl(this.baseUrl);
      generator.url(this.url);
      generator.method(method);
      generator.params(JSON.parse(JSON.stringify(this.params)));
      generator.mimeType(this.mimeType);
      generator.lang(this.snippet);
      generator.library(this.snippetLibrary);

      this.code = generator.convert();
    }
  },

  computed: {
    snippet() {
      if(this.snippetIndex === null || !this.configs[this.snippetIndex]) return null
      return this.configs[this.snippetIndex].snippet
    },
    snippetLibrary() {
      if(this.snippetIndex === null || !this.configs[this.snippetIndex]) return null
      if(this.snippetLibraryIndex === null)  return null;
      if(!this.configs[this.snippetIndex].libraries) return null;

      return this.configs[this.snippetIndex].libraries[this.snippetLibraryIndex]
    },
  },
  mounted() {
    this.genCode()
  }
}
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
