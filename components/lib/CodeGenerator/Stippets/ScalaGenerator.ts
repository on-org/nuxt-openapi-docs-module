import CodeGenerator from "./_CodeGenerator";

class ScalaGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    return `val url = "${this.baseUrl}${url}"\n\n`;
  }

  generateFooterFile(url) {
    return '';
  }

  generateMimeTypeHeader() {
    switch (this.mimeType) {
      case 'application/json':
        return 'val contentType = "application/json"\n';
      case 'multipart/form-data':
        return 'val contentType = "multipart/form-data"\n';
      default:
        return '';
    }
  }

  generateHeaders() {
    const headers = this.params.filter(param => param.in === 'headers');
    if (headers.length === 0) {
      return '';
    }

    const headerStrings = headers.map(header => {
      return `"${header.name}" -> "${header.value}"`;
    });

    return `val headers = Map(${headerStrings.join(', ')})\n`;
  }

  generateQueryParams() {
    const queryParams = this.params.filter(param => param.in === 'query');
    if (queryParams.length === 0) {
      return '';
    }

    const paramStrings = queryParams.map(param => {
      return `"${param.name}" -> "${param.value}"`;
    });

    return `val queryParams = Map(${paramStrings.join(', ')})\n`;
  }

  generateJsonPostData() {
    const postData = this.params.find(param => param.in === 'postData');
    return `val postData = Json.toJson(Map("${postData.name}" -> "${postData.value}")).toString\n`;
  }

  generateMultipartPostData() {
    const postData = this.params.find(param => param.in === 'postData');
    const fileParam = this.params.find(param => param.type === 'file');

    if (!fileParam) {
      return '';
    }

    return `val file = new java.io.File("${fileParam.path}")
val filePart = MultipartFormData.FilePart("${fileParam.name}", "${fileParam.path}", None, None)
val postData = MultipartFormData.DataPart("${postData.name}", "${postData.value}")
val multipartData = MultipartFormData(Seq(filePart), Seq(postData))
val body = multipartData.toEntity(HttpCharsets.\`UTF-8\`).data.utf8String\n`;
  }

  generateOtherPostData() {
    const postData = this.params.find(param => param.in === 'postData');
    return `val postData = "${postData.value}"\n`;
  }

  generateCookie() {
    const cookieParams = this.params.filter(param => param.in === 'cookie');
    if (cookieParams.length === 0) {
      return '';
    }

    const cookieStrings = cookieParams.map(cookie => {
      return `""""${cookie.name}" -> "${cookie.value}""""`;
    });

    return `val cookies = Seq(${cookieStrings.join(', ')})
val cookieHeader = headers.Cookie(cookies:_*)\n`;
  }
}

export default ScalaGenerator;
