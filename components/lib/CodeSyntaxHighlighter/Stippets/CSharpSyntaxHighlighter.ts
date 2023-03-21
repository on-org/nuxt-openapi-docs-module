import {Language, SyntaxHighlighter} from "./_SyntaxHighlighter";

export default class CSharpSyntaxHighlighter extends SyntaxHighlighter {
  constructor() {
    const language: Language = {
      name: 'csharp',
      aliases: ['cs'],
      keywords: [
        'abstract', 'as', 'base', 'bool', 'break', 'byte', 'case', 'catch', 'char', 'checked',
        'class', 'const', 'continue', 'decimal', 'default', 'delegate', 'do', 'double', 'else',
        'enum', 'event', 'explicit', 'extern', 'false', 'finally', 'fixed', 'float', 'for',
        'foreach', 'goto', 'if', 'implicit', 'in', 'int', 'interface', 'internal', 'is', 'lock',
        'long', 'namespace', 'new', 'null', 'object', 'operator', 'out', 'override', 'params',
        'private', 'protected', 'public', 'readonly', 'ref', 'return', 'sbyte', 'sealed',
        'short', 'sizeof', 'stackalloc', 'static', 'string', 'struct', 'switch', 'this',
        'throw', 'true', 'try', 'typeof', 'uint', 'ulong', 'unchecked', 'unsafe', 'ushort',
        'using', 'virtual', 'void', 'volatile', 'while'
      ],
      operators: [
        '+', '-', '', '/', '%', '++', '--', '==', '!=', '>', '<', '>=', '<=',
        '&&', '||', '!', '&', '|', '^', '~', '<<', '>>', '+=', '-=', '=', '/=', '%=',
        '&=', '|=', '^=', '<<=', '>>=', '=>'
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
