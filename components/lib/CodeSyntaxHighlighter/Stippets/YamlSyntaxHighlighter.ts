import {Language, SyntaxHighlighter} from "./_SyntaxHighlighter";

export default class YamlSyntaxHighlighter extends SyntaxHighlighter {
  constructor() {
    const language: Language = {
      name: 'yaml',
      aliases: [],
      keywords: [],
      operators: [],
      punctuation: [':', '-', '{', '}', '[', ']']
    };
    super(language);
  }

  public highlight(code: string): string {
    let html = '';

    let inString = false;

    for (let i = 0; i < code.length; i++) {
      const char = code[i];

      if (inString) {
        html += `<span class="string">${char}</span>`;
        if (char === '"' && code[i-1] !== '\\') {
          inString = false;
        }
      } else if (/\s/.test(char)) {
        html += char;
      } else if (char === '"' && code[i-1] !== '\\') {
        html += `<span class="string">${char}`;
        inString = true;
      } else if (this.language.punctuation.includes(char)) {
        html += `<span class="punctuation">${char}</span>`;
      } else {
        html += char;
      }
    }

    return html;
  }
}
