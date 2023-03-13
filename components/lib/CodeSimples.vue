<script>
/** Mode */
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
import './reprism-php';
import {copyToClipboard} from '../helpers';
import HTTPSnippet from 'httpsnippet';

export default {
  name: 'code-simples',
  props: {
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
              Fetch: 'fetch',
              XMLHttpRequest: 'xmlhttprequest',
              jQuery: 'jquery',
              Axios: 'axios',
            },
          },
          // {
          //   snippet: 'node',
          //   libraries: {
          //     Native: 'native',
          //     Request: 'request',
          //     Unirest: 'unirest',
          //     Fetch: 'fetch',
          //     Axios: 'axios',
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
      }
    }
  },

  data() {
    return {
      lang: 'javascript',
      client: 'xmlhttprequest',
      showPopup: false,
      onPopupIndex: null,
      vals: [],

    }
  },

  watch: {},

  methods: {
    onOpenPopupClick() {
      this.showPopup = !this.showPopup;
    },
    onLangHover(index) {
      const select = this.configs[index];
      if (!select || !select.libraries) return;
      this.onPopupIndex = parseInt(index, 10);
    },
    onLangClick(index) {
      const select = this.configs[index];
      if (!select || select.libraries) return;
      this.lang = select.snippet;
      this.showPopup = false;
      this.onPopupIndex = null;
    },
    onClientClick(index, client) {
      const select = this.configs[index];
      if (!select || !select.libraries) return;
      this.lang = select.snippet;
      this.client = client;
      this.showPopup = false;
      this.onPopupIndex = null;
    },
    copyToClipboard(e) {
      copyToClipboard(this.genCode, e)
    },
  },

  computed: {
    htmlCode() {
      if (Prism.languages[this.lang]) {
        const htmlCode = Prism.highlight(this.genCode, Prism.languages[this.lang], this.lang);
        return `<pre class="prism ${this.lang} language-${this.lang}">${htmlCode}</pre>`;
      }
      return this.genCode;
    },

    genCode() {
      const method = this.method.toUpperCase();
      let baseUrl = this.baseUrl || `${location.protocol}//${location.host}/`;
      if (!baseUrl.endsWith('/')) {
        baseUrl += '/';
      }
      const fxurl = this.url.startsWith('/') ? this.url.substring(1) : this.url;
      let url = baseUrl + fxurl;

      for (const [name, value] of Object.entries(this.path)) {
        url = url.replaceAll(`{${name}}`, value);
      }

      const param = {
        method,
        url,
        headers: JSON.parse(JSON.stringify(this.headers)),
        queryString: JSON.parse(JSON.stringify(this.query)),
        cookies: JSON.parse(JSON.stringify(this.cookies)),
      };

      if (method === 'POST' && this.postData.length > 0) {
        param.postData = { mimeType: this.mimeType, params: JSON.parse(JSON.stringify(this.postData)) };
      }

      console.log(22222, param);

      const snippet = new HTTPSnippet(param);
      return snippet.convert(this.lang, this.client) || '';
    }
  },
}
</script>

<template>
  <div class="col regular-font request-panel code-simple">
    <div class="code-panel">
      <div class="code-panel-header">
        <div @click="onOpenPopupClick" class="selector">
          Request Sample Language <span v-text="lang"></span>
          <span v-if="client">/ <span v-text="client"></span></span>
          <span>&#709;</span>
        </div>

        <div v-if="showPopup" class="code-popup">
          <div v-for="(v, i) in configs" class="code-popup-item" :class="{active: i === onPopupIndex}"
               @mouseover.stop.prevent="() => onLangHover(i)">
            <a class="code-selector" href="#" @click.stop.prevent="() => onLangClick(i)" v-html="v.snippet"></a>
            <span v-if="v.libraries" class="code-popup-item-icon">&#62;</span>

            <div v-if="onPopupIndex === i" class="code-popup-sublist">
              <div v-for="(name, id) in v.libraries" class="code-popup-item">
                <a class="code-selector" href="#" @click.stop.prevent="() => onClientClick(onPopupIndex, id)"
                   v-text="name"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="code-panel-body">
        <button class="toolbar-btn" style="position:absolute;top: 26px;right: 17px;"
                @click.stop.prevent='copyToClipboard'> Copy
        </button>
        <pre class="prism" :class="[lang, `language-${lang}`]" v-html="htmlCode"></pre>
      </div>
    </div>
  </div>
</template>

<style>
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
  border-radius: 0.3em;
}
:not(pre) > code[class*="language-"], pre[class*="language-"] {
  background: #001529;
}
/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: 0.1em;
  border-radius: 0.3em;
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
  border-radius: 5px;
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
  border-radius: 2px;
  box-sizing: border-box;
  left: 19px;
  padding-bottom: 8px;
  padding-top: 8px;
  position: absolute;
  top: 27px;
  width: 273px;
  z-index: 100000;
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
  border-radius: 2px;
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
  border-radius: 2px;
  border: none;
  background-color: #00a2fb;
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
