import CodeGenerator from "./_CodeGenerator";

class JavaScriptXMLHttpRequestGenerator extends CodeGenerator {
  generateCookie() {
    let cookieHeader = '';

    this.params
      .filter(param => param.in === 'cookie')
      .forEach(param => {
        cookieHeader += `${param.value}; `;
      });

    if (cookieHeader !== '') {
      cookieHeader = `xhr.setRequestHeader('Cookie', '${cookieHeader}');\n`;
    }

    return cookieHeader;
  }
  generateHeaderFile(url) {
    return `var xhr = new XMLHttpRequest();\nxhr.open('${this.method}', '${this.baseUrl}${url}');\n`;
  }

  generateFooterFile(url) {
    return `xhr.send();\n`;
  }

  generateMimeTypeHeader() {
    if (this.mimeType === 'application/json') {
      return `xhr.setRequestHeader('Content-Type', 'application/json');\n`;
    } else if (this.mimeType === 'multipart/form-data') {
      return 'Not supported in XmlHttpRequest';
    } else {
      return '';
    }
  }

  generateHeaders() {
    let headers = '';

    this.params
      .filter(param => param.in === 'headers')
      .forEach(param => {
        headers += `xhr.setRequestHeader('${param.name}', '${param.value}');\n`;
      });

    return headers;
  }

  generateQueryParams() {
    let queryParams = '';

    this.params
      .filter(param => param.in === 'query')
      .forEach(param => {
        queryParams += `${param.name}=${param.value}&`;
      });

    if (queryParams !== '') {
      queryParams = `xhr.open('${this.method}', '${this.baseUrl}${this.url}?${queryParams.slice(0, -1)}');\n`;
    }

    return queryParams;
  }

  generateJsonPostData() {
    let postData = JSON.stringify(this.params.filter(param => param.in === 'postData').reduce((obj, param) => {
      obj[param.name] = param.value;
      return obj;
    }, {}));

    return `xhr.send('${postData}');\n`;
  }

  generateMultipartPostData() {
// Not supported in XmlHttpRequest
    return 'Not supported in XmlHttpRequest';
  }

  generateOtherPostData() {
    let postData = '';

    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        postData += `${param.name}=${param.value}&`;
      });

    postData = postData.slice(0, -1);

    return `xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');\nxhr.send('${postData}');\n`;
  }
}
export default JavaScriptXMLHttpRequestGenerator;
