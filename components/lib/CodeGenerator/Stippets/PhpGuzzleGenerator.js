import CodeGenerator from "./_CodeGenerator";

class PhpGuzzleGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    return `<?php
require_once 'vendor/autoload.php';

$httpClient = new GuzzleHttp\\Client([
  'base_uri' => '${this.baseUrl}',
  'verify' => false,
]);

$requestOptions = [
  RequestOptions::${this.method},
  '${url}',
`;
  }

  generateFooterFile() {
    return `
];

$response = $httpClient->request(...$requestOptions);

echo $response->getBody();
`;
  }

  generateMimeTypeHeader() {
    return `  'headers' => [
    'Content-Type' => '${this.mimeType}',
  ],
`;
  }

  generateHeaders() {
    const headers = this.params.filter(param => param.in === 'headers');
    if (headers.length === 0) return '';

    return `  'headers' => [
${headers.map(param => `    '${param.name}' => '${param.value}',`).join('\n')}
  ],
`;
  }

  generateQueryParams() {
    const queryParams = this.params.filter(param => param.in === 'query');
    if (queryParams.length === 0) return '';

    return `  'query' => [
${queryParams.map(param => `    '${param.name}' => '${param.value}',`).join('\n')}
  ],
`;
  }

  generateJsonPostData() {
    const postData = this.params.find(param => param.in === 'postData');
    if (!postData) return '';

    return `  'json' => ${postData.value},
`;
  }

  generateMultipartPostData() {
    const postData = this.params.find(param => param.in === 'postData');
    if (!postData) return '';

    const formData = postData.value.split('&').map(param => param.split('='));
    const fields = formData.map(([name, value]) => {
      if (name.startsWith('@')) {
        const path = name.substring(1);
        return `    [
      'name' => '${value}',
      'contents' => fopen('${path}', 'r')
    ],`;
      } else {
        return `    [
      'name' => '${name}',
      'contents' => '${value}'
    ],`;
      }
    }).join('\n');

    return `  'multipart' => [
${fields}
  ],
`;
  }

  generateOtherPostData() {
    const postData = this.params.find(param => param.in === 'postData');
    if (!postData) return '';

    return `  'body' => '${postData.value}',
`;
  }

  generateCookie() {
    const cookieParams = this.params.filter(param => param.in === 'cookie');
    if (cookieParams.length === 0) return '';

    const cookieString = cookieParams.map(param => `${param.name}=${param.value}`).join(';');

    return `  'headers' => [
    'Cookie' => '${cookieString}',
  ],
`;
  }
}

export default PhpGuzzleGenerator;
