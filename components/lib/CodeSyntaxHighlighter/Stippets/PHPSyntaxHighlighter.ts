import {Language, SyntaxHighlighter} from "./_SyntaxHighlighter";

export default class PHPSyntaxHighlighter extends SyntaxHighlighter {
  constructor() {
    const language: Language = {
      name: 'php',
      aliases: ['php', 'php3', 'php4', 'php5', 'php7', 'phtml'],
      keywords: [
        'abstract', 'and', 'array', 'as', 'break', 'callable', 'case', 'catch', 'class', 'clone',
        'const', 'continue', 'declare', 'default', 'die', 'do', 'echo', 'else', 'elseif', 'empty',
        'enddeclare', 'endfor', 'endforeach', 'endif', 'endswitch', 'endwhile', 'eval', 'exit',
        'extends', 'final', 'finally', 'fn', 'for', 'foreach', 'function', 'global', 'goto', 'if',
        'implements', 'include', 'include_once', 'instanceof', 'insteadof', 'interface', 'isset',
        'list', 'match', 'namespace', 'new', 'or', 'print', 'private', 'protected', 'public',
        'require', 'require_once', 'return', 'static', 'switch', 'throw', 'trait', 'try', 'unset',
        'use', 'var', 'while', 'xor', 'yield', 'yield from'
      ],
      operators: [
        '+', '-', '', '/', '%', '++', '--', '==', '!=', '===', '!==', '>', '<', '>=', '<=',
        '&&', '||', '!', '&', '|', '^', '~', '<<', '>>', '+=', '-=', '=', '/=', '%=',
        '<<=', '>>=', '&=', '|=', '^=', '->', '=>', '::'
      ],
      punctuation: ['(', ')', '{', '}', '[', ']', ',', '.', ';', ':', '?', '!', '=', '...', '->', '::']
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
      } else if (state === 'comment') {
        token += char;
        if (char === '*' && nextChar === '/') {
          token += nextChar;
          i++;
          html += `<span class="comment">${token}</span>`;
          token = '';
          state = undefined;
        }
      } else if (char === '/' && nextChar === '/') {
        token = char + nextChar;
        html += `<span class="comment">${token}`;
        i++;
        state = 'comment';
      } else if (char === '/' && nextChar === '*') {
        token = char + nextChar;
        html += `<span class="comment">${token}`;
        i++;
        state = 'comment';
      } else if (this.language.operators.includes(char)) {
        html += `<span class="operator">${char}</span>`;
      } else if (this.language.punctuation.includes(char)) {
        html += `<span class="punctuation">${char}</span>`;
      } else if (/\s/.test(char)) {
        html += char;
      } else {
        token += char;
        const keyword = this.language.keywords.find(kw => kw.startsWith(token));
        if (keyword) {
          if (token === keyword) {
            html += `<span class="keyword">${keyword}</span>`;
            token = '';
          }
        } else {
          html += char;
          token = '';
        }
      }

      if (char === '"' && state !== 'string') {
        html += `<span class="string">${char}`;
        token = char;
        state = 'string';
      }
    }

    return `<pre class="highlighter"><code class="language-${this.language.name}">${html}</code></pre>`;
  }
}
