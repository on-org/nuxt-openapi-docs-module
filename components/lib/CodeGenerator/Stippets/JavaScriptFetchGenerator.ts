import CodeGenerator from "./_CodeGenerator";

class JavaScriptFetchGenerator extends CodeGenerator {
  protected generateHeaderFile(url): string {
    return `fetch('${this.baseUrl}${url}', {\n\tmethod: '${this.method}',\n`;
  }
  protected generateHeaders(): string {
    const headersParams = this.params.filter(param => param.in === 'headers');
    const headers = headersParams.reduce((acc, cur) => ({ ...acc, [cur.name]: cur.value }), {});
    return `\theaders: ${JSON.stringify(headers)},\n`;
  }

  protected generateMimeTypeHeader(): string {
    return `\theaders: { 'Content-Type': '${this.mimeType}' },\n`;
  }

  protected generateJsonPostData() {
    const postDataParams = this.params.filter(param => param.in === 'postData');
    const postData = JSON.stringify(postDataParams.reduce((acc, cur) => ({...acc, [cur.name]: cur.value}), {}));
    return `\tbody: JSON.stringify(${postData}),\n`;
  }

  protected generateMultipartPostData() {
    const postDataParams = this.params.filter(param => param.in === 'postData');
    const formDataCode = postDataParams.map(param => ['${param.name}', '${param.value}']).join(',');
    return `\tbody: new FormData([${formDataCode}]),\n`;
  }

  protected generateOtherPostData() {
    const postDataParams = this.params.filter(param => param.in === 'postData');
    const postData = postDataParams.map(param => `${param.name}=${param.value}`).join('&');
    return `\tbody: '${postData}'\n`;
  }
  protected generateQueryParams(): string {
    const queryParams = this.params.filter(param => param.in === 'query');
    const queryString = queryParams
      .map(param => `${param.name}=${param.value}`)
      .join('&');
    return `\tbody: '${queryString}'\n`;
  }

  protected generateFooterFile(): string {
    return `})`
  }

  protected generateCookie(): string {
    let cookieHeader = '';

    this.params
      .filter(param => param.in === 'cookie')
      .forEach(param => {
        cookieHeader += `${param.value}; `;
      });

    if (cookieHeader !== '') {
      cookieHeader = `\theaders: { Cookie: '${cookieHeader}' },\n`;
    }

    return cookieHeader;
  }
}

export default JavaScriptFetchGenerator;
