import CodeGenerator from "./_CodeGenerator";

class CSharpRestSharpGenerator extends CodeGenerator {
  constructor(data) {
    super(data);
  }

  generateHeaderFile(url) {
    return `var client = new RestSharp.RestClient("${this.baseUrl}");
var request = new RestSharp.RestRequest("${url}", RestSharp.Method.${this.method});
`;
  }

  generateFooterFile(url) {
    return `var response = client.Execute(request);
Console.WriteLine(response.Content);`;
  }

  generateMimeTypeHeader() {
    return `request.AddParameter("${this.mimeType}", body, RestSharp.ParameterType.RequestBody);`;
  }

  generateHeaders() {
    let headers = '';
    this.params.filter(param => param.in === 'headers')
      .forEach(param => {
        headers += `request.AddHeader("${param.name}", "${param.value}");
`;
      });
    return headers;
  }

  generateQueryParams() {
    let queryParams = '';
    this.params.filter(param => param.in === 'query')
      .forEach(param => {
        queryParams += `request.AddParameter("${param.name}", "${param.value}");
`;
      });
    return queryParams;
  }

  generateJsonPostData() {
    return `var body = JsonConvert.SerializeObject({${this.params.filter(param => param.in === 'postData')
      .map(param => `"${param.name}": "${param.value}"`).join(',')}});`;
  }

  generateMultipartPostData() {
    const params = this.params.filter(param => param.in === 'postData')
      .forEach(param => `body.Add(new RestSharp.FormDataParameter("${param.name}", "${param.value}"`);
    return `var body = new RestSharp.MultipartFormDataContent();
${params}`;
  }

  generateOtherPostData() {
    return `var body = "${this.params.find(param => param.in === 'postData').value}";`;
  }

  generateCookie() {
    let cookies = '';
    this.params.filter(param => param.in === 'cookie')
      .forEach(param => {
        cookies += `request.AddCookie("${param.name}", "${param.value}");`;
      });
    return cookies;
  }
}

export default CSharpRestSharpGenerator;
