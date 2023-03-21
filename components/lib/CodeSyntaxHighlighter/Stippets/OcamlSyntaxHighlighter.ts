import {Language, SyntaxHighlighter} from "./_SyntaxHighlighter";

export default class OcamlSyntaxHighlighter extends SyntaxHighlighter {
  constructor() {
    const language: Language = {
      name: 'ocaml',
      aliases: ['ml'],
      keywords: [
        'and', 'as', 'assert', 'asr', 'begin', 'class', 'constraint', 'do', 'done', 'downto',
        'else', 'end', 'exception', 'external', 'false', 'for', 'fun', 'function', 'functor',
        'if', 'in', 'include', 'inherit', 'initializer', 'lazy', 'let', 'match', 'method',
        'mod', 'module', 'mutable', 'new', 'nonrec', 'object', 'of', 'open', 'or', 'private',
        'rec', 'sig', 'struct', 'then', 'to', 'true', 'try', 'type', 'val', 'virtual', 'when',
        'while', 'with'
      ],
      operators: [
        '+', '-', '', '/', '%', '<', '>', '<=', '>=', '<>', '==', '!=', '&&', '||', '!',
        '&', '|', '^', '<<', '>>', '+.', '-.', '.', '/.', '<.', '>.', '<=.', '>=.', '<>.', '=.',
        '&.', '|.', '^.', 'mod', 'land', 'lor', 'lxor', 'lsl', 'lsr', 'asr', ':=', '@'
      ],
      punctuation: ['(', ')', '{', '}', '[', ']', ',', ';', ':', '->', '=>', '?', '_', '...']
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
      }
    }

    return `<pre class="highlighter"><code class="language-${this.language.name}">${html}</code></pre>`;
  }
}
