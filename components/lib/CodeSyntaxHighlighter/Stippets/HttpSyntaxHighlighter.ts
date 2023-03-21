import {Language, SyntaxHighlighter} from "./_SyntaxHighlighter";

export default class HttpSyntaxHighlighter extends SyntaxHighlighter {
  constructor() {
    const language: Language = {
      name: 'http',
      aliases: ['http'],
      keywords: [
        'GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS', 'PATCH',
        'HTTP/1.0', 'HTTP/1.1', 'HTTP/2', 'HTTPS'
      ],
      operators: [],
      punctuation: [':', ';', ',', '{', '}', '[', ']', '(', ')', '<', '>']
    };
    super(language);
  }

  public highlight(code: string): string {
    let html = '';
    let token = '';

    for (let i = 0; i < code.length; i++) {
      const char = code[i];
      const nextChar = code[i + 1];

      if (/\s/.test(char)) {
        html += char;
      } else if (this.language.punctuation.includes(char)) {
        html += `<span class="punctuation">${char}</span>`;
      } else {
        token += char;
        const keyword = this.language.keywords.find(kw => kw.startsWith(token.toUpperCase()));
        if (keyword) {
          if (token.toUpperCase() === keyword) {
            html += `<span class="keyword">${keyword}</span>`;
            token = '';
          }
        } else {
          html += char;
          token = '';
        }
      }

      if (char === ':' && nextChar === ' ') {
        html += `<span class="punctuation">${char}</span><span class="string">`;
        token = '';
        i++;
        let endOfLine = code.indexOf('\n', i);
        if (endOfLine === -1) {
          endOfLine = code.length;
        }
        html += code.substring(i + 1, endOfLine).trim();
        html += '</span>';
        i = endOfLine - 1;
      }
    }

    return `<pre class="highlighter"><code class="language-${this.language.name}">${html}</code></pre>`;
  }
}
