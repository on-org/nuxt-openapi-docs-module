import {Language, SyntaxHighlighter} from "./_SyntaxHighlighter";

export default class SwiftSyntaxHighlighter extends SyntaxHighlighter {
  constructor() {
    const language: Language = {
      name: 'swift',
      aliases: [],
      keywords: [
        'as', 'associativity', 'break', 'case', 'catch', 'class', 'continue', 'convenience', 'default',
        'defer', 'deinit', 'didSet', 'do', 'dynamic', 'else', 'enum', 'extension', 'fallthrough', 'false',
        'fileprivate', 'final', 'for', 'func', 'get', 'guard', 'if', 'import', 'in', 'indirect', 'infix',
        'init', 'inout', 'internal', 'is', 'lazy', 'left', 'let', 'mutating', 'nil', 'none', 'nonmutating',
        'open', 'operator', 'optional', 'override', 'postfix', 'precedence', 'prefix', 'private', 'protocol',
        'public', 'repeat', 'required', 'return', 'right', 'self', 'set', 'static', 'struct', 'subscript',
        'super', 'switch', 'throw', 'throws', 'true', 'try', 'typealias', 'unowned', 'var', 'weak', 'where',
        'while', 'willSet'
      ],
      operators: [
        '+', '-', '', '/', '%', '=', '==', '!=', '>', '<', '>=', '<=', '&&', '||', '!', '&', '|', '^',
        '~', '<<', '>>', '+=', '-=', '=', '/=', '%=', '&=', '|=', '^=', '<<=', '>>=', '??', '?:', '?.',
        '...', '..<', ':', '::', '?'
      ],
      punctuation: ['(', ')', '{', '}', '[', ']', ',', '.', ';', '?', '!', '@']
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
        if (char === "\\" && nextChar === "\"") {
          token += nextChar;
          i++;
        } else if (char === "\"") {
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

      if (char === "\"" && state !== 'string') {
        html += `<span class="string">${char}`;
        token = char;
        state = 'string';
      }
    }

    return `<pre class="highlighter"><code class="language-${this.language.name}">${html}</code></pre>`;
  }
}
