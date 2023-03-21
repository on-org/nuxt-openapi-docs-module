import CodeGenerator from "./_CodeGenerator";

class LuaGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    return `-- ${this.method} ${this.baseUrl}${url}\n`;
  }

  generateFooterFile() {
    return '';
  }

  generateMimeTypeHeader() {
    return '';
  }

  generateHeaders() {
    let headers = '';
    this.params
      .filter(param => param.in === 'headers')
      .forEach(param => {
        headers += `${param.name}: ${param.value}\n`;
      });
    return headers;
  }

  generateQueryParams() {
    let queryParams = '';
    this.params
      .filter(param => param.in === 'query')
      .forEach(param => {
        queryParams += `${param.name}=${param.value}&`;
      });
    queryParams = queryParams.slice(0, -1);
    return queryParams;
  }

  generateJsonPostData() {
    let data = '{';
    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        data += `"${param.name}": "${param.value}",`;
      });
    data = data.slice(0, -1);
    data += '}';
    return data;
  }

  generateMultipartPostData() {
    return 'Not implemented for Lua';
  }

  generateOtherPostData() {
    let data = '';
    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        data += `${param.value}\n`;
      });
    return data;
  }

  generateCookie() {
    let cookie = '';
    this.params
      .filter(param => param.in === 'cookie')
      .forEach(param => {
        cookie += `${param.name}=${param.value}; `;
      });
    cookie = cookie.slice(0, -2);
    return `Cookie: ${cookie}\n`;
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

    if (this.hasHeadersParams()) {
      fetchCode += this.generateHeaders();
    }

    if (this.hasQueryParams()) {
      url += `?${this.generateQueryParams()}`;
    } else if (this.hasPostDataParams()) {
      if (this.mimeType === 'application/json') {
        fetchCode += `Content-Type: application/json\n`;
        fetchCode += `Content-Length: ${this.generateJsonPostData().length}\n\n`;
        fetchCode += `${this.generateJsonPostData()}`;
      } else {
        fetchCode += `Content-Type: ${this.mimeType}\n\n`;
        fetchCode += `${this.generateOtherPostData()}`;
      }
    }

    fetchCode += this.generateFooterFile();

    return fetchCode;
  }
}

export default LuaGenerator;
