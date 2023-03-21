export interface Language {
  name: string;
  aliases: string[];
  keywords: string[];
  operators: string[];
  punctuation: string[];
  types?: string[];
}

export abstract class SyntaxHighlighter {
  protected language: Language;

  protected constructor(language: Language) {
    this.language = language;
  }

  public abstract highlight(code: string): string;
}
