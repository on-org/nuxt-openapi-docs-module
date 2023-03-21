import CodeGenerator from "./_CodeGenerator";

class OcamlGenerator extends CodeGenerator {
  constructor(data) {
    super(data);
  }

  generateHeaderFile(url) {
    return `let url = "${this.baseUrl}${url}" in\n`;
  }

  generateFooterFile() {
    return `;;`;
  }

  generateMimeTypeHeader() {
    if (this.mimeType === 'application/json') {
      return `let headers = [("Content-Type", "application/json")] in\n`;
    } else if (this.mimeType === 'multipart/form-data') {
      return `let headers = [("Content-Type", "multipart/form-data")] in\n`;
    } else {
      return `let headers = [("Content-Type", "application/x-www-form-urlencoded")] in\n`;
    }
  }

  generateHeaders() {
    const headers = this.params
      .filter(param => param.in === 'headers')
      .map(param => `("${param.name}", "${param.value}")`)
      .join('; ');
    return `let headers = [${headers}] in\n`;
  }

  generateQueryParams() {
    const params = this.params
      .filter(param => param.in === 'query')
      .map(param => `("${param.name}", "${param.value}")`)
      .join('; ');
    return `let params = [${params}] in\n`;
  }

  generateJsonPostData() {
    const data = this.params.find(param => param.in === 'postData').value;
    return `let body = ${JSON.stringify(data)} in\n`;
  }

  generateMultipartPostData() {
    const data = this.params.find(param => param.in === 'postData');
    const name = data.name;
    return `let body = [("${name}", "file")] in\n`;
  }

  generateOtherPostData() {
    const data = this.params.find(param => param.in === 'postData').value;
    return `let body = "${data}" in\n`;
  }

  generateCookie() {
    const cookies = this.params
      .filter(param => param.in === 'cookie')
      .map(param => `("${param.name}", "${param.value}")`)
      .join('; ');
    return `let cookies = [${cookies}] in\n`;
  }

}

export default OcamlGenerator;
