import CodeGenerator from "./_CodeGenerator";

class JavaAsyncHttpClientGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    return `AsyncHttpClient asyncHttpClient = new DefaultAsyncHttpClient();
        BoundRequestBuilder requestBuilder = asyncHttpClient.prepare("${this.method}", "${this.baseUrl}${url}")`;
  }

  generateFooterFile(url) {
    return `ListenableFuture<Response> responseFuture = requestBuilder.execute();
        Response response = responseFuture.get();
        asyncHttpClient.close();
        System.out.println(response.getResponseBody());`;
  }

  generateMimeTypeHeader() {
    return `requestBuilder.addHeader("Content-Type", "${this.mimeType}");`;
  }

  generateHeaders() {
    let headers = '';
    this.params.forEach(param => {
      if (param.in === 'headers') {
        headers += `requestBuilder.addHeader("${param.name}", "${param.value}");\n`;
      }
    });
    return headers;
  }

  generateQueryParams() {
    let queryParams = '';
    this.params.forEach(param => {
      if (param.in === 'query') {
        queryParams += `requestBuilder.addQueryParam("${param.name}", "${param.value}");\n`;
      }
    });
    return queryParams;
  }

  generateJsonPostData() {
    let jsonData = '';
    this.params.forEach(param => {
      if (param.in === 'postData') {
        jsonData += `String json = "${param.value}";\n`;
        jsonData += `requestBuilder.setBody(json);\n`;
      }
    });
    return jsonData;
  }

  generateMultipartPostData() {
    const formData = this.params
      .filter(param => param.in === 'postData')
      .reduce((formData, param) => {
        if (param.type === 'file') {
          // If the parameter is a file, add its contents as a buffer to the form data
          formData.push(
            `new FilePart("${param.name}", new File("${param.path}"), "${param.path}")`
          );
        } else {
          // If the parameter is not a file, add its value as a string to the form data
          formData.push(
            `new StringPart("${param.name}", "${param.value}")`
          );
        }
        return formData;
      }, []);

    let multipartData = `requestBuilder.setBody(new MultipartBodyBuilder()`;
    formData.forEach(data => {
      multipartData += `\n.addPart(${data})`;
    });
    multipartData += `\n.build());\n`;

    return multipartData;
  }

  generateOtherPostData() {
    let postData = '';
    this.params.forEach(param => {
      if (param.in === 'postData') {
        postData += `String postData = "${param.value}";\n`;
        postData += `requestBuilder.setBody(postData);\n`;
      }
    });
    return postData;
  }

  generateCookie() {
    let cookieData = '';
    this.params.forEach(param => {
      if (param.in === 'cookie') {
        cookieData += `requestBuilder.addCookie(new Cookie("${param.name}", "${param.value}"));\n`;
      }
    });
    return cookieData;
  }
}


export default JavaAsyncHttpClientGenerator;
