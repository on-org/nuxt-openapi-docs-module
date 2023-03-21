import CodeGenerator from "./_CodeGenerator";

export class JavaUnirestGenerator extends CodeGenerator {
  protected generateHeaderFile(url: string): string {
    return `HttpResponse<String> response = Unirest.${this.method.toLowerCase()}("${this.baseUrl}${url}")\n`;
  }

  protected generateFooterFile(url: string): string {
    return `HttpResponse<String> response = request.asString();\n`;
  }

  protected generateMimeTypeHeader(): string {
    if (this.mimeType === 'application/json') {
      return `header("Content-Type", "application/json")\n`;
    } else if (this.mimeType === 'multipart/form-data') {
      return `Not supported in Unirest\n`;
    } else {
      return '';
    }
  }

  protected generateHeaders(): string {
    let headers = '';

    this.params
      .filter(param => param.in === 'headers')
      .forEach(param => {
        headers += `.header("${param.name}", "${param.value}")\n`;
      });

    return headers;
  }

  protected generateQueryParams(): string {
    let queryParams = '';

    this.params
      .filter(param => param.in === 'query')
      .forEach(param => {
        queryParams += `.queryString("${param.name}", "${param.value}")\n`;
      });

    return queryParams;
  }

  protected generateJsonPostData(): string {
    let postData = JSON.stringify(this.params.filter(param => param.in === 'postData').reduce((obj, param) => {
      obj[param.name] = param.value;
      return obj;
    }, {}));

    return `.body("${postData}")\n`;
  }

  protected generateMultipartPostData(): string {
    return 'Not supported in Unirest\n';
  }

  protected generateOtherPostData(): string {
    let postData = '';

    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        postData += `${param.name}=${param.value}&`;
      });

    postData = postData.slice(0, -1);

    return `.body("${postData}")\n`;
  }

  protected generateCookie(): string {
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
