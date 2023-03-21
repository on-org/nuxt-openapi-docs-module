import {Language, SyntaxHighlighter} from "./_SyntaxHighlighter";

export default class DartSyntaxHighlighter extends SyntaxHighlighter {
  constructor() {
    const language: Language = {
      name: 'dart',
      aliases: [],
      keywords: [
        'abstract', 'as', 'assert', 'async', 'await', 'break', 'case', 'catch', 'class', 'const',
        'continue', 'covariant', 'default', 'deferred', 'do', 'dynamic', 'else', 'enum', 'export',
        'extends', 'extension', 'external', 'factory', 'false', 'final', 'finally', 'for',
        'Function', 'get', 'hide', 'if', 'implements', 'import', 'in', 'inout', 'interface',
        'is', 'late', 'library', 'mixin', 'new', 'null', 'on', 'operator', 'out', 'part',
        'required', 'rethrow', 'return', 'set', 'show', 'static', 'super', 'switch', 'sync',
        'this', 'throw', 'true', 'try', 'typedef', 'var', 'void', 'while', 'with', 'yield'
      ],
      operators: [
        '+', '-', '', '/', '%', '++', '--', '==', '!=', '>', '<', '>=', '<=',
        '&&', '||', '!', '&', '|', '^', '~', '<<', '>>', '+=', '-=', '=', '/=', '%=',
        '&=', '|=', '^=', '<<=', '>>='
      ],
      punctuation: ['(', ')', '{', '}', '[', ']', ',', '.', ';', ':', '?', '!', '=', '...', '=>']
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
        const keyword = this.language.keywords.find((kw) => kw === token);
        if (keyword) {
          html += `<span class="keyword">${keyword}</span>`;
          token = '';
        }
      }
    }

    return html;
  }
}
