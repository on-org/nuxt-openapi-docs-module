import {Language, SyntaxHighlighter} from "./_SyntaxHighlighter";

export default class MarkdownSyntaxHighlighter extends SyntaxHighlighter {
  constructor() {
    const language: Language = {
      name: 'md',
      aliases: ['markdown'],
      keywords: [],
      operators: [],
      punctuation: ['#', '*', '-', '_', '~', '`']
    };
    super(language);
  }

  public highlight(code: string): string {
    let html = '';

    let inCodeBlock = false;

    for (let i = 0; i < code.length; i++) {
      const char = code[i];

      if (inCodeBlock) {
        html += char;
        if (char === '`' && code[i-1] !== '\\') {
          inCodeBlock = false;
          html += '</code>';
        }
      } else if (char === '`' && code[i+1] === '`' && code[i+2] === '`') {
        inCodeBlock = true;
        html += '<code>';
      } else if (/\s/.test(char)) {
        html += char;
      } else if (this.language.punctuation.includes(char)) {
        html += `<span class="punctuation">${char}</span>`;
      } else {
        html += char;
      }
    }

    return html;
  }
}
