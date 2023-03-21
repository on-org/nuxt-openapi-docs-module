import CodeGenerator from "./_CodeGenerator";

export class ShellCurlGenerator extends CodeGenerator {
  generateHeaderFile(url: string): string {
    return `curl -X ${this.method} "${this.baseUrl}${url}"`;
  }

  generateFooterFile(url: string): string {
    return '\n';
  }

  generateMimeTypeHeader(): string {
    return `-H "Content-Type: ${this.mimeType}" `;
  }

  generateHeaders(): string {
    let headersCode = '';
    this.params
      .filter(param => param.in === 'headers')
      .forEach(param => {
        headersCode += `-H "${param.name}: ${param.value}" `;
      });
    return headersCode;
  }

  generateQueryParams(): string {
    let queryParamsCode = '';
    this.params
      .filter(param => param.in === 'query')
      .forEach(param => {
        queryParamsCode += `${param.name}=${param.value}&`;
      });
    return `-G -d "${queryParamsCode.slice(0, -1)}" `;
  }

  generateJsonPostData(): string {
    let postDataCode = '';
    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        postDataCode += `"${param.name}": "${param.value}", `;
      });
    postDataCode = postDataCode.slice(0, -2);
    return `-d '{${postDataCode}}' `;
  }

  generateMultipartPostData(): string {
    let postDataCode = '';
    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        if (param.type === 'file') {
          postDataCode += `-F "${param.name}=@${param.path}" `;
        } else {
          postDataCode += `-F "${param.name}=${param.value}" `;
        }
      });
    return postDataCode;
  }

  generateOtherPostData(): string {
    let postDataCode = '';
    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        postDataCode += `${param.name}=${param.value}&`;
      });
    return `-d "${postDataCode.slice(0, -1)}" `;
  }

  generateCookie(): string {
    const cookieParams = this.params.filter(param => param.in === 'cookie');
    let cookieCode = '';
    cookieParams.forEach(param => {
      cookieCode += `-H "Cookie: ${param.name}=${param.value};" `;
    });
    return cookieCode;
  }
}

export default ShellCurlGenerator;
