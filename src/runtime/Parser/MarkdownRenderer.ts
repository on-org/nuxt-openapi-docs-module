import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';

export class MarkdownRenderer {
  markedInstance: Marked;

  constructor() {
    this.markedInstance = new Marked(
      markedHighlight({
        langPrefix: 'hljs language-',
        highlight: (code, lang) => {
          const language = hljs.getLanguage(lang) ? lang : 'plaintext';
          return hljs.highlight(code, { language }).value;
        }
      })
    );

    this.configureCustomRenderer();
  }

  private configureCustomRenderer(): void {
    const renderer = {
      text: (text: string) => this.replaceAngleBracketsInText(text),
      table: (header: any, body: any) => `<table class="table">\n${header}${body}</table>\n`,
    };

    this.markedInstance.use({ renderer });
  }

  private replaceAngleBracketsInText(text: string): string {
    return text.replace(/(?<=[^=])<|>(?=[^=])/g, match => match === '<' ? '&lt;' : '&gt;');
  }

  render(text: string): string {
    return <string>this.markedInstance.parse(text);
  }

  sanitizeText(text: string) {
    text = this.replaceAngleBracketsInText(text);

    const map = {
      '"': '&quot;',
      "'": '&#x27;',
      '\\': '&#x5C;',
      '|': '&#x7C;'
    };
    const reg = /["'\\|]/gi;
    return text.replace(reg, function (match) {
      // @ts-ignore
      return map[match];
    });
  }
}
