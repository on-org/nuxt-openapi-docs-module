import CodeGenerator from "./_CodeGenerator";

class PhpCurlGenerator extends CodeGenerator {

  protected generateHeaderFile(url: string): string {
    return `<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, '${this.baseUrl}${url}');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
`;
  }

  protected generateFooterFile(url: string): string {
    return `curl_close($ch);
?>`;
  }

  protected generateMimeTypeHeader(): string {
    if (this.mimeType === 'application/json') {
      return `curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));`;
    } else if (this.mimeType === 'multipart/form-data') {
      return `curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: multipart/form-data'));`;
    } else {
      return '';
    }
  }

  protected generateHeaders(): string {
    const headers = this.params.filter(param => param.in === 'headers');
    if (headers.length) {
      const headerStr = headers.map(header => `${header.name}: ${header.value}`).join('\\r\\n');
      return `curl_setopt($ch, CURLOPT_HTTPHEADER, array('${headerStr}'));`;
    } else {
      return '';
    }
  }

  protected generateQueryParams(): string {
    const queryParams = this.params.filter(param => param.in === 'query');
    const queryStr = queryParams.map(param => `${param.name}=${param.value}`).join('&');
    return `curl_setopt($ch, CURLOPT_URL, '${this.baseUrl}${this.url}?${queryStr}');`;
  }

  protected generateJsonPostData(): string {
    const postData = this.params.find(param => param.in === 'postData');
    return `curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(${postData.value}));`;
  }

  protected generateMultipartPostData(): string {
    const formData = this.params.filter(param => param.in === 'postData');
    const formDataStr = formData.map(param => `--boundary\\r\\nContent-Disposition: form-data; name="${param.name}"; filename="${param.path}"\\r\\nContent-Type: ${param.type}\\r\\n\\r\\n${param.value}\\r\\n`).join('');
    return `curl_setopt($ch, CURLOPT_POSTFIELDS, '${formDataStr}--boundary--\\r\\n');`;
  }

  protected generateOtherPostData(): string {
    const postData = this.params.find(param => param.in === 'postData');
    return `curl_setopt($ch, CURLOPT_POSTFIELDS, '${postData.value}');`;
  }

  protected generateCookie(): string {
    const cookieParams = this.params.filter(param => param.in === 'cookie');
    const cookieStr = cookieParams.map(param => `${param.name}=${param.value}`).join('; ');
    return `curl_setopt($ch, CURLOPT_COOKIE, '${cookieStr}');`;
  }
}

export default PhpCurlGenerator;
