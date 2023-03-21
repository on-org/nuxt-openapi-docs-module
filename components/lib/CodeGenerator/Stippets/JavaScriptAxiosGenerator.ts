import CodeGenerator from "./_CodeGenerator";

class JavaScriptAxiosGenerator extends CodeGenerator {
  protected generateHeaderFile(url): string {
    return `axios.${this.method.toLowerCase()}('${this.baseUrl}${url}', `;
  }

  protected generateFooterFile(url): string {
    return `)`;
  }

  protected generateMimeTypeHeader(): string {
    if (this.mimeType === 'application/json') {
      return `headers: {         'Content-Type': 'application/json'       }, `;
    } else if (this.mimeType === 'multipart/form-data') {
      return `headers: {         'Content-Type': 'multipart/form-data'       }, `;
    } else {
      return '';
    }
  }

  protected generateHeaders(): string {
    let headers = `headers: {`;

    this.params
      .filter(param => param.in === 'headers')
      .forEach(param => {
        headers += `${param.name}: '${param.value}', `;
      });

    headers += `}, `;

    return headers;
  }

  protected generateQueryParams(): string {
    let queryParams = `params: {`;

    this.params
      .filter(param => param.in === 'query')
      .forEach(param => {
        queryParams += `${param.name}: '${param.value}', `;
      });

    queryParams += `}, `;

    return queryParams;
  }

  protected generateJsonPostData(): string {
    let postData = `data: {`;

    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        postData += `${param.name}: ${JSON.stringify(param.value)}, `;
      });

    postData += `}, `;

    return postData;
  }

  protected generateMultipartPostData(): string {
    let formData = `data: new FormData(), `;

    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        formData += `formData.append('${param.name}', ${JSON.stringify(param.value)}); `;
      });

    return formData;
  }

  protected generateOtherPostData(): string {
    let postData = `data: {`;

    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        postData += `${param.name}: '${param.value}', `;
      });

    postData += `}, `;

    return postData;
  }

  protected generateCookie(): string {
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
