import {Language, SyntaxHighlighter} from "./_SyntaxHighlighter";

export default class PerlSyntaxHighlighter extends SyntaxHighlighter {
  constructor() {
    const language: Language = {
      name: 'perl',
      aliases: [],
      keywords: [
        'if', 'else', 'elsif', 'unless', 'while', 'until', 'foreach', 'for', 'do', 'next', 'last',
        'redo', 'goto', 'sub', 'my', 'our', 'local', 'use', 'require', 'package', 'no', 'new',
        'bless', 'print', 'printf', 'say', 'chomp', 'chop', 'split', 'join', 'length', 'substr',
        'index', 'rindex', 'lc', 'lcfirst', 'uc', 'ucfirst', 'quotemeta', 'undef', 'defined',
        'sort', 'reverse', 'keys', 'values', 'each', 'exists', 'delete', 'open', 'close', 'seek',
        'tell', 'truncate', 'binmode', 'select', 'pipe', 'system', 'qx', 'chdir', 'mkdir', 'rmdir',
        'rename', 'unlink', 'stat', 'lstat', 'chmod', 'chown', 'utime', 'glob', 'opendir', 'readdir',
        'closedir', 'caller', 'eval', 'require', 'import', 'no', 'warn', 'die', 'exit', 'BEGIN',
        'END', 'continue'
      ],
      operators: [
        '+', '-', '', '/', '%', '**', '+=', '-=', '=', '/=', '%=', '==', '!=', '>=', '<=', '<', '>',
        '&&', '||', '!', '&', '|', '^', '<<', '>>', 'x', 'eq', 'ne', 'lt', 'le', 'gt', 'ge', 'cmp',
        '+=', '-=', '.=', 'x=', '&&=', '||=', '//='
      ],
      punctuation: ['(', ')', '{', '}', '[', ']', ',', '.', ';', ':', '?', '!', '=', '...', '->', '=>']
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
        if (char === '\\' && nextChar === token[0]) {
          token += nextChar;
          i++;
        } else if (char === token[0]) {
          html += `<span class="string">${token}</span>`;
          token = '';
          state = undefined;
        }
      } else if (state === 'multilineComment') {
        token += char;
        if (char === '#' && nextChar === '/') {
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
        } else if (token === '#') {
          state = nextChar === '{' ? 'multilineComment' : 'singlelineComment';
          token = '#';
          i++;
        }
      }
    }

    return html;
  }
}
