import CodeGenerator, {Param} from "./_CodeGenerator";

class BrainfuckGenerator extends CodeGenerator {
  protected generateHeaderFile(url: string): string {
    return '';
  }

  protected generateFooterFile(url: string): string {
    return '';
  }

  protected generateMimeTypeHeader(): string {
    return '';
  }

  protected generateHeaders(): string {
    return '';
  }

  protected generateQueryParams(): string {
    return '';
  }

  protected generateJsonPostData(): string {
    return '';
  }

  protected generateMultipartPostData(): string {
    return '';
  }

  protected generateOtherPostData(): string {
    return '';
  }

  protected generateCookie(): string {
    return '';
  }

  private generateLoopStart(): string {
    return '[';
  }

  private generateLoopEnd(): string {
    return ']';
  }

  private generateMovePointer(amount: number): string {
    if (amount > 0) {
      return '+'.repeat(amount);
    } else if (amount < 0) {
      return '-'.repeat(-amount);
    } else {
      return '';
    }
  }

  private generateAddValue(amount: number): string {
    if (amount > 0) {
      return '>'.repeat(amount) + '+';
    } else if (amount < 0) {
      return '>'.repeat(-amount) + '-';
    } else {
      return '';
    }
  }

  private generateOutputValue(): string {
    return '.';
  }

  private generateInputValue(): string {
    return ',';
  }

  private generateComment(comment: string): string {
    return `; ${comment}\n`;
  }

  private generateBrainfuckCodeForParam(param: Param): string {
    switch (param.in) {
      case 'path':
        return this.generateComment(`Path parameter: ${param.name}`);
      case 'query':
        return this.generateComment(`Query parameter: ${param.name}`);
      case 'postData':
        return this.generateComment(`Post data parameter: ${param.name}`);
      case 'headers':
        return this.generateComment(`Header parameter: ${param.name}`);
      case 'cookie':
        return this.generateComment(`Cookie parameter: ${param.name}`);
      default:
        return '';
    }
  }

  private generateBrainfuckCodeForUrl(url: string): string {
    let code = '';
    for (let i = 0; i < url.length; i++) {
      const charCode = url.charCodeAt(i);
      code += this.generateAddValue(charCode) + this.generateOutputValue();
    }
    return code;
  }

  generateCode(): string {
    let url = this.url;

    this.params
      .filter(param => param.in === 'path')
      .forEach(param => {
        url = url.replace(`{${param.name}}`, param.value)
      });

    let code = '';

    // Generate Brainfuck code for URL
    const urlCode = this.generateBrainfuckCodeForUrl(this.baseUrl + url);
    code += this.generateComment('------ URL ------\n');
    code += urlCode;
    code += '\n\n';

    // Generate Brainfuck code for parameters
    this.params.forEach(param => {
      const paramCode = this.generateBrainfuckCodeForParam(param);
      code += paramCode;
    });

    return code;
  }
}

export default BrainfuckGenerator;
