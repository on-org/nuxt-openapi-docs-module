import {Language, SyntaxHighlighter} from "./_SyntaxHighlighter";

export default class RustSyntaxHighlighter extends SyntaxHighlighter {
  constructor() {
    const language: Language = {
      name: 'rust',
      aliases: ['rs'],
      keywords: [
        'as', 'break', 'const', 'continue', 'crate', 'else', 'enum', 'extern', 'false', 'fn',
        'for', 'if', 'impl', 'in', 'let', 'loop', 'match', 'mod', 'move', 'mut', 'pub', 'ref',
        'return', 'self', 'static', 'struct', 'super', 'trait', 'true', 'type', 'unsafe', 'use',
        'where', 'while'
      ],
      operators: [
        '+', '-', '', '/', '%', '&', '|', '^', '!', '~', '<<', '>>', '==', '!=', '<', '>', '<=',
        '>=', '&&', '||', '+=', '-=', '=', '/=', '%=', '&=', '|=', '^=', '<<=', '>>=', '->',
        '..=', '...'
      ],
      punctuation: ['(', ')', '{', '}', '[', ']', ',', '.', ';', ':', '?', '!', '=', '->', '::']
    };
    super(language);
  }

  public highlight(code: string): string {
    let html = '';
    let token = '';
    let state: string | undefined = undefined;

    for (let i = 0; i < code.length; i++) {
      const char = code[i];
      const nextChar = code[i + 1];

      if (state === 'string') {
        token += char;
        if (char === '\\' && nextChar === '"') {
          token += nextChar;
          i++;
        } else if (char === '"') {
          html += `<span class="string">${token}</span>`;
          token = '';
          state = undefined;
        }
      } else if (state === 'char') {
        token += char;
        if (char === '\\' && nextChar === '\'') {
          token += nextChar;
          i++;
        } else if (char === '\'') {
          html += `<span class="string">${token}</span>`;
          token = '';
          state = undefined;
        }
      } else if (this.language.operators.includes(char)) {
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

      if (char === '"' && state !== 'string') {
        html += `<span class="string">${char}`;
        token = char;
        state = 'string';
      } else if (char === '\'' && state !== 'char') {
        html += `<span class="string">${char}`;
        token = char;
        state = 'char';
      }
    }

    return `<pre class="highlighter"><code class="language-${this.language.name}">${html}</code></pre>`;
  }
}
