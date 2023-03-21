import {Language, SyntaxHighlighter} from "./_SyntaxHighlighter";

export default class AsmSyntaxHighlighter extends SyntaxHighlighter {
  constructor() {
    const language: Language = {
      name: 'asm',
      aliases: ['assembler'],
      keywords: [
        'add', 'sub', 'mov', 'lea', 'push', 'pop', 'cmp', 'jmp', 'je', 'jne', 'jg', 'jge', 'jl',
        'jle', 'jz', 'jnz', 'and', 'or', 'xor', 'not', 'shl', 'shr', 'sar', 'inc', 'dec', 'mul',
        'imul', 'div', 'idiv', 'nop'
      ],
      operators: ['+', '-', '*', '/', '%', '&', '|', '^', '~', '<<', '>>', '>>>', 'not'],
      punctuation: ['(', ')', '{', '}', '[', ']', ',', '.', ';', ':']
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
      } else if (this.language.keywords.includes(code.substring(i, i+3))) {
        html += `<span class="keyword">${code.substring(i, i+3)}</span>`;
        i += 2;
      } else if (this.language.keywords.includes(code.substring(i, i+2))) {
        html += `<span class="keyword">${code.substring(i, i+2)}</span>`;
        i += 1;
      } else if (this.language.keywords.includes(char)) {
        html += `<span class="keyword">${char}</span>`;
      } else if (this.language.operators.includes(char)) {
        html += `<span class="operator">${char}</span>`;
      } else if (this.language.punctuation.includes(char)) {
        html += `<span class="punctuation">${char}</span>`;
      } else {
        html += char;
      }
    }

    return html;
  }
}
