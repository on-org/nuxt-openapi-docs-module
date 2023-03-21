import CodeGenerator from "./_CodeGenerator";

export class RubyGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    return `require 'net/http'
require 'uri'

uri = URI.parse('${this.baseUrl}${url}')
`;
  }

  generateFooterFile(url) {
    return '';
  }

  generateMimeTypeHeader() {
    if (this.mimeType === 'multipart/form-data') {
      return "request['Content-Type'] = 'multipart/form-data'"
    } else if (this.mimeType === 'application/json') {
      return "request['Content-Type'] = 'application/json'"
    } else {
      return '';
    }
  }

  generateHeaders() {
    let headers = '';

    this.params.filter(param => param.in === 'headers').forEach(param => {
      headers += `request['${param.name}'] = '${param.value}'\n`;
    });

    return headers;
  }

  generateQueryParams() {
    let queryParams = '';

    this.params.filter(param => param.in === 'query').forEach((param, index) => {
      if (index === 0) {
        queryParams += '?'
      } else {
        queryParams += '&'
      }
      queryParams += `${param.name}=${param.value}`;
    });

    return queryParams;
  }

  generateJsonPostData() {
    let postData = '{';

    this.params.filter(param => param.in === 'postData').forEach((param, index) => {
      if (index > 0) {
        postData += ','
      }
      postData += `"${param.name}": "${param.value}"`;
    });

    postData += '}';

    return `request.body = '${postData}'\n`;
  }

  generateMultipartPostData() {
    const boundary = '----WebKitFormBoundary7MA4YWxkTrZu0gW';
    const contentType = `multipart/form-data; boundary=${boundary}`;

    let body = '';

    this.params.filter(param => param.in === 'postData').forEach(param => {
      if (param.type === 'file') {
        body += `--${boundary}\r\n`;
        body += `Content-Disposition: form-data; name="${param.name}"; filename="${param.path}"\r\n`;
        body += `Content-Type: ${contentType}\r\n`;
        body += '\r\n';
        body += 'file content';
        body += '\r\n';
      } else {
        body += `--${boundary}\r\n`;
        body += `Content-Disposition: form-data; name="${param.name}"\r\n`;
        body += '\r\n';
        body += `${param.value}\r\n`;
      }
    });

    body += `--${boundary}--\r\n`;

    return `request.body = '${body}'\n`;
  }

  generateOtherPostData() {
    let postData = '';

    this.params.filter(param => param.in === 'postData').forEach((param, index) => {
      if (index > 0) {
        postData += '&'
      }
      postData += `${param.name}=${param.value}`;
    });

    return `request.body = '${postData}'\n`;
  }

  generateCookie() {
    let cookie = '';

    this.params.filter(param => param.in === 'cookie').forEach(param => {
      cookie += `request['Cookie'] = '${param.name}=${param.value}'\n`;
    });

    return cookie;
  }
}

export default RubyGenerator;
