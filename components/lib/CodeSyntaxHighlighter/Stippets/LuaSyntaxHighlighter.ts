import {Language, SyntaxHighlighter} from "./_SyntaxHighlighter";

export default class LuaSyntaxHighlighter extends SyntaxHighlighter {
  constructor() {
    const language: Language = {
      name: 'lua',
      aliases: [],
      keywords: [
        'and', 'break', 'do', 'else', 'elseif', 'end', 'false', 'for', 'function', 'goto',
        'if', 'in', 'local', 'nil', 'not', 'or', 'repeat', 'return', 'then', 'true', 'until', 'while'
      ],
      operators: [
        '+', '-', '*', '/', '%', '^', '#', '==', '~=', '<=', '>=', '<', '>', 'and', 'or', 'not'
      ],
      punctuation: ['(', ')', '{', '}', '[', ']', ',', '.', ';', ':', '?', '!', '=', '...', '::']
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
      } else if (state === 'multilineComment') {
        token += char;
        if (char === '*' && nextChar === '/') {
          token += nextChar;
          i++;
          html += `<span class="comment">${token}</span>`;
          token = '';
          state = undefined;
        }
      } else if (state === 'singlelineComment') {
        token += char;
        if (char === '\n') {
          html += `<span class="comment">${token}</span>`;
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
        } else if (token === '--') {
          state = nextChar === '[' ? 'multilineComment' : 'singlelineComment';
          token = '--';
          i++;
        }
      }
    }

    return html;
  }
}
