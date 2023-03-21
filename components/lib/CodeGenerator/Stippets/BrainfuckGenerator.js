import CodeGenerator, {Param} from "./_CodeGenerator";

class BrainfuckGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    return '';
  }

  generateFooterFile(url) {
    return '';
  }

  generateMimeTypeHeader() {
    return '';
  }

  generateHeaders() {
    return '';
  }

  generateQueryParams() {
    return '';
  }

  generateJsonPostData() {
    return '';
  }

  generateMultipartPostData() {
    return '';
  }

  generateOtherPostData() {
    return '';
  }

  generateCookie() {
    return '';
  }

  generateLoopStart() {
    return '[';
  }

  generateLoopEnd() {
    return ']';
  }

  generateMovePointer(amount) {
    if (amount > 0) {
      return '+'.repeat(amount);
    } else if (amount < 0) {
      return '-'.repeat(-amount);
    } else {
      return '';
    }
  }

  generateAddValue(amount) {
    if (amount > 0) {
      return '>'.repeat(amount) + '+';
    } else if (amount < 0) {
      return '>'.repeat(-amount) + '-';
    } else {
      return '';
    }
  }

  generateOutputValue() {
    return '.';
  }

  generateInputValue() {
    return ',';
  }

  generateComment(comment) {
    return `; ${comment}\n`;
  }

  generateBrainfuckCodeForParam(param) {
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

  generateBrainfuckCodeForUrl(url) {
    let code = '';
    for (let i = 0; i < url.length; i++) {
      const charCode = url.charCodeAt(i);
      code += this.generateAddValue(charCode) + this.generateOutputValue();
    }
    return code;
  }

  generateCode() {
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
