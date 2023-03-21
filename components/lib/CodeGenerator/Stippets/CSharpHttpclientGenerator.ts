import CodeGenerator from "./_CodeGenerator";

class CSharpHttpClientGenerator extends CodeGenerator {
  protected generateHeaderFile(url): string {
    return `using System;
    using System.Net.Http;

    namespace MyNamespace
    {
        class MyClass
        {
            static HttpClient client = new HttpClient();

            static void Main()
            {
                var url = "${this.baseUrl}${url}";
                `;
  }

  protected generateFooterFile(url): string {
    return `
            Console.WriteLine(responseString);
            }
        }
    }`;
  }

  protected generateMimeTypeHeader(): string {
    if (this.mimeType === "application/json") {
      return `client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));`;
    } else if (this.mimeType === "multipart/form-data") {
      return `client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("multipart/form-data"));`;
    } else {
      return ``;
    }
  }

  protected generateHeaders(): string {
    let headers = "";
    this.params
      .filter((param) => param.in === "headers")
      .forEach((param) => {
        headers += `client.DefaultRequestHeaders.Add("${param.name}", "${param.value}");\n`;
      });
    return headers;
  }

  protected generateQueryParams(): string {
    let query = "";
    this.params
      .filter((param) => param.in === "query")
      .forEach((param) => {
        query += `${param.name}=${param.value}&`;
      });
    if (query !== "") {
      query = "?" + query.slice(0, -1);
    }
    return `url += "${query}";`;
  }

  protected generateJsonPostData(): string {
    return `var postData = new StringContent("${JSON.stringify(this.params.filter((param) => param.in === "postData")[0].value)}", System.Text.Encoding.UTF8, "application/json");`;
  }

  protected generateMultipartPostData(): string {
    return `var formData = new MultipartFormDataContent();
    `;
  }

  protected generateOtherPostData(): string {
    return `var postData = new StringContent("${this.params.filter((param) => param.in === "postData")[0].value}", System.Text.Encoding.UTF8, "${this.mimeType}");`;
  }

  protected generateCookie(): string {
    let cookies = "";
    this.params
      .filter((param) => param.in === "cookie")
      .forEach((param) => {
        cookies += `${param.name}=${param.value}; `;
      });
    return `client.DefaultRequestHeaders.Add("Cookie", "${cookies.trim()}");`;
  }
}

export default CSharpHttpClientGenerator;
