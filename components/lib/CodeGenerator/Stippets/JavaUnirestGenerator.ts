import CodeGenerator from "./_CodeGenerator";

export class JavaUnirestGenerator extends CodeGenerator {
  protected generateHeaderFile(url: string): string {
    return `HttpResponse<String> response = Unirest.${this.method.toLowerCase()}("${this.baseUrl}${url}")`;
  }

  protected generateFooterFile(url: string): string {
    return `HttpResponse<String> response = request.asString();`;
  }

  protected generateMimeTypeHeader(): string {
    if (this.mimeType === 'application/json') {
      return `header("Content-Type", "application/json")`;
    } else if (this.mimeType === 'multipart/form-data') {
      return `Not supported in Unirest`;
    } else {
      return '';
    }
  }

  protected generateHeaders(): string {
    let headers = '';

    this.params
      .filter(param => param.in === 'headers')
      .forEach(param => {
        headers += `.header("${param.name}", "${param.value}")`;
      });

    return headers;
  }

  protected generateQueryParams(): string {
    let queryParams = '';

    this.params
      .filter(param => param.in === 'query')
      .forEach(param => {
        queryParams += `.queryString("${param.name}", "${param.value}")`;
      });

    return queryParams;
  }

  protected generateJsonPostData(): string {
    let postData = JSON.stringify(this.params.filter(param => param.in === 'postData').reduce((obj, param) => {
      obj[param.name] = param.value;
      return obj;
    }, {}));

    return `.body("${postData}")`;
  }

  protected generateMultipartPostData(): string {
    return 'Not supported in Unirest';
  }

  protected generateOtherPostData(): string {
    let postData = '';

    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        postData += `${param.name}=${param.value}&`;
      });

    postData = postData.slice(0, -1);

    return `.body("${postData}")`;
  }

  protected generateCookie(): string {
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
