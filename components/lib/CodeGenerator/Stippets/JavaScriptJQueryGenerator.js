import CodeGenerator from "./_CodeGenerator";

class JavaScriptJQueryGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    return `$.ajax({\n       url: '${this.baseUrl}${url}',\n       type: '${this.method}',\n     `;
  }

  generateFooterFile(url) {
    return `});`;
  }

  generateMimeTypeHeader() {
    if (this.mimeType === 'application/json') {
      return `contentType: 'application/json', \n`;
    } else if (this.mimeType === 'multipart/form-data') {
      return `contentType: false,\n       processData: false, \n`;
    } else {
      return '';
    }
  }

  generateHeaders() {
    let headers = `headers: {\n`;

    this.params
      .filter(param => param.in === 'headers')
      .forEach(param => {
        headers += `${param.name}: '${param.value}', \n`;
      });

    headers += `}, \n`;

    return headers;
  }

  generateQueryParams() {
    let queryParams = `data: {\n`;

    this.params
      .filter(param => param.in === 'query')
      .forEach(param => {
        queryParams += `${param.name}: '${param.value}', `;
      });

    queryParams += `}, \n`;

    return queryParams;
  }

  generateJsonPostData() {
    let postData = `data: JSON.stringify({\n`;

    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        postData += `${param.name}: ${JSON.stringify(param.value)}, \n`;
      });

    postData += `}), \n`;

    return postData;
  }

  generateMultipartPostData() {
    let formData = `data: new FormData(), \n`;

    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        formData += `formData.append('${param.name}', ${JSON.stringify(param.value)}); \n`;
      });

    return formData;
  }

  generateOtherPostData() {
    let postData = `data: {\n`;

    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        postData += `${param.name}: '${param.value}', \n`;
      });

    postData += `}, \n`;

    return postData;
  }

  generateCookie() {
    let cookieHeader = '';

    this.params
      .filter(param => param.in === 'cookie')
      .forEach(param => {
        cookieHeader += `${param.value}; \n`;
      });

    if (cookieHeader !== '') {
      cookieHeader = `headers: { Cookie: '${cookieHeader}' }, \n`;
    }

    return cookieHeader;
  }

}

export default JavaScriptJQueryGenerator;
