
<template>
  <div class="oapi-code-simple">
    <CustomDropdownWithSubMenu
      :items="config"
      @select="onLangClick"
    />

    <div class="oapi-code-panel">
      <div class="oapi-code-panel__body">
        <button
          class="oapi-code-panel__btn"
          @click.stop.prevent="copyToClipboard"
        >
          Copy
        </button>
        <pre
          class="language line-numbers"
          :class="`language-${snippetIndex}`"
        ><code
          class="language"
          v-html="html"
        /></pre>
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
  name: 'CodeSimples',
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

  computed: {
    config() {
      return langs;
    },
  },

  watch: {},
  mounted() {
    this.genCode()
  },

  methods: {
    copyToClipboard(e) {
      copyToClipboard(this.code, e)
    },
    onLangClick(snippet, library = null) {
      this.snippetIndex = snippet;
      this.snippetLibraryIndex = library;
      this.genCode()
    },
    getAbsoluteUrl() {
      const url = this.baseUrl;
      if (!url) return window.location.origin;
      if (/^https?:\/\//i.test(url)) {
        return url;
      }
      const base = window.location.origin;
      return new URL(url, base).href;
    },
    genCode() {
      const method = this.method.toUpperCase();

      requestTemplater.baseUrl(this.getAbsoluteUrl());
      requestTemplater.url(this.url);
      requestTemplater.method(method);
      requestTemplater.params(JSON.parse(JSON.stringify(this.params)));
      requestTemplater.mimeType(this.mimeType);
      requestTemplater.lang(this.snippetIndex);
      requestTemplater.library(this.snippetLibraryIndex);

      this.code = requestTemplater.generate();
      this.html = requestTemplater.generateHighlight();
    }
  }
}
</script>

<style>
.oapi-code-panel__body {
  position: relative;
}
.oapi-code-panel button.oapi-code-panel__btn {
  position: absolute;
  background-color: #00a2fb;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  margin: 0 2px;
  min-width: 50px;
  padding: 6px 10px;
  border-radius: 4px;
  right: 10px;
  top: 10px;
  z-index: 99;
}
</style>
