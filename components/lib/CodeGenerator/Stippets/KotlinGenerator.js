import CodeGenerator from "./_CodeGenerator";

class KotlinGenerator extends CodeGenerator {
  constructor(data) {
    super(data);
  }

  generateHeaderFile(url) {
    return `
      val url = "${this.baseUrl}${url}"
      val request = HttpRequest(url = url, method = HttpMethod.${this.method})
    `;
  }

  generateFooterFile(url) {
    return `
      val response = client.execute(request)
      if (response.status.isSuccess()) {
          // handle successful response
      } else {
          // handle unsuccessful response
      }
    `;
  }

  generateMimeTypeHeader() {
    return `
      request.headers.append("Content-Type", "${this.mimeType}")
    `;
  }

  generateHeaders() {
    const headers = this.params.filter(param => param.in === 'headers');
    let headersCode = '';
    for (let i = 0; i < headers.length; i++) {
      const header = headers[i];
      headersCode += `
        request.headers.append("${header.name}", "${header.value}")
      `;
    }
    return headersCode;
  }

  generateQueryParams() {
    const queryParams = this.params.filter(param => param.in === 'query');
    let queryParamsCode = '';
    for (let i = 0; i < queryParams.length; i++) {
      const queryParam = queryParams[i];
      queryParamsCode += `
        request.parameters.append("${queryParam.name}", "${queryParam.value}")
      `;
    }
    return queryParamsCode;
  }

  generateJsonPostData() {
    const postDataParams = this.params.filter(param => param.in === 'postData');
    let postDataCode = '';
    for (let i = 0; i < postDataParams.length; i++) {
      const postDataParam = postDataParams[i];
      postDataCode += `
        val ${postDataParam.name} = ${postDataParam.value}
      `;
    }
    postDataCode += `
      val json = Json { ignoreUnknownKeys = true }
      request.body = TextContent(json.encodeToString(${postDataParams[0].name}), contentType = ContentType.Application.Json)
    `;
    return postDataCode;
  }

  generateMultipartPostData() {
    const postDataParams = this.params.filter(param => param.in === 'postData');
    let postDataCode = '';
    for (let i = 0; i < postDataParams.length; i++) {
      const postDataParam = postDataParams[i];
      if (postDataParam.type === 'file') {
        postDataCode += `
          val ${postDataParam.name}File = File("${postDataParam.path}")
          val ${postDataParam.name}Part = formData {
              append("${postDataParam.name}", ${postDataParam.name}File.readBytes(), Headers.build {
                  append(HttpHeaders.ContentDisposition, "filename=\${${postDataParam.name}File.name}")
              })
          }
        `;
      } else {
        postDataCode += `
          val ${postDataParam.name}Part = formData {
              append("${postDataParam.name}", "${postDataParam.value}")
          }
        `;
      }
    }
    postDataCode += `
      request.body = ${postDataParams.map(param => `${param.name}Part`).join(' + ')}
    `;
    return postDataCode;
  }

  generateOtherPostData() {
    const postDataParams = this.params.filter(param => param.in === 'postData');
    let postDataCode = '';
    for (let i = 0; i < postDataParams.length; i++) {
      const postDataParam = postDataParams[i];
      postDataCode += `
        val ${postDataParam.name} = "${postDataParam.value}"
      `;
    }
    postDataCode += `
      request.body = TextContent("${postDataParams.map(param => `\${${param.name}}`).join('&')}", contentType = ContentType.Application.FormUrlEncoded)
    `;
    return postDataCode;
  }

  generateCookie() {
    const cookieParams = this.params.filter(param => param.in === 'cookie');
    let cookieCode = '';
    for (let i = 0; i < cookieParams.length; i++) {
      const cookieParam = cookieParams[i];
      cookieCode += `
        request.cookies.append("${cookieParam.name}", "${cookieParam.value}")
      `;
    }
    return cookieCode;
  }
}

export default KotlinGenerator;
