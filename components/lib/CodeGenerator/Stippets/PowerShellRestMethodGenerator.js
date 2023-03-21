import CodeGenerator from "./_CodeGenerator";

export class PowerShellRestMethodGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    return `$response = Invoke-RestMethod -Uri "${this.baseUrl}${url}" -ContentType "${this.mimeType}" -Method ${this.method}\n`;
  }

  generateFooterFile(url) {
    return ``;
  }

  generateMimeTypeHeader() {
    return '';
  }

  generateHeaders() {
    let headers = '';
    this.params
      .filter((param) => param.in === 'headers')
      .forEach((param) => {
        headers += ` -Headers @{${param.name}='${param.value}'}\n`;
      });
    return headers;
  }

  generateQueryParams() {
    let queryParams = '';
    this.params
      .filter((param) => param.in === 'query')
      .forEach((param) => {
        queryParams += ` -Query @{${param.name}='${param.value}'}\n`;
      });
    return queryParams;
  }

  generateJsonPostData() {
    let jsonData = '';
    this.params
      .filter((param) => param.in === 'postData')
      .forEach((param) => {
        if (param.type === 'file') {
          jsonData += ` -Body (Get-Content "${param.path}" -Raw | ConvertFrom-Json)\n`;
        } else {
          jsonData += ` -Body '${param.value}'\n`;
        }
      });
    return jsonData;
  }

  generateMultipartPostData() {
    let multipartData = '';
    this.params
      .filter((param) => param.in === 'postData')
      .forEach((param) => {
        if (param.type === 'file') {
          multipartData += ` -Form @{${param.name}=(Get-Item "${param.path}").OpenRead()}\n`;
        } else {
          multipartData += ` -Form @{${param.name}='${param.value}'}\n`;
        }
      });
    return multipartData;
  }

  generateOtherPostData() {
    let otherData = '';
    this.params
      .filter((param) => param.in === 'postData')
      .forEach((param) => {
        otherData += ` -Body '${param.value}'\n`;
      });
    return otherData;
  }

  generateCookie() {
    let cookieData = '';
    this.params
      .filter((param) => param.in === 'cookie')
      .forEach((param) => {
        cookieData += ` -Headers @{Cookie='${param.name}=${param.value};'}\n`;
      });
    return cookieData;
  }
}

export default PowerShellRestMethodGenerator;
