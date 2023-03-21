import CodeGenerator from "./_CodeGenerator";

export class ShellCurlGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    return `curl -X ${this.method} "${this.baseUrl}${url}"`;
  }

  generateFooterFile(url) {
    return '\n';
  }

  generateMimeTypeHeader() {
    return `-H "Content-Type: ${this.mimeType}" `;
  }

  generateHeaders() {
    let headersCode = '';
    this.params
      .filter(param => param.in === 'headers')
      .forEach(param => {
        headersCode += `-H "${param.name}: ${param.value}" `;
      });
    return headersCode;
  }

  generateQueryParams() {
    let queryParamsCode = '';
    this.params
      .filter(param => param.in === 'query')
      .forEach(param => {
        queryParamsCode += `${param.name}=${param.value}&`;
      });
    return `-G -d "${queryParamsCode.slice(0, -1)}" `;
  }

  generateJsonPostData() {
    let postDataCode = '';
    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        postDataCode += `"${param.name}": "${param.value}", `;
      });
    postDataCode = postDataCode.slice(0, -2);
    return `-d '{${postDataCode}}' `;
  }

  generateMultipartPostData() {
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

  generateOtherPostData() {
    let postDataCode = '';
    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        postDataCode += `${param.name}=${param.value}&`;
      });
    return `-d "${postDataCode.slice(0, -1)}" `;
  }

  generateCookie() {
    const cookieParams = this.params.filter(param => param.in === 'cookie');
    let cookieCode = '';
    cookieParams.forEach(param => {
      cookieCode += `-H "Cookie: ${param.name}=${param.value};" `;
    });
    return cookieCode;
  }
}

export default ShellCurlGenerator;
