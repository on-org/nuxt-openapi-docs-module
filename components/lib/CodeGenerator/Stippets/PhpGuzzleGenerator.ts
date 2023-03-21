import CodeGenerator from "./_CodeGenerator";

class PhpGuzzleGenerator extends CodeGenerator {
  protected generateHeaderFile(url: string): string {
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

  protected generateFooterFile(): string {
    return `
];

$response = $httpClient->request(...$requestOptions);

echo $response->getBody();
`;
  }

  protected generateMimeTypeHeader(): string {
    return `  'headers' => [
    'Content-Type' => '${this.mimeType}',
  ],
`;
  }

  protected generateHeaders(): string {
    const headers = this.params.filter(param => param.in === 'headers');
    if (headers.length === 0) return '';

    return `  'headers' => [
${headers.map(param => `    '${param.name}' => '${param.value}',`).join('\n')}
  ],
`;
  }

  protected generateQueryParams(): string {
    const queryParams = this.params.filter(param => param.in === 'query');
    if (queryParams.length === 0) return '';

    return `  'query' => [
${queryParams.map(param => `    '${param.name}' => '${param.value}',`).join('\n')}
  ],
`;
  }

  protected generateJsonPostData(): string {
    const postData = this.params.find(param => param.in === 'postData');
    if (!postData) return '';

    return `  'json' => ${postData.value},
`;
  }

  protected generateMultipartPostData(): string {
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

  protected generateOtherPostData(): string {
    const postData = this.params.find(param => param.in === 'postData');
    if (!postData) return '';

    return `  'body' => '${postData.value}',
`;
  }

  protected generateCookie(): string {
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
