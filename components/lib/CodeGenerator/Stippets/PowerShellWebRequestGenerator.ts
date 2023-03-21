import CodeGenerator from "./_CodeGenerator";

export class PowerShellWebRequestGenerator extends CodeGenerator {
  protected generateHeaderFile(url: string): string {
    return `$response = Invoke-WebRequest -Uri "${this.baseUrl}${url}" -Method ${this.method} `;
  }

  protected generateFooterFile(url: string): string {
    return `$response`;
  }

  protected generateMimeTypeHeader(): string {
    if (this.mimeType === "application/json") {
      return `-ContentType "application/json"`;
    } else if (this.mimeType === "multipart/form-data") {
      return `-ContentType "multipart/form-data"`;
    } else {
      return `-ContentType "application/x-www-form-urlencoded"`;
    }
  }

  protected generateHeaders(): string {
    const headerParams = this.params.filter(
      (param) => param.in === "headers"
    );
    let headersCode = "";
    headerParams.forEach((param) => {
      headersCode += `-Header @{"${param.name}"="${param.value}"}\n`;
    });
    return headersCode;
  }

  protected generateQueryParams(): string {
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

  protected generateJsonPostData(): string {
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

  protected generateMultipartPostData(): string {
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

  protected generateOtherPostData(): string {
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

  protected generateCookie(): string {
    const cookieParams = this.params.filter((param) => param.in === "cookie");
    let cookieCode = "";
    cookieParams.forEach((param) => {
      cookieCode += `-Cookie "${param.name}=${param.value}";`;
    });
    return cookieCode;
  }
}

export default PowerShellWebRequestGenerator;
