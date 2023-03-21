export interface Param {
  in: 'headers'|'query'|'postData'|'path'|'cookie';
  name: string;
  value: string;
  type?: 'file'
  path?: string
}

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
abstract class CodeGenerator {
  protected baseUrl: string;
  protected url: string;
  protected method: 'GET'|'POST'|'PUT'|'DELETE'|'PATCH'|'HEAD'|'OPTIONS';
  protected params: Array<Param>;
  protected mimeType: "application/x-www-form-urlencoded"|"application/json"|'multipart/form-data'|null;
  constructor(data: {
    baseUrl: string,
    url: string,
    method: 'GET'|'POST'|'PUT'|'DELETE'|'PATCH'|'HEAD'|'OPTIONS',
    params: Array<Param>,
    mimeType: "application/x-www-form-urlencoded"|"application/json"|'multipart/form-data'}
  ) {
    this.baseUrl = data.baseUrl;
    this.url = data.url;
    this.method = data.method;
    this.params = data.params;
    this.mimeType = data.mimeType;
  }

  generateCode(): string {
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

  protected hasMimeType(): boolean {
    return !!this.mimeType;
  }
  protected hasHeadersParams(): boolean {
    return this.params.some(param => param.in === 'headers');
  }
  protected hasQueryParams(): boolean {
    return this.params.some(param => param.in === 'query');
  }
  protected hasPostDataParams(): boolean {
    return this.params.some(param => param.in === 'postData');
  }
  protected hasCookieParams(): boolean {
    return this.params.some(param => param.in === 'cookie');
  }

  protected getHost(): boolean {
    return this.params.some(param => param.in === 'cookie');
  }
  protected abstract generateHeaderFile(url): string;
  protected abstract generateFooterFile(url): string;
  protected abstract generateMimeTypeHeader(): string;
  protected abstract generateHeaders(): string;
  protected abstract generateQueryParams(): string;
  protected abstract generateJsonPostData(): string;
  protected abstract generateMultipartPostData(): string;
  protected abstract generateOtherPostData(): string;
  protected abstract generateCookie(): string;
}

export default CodeGenerator;
