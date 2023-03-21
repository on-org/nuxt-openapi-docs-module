import CodeGenerator from "./_CodeGenerator";

class JavaScriptFetchGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    return `fetch('${this.baseUrl}${url}', {\n\tmethod: '${this.method}',\n`;
  }
  generateHeaders() {
    const headersParams = this.params.filter(param => param.in === 'headers');
    const headers = headersParams.reduce((acc, cur) => ({ ...acc, [cur.name]: cur.value }), {});
    return `\theaders: ${JSON.stringify(headers)},\n`;
  }

  generateMimeTypeHeader() {
    return `\theaders: { 'Content-Type': '${this.mimeType}' },\n`;
  }

  generateJsonPostData() {
    const postDataParams = this.params.filter(param => param.in === 'postData');
    const postData = JSON.stringify(postDataParams.reduce((acc, cur) => ({...acc, [cur.name]: cur.value}), {}));
    return `\tbody: JSON.stringify(${postData}),\n`;
  }

  generateMultipartPostData() {
    const postDataParams = this.params.filter(param => param.in === 'postData');
    const formDataCode = postDataParams.map(param => ['${param.name}', '${param.value}']).join(',');
    return `\tbody: new FormData([${formDataCode}]),\n`;
  }

  generateOtherPostData() {
    const postDataParams = this.params.filter(param => param.in === 'postData');
    const postData = postDataParams.map(param => `${param.name}=${param.value}`).join('&');
    return `\tbody: '${postData}'\n`;
  }
  generateQueryParams() {
    const queryParams = this.params.filter(param => param.in === 'query');
    const queryString = queryParams
      .map(param => `${param.name}=${param.value}`)
      .join('&');
    return `\tbody: '${queryString}'\n`;
  }

  generateFooterFile() {
    return `})`
  }

  generateCookie() {
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
