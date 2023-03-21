<template>
  <div class="code-panel">
    <div class="code-panel-body relative">
      <button class="toolbar-btn absolute top-2 right-2" @click.stop.prevent='copyToClipboard'>Copy</button>
      <pre class="language line-numbers" :class="`language-${lang}`"><code class="language" v-html="html"></code></pre>
    </div>
  </div>
</template>

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
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-ocaml';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-textile';
import 'prismjs/components/prism-go';
import "prismjs/components/prism-markup-templating.js";
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-brainfuck';
import 'prismjs/components/prism-lua';
import 'prismjs/components/prism-perl';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-scala';
import 'prismjs/components/prism-dart';
import 'prismjs/components/prism-objectivec';
import 'prismjs/components/prism-objectivec';

import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

import {copyToClipboard} from '../helpers';

export default {
  name: 'code-view',
  props: {
    code: {
      type: String,
      required: true,
    },
    lang: {
      type: String,
      required: false,
      default: ''
    },
  },
  data() {
    return {
      html: 'javascript',
    }
  },
  watch: {
    code() {
      this.toHtml()
    },
    lang() {
      this.toHtml()
    }
  },
  methods: {
    copyToClipboard(e) {
      copyToClipboard(this.genCode, e)
    },
    toHtml() {
      const grammar = Prism.languages[this.lang];
      if (!grammar) {
        this.html = this.code
      }
      this.html = Prism.highlight(this.code, grammar, this.lang);
    }
  },
  mounted() {
    this.toHtml()
  }
}
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
  left: -3.8em;
  width: 3em; /* works for line-numbers below 1000 lines */
  letter-spacing: -1px;
  border-right: 1px solid #999;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 1.1em;
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
}
:not(pre) > code[class*="language-"], pre[class*="language-"] {
  background: #001529;
}
/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: 0.1em;
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
  min-height: 100px;
  outline: 2px solid rgba(0, 0, 0, 0);
  outline-offset: 2px;
  overflow: hidden;
  width: 100%;
  margin-bottom: 20px;
}
.code-panel-body {
  background-color: #f2f5fb;
  padding: 0;
  position: relative;
}
</style>
