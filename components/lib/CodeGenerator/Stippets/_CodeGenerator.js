/**
 *
 * generateHeaderFile(url) - генерация заголовка запроса;
 * generateFooterFile(url) - генерация завершения запроса;
 * generateMimeTypeHeader() - генерация заголовка типа контента;
 * generateHeaders() - генерация заголовков запроса;
 * generateQueryParams() - генерация параметров запроса в строке запроса;
 * generateJsonPostData() - генерация тела POST-запроса в формате JSON;
 * generateMultipartPostData() - генерация тела POST-запроса в формате multipart/form-data;
 * generateOtherPostData() - генерация тела POST-запроса в других форматах;
 * generateCookie() - генерация заголовка Cookie.
 *
 */
class CodeGenerator {
  baseUrl;
  url;
  method;
  params;
  mimeType;
  constructor(data) {
    this.baseUrl = data.baseUrl;
    this.url = data.url;
    this.method = data.method;
    this.params = data.params;
    this.mimeType = data.mimeType;
  }

  generateCode() {
    let url = this.url;

    this.params
      .filter(param => param.in === 'path')
      .forEach(param => {
        url = url.replace(`{${param.name}}`, param.value)
      });

    let fetchCode = this.generateHeaderFile(url);

    if (this.hasCookieParams()) {
      fetchCode += this.generateCookie();
    }

    if (this.hasMimeType()) {
      fetchCode += this.generateMimeTypeHeader();
    }

    if (this.hasHeadersParams()) {
      fetchCode += this.generateHeaders();
    }

    if (this.hasQueryParams()) {
      fetchCode += this.generateQueryParams();
    } else if (this.hasPostDataParams()) {
      if (this.mimeType === 'application/json') {
        fetchCode += this.generateJsonPostData();
      } else if (this.mimeType === 'multipart/form-data') {
        fetchCode += this.generateMultipartPostData()
      } else {
        fetchCode += this.generateOtherPostData()
      }
    }

    fetchCode += this.generateFooterFile(url);

    return fetchCode;
  }

  hasMimeType() {
    return !!this.mimeType;
  }
  hasHeadersParams() {
    return this.params.some(param => param.in === 'headers');
  }
  hasQueryParams() {
    return this.params.some(param => param.in === 'query');
  }
  hasPostDataParams() {
    return this.params.some(param => param.in === 'postData');
  }
  hasCookieParams() {
    return this.params.some(param => param.in === 'cookie');
  }

  getHost() {
    return this.params.some(param => param.in === 'cookie');
  }
  generateHeaderFile(url) {};
  generateFooterFile(url) {};
  generateMimeTypeHeader() {};
  generateHeaders() {};
  generateQueryParams() {};
  generateJsonPostData() {};
  generateMultipartPostData() {};
  generateOtherPostData() {};
  generateCookie() {};
}

export default CodeGenerator;
