import CodeGenerator from "./_CodeGenerator";

export class RGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    return `
      const requestOptions = {
        method: '${this.method}',
        headers: {
          'Content-Type': '${this.mimeType || ''}',
          ${this.hasHeadersParams() ? this.generateHeaders() : ''}
        }
      };

      fetch('${this.baseUrl}${url}', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    `;
  }

  generateFooterFile(url) {
    return '';
  }

  generateMimeTypeHeader() {
    return '';
  }

  generateHeaders() {
    return this.params
      .filter(param => param.in === 'headers')
      .map(param => `'${param.name}': '${param.value}'`)
      .join(',\n');
  }

  generateQueryParams() {
    const queryParams = this.params.filter(param => param.in === 'query');

    if (queryParams.length === 0) {
      return '';
    }

    const queryString = queryParams.map(param => `${param.name}=${param.value}`).join('&');

    return `const url = '${this.baseUrl}${this.url}?${queryString}';\n`;
  }

  generateJsonPostData() {
    const postData = this.params.find(param => param.in === 'postData');
    return `const data = ${postData.value};\n`;
  }

  generateMultipartPostData() {
    const boundary = '----WebKitFormBoundary7MA4YWxkTrZu0gW';
    const contentType = `multipart/form-data; boundary=${boundary}`;

    let body = '';

    this.params.filter(param => param.in === 'postData').forEach(param => {
      body += `--${boundary}\r\n`;
      body += `Content-Disposition: form-data; name="${param.name}"\r\n`;
      body += '\r\n';
      body += `${param.value}\r\n`;
    });

    body += `--${boundary}--\r\n`;

    return `const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': '${contentType}'
    },
    body: '${body}'
  };\n`;
  }

  generateOtherPostData() {
    const postData = this.params.find(param => param.in === 'postData');
    return `const data = '${postData.value}';\n`;
  }

  generateCookie() {
    const cookieParams = this.params.filter(param => param.in === 'cookie');
    const cookieString = cookieParams.map(param => `${param.name}=${param.value}`).join('; ');

    return `requestOptions.headers.Cookie = '${cookieString}';\n`;
  }
}

export default RGenerator;
