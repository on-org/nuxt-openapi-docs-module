import CodeGenerator from "./_CodeGenerator";

export class JavaUnirestGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    return `HttpResponse<String> response = Unirest.${this.method.toLowerCase()}("${this.baseUrl}${url}")`;
  }

  generateFooterFile(url) {
    return `HttpResponse<String> response = request.asString();`;
  }

  generateMimeTypeHeader() {
    if (this.mimeType === 'application/json') {
      return `header("Content-Type", "application/json")`;
    } else if (this.mimeType === 'multipart/form-data') {
      return `Not supported in Unirest`;
    } else {
      return '';
    }
  }

  generateHeaders() {
    let headers = '';

    this.params
      .filter(param => param.in === 'headers')
      .forEach(param => {
        headers += `.header("${param.name}", "${param.value}")`;
      });

    return headers;
  }

  generateQueryParams() {
    let queryParams = '';

    this.params
      .filter(param => param.in === 'query')
      .forEach(param => {
        queryParams += `.queryString("${param.name}", "${param.value}")`;
      });

    return queryParams;
  }

  generateJsonPostData() {
    let postData = JSON.stringify(this.params.filter(param => param.in === 'postData').reduce((obj, param) => {
      obj[param.name] = param.value;
      return obj;
    }, {}));

    return `.body("${postData}")`;
  }

  generateMultipartPostData() {
    return 'Not supported in Unirest';
  }

  generateOtherPostData() {
    let postData = '';

    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        postData += `${param.name}=${param.value}&`;
      });

    postData = postData.slice(0, -1);

    return `.body("${postData}")`;
  }

  generateCookie() {
    let cookieHeader = '';

    this.params
      .filter(param => param.in === 'cookie')
      .forEach(param => {
        cookieHeader += `${param.value}; `;
      });

    if (cookieHeader !== '') {
      cookieHeader = `.header("Cookie", "${cookieHeader}")`;
    }

    return cookieHeader;
  }
}

export default JavaUnirestGenerator;
