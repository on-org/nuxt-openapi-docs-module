
<template>
  <div class="col regular-font request-panel code-simple">

    <CustomDropdownWithSubMenu :items="config" @select="onLangClick"></CustomDropdownWithSubMenu>

    <div class="code-panel">
      <div class="code-panel-body relative">
        <button class="toolbar-btn absolute top-2 right-2" @click.stop.prevent='copyToClipboard'>Copy</button>
        <pre class="p-4 language line-numbers" :class="`language-${snippetIndex}`"><code class="language" v-html="html"></code></pre>
      </div>
    </div>
  </div>
</template>

<script>
import RequestTemplater from "request-templater/dist/request-templater.es";
import CustomDropdownWithSubMenu from '../lib/CustomDropdownWithSubMenu.vue';
import {copyToClipboard} from '../helpers';

const requestTemplater = new RequestTemplater();

const langs = requestTemplater.config();


export default {
  name: 'code-simples',
  components: {
    CustomDropdownWithSubMenu
  },
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
    params: {
      type: Array,
      required: false,
      default: () => ([]),
    },
    mimeType: {
      type: String,
      required: false,
      default: 'application/x-www-form-urlencoded'
    }
  },

  data() {
    return {
      snippetIndex: 'javascript',
      snippetLibraryIndex: 'xmlhttprequest',
      code: '',
      html: '',
      showPopup: false,
      onPopupIndex: null,
      vals: [],
    }
  },

  watch: {},

  methods: {
    copyToClipboard(e) {
      copyToClipboard(this.code, e)
    },
    onLangClick(snippet, library = null) {
      this.snippetIndex = snippet;
      this.snippetLibraryIndex = library;
      this.genCode()
    },
    genCode() {
      const method = this.method.toUpperCase();

      requestTemplater.baseUrl(this.baseUrl ?? `https://${location.host}`);
      requestTemplater.url(this.url);
      requestTemplater.method(method);
      requestTemplater.params(JSON.parse(JSON.stringify(this.params)));
      requestTemplater.mimeType(this.mimeType);
      requestTemplater.lang(this.snippetIndex);
      requestTemplater.library(this.snippetLibraryIndex);

      this.code = requestTemplater.generate();
      this.html = requestTemplater.generateHighlight();
    }
  },

  computed: {
    config() {
      return langs;
    },
  },
  mounted() {
    this.genCode()
  }
}
</script>

<style>

</style>
