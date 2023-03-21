import {Language, SyntaxHighlighter} from "./_SyntaxHighlighter";

export default class ScalaSyntaxHighlighter extends SyntaxHighlighter {
  constructor() {
    const language: Language = {
      name: 'scala',
      aliases: [],
      keywords: [
        'abstract', 'case', 'catch', 'class', 'def', 'do', 'else', 'extends', 'false', 'final',
        'finally', 'for', 'forSome', 'if', 'implicit', 'import', 'lazy', 'match', 'new', 'null',
        'object', 'override', 'package', 'private', 'protected', 'return', 'sealed', 'super',
        'this', 'throw', 'trait', 'try', 'true', 'type', 'val', 'var', 'while', 'with', 'yield'
      ],
      operators: [
        '+', '-', '', '/', '%', '==', '!=', '>', '<', '>=', '<=',
        '&&', '||', '!', '&', '|', '^', '~', '<<', '>>', '+=', '-=', '=', '/=', '%=',
        '&=', '|=', '^=', '<<=', '>>=', '>>>='
      ],
      punctuation: ['(', ')', '{', '}', '[', ']', ',', '.', ';', ':', '?', '!', '=', '...', '=>', '_', '|>']
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
