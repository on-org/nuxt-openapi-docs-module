import {Language, SyntaxHighlighter} from "./_SyntaxHighlighter";

export default class PythonSyntaxHighlighter extends SyntaxHighlighter {
  constructor() {
    const language: Language = {
      name: 'python',
      aliases: ['py'],
      keywords: [
        'and', 'as', 'assert', 'break', 'class', 'continue', 'def', 'del',
        'elif', 'else', 'except', 'False', 'finally', 'for', 'from', 'global',
        'if', 'import', 'in', 'is', 'lambda', 'None', 'nonlocal', 'not', 'or',
        'pass', 'raise', 'return', 'True', 'try', 'while', 'with', 'yield'
      ],
      operators: [
        '+', '-', '', '', '/', '//', '%', '@', '<<', '>>', '&', '|', '^',
        '~', ':=', '<', '<=', '>', '>=', '==', '!='
      ],
      punctuation: ['(', ')', '[', ']', '{', '}', ',', '.', ':', ';', '@', '=', '->', '...', '=',
        '//=', '<<=', '>>=', '&=', '|=', '^=', '+=', '-=', '=', '/=', '%=']
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
        if (char === '\\' && nextChar === '\'') {
          token += nextChar;
          i++;
        } else if (char === '\'') {
          html += `<span class="string">${token}</span>`;
          token = '';
          state = undefined;
        }
      } else if (state === 'multiline_string') {
        token += char;
        if (char === '"' && token.endsWith('"""') && (token.length === 3 || token[token.length - 4] !== '\\')) {
          html += `<span class="string">${token}</span>`;
          token = '';
          state = undefined;
        } else if (char === "'" && token.endsWith("'''") && (token.length === 3 || token[token.length - 4] !== '\\')) {
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

      if (char === "'" && state !== 'string' && token === '') {
        html += `<span class="string">${char}`;
        token = char;
        state = 'string';
      } else if (char === '"' && state !== 'multiline_string' && token === '') {
        html += `<span class="string">${char}`;
        token = char;
        state = 'multiline_string';
      }
    }

    return `<pre class="highlighter"><code class="language-${this.language.name}">${html}</code></pre>`;
  }
}
