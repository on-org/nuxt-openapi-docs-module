import CodeGenerator from "./_CodeGenerator";

class JavaScriptAxiosGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    return `axios.${this.method.toLowerCase()}('${this.baseUrl}${url}', `;
  }

  generateFooterFile(url) {
    return `)`;
  }

  generateMimeTypeHeader() {
    if (this.mimeType === 'application/json') {
      return `headers: {         'Content-Type': 'application/json'       }, `;
    } else if (this.mimeType === 'multipart/form-data') {
      return `headers: {         'Content-Type': 'multipart/form-data'       }, `;
    } else {
      return '';
    }
  }

  generateHeaders() {
    let headers = `headers: {`;

    this.params
      .filter(param => param.in === 'headers')
      .forEach(param => {
        headers += `${param.name}: '${param.value}', `;
      });

    headers += `}, `;

    return headers;
  }

  generateQueryParams() {
    let queryParams = `params: {`;

    this.params
      .filter(param => param.in === 'query')
      .forEach(param => {
        queryParams += `${param.name}: '${param.value}', `;
      });

    queryParams += `}, `;

    return queryParams;
  }

  generateJsonPostData() {
    let postData = `data: {`;

    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        postData += `${param.name}: ${JSON.stringify(param.value)}, `;
      });

    postData += `}, `;

    return postData;
  }

  generateMultipartPostData() {
    let formData = `data: new FormData(), `;

    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        formData += `formData.append('${param.name}', ${JSON.stringify(param.value)}); `;
      });

    return formData;
  }

  generateOtherPostData() {
    let postData = `data: {`;

    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        postData += `${param.name}: '${param.value}', `;
      });

    postData += `}, `;

    return postData;
  }

  generateCookie() {
    let cookieHeader = '';

    this.params
      .filter(param => param.in === 'cookie')
      .forEach(param => {
        cookieHeader += `${param.value}; `;
      });

    if (cookieHeader !== '') {
      cookieHeader = `headers: { Cookie: '${cookieHeader}' }, `;
    }

    return cookieHeader;
  }
}
export default JavaScriptAxiosGenerator;
