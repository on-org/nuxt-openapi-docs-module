import {Language, SyntaxHighlighter} from "./_SyntaxHighlighter";

export default class IniSyntaxHighlighter extends SyntaxHighlighter {
  constructor() {
    const language: Language = {
      name: 'ini',
      aliases: [],
      keywords: [],
      operators: [],
      punctuation: ['[', ']', '=', ';']
    };
    super(language);
  }

  public highlight(code: string): string {
    let html = '';

    for (let i = 0; i < code.length; i++) {
      const char = code[i];

      if (/\s/.test(char)) {
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
