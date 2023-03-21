import CodeGenerator from "./_CodeGenerator";

class PhpHttp2Generator extends CodeGenerator {
  protected generateHeaderFile(url: string): string {
    return `<?php
use Http2\Headers;
use Http2\Request;
use Http2\TransportException;
use Http2\Client;
use Http2\Request\Method;

require_once 'vendor/autoload.php';

$client = new Client();

$request = new Request(
  Method::${this.method},
  '${this.baseUrl}${url}'
);`
  }

  protected generateFooterFile(url: string): string {
    return `
try {
  $response = $client->send($request);
  echo $response->getBody();
} catch (TransportException $e) {
  echo $e->getMessage();
}
?>`
  }

  protected generateMimeTypeHeader(): string {
    let mimeTypeHeader = '';
    if (this.mimeType === 'application/json') {
      mimeTypeHeader = `$request->setHeader(Headers::CONTENT_TYPE, 'application/json');`;
    } else if (this.mimeType === 'multipart/form-data') {
      mimeTypeHeader = `$request->setHeader(Headers::CONTENT_TYPE, 'multipart/form-data');`;
    } else if (this.mimeType === 'application/x-www-form-urlencoded') {
      mimeTypeHeader = `$request->setHeader(Headers::CONTENT_TYPE, 'application/x-www-form-urlencoded');`;
    }
    return mimeTypeHeader;
  }

  protected generateHeaders(): string {
    let headers = '';
    this.params
      .filter(param => param.in === 'headers')
      .forEach(param => {
        headers += `$request->setHeader('${param.name}', '${param.value}');\n`;
      });
    return headers;
  }

  protected generateQueryParams(): string {
    let queryParams = '';
    this.params
      .filter(param => param.in === 'query')
      .forEach((param, index) => {
        if (index === 0) {
          queryParams += `$request->setUri('${this.baseUrl}${this.url}?${param.name}=${param.value}'`;
        } else {
          queryParams += `)->setQueryParam('${param.name}', '${param.value}')`;
        }
      });
    return queryParams + ');\n';
  }

  protected generateJsonPostData(): string {
    let jsonData = '';
    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        jsonData += `'${param.name}': '${param.value}',\n`;
      });
    return `$request->setBody(json_encode({${jsonData}}));\n`;
  }

  protected generateMultipartPostData(): string {
    let multipartData = '';
    this.params
      .filter(param => param.in === 'postData' && param.type === 'file')
      .forEach(param => {
        multipartData += `$request->addMultipartData('${param.name}', '${param.path}');\n`;
      });
    this.params
      .filter(param => param.in === 'postData' && param.type !== 'file')
      .forEach(param => {
        multipartData += `$request->addMultipartData('${param.name}', '${param.value}');\n`;
      });
    return multipartData;
  }

  protected generateOtherPostData(): string {
    let postData = '';
    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        postData += `'${param.name}': '${param.value}',\n`;
      });
    return `$request->setBody(http_build_query(array(${postData})), false);\n`;
  }

  protected generateCookie(): string {
    let cookieData = '';
    this.params
      .filter(param => param.in === 'cookie')
      .forEach(param => {
        cookieData += `$request->setCookie('${param.name}', '${param.value}');\n`;
      });
    return cookieData;
  }
}

export default PhpHttp2Generator;
