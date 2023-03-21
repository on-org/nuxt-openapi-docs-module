<template>
  <div class="code-panel">
    <div class="code-panel-body relative">
      <button class="toolbar-btn absolute top-2 right-2" @click.stop.prevent='copyToClipboard'>Copy</button>
      <pre class="language line-numbers" :class="`language-${lang}`"><code class="language" v-html="html"></code></pre>
    </div>
  </div>
</template>
<script> /** Mode */
import hljs from 'highlight.js/lib/core'; /** Languages */
import javascript from 'highlight.js/lib/languages/javascript';
import java from 'highlight.js/lib/languages/java';
import clojure from 'highlight.js/lib/languages/clojure';
import csharp from 'highlight.js/lib/languages/csharp';
import http from 'highlight.js/lib/languages/http';
import kotlin from 'highlight.js/lib/languages/kotlin';
import powershell from 'highlight.js/lib/languages/powershell';
import r from 'highlight.js/lib/languages/r';
import ruby from 'highlight.js/lib/languages/ruby';
import rust from 'highlight.js/lib/languages/rust';
import swift from 'highlight.js/lib/languages/swift';
import bash from 'highlight.js/lib/languages/bash';
import ocaml from 'highlight.js/lib/languages/ocaml';
import python from 'highlight.js/lib/languages/python';
import json from 'highlight.js/lib/languages/json';
import go from 'highlight.js/lib/languages/go';
import php from 'highlight.js/lib/languages/php';
import c from 'highlight.js/lib/languages/c';
import brainfuck from 'highlight.js/lib/languages/brainfuck';
import lua from 'highlight.js/lib/languages/lua';
import perl from 'highlight.js/lib/languages/perl';
import cpp from 'highlight.js/lib/languages/cpp';
import scala from 'highlight.js/lib/languages/scala';
import dart from 'highlight.js/lib/languages/dart';
import objectivec from 'highlight.js/lib/languages/objectivec';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('java', java);
hljs.registerLanguage('clojure', clojure);
hljs.registerLanguage('csharp', csharp);
hljs.registerLanguage('http', http);
hljs.registerLanguage('kotlin', kotlin);
hljs.registerLanguage('powershell', powershell);
hljs.registerLanguage('r', r);
hljs.registerLanguage('ruby', ruby);
hljs.registerLanguage('rust', rust);
hljs.registerLanguage('swift', swift);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('ocaml', ocaml);
hljs.registerLanguage('python', python);
hljs.registerLanguage('json', json);
hljs.registerLanguage('go', go);
hljs.registerLanguage('php', php);
hljs.registerLanguage('c', c);
hljs.registerLanguage('brainfuck', brainfuck);
hljs.registerLanguage('lua', lua);
hljs.registerLanguage('perl', perl);
hljs.registerLanguage('cpp', cpp);
hljs.registerLanguage('scala', scala);
hljs.registerLanguage('dart', dart);
hljs.registerLanguage('objectivec', objectivec);

import {copyToClipboard} from '../helpers';

export default {
  name: 'code-view',
  props: {
    code: {type: String, required: true,},
    lang: {type: String, required: false, default: ''},
  },
  data() {
    return {html: 'javascript'}
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
      copyToClipboard(this.code, e)
    },
    toHtml() {
      const language = this.lang || 'javascript';
      const grammar = hljs.getLanguage(language);
      if (!grammar) {
        this.html = this.code
      }
      this.html = hljs.highlight(this.code, {language, ignoreIllegals: true}).value;
    }
  },
  mounted() {
    this.toHtml()
  }
} </script>

<style>
@import 'highlight.js/styles/tokyo-night-dark.css';

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

</style>
