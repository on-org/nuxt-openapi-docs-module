import {Language, SyntaxHighlighter} from "./_SyntaxHighlighter";

export default class JsonSyntaxHighlighter extends SyntaxHighlighter {
  constructor() {
    const language: Language = {
      name: 'json',
      aliases: [],
      keywords: [],
      operators: [],
      punctuation: ['{', '}', '[', ']', ',', ':']
    };
    super(language);
  }

  public highlight(code: string): string {
    let html = '';

    let inString = false;
    let inNumber = false;

    for (let i = 0; i < code.length; i++) {
      const char = code[i];

      if (inString) {
        html += `<span class="string">${char}</span>`;
        if (char === '"') {
          inString = false;
        }
      } else if (inNumber) {
        html += `<span class="number">${char}</span>`;
        if (!/\d/.test(char)) {
          inNumber = false;
        }
      } else if (/\s/.test(char)) {
        html += char;
      } else if (char === '"') {
        html += `<span class="string">${char}`;
        inString = true;
      } else if (/\d/.test(char)) {
        html += `<span class="number">${char}`;
        inNumber = true;
      } else if (this.language.punctuation.includes(char)) {
        html += `<span class="punctuation">${char}</span>`;
      } else {
        html += `<span class="unknown">${char}</span>`;
      }
    }

    return html;
  }
}
