import CodeGenerator from "./_CodeGenerator";
const OKHTTP_IMPORTS = `import okhttp3.*;\nimport java.io.*;\n`;

class JavaOkHttpGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    let code = OKHTTP_IMPORTS + `OkHttpClient client = new OkHttpClient();\n`;
    code += `HttpUrl.Builder urlBuilder = HttpUrl.parse("${this.baseUrl}" + "${url}").newBuilder();\n`;
    code += `Request.Builder requestBuilder = new Request.Builder().url(urlBuilder.build());\n`;
    code += `requestBuilder.method("${this.method}", null);\n`;
    return code;
  }

  generateFooterFile() {
    let code = `Response response = client.newCall(requestBuilder.build()).execute();\n`;
    code += `System.out.println(response.body().string());\n`;
    return code;
  }

  generateMimeTypeHeader() {
    return `requestBuilder.header("Content-Type", "${this.mimeType}");\n`;
  }

  generateHeaders() {
    let code = '';
    this.params
      .filter((param) => param.in === 'headers')
      .forEach((param) => {
        code += `requestBuilder.header("${param.name}", "${param.value}");\n`;
      });
    return code;
  }

  generateQueryParams() {
    let code = '';
    this.params
      .filter((param) => param.in === 'query')
      .forEach((param) => {
        code += `urlBuilder.addQueryParameter("${param.name}", "${param.value}");\n`;
      });
    return code;
  }

  generateJsonPostData() {
    let code = '';
    this.params
      .filter((param) => param.in === 'postData')
      .forEach((param) => {
        if (this.mimeType === 'application/json') {
          code += `String json = "${param.value}";\n`;
          code += `RequestBody body = RequestBody.create(MediaType.parse("application/json; charset=utf-8"), json);\n`;
          code += `requestBuilder.method("${this.method}", body);\n`;
        }
      });
    return code;
  }

  generateMultipartPostData() {
    let code = '';
    this.params
      .filter((param) => param.in === 'postData' && param.type === 'file')
      .forEach((param) => {
        code += `RequestBody body = RequestBody.create(MediaType.parse("multipart/form-data"), ${param.name});\n`;
        code += `requestBuilder.method("${this.method}", new Request.Builder().url(urlBuilder.build()).post(body).build(), body);\n`;
        code += `client.newCall(requestBuilder.build()).execute().body().string();\n`;
      });
    return code;
  }

  generateOtherPostData() {
    let code = '';
    this.params
      .filter((param) => param.in === 'postData' && param.type !== 'file')
      .forEach((param) => {
        code += `RequestBody body = RequestBody.create(MediaType.parse("${this.mimeType}"), "${param.value}");\n`;
        code += `requestBuilder.method("${this.method}", body);\n`;
      });
    return code;
  }

  generateCookie() {
    let code = '';
    this.params
      .filter((param) => param.in === 'cookie')
      .forEach((param) => {
        code += `requestBuilder.addHeader("Cookie", "${param.name}=${param.value}");\n`;
      });
    return code;
  }
}


export default JavaOkHttpGenerator;
