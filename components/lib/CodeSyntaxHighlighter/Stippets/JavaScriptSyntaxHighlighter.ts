import {Language, SyntaxHighlighter} from "./_SyntaxHighlighter";

export default class JavaScriptSyntaxHighlighter extends SyntaxHighlighter {
  constructor() {
    const language: Language = {
      name: 'javascript',
      aliases: ['js', 'jsx'],
      types: ['number', 'string', 'boolean', 'object', 'function', 'array', 'symbol', 'bigint'],
      keywords: [
        'break', 'case', 'catch', 'class', 'const', 'continue', 'debugger', 'default', 'delete',
        'do', 'else', 'export', 'extends', 'finally', 'for', 'function', 'if', 'import', 'in',
        'instanceof', 'let', 'new', 'return', 'super', 'switch', 'this', 'throw', 'try', 'typeof',
        'var', 'void', 'while', 'with', 'yield'
      ],
      operators: [
        '+', '-', '*', '/', '%', '++', '--', '==', '!=', '===', '!==', '>', '<', '>=', '<=',
        '&&', '||', '!', '&', '|', '^', '~', '<<', '>>', '>>>', '+=', '-=', '*=', '/=', '%=',
        '<<=', '>>=', '>>>=', '&=', '|=', '^=', '=>'
      ],
      punctuation: ['(', ')', '{', '}', '[', ']', ',', '.', ';', ':', '?', '!', '=', '...']
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
        if (char === "\\" && nextChar === '"') {
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
          const numberMatch = token.match(/^-?\d*\.?\d+(?:e[-+]?\d+)?$/i);
          if (numberMatch) {
            html += `<span class="number">${numberMatch[0]}</span>`;
            token = '';
          } else {
            const identifierMatch = token.match(/^[_$a-zA-Z][_$a-zA-Z0-9]*/);
            if (identifierMatch) {
              const identifier = identifierMatch[0];
              const type = this.language.types.find(type => type === identifier);
              if (type) {
                html += `<span class="type">${type}</span>`;
              } else {
                html += identifier;
              }
              token = '';
            }
          }
        }

        if (char === '"' && !state) {
          state = 'string';
          html += `<span class="string">${token}</span>"`;
          token = '';
        }
      }
    }

    return `<pre class="highlighter"><code class="language-${this.language.name}">${html}</code></pre>`;
  }
}
