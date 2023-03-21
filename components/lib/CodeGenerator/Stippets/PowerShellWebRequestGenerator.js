import CodeGenerator from "./_CodeGenerator";

export class PowerShellWebRequestGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    return `$response = Invoke-WebRequest -Uri "${this.baseUrl}${url}" -Method ${this.method} `;
  }

  generateFooterFile(url) {
    return `$response`;
  }

  generateMimeTypeHeader() {
    if (this.mimeType === "application/json") {
      return `-ContentType "application/json"`;
    } else if (this.mimeType === "multipart/form-data") {
      return `-ContentType "multipart/form-data"`;
    } else {
      return `-ContentType "application/x-www-form-urlencoded"`;
    }
  }

  generateHeaders() {
    const headerParams = this.params.filter(
      (param) => param.in === "headers"
    );
    let headersCode = "";
    headerParams.forEach((param) => {
      headersCode += `-Header @{"${param.name}"="${param.value}"}\n`;
    });
    return headersCode;
  }

  generateQueryParams() {
    const queryParams = this.params.filter((param) => param.in === "query");
    let queryParamsCode = "";
    queryParams.forEach((param) => {
      queryParamsCode += `'${param.name}'='${param.value}'&`;
    });
    if (queryParamsCode) {
      queryParamsCode = queryParamsCode.slice(0, -1);
      return `-Uri "${this.baseUrl}${this.url}?${queryParamsCode}"`;
    }
    return "";
  }

  generateJsonPostData() {
    const postDataParams = this.params.filter(
      (param) => param.in === "postData"
    );
    let postDataCode = "";
    postDataParams.forEach((param) => {
      postDataCode += `"${param.name}": "${param.value}",`;
    });
    if (postDataCode) {
      postDataCode = postDataCode.slice(0, -1);
      return `-Body '{"${postDataCode}}' ${this.generateMimeTypeHeader()}`;
    }
    return "";
  }

  generateMultipartPostData() {
    const postDataParams = this.params.filter(
      (param) => param.in === "postData" && param.type === "file"
    );
    let multipartDataCode = "";
    postDataParams.forEach((param) => {
      multipartDataCode += `-Form @{"${param.name}" = (Get-Item "${param.path}")};`;
    });
    if (multipartDataCode) {
      multipartDataCode = multipartDataCode.slice(0, -1);
      return `${multipartDataCode} ${this.generateMimeTypeHeader()}`;
    }
    return "";
  }

  generateOtherPostData() {
    const postDataParams = this.params.filter(
      (param) => param.in === "postData"
    );
    let postDataCode = "";
    postDataParams.forEach((param) => {
      postDataCode += `"${param.name}=${param.value}&"`;
    });
    if (postDataCode) {
      postDataCode = postDataCode.slice(0, -1);
      return `-Body "${postDataCode}" ${this.generateMimeTypeHeader()}`;
    }
    return "";
  }

  generateCookie() {
    const cookieParams = this.params.filter((param) => param.in === "cookie");
    let cookieCode = "";
    cookieParams.forEach((param) => {
      cookieCode += `-Cookie "${param.name}=${param.value}";`;
    });
    return cookieCode;
  }
}

export default PowerShellWebRequestGenerator;
