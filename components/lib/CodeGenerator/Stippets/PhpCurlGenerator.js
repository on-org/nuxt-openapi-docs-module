import CodeGenerator from "./_CodeGenerator";

class PhpCurlGenerator extends CodeGenerator {

  generateHeaderFile(url) {
    return `<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, '${this.baseUrl}${url}');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
`;
  }

  generateFooterFile(url) {
    return `curl_close($ch);
?>`;
  }

  generateMimeTypeHeader() {
    if (this.mimeType === 'application/json') {
      return `curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));`;
    } else if (this.mimeType === 'multipart/form-data') {
      return `curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: multipart/form-data'));`;
    } else {
      return '';
    }
  }

  generateHeaders() {
    const headers = this.params.filter(param => param.in === 'headers');
    if (headers.length) {
      const headerStr = headers.map(header => `${header.name}: ${header.value}`).join('\\r\\n');
      return `curl_setopt($ch, CURLOPT_HTTPHEADER, array('${headerStr}'));`;
    } else {
      return '';
    }
  }

  generateQueryParams() {
    const queryParams = this.params.filter(param => param.in === 'query');
    const queryStr = queryParams.map(param => `${param.name}=${param.value}`).join('&');
    return `curl_setopt($ch, CURLOPT_URL, '${this.baseUrl}${this.url}?${queryStr}');`;
  }

  generateJsonPostData() {
    const postData = this.params.find(param => param.in === 'postData');
    return `curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(${postData.value}));`;
  }

  generateMultipartPostData() {
    const formData = this.params.filter(param => param.in === 'postData');
    const formDataStr = formData.map(param => `--boundary\\r\\nContent-Disposition: form-data; name="${param.name}"; filename="${param.path}"\\r\\nContent-Type: ${param.type}\\r\\n\\r\\n${param.value}\\r\\n`).join('');
    return `curl_setopt($ch, CURLOPT_POSTFIELDS, '${formDataStr}--boundary--\\r\\n');`;
  }

  generateOtherPostData() {
    const postData = this.params.find(param => param.in === 'postData');
    return `curl_setopt($ch, CURLOPT_POSTFIELDS, '${postData.value}');`;
  }

  generateCookie() {
    const cookieParams = this.params.filter(param => param.in === 'cookie');
    const cookieStr = cookieParams.map(param => `${param.name}=${param.value}`).join('; ');
    return `curl_setopt($ch, CURLOPT_COOKIE, '${cookieStr}');`;
  }
}

export default PhpCurlGenerator;
