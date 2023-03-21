import CodeGenerator from "./_CodeGenerator";

class CGenerator extends CodeGenerator {
  protected generateHeaderFile(url): string {
    return `#include <stdio.h>\n#include <stdlib.h>\n#include <curl/curl.h>\n\nint main(int argc, char *argv[]) {\n\tCURL *curl;\n\tCURLcode res = CURLE_OK;\n\n\tcurl = curl_easy_init();\n\tif (curl) {\n\t\tchar *url = "${url}";\n`;
  }
  protected generateFooterFile(url): string {
    return `\t\tcurl_easy_cleanup(curl);\n\t}\n\treturn 0;\n}`;
  }
  protected generateMimeTypeHeader(): string {
    if (this.mimeType === 'application/json') {
      return `\t\tcurl_easy_setopt(curl, CURLOPT_HTTPHEADER, "Content-Type: application/json");\n`;
    } else if (this.mimeType === 'multipart/form-data') {
      return `\t\tcurl_easy_setopt(curl, CURLOPT_HTTPHEADER, "Content-Type: multipart/form-data");\n`;
    } else {
      return '';
    }
  }
  protected generateHeaders(): string {
    let headers = '';
    this.params
      .filter(param => param.in === 'headers')
      .forEach(param => {
        headers += `\t\tcurl_easy_setopt(curl, CURLOPT_HTTPHEADER, "${param.name}: ${param.value}");\n`;
      });
    return headers;
  }
  protected generateQueryParams(): string {
    let queryParams = '';
    this.params
      .filter(param => param.in === 'query')
      .forEach(param => {
        queryParams += `\t\tchar *query_param = "${param.name}=${param.value}";\n`;
        queryParams += `\t\turl = strcat(url, "?");\n`;
        queryParams += `\t\turl = strcat(url, query_param);\n`;
      });
    return queryParams;
  }
  protected generateJsonPostData(): string {
    let postData = '';
    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        postData += `\t\tchar *json_data = "${param.value}";\n`;
        postData += `\t\tcurl_easy_setopt(curl, CURLOPT_POSTFIELDS, json_data);\n`;
      });
    return postData;
  }
  protected generateMultipartPostData(): string {
    let postData = '';
    postData += `\t\tcurl_mime *mime;\n\t\tcurl_mimepart *part;\n\n\t\tmime = curl_mime_init(curl);\n`;
    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        postData += `\t\tpart = curl_mime_addpart(mime);\n`;
        postData += `\t\tcurl_mime_name(part, "${param.name}");\n`;
        postData += `\t\tcurl_mime_data(part, "${param.value}", CURL_ZERO_TERMINATED);\n`;
      });
    postData += `\t\tcurl_easy_setopt(curl, CURLOPT_MIMEPOST, mime);\n`;
    return postData;
  }
  protected generateOtherPostData(): string {
    let postData = '';
    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        postData += `\t\tchar *post_data = "${param.value}";\n`;
        postData += `\t\tcurl_easy_setopt(curl, CURLOPT_POSTFIELDS, post_data);\n`;
      });
    return postData;
  }
  protected generateCookie(): string {
    let cookie = '';
    this.params
      .filter(param => param.in === 'cookie')
      .forEach(param => {
        cookie += `\t\tcurl_easy_setopt(curl, CURLOPT_COOKIE, "${param.name}=${param.value}");\n`;
      });
    return cookie;
  }
}

export default CGenerator;
