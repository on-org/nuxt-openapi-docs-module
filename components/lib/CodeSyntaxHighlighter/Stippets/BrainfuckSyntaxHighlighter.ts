import {Language, SyntaxHighlighter} from "./_SyntaxHighlighter";

export default class BrainfuckSyntaxHighlighter extends SyntaxHighlighter {
  constructor() {
    const language: Language = {
      name: 'brainfuck',
      aliases: [],
      keywords: [],
      operators: ['>', '<', '+', '-', '.', ',', '[', ']'],
      punctuation: []
    };
    super(language);
  }

  public highlight(code: string): string {
    let html = '';

    for (let i = 0; i < code.length; i++) {
      const char = code[i];

      if (this.language.operators.includes(char)) {
        html += `<span class="operator">${char}</span>`;
      } else if (/\s/.test(char)) {
        html += char;
      } else {
        html += `<span class="unknown">${char}</span>`;
      }
    }

    return html;
  }
}
