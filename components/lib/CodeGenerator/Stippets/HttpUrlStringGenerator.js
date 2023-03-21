import CodeGenerator from "./_CodeGenerator";

class HttpUrlStringGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    const headers = this.getHeaders();
    const cookie = this.getCookie();

    let headerFile =
      `${this.method} ${this.baseUrl}${this.url} HTTP/1.1\r\n` +
      `Host: ${this.getHost()}\r\n`;

    if (cookie) {
      headerFile += `Cookie: ${cookie}\r\n`;
    }

    for (let i in headers) {
      headerFile += `${i}: ${headers[i]}\r\n`;
    }

    if (this.hasPostDataParams()) {
      const postData = this.getPostData();

      if (postData) {
        headerFile += `Content-Type: ${this.mimeType}\r\n`;
        headerFile += `Content-Length: ${Buffer.byteLength(postData.toString())}\r\n`;
      }
    }

    headerFile += '\r\n';

    return headerFile;
  }

  generateFooterFile(url) {
    return '';
  }

  generateMimeTypeHeader() {
    return '';
  }

  generateHeaders() {
    const headers = this.getHeaders();
    let headersString = '';

    for (const header in headers) {
      headersString += `${header}: ${headers[header]}\r\n`;
    }

    return headersString;
  }

  generateQueryParams() {
    return '';
  }

  generateJsonPostData() {
    const postData = this.getPostData();
    return JSON.stringify(postData);
  }

  generateMultipartPostData() {
    const boundary = '----WebKitFormBoundary7MA4YWxkTrZu0gW';

    const formData = this.params
      .filter(param => param.in === 'postData')
      .reduce((formData, param) => {
        formData.push(
          `--${boundary}\r\n` +
          `Content-Disposition: form-data; name="${param.name}"\r\n\r\n` +
          `${param.value}\r\n`
        );
        return formData;
      }, []);

    // Add the closing boundary to the form data
    formData.push(`--${boundary}--\r\n`);

    // Join the form data into a single string and return it
    return formData.join('');
  }

  generateOtherPostData() {
    const postData = this.getPostData();
    return this.serializeQueryParams(postData);
  }

  generateCookie() {
    return this.getCookie();
  }

  serializeQueryParams(params) {
    return Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
  }

  getHeaders() {
    const headers = {};

    this.params
      .filter(param => param.in === 'headers')
      .forEach(param => {
        headers[param.name] = param.value;
      });

    return headers;
  }

  getPostData() {
    return this.params
      .filter(param => param.in === 'postData')
      .reduce((postData, param) => {
        postData[param.name] = param.value;
        return postData;
      }, {});
  }

  getCookie() {
    return this.params
      .filter(param => param.in === 'cookie')
      .map(param => `${encodeURIComponent(param.name)}=${encodeURIComponent(param.value)}`)
      .join('; ');
  }
}

export default HttpUrlStringGenerator;
