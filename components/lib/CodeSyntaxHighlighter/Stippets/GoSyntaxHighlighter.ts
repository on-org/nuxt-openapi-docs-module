import {Language, SyntaxHighlighter} from "./_SyntaxHighlighter";

export default class GoSyntaxHighlighter extends SyntaxHighlighter {
  constructor() {
    const language: Language = {
      name: 'go',
      aliases: ['golang'],
      keywords: [
        'break', 'case', 'chan', 'const', 'continue', 'default', 'defer', 'else', 'fallthrough',
        'for', 'func', 'go', 'goto', 'if', 'import', 'interface', 'map', 'package', 'range',
        'return', 'select', 'struct', 'switch', 'type', 'var'
      ],
      operators: [
        '+', '-', '*', '/', '%', '&', '|', '^', '<<', '>>', '&^', ':=', '++', '--', '==',
        '!=', '<', '<=', '>', '>=', '&&', '||', '!'
      ],
      punctuation: ['(', ')', '{', '}', '[', ']', ',', '.', ';', ':']
    };
    super(language);
  }

  public highlight(code: string): string {
    let html = '';
    let token = '';

    for (let i = 0; i < code.length; i++) {
      const char = code[i];
      const nextChar = code[i + 1];

      if (this.language.operators.includes(char)) {
        html += `<span class="operator">${char}</span>`;
      } else if (this.language.punctuation.includes(char)) {
        html += `<span class="punctuation">${char}</span>`;
      } else if (/\s/.test(char)) {
        html += char;
      } else {
        token += char;
        const keyword = this.language.keywords.find(kw => kw.startsWith(token));
        if (keyword) {
          if (token === keyword) {
            html += `<span class="keyword">${keyword}</span>`;
            token = '';
          }
        } else {
          html += char;
          token = '';
        }
      }

      if (char === '"' || char === '\'') {
        let state = char;
        let j = i + 1;
        while (j < code.length) {
          const stringChar = code[j];
          if (stringChar === '\\') {
            j++;
          } else if (stringChar === state) {
            j++;
            if (state === char) {
              html += `<span class="string">${code.slice(i, j)}</span>`;
            } else {
              html += `<span class="char">${code.slice(i, j)}</span>`;
            }
            i = j - 1;
            break;
          }
          j++;
        }
      }
    }

    return `<pre class="highlighter"><code class="language-${this.language.name}">${html}</code></pre>`;
  }
}
