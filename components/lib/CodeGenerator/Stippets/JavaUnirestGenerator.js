import CodeGenerator from "./_CodeGenerator";

export class JavaUnirestGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    return `HttpResponse<String> response = Unirest.${this.method.toLowerCase()}("${this.baseUrl}${url}")\n`;
  }

  generateFooterFile(url) {
    return `HttpResponse<String> response = request.asString();\n`;
  }

  generateMimeTypeHeader() {
    if (this.mimeType === 'application/json') {
      return `header("Content-Type", "application/json")\n`;
    } else if (this.mimeType === 'multipart/form-data') {
      return `Not supported in Unirest\n`;
    } else {
      return '';
    }
  }

  generateHeaders() {
    let headers = '';

    this.params
      .filter(param => param.in === 'headers')
      .forEach(param => {
        headers += `.header("${param.name}", "${param.value}")\n`;
      });

    return headers;
  }

  generateQueryParams() {
    let queryParams = '';

    this.params
      .filter(param => param.in === 'query')
      .forEach(param => {
        queryParams += `.queryString("${param.name}", "${param.value}")\n`;
      });

    return queryParams;
  }

  generateJsonPostData() {
    let postData = JSON.stringify(this.params.filter(param => param.in === 'postData').reduce((obj, param) => {
      obj[param.name] = param.value;
      return obj;
    }, {}));

    return `.body("${postData}")\n`;
  }

  generateMultipartPostData() {
    return 'Not supported in Unirest\n';
  }

  generateOtherPostData() {
    let postData = '';

    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        postData += `${param.name}=${param.value}&`;
      });

    postData = postData.slice(0, -1);

    return `.body("${postData}")\n`;
  }

  generateCookie() {
    let cookieHeader = '';

    this.params
      .filter(param => param.in === 'cookie')
      .forEach(param => {
        cookieHeader += `${param.value}; \n`;
      });

    if (cookieHeader !== '') {
      cookieHeader = `.header("Cookie", "${cookieHeader}")\n`;
    }

    return cookieHeader;
  }
}

export default JavaUnirestGenerator;
