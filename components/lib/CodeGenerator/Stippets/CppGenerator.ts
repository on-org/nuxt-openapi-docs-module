import CodeGenerator from "./_CodeGenerator";

class CppGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    return `#include <iostream>
#include <string>
#include <curl/curl.h>

int main() {
  CURL *curl;
  CURLcode res;
  std::string url = "${this.baseUrl}${url}";
`;
  }

  generateFooterFile(url) {
    return `
  return 0;
}`;
  }

  generateMimeTypeHeader() {
    return `  curl_mime *mime = curl_mime_init(curl);
  curl_mime_type(mime, "${this.mimeType}");
  curl_easy_setopt(curl, CURLOPT_MIMEPOST, mime);
`;
  }

  generateHeaders() {
    let headers = '';
    this.params
      .filter(param => param.in === 'headers')
      .forEach(param => {
        headers += `  curl_slist *headers = nullptr;
  headers = curl_slist_append(headers, "${param.name}: ${param.value}");
  curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
`;
      });
    return headers;
  }

  generateQueryParams() {
    let queryParams = '';
    this.params
      .filter(param => param.in === 'query')
      .forEach(param => {
        queryParams += `  url += "?${param.name}=${param.value}";
`;
      });
    return queryParams;
  }

  generateJsonPostData() {
    let json = '';
    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        json += `"${param.name}": "${param.value}", `;
      });
    json = json.slice(0, -2);
    return `  std::string data = "{${json}}";
  curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data.c_str());
  curl_easy_setopt(curl, CURLOPT_POSTFIELDSIZE, data.length());
`;
  }

  generateMultipartPostData() {
    let multipart = '';
    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        if (param.type === 'file' && param.path) {
          multipart += `  curl_mimepart *part${param.name} = curl_mime_addpart(mime);
  curl_mime_name(part${param.name}, "${param.name}");
  curl_mime_filedata(part${param.name}, "${param.path}");
`;
        } else {
          multipart += `  curl_mimepart *part${param.name} = curl_mime_addpart(mime);
  curl_mime_name(part${param.name}, "${param.name}");
  curl_mime_data(part${param.name}, "${param.value}", CURL_ZERO_TERMINATED);
`;
        }
      });
    return multipart;
  }

  generateOtherPostData() {
    let postData = '';
    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        postData += `  std::string data = "${param.name}=${param.value}";
  curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data.c_str());
  curl_easy_setopt(curl, CURLOPT_POSTFIELDSIZE, data.length());
`;
      });
    return postData;
  }

  generateCookie() {
    let cookie = '';
    this.params
      .filter(param => param.in === 'cookie')
      .forEach(param => {
        cookie += `  curl_easy_setopt(curl, CURLOPT_COOKIE, "${param.name}=${param.value}");
`;
      });
    return cookie;
  }
}

export default CppGenerator;
