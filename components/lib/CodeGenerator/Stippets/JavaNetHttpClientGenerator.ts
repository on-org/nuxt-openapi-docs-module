import CodeGenerator from "./_CodeGenerator";

class JavaNetHttpClientGenerator extends CodeGenerator {
  protected generateHeaderFile(url: string): string {
    return `HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("${this.baseUrl}${url}"))
        .method("${this.method}", HttpRequest.BodyPublishers.noBody())`;
  }

  protected generateFooterFile(url: string): string {
    return `HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());`;
  }

  protected generateMimeTypeHeader(): string {
    switch (this.mimeType) {
      case 'application/json':
        return `request = request.header("Content-Type", "application/json");`;
      case 'multipart/form-data':
        return `request = request.header("Content-Type", "multipart/form-data");`;
      case 'application/x-www-form-urlencoded':
        return `request = request.header("Content-Type", "application/x-www-form-urlencoded");`;
      default:
        return '';
    }
  }

  protected generateHeaders(): string {
    return this.params
      .filter(param => param.in === 'headers')
      .map(param => `request = request.header("${param.name}", "${param.value}");`)
      .join('\n');
  }

  protected generateQueryParams(): string {
    const queryParams = this.params.filter(param => param.in === 'query');
    if (queryParams.length === 0) {
      return '';
    }
    const queryStr = queryParams.map(param => `${param.name}=${param.value}`).join('&');
    return `request = request.uri(URI.create("${this.baseUrl}${this.url}?${queryStr}"));`;
  }

  protected generateJsonPostData(): string {
    const postData = this.params.find(param => param.in === 'postData');
    if (!postData) {
      return '';
    }
    return `String json = "${postData.value}";
request = request.method("${this.method}", HttpRequest.BodyPublishers.ofString(json));`;
  }

  protected generateMultipartPostData(): string {
    const postData = this.params.find(param => param.in === 'postData');
    if (!postData || postData.type !== 'file' || !postData.path) {
      return '';
    }
    return `Path path = Paths.get("${postData.path}");
String fileName = path.getFileName().toString();
String boundary = "*****";
String CRLF = "\\r\\n";

request = request.method("${this.method}", HttpRequest.BodyPublishers.ofMultipartData(
        new MultipartBodyPublisher(boundary,
                List.of(
                        new FilePart("file", fileName, path.toFile())
                )
        )
));`;
  }

  protected generateOtherPostData(): string {
    const postData = this.params.find(param => param.in === 'postData');
    if (!postData) {
      return '';
    }
    return `String data = "${postData.value}";
request = request.method("${this.method}", HttpRequest.BodyPublishers.ofString(data));`;
  }

  protected generateCookie(): string {
    return this.params
      .filter(param => param.in === 'cookie')
      .map(param => `request = request.header("Cookie", "${param.name}=${param.value}");`)
      .join('\n');
  }
}

export default JavaNetHttpClientGenerator;
