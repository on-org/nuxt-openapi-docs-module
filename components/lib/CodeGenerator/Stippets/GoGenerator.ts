import CodeGenerator from "./_CodeGenerator";

class GoGenerator extends CodeGenerator {
  protected generateHeaderFile(url: string): string {
    let code = `package main\n\nimport (\n\t"fmt"\n\t"net/http"\n\t"net/url"\n)\n\nfunc main() {\n`;

    code += `\turl, err := url.Parse("${this.baseUrl}${url}")\n`;
    code += `\tif err != nil {\n\t\tfmt.Println(err)\n\t\treturn\n\t}\n\n`;
    code += `\tclient := &http.Client{}\n`;
    code += `\treq, err := http.NewRequest("${this.method}", url.String(), nil)\n`;
    code += `\tif err != nil {\n\t\tfmt.Println(err)\n\t\treturn\n\t}\n\n`;

    return code;
  }

  protected generateFooterFile(url: string): string {
    let code = `\tresp, err := client.Do(req)\n`;
    code += `\tif err != nil {\n\t\tfmt.Println(err)\n\t\treturn\n\t}\n\tdefer resp.Body.Close()\n\n`;
    code += `\t// TODO: process response\n}\n`;

    return code;
  }

  protected generateMimeTypeHeader(): string {
    let code = '';

    if (this.mimeType === 'application/json') {
      code += `\treq.Header.Set("Content-Type", "application/json")\n`;
    } else if (this.mimeType === 'multipart/form-data') {
      code += `\treq.Header.Set("Content-Type", "multipart/form-data")\n`;
    } else {
      code += `\treq.Header.Set("Content-Type", "application/x-www-form-urlencoded")\n`;
    }

    return code;
  }

  protected generateHeaders(): string {
    let code = '';

    this.params
      .filter(param => param.in === 'headers')
      .forEach(param => {
        code += `\treq.Header.Set("${param.name}", "${param.value}")\n`;
      });

    return code;
  }

  protected generateQueryParams(): string {
    let code = '';

    const queryParams = this.params.filter(param => param.in === 'query');

    if (queryParams.length > 0) {
      code += `\tquery := url.Query()\n`;

      queryParams.forEach(param => {
        code += `\tquery.Add("${param.name}", "${param.value}")\n`;
      });

      code += `\turl.RawQuery = query.Encode()\n\n`;
    }

    return code;
  }

  protected generateJsonPostData(): string {
    let code = '';

    const postDataParams = this.params.filter(param => param.in === 'postData');

    if (postDataParams.length > 0) {
      code += `\t// TODO: implement JSON post data\n`;
    }

    return code;
  }

  protected generateMultipartPostData(): string {
    let code = '';

    const postDataParams = this.params.filter(param => param.in === 'postData');

    if (postDataParams.length > 0) {
      code += `\t// TODO: implement multipart post data\n`;
    }

    return code;
  }

  protected generateOtherPostData(): string {
    let code = '';

    const postDataParams = this.params.filter(param => param.in === 'postData');

    if (postDataParams.length > 0) {
      code += `\t// TODO: implement other post data\n`;
    }

    return code;
  }

  protected generateCookie(): string {
    let code = '';

    const cookieParams = this.params.filter(param => param.in === 'cookie');

    if (cookieParams.length > 0) {
      code += '\tcookies := []*http.Cookie{}\n';

      cookieParams.forEach(param => {
        code += `\tcookies = append(cookies, &http.Cookie{Name: "${param.name}", Value: "${param.value}"})\n`;
      });

      code += '\tcookieJar, _ := cookiejar.New(nil)\n';
      code += '\tcookieJar.SetCookies(url, cookies)\n';
      code += '\tclient.Jar = cookieJar\n\n';
    }

    return code;
  }
}
export default GoGenerator;
