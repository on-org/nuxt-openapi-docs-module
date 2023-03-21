import {Language, SyntaxHighlighter} from "./_SyntaxHighlighter";

export default class CppSyntaxHighlighter extends SyntaxHighlighter {
  constructor() {
    const language: Language = {
      name: 'cpp',
      aliases: ['c++', 'cxx'],
      keywords: [
        'asm', 'auto', 'bool', 'break', 'case', 'catch', 'char', 'class', 'const', 'continue',
        'default', 'delete', 'do', 'double', 'dynamic_cast', 'else', 'enum', 'explicit', 'export',
        'extern', 'false', 'float', 'for', 'friend', 'goto', 'if', 'inline', 'int', 'long',
        'mutable', 'namespace', 'new', 'operator', 'private', 'protected', 'public', 'register',
        'reinterpret_cast', 'return', 'short', 'signed', 'sizeof', 'static', 'static_cast',
        'struct', 'switch', 'template', 'this', 'throw', 'true', 'try', 'typedef', 'typeid',
        'typename', 'union', 'unsigned', 'using', 'virtual', 'void', 'volatile', 'wchar_t',
        'while'
      ],
      operators: [
        '+', '-', '', '/', '%', '++', '--', '==', '!=', '>', '<', '>=', '<=',
        '&&', '||', '!', '&', '|', '^', '~', '<<', '>>', '+=', '-=', '=', '/=', '%=',
        '&=', '|=', '^=', '<<=', '>>='
      ],
      punctuation: ['(', ')', '{', '}', '[', ']', ',', '.', ';', ':', '?', '!', '=', '...', '->']
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
        if (char === '\\' && nextChar === "'") {
          token += nextChar;
          i++;
        } else if (char === "'") {
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
      } else if (char === "'" && state !== 'char') {
        html += `<span class="string">${char}`;
        token = char;
        state = 'char';
      }
    }

    return `<pre class="highlighter"><code class="language-${this.language.name}">${html}</code></pre>`;
  }
}
