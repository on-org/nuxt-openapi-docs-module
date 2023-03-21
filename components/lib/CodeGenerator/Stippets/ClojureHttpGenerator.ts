import CodeGenerator from "./_CodeGenerator";

class ClojureGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    return `(require '[clj-http.client :as client])
(def url "${url}")\n`;
  }

  generateFooterFile(url: string) {
    return '';
  }

  generateMimeTypeHeader() {
    return '';
  }

  generateHeaders() {
    const headers = this.params.find((param) => param.in === 'headers').value;
    const headerString = Object.entries(headers)
      .map(([key, value]) => `("${key}" "${value}")`)
      .join('\n');
    return `(def headers [${headerString}])\n`;
  }

  generateQueryParams() {
    const queryParams = this.params
      .filter((param) => param.in === 'query')
      .map(({ value, name }) => `("${name}" "${value}")`)
      .join('\n');
    return `(def query-params [${queryParams}])\n`;
  }

  generateJsonPostData() {
    const postData = this.params.find((param) => param.in === 'postData').value;
    const postDataString = JSON.stringify(postData)
      .replace(/"/g, '\\"')
      .replace(/:/g, ' ')
      .replace(/,/g, '\n');
    return `(def post-data "${postDataString}")\n`;
  }

  generateMultipartPostData() {
    // Not implemented
    return '';
  }

  generateOtherPostData() {
    const postData = this.params.find((param) => param.in === 'postData').value;
    const postDataString = JSON.stringify(postData)
      .replace(/"/g, '\\"')
      .replace(/:/g, ' ')
      .replace(/,/g, '\n');
    return `(def post-data "${postDataString}")\n`;
  }

  generateCookie() {
    const cookies = this.params.find((param) => param.in === 'cookie').value;
    const cookieString = Object.entries(cookies)
      .map(([key, value]) => `("${key}" "${value}")`)
      .join('\n');
    return `(def cookies [${cookieString}])\n`;
  }

  generateCode() {
    let url = this.url;

    this.params
      .filter((param) => param.in === 'path')
      .forEach((param) => {
        url = url.replace(`{${param.name}}`, param.value);
      });

    let clojureCode = this.generateHeaderFile(url);

    if (this.hasCookieParams()) {
      clojureCode += this.generateCookie();
    }

    if (this.hasHeadersParams()) {
      clojureCode += this.generateHeaders();
    }

    if (this.hasQueryParams()) {
      clojureCode += this.generateQueryParams();
    } else if (this.hasPostDataParams()) {
      if (this.mimeType === 'application/json') {
        clojureCode += this.generateJsonPostData();
      } else if (this.mimeType === 'multipart/form-data') {
        clojureCode += this.generateMultipartPostData();
      } else {
        clojureCode += this.generateOtherPostData();
      }
    }

    clojureCode += `(def response (client/${this.method.toLowerCase()} url`;
    if (this.hasHeadersParams()) {
      clojureCode += '\n {:headers headers}';
    }
    if (this.hasQueryParams()) {
      clojureCode += '\n {:query-params query-params}';
    }
    if (this.hasPostDataParams()) {
      clojureCode += '\n {:body post-data}';
    }
    if (this.hasCookieParams()) {
      clojureCode += '\n {:cookies cookies}';
    }
    clojureCode += '))\n';

    clojureCode += this.generateFooterFile(url);

    return clojureCode;
  }
}
export default ClojureGenerator;
