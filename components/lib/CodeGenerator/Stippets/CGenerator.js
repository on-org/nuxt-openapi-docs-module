import CodeGenerator from "./_CodeGenerator";

class CGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    return `
#include <curl/curl.h>
#include <stdio.h>
#include <string.h>

int main(void) {
CURL *curl;
CURLcode res;
char *url = "${this.baseUrl}${url}";

curl = curl_easy_init();
if(curl) {
`;
  }

  generateFooterFile(url) {
    return `    curl_easy_setopt(curl, CURLOPT_URL, url);\n     res = curl_easy_perform(curl);\n     if(res != CURLE_OK)\n       fprintf(stderr, "curl_easy_perform() failed: %s\\n",\n               curl_easy_strerror(res));\n     curl_easy_cleanup(curl);\n   }\n   return 0;\n }\n`;
  }

  generateMimeTypeHeader() {
    if (this.mimeType === 'application/json') {
      return `    curl_easy_setopt(curl, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);`;
    } else if (this.mimeType === 'multipart/form-data') {
      return `
curl_mime *mime;
curl_mimepart *part;
struct curl_slist *headerlist = NULL;

mime = curl_mime_init(curl);

part = curl_mime_addpart(mime);
curl_mime_name(part, "field1");
curl_mime_data(part, "value1", CURL_ZERO_TERMINATED);

part = curl_mime_addpart(mime);
curl_mime_name(part, "field2");
curl_mime_filedata(part, "${this.params.find(param => param.type === 'file').path}");

headerlist = curl_slist_append(headerlist, "Content-Type: multipart/form-data");
curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headerlist);
curl_easy_setopt(curl, CURLOPT_MIMEPOST, mime);
;     } else {       return
curl_easy_setopt(curl, CURLOPT_HTTPHEADER, ["Content-Type: ${this.mimeType}"]);
`;
    }
  }

  generateHeaders() {
    const headers = this.params.filter(param => param.in === 'headers');
    const headerStrings = headers.map(header => "${header.name}: ${header.value}");
    return `    curl_easy_setopt(curl, CURLOPT_HTTPHEADER, [${headerStrings.join(', ')}]);`;
  }

  generateQueryParams() {
    const queryParams = this.params.filter(param => param.in === 'query');
    const queryStrings = queryParams.map(param => `${param.name}=${param.value}`);
    const queryString = queryStrings.join('&');
    return `    char *query = "${queryString}";\n     char *urlWithQuery = malloc(strlen(url) + strlen(query) + 2);\n     strcpy(urlWithQuery, url);\n     strcat(urlWithQuery, "?");\n     strcat(urlWithQuery, query);\n     curl_easy_setopt(curl, CURLOPT_URL, urlWithQuery);\n`;
  }

  generateJsonPostData() {
    const postData = this.params.find(param => param.in === 'postData').value;
    return `    curl_easy_setopt(curl, CURLOPT_POSTFIELDS, "${postData}");\n`;
  }

  generateMultipartPostData() {
    return this.generateMimeTypeHeader();
  }

  generateOtherPostData() {
    const postData = this.params.find(param => param.in === 'postData').value;
    return `    curl_easy_setopt(curl, CURLOPT_POSTFIELDS, "${postData}");`;
  }

  generateCookie() {
    const cookieParams = this.params.filter(param => param.in === 'cookie');
    const cookieStrings = cookieParams.map(param => `${param.name}=${param.value}`);
    const cookieString = cookieStrings.join('; ');
    return `    curl_easy_setopt(curl, CURLOPT_COOKIE, "${cookieString}");`;
  }
}

export default CGenerator;
