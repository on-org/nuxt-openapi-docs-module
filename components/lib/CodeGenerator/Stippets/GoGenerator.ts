import CodeGenerator from "./_CodeGenerator";

class GoGenerator extends CodeGenerator {
  protected generateHeaderFile(url: string): string {
    return `package main

import (
	"fmt"
	"net/http"
	"net/url"
	"strings"
)

func main() {
	url := "${url}"
`;
  }

  protected generateFooterFile(url: string): string {
    return `
}
`;
  }

  protected generateMimeTypeHeader(): string {
    let mimeTypeHeader = '';

    switch (this.mimeType) {
      case 'application/json':
        mimeTypeHeader = 'req.Header.Set("Content-Type", "application/json")\n';
        break;
      case 'multipart/form-data':
        mimeTypeHeader = 'req.Header.Set("Content-Type", "multipart/form-data")\n';
        break;
      case 'application/x-www-form-urlencoded':
        mimeTypeHeader = 'req.Header.Set("Content-Type", "application/x-www-form-urlencoded")\n';
        break;
      default:
        break;
    }

    return mimeTypeHeader;
  }

  protected generateHeaders(): string {
    let headers = '';

    this.params
      .filter((param) => param.in === 'headers')
      .forEach((param) => {
        headers += `req.Header.Set("${param.name}", "${param.value}")\n`;
      });

    return headers;
  }

  protected generateQueryParams(): string {
    let queryParams = '';
    let firstParam = true;

    this.params
      .filter((param) => param.in === 'query')
      .forEach((param) => {
        if (firstParam) {
          queryParams += '?';
          firstParam = false;
        } else {
          queryParams += '&';
        }

        queryParams += `${param.name}=${encodeURIComponent(param.value)}`;
      });

    return `url += "${queryParams}"\n`;
  }

  protected generateJsonPostData(): string {
    let postData = '';

    this.params
      .filter((param) => param.in === 'postData')
      .forEach((param) => {
        postData += `"${param.name}": "${param.value}",\n`;
      });

    return `postData := strings.NewReader("{${postData}}")\n`;
  }

  protected generateMultipartPostData(): string {
    let postData = '';

    this.params
      .filter((param) => param.in === 'postData')
      .forEach((param) => {
        postData += `writer.WriteField("${param.name}", "${param.value}")\n`;
      });

    return `body := &bytes.Buffer{}
	writer := multipart.NewWriter(body)\n${postData}err := writer.Close()
	if err != nil {
		fmt.Println(err)
		return
	}\npostData := body\n`;
  }

  protected generateOtherPostData(): string {
    let postData = '';

    this.params
      .filter((param) => param.in === 'postData')
      .forEach((param) => {
        postData += `"${param.name}=${param.value}&"\n`;
      });

    return `postData := strings.NewReader("${postData}")\n`;
  }

  protected generateCookie(): string {
    let cookie = '';

    this.params
      .filter((param) => param.in === 'cookie')
      .forEach((param) => {
        cookie += `req.AddCookie(&http.Cookie{Name: "${param.name}", Value: "${param.value}"})\n`;
      });

    return cookie;
  }

  generateCode(): string {
    let url = this.url;

    this.params
      .filter((param) => param.in === 'path')
      .forEach((param) => {
        url = url.replace(`{${param.name}}`, param.value);
      });

    let fetchCode = this.generateHeaderFile(url);

    if (this.hasCookieParams()) {
      fetchCode += this.generateCookie();
    }

    if (this.hasMimeType()) {
      fetchCode += this.generateMimeTypeHeader();
    }

    if (this.hasHeadersParams()) {
      fetchCode += this.generateHeaders();
    }

    if (this.hasQueryParams()) {
      fetchCode += this.generateQueryParams();
    } else if (this.hasPostDataParams()) {
      if (this.mimeType === 'application/json') {
        fetchCode += this.generateJsonPostData();
      } else if (this.mimeType === 'multipart/form-data') {
        fetchCode += this.generateMultipartPostData();
      } else {
        fetchCode += this.generateOtherPostData();
      }
    }

    fetchCode += this.generateFooterFile(url);

    return fetchCode;
  }
}

export default GoGenerator;
