import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
export class MarkdownRenderer {
  markedInstance;
  constructor() {
    this.markedInstance = new Marked(
      markedHighlight({
        langPrefix: "hljs language-",
        highlight: (code, lang) => {
          const language = hljs.getLanguage(lang) ? lang : "plaintext";
          return hljs.highlight(code, { language }).value;
        }
      })
    );
    this.configureCustomRenderer();
  }
  configureCustomRenderer() {
    const renderer = {
      text: (text) => this.replaceAngleBracketsInText(text),
      table: (header, body) => `<table class="table">
${header}${body}</table>
`
    };
    this.markedInstance.use({ renderer });
  }
  replaceAngleBracketsInText(text) {
    return text.replace(/(?<=[^=])<|>(?=[^=])/g, (match) => match === "<" ? "&lt;" : "&gt;");
  }
  render(text) {
    return this.markedInstance.parse(text);
  }
  sanitizeText(text) {
    text = this.replaceAngleBracketsInText(text);
    const map = {
      '"': "&quot;",
      "'": "&#x27;",
      "\\": "&#x5C;",
      "|": "&#x7C;"
    };
    const reg = /["'\\|]/gi;
    return text.replace(reg, function(match) {
      return map[match];
    });
  }
}
