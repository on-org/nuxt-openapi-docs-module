import CodeGenerator from "./_CodeGenerator";

class JavaScriptJQueryGenerator extends CodeGenerator {
  protected generateHeaderFile(url): string {
    return `$.ajax({\n       url: '${this.baseUrl}${url}',\n       type: '${this.method}',\n     `;
  }

  protected generateFooterFile(url): string {
    return `});`;
  }

  protected generateMimeTypeHeader(): string {
    if (this.mimeType === 'application/json') {
      return `contentType: 'application/json', \n`;
    } else if (this.mimeType === 'multipart/form-data') {
      return `contentType: false,       processData: false, \n`;
    } else {
      return '';
    }
  }

  protected generateHeaders(): string {
    let headers = `headers: {\n`;

    this.params
      .filter(param => param.in === 'headers')
      .forEach(param => {
        headers += `${param.name}: '${param.value}', \n`;
      });

    headers += `}, \n`;

    return headers;
  }

  protected generateQueryParams(): string {
    let queryParams = `data: {\n`;

    this.params
      .filter(param => param.in === 'query')
      .forEach(param => {
        queryParams += `${param.name}: '${param.value}', \n`;
      });

    queryParams += `}, \n`;

    return queryParams;
  }

  protected generateJsonPostData(): string {
    let postData = `data: JSON.stringify({\n`;

    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        postData += `${param.name}: ${JSON.stringify(param.value)}, \n`;
      });

    postData += `}), \n`;

    return postData;
  }

  protected generateMultipartPostData(): string {
    let formData = `data: new FormData(), \n`;

    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        formData += `formData.append('${param.name}', ${JSON.stringify(param.value)}); \n`;
      });

    return formData;
  }

  protected generateOtherPostData(): string {
    let postData = `data: {\n`;

    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        postData += `${param.name}: '${param.value}', \n`;
      });

    postData += `}, \n`;

    return postData;
  }

  protected generateCookie(): string {
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
