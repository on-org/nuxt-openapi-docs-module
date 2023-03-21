import CodeGenerator from "./_CodeGenerator";

class JavaScriptXMLHttpRequestGenerator extends CodeGenerator {
  protected generateCookie(): string {
    let cookieHeader = '';

    this.params
      .filter(param => param.in === 'cookie')
      .forEach(param => {
        cookieHeader += `${param.value}; `;
      });

    if (cookieHeader !== '') {
      cookieHeader = `xhr.setRequestHeader('Cookie', '${cookieHeader}');\n`;
    }

    return cookieHeader;
  }
  protected generateHeaderFile(url): string {

    let queryParams = '';

    this.params
      .filter(param => param.in === 'query')
      .forEach(param => {
        queryParams += `${param.name}=${param.value}&`;
      });

    if (queryParams !== '') {
      return `var xhr = new XMLHttpRequest();\nxhr.open('${this.method}', '${this.baseUrl}${this.url}?${queryParams.slice(0, -1)}');\n`;
    } else {
      return `var xhr = new XMLHttpRequest();\nxhr.open('${this.method}', '${this.baseUrl}${url}');\n`;
    }
  }

  protected generateFooterFile(url): string {
    return `xhr.send();\n`;
  }

  protected generateMimeTypeHeader(): string {
    if (this.mimeType === 'application/json') {
      return `xhr.setRequestHeader('Content-Type', 'application/json');\n`;
    } else if (this.mimeType === 'multipart/form-data') {
      return 'Not supported in XmlHttpRequest';
    } else {
      return '';
    }
  }

  protected generateHeaders(): string {
    let headers = '';

    this.params
      .filter(param => param.in === 'headers')
      .forEach(param => {
        headers += `xhr.setRequestHeader('${param.name}', '${param.value}');\n`;
      });

    return headers;
  }

  protected generateQueryParams(): string {


    return '';
  }

  protected generateJsonPostData(): string {
    let postData = JSON.stringify(this.params.filter(param => param.in === 'postData').reduce((obj, param) => {
      obj[param.name] = param.value;
      return obj;
    }, {}));

    return `xhr.send('${postData}');\n`;
  }

  protected generateMultipartPostData(): string {
// Not supported in XmlHttpRequest
    return 'Not supported in XmlHttpRequest';
  }

  protected generateOtherPostData(): string {
    let postData = '';

    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        postData += `${param.name}=${param.value}&`;
      });

    postData = postData.slice(0, -1);

    return `xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');\nxhr.send('${postData}');\n`;
  }
}
export default JavaScriptXMLHttpRequestGenerator;
