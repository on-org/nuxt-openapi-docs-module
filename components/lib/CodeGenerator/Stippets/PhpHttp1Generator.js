import CodeGenerator from "./_CodeGenerator";

class PhpHttp1Generator extends CodeGenerator {
  generateHeaderFile(url) {
    return `
      <?php
      $ch = curl_init('${this.baseUrl}${url}');
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
      curl_setopt($ch, CURLOPT_CUSTOMREQUEST, '${this.method}');
    `;
  }

  generateFooterFile(url) {
    return `
      $response = curl_exec($ch);
      curl_close($ch);
      echo $response;
      ?>
    `;
  }

  generateMimeTypeHeader() {
    switch (this.mimeType) {
      case 'application/json':
        return "curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));";
      case 'multipart/form-data':
        return "curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: multipart/form-data'));";
      case 'application/x-www-form-urlencoded':
      default:
        return "curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded'));";
    }
  }

  generateHeaders() {
    const headers = this.params.filter((param) => param.in === 'headers');
    const headersString = headers
      .map((header) => `'${header.name}: ${header.value}'`)
      .join(', ');
    return `curl_setopt($ch, CURLOPT_HTTPHEADER, array(${headersString}));`;
  }

  generateQueryParams() {
    const queryParams = this.params.filter((param) => param.in === 'query');
    const queryString = queryParams
      .map((param) => `${param.name}=${param.value}`)
      .join('&');
    return `curl_setopt($ch, CURLOPT_URL, '${this.baseUrl}${this.url}?${queryString}');`;
  }

  generateJsonPostData() {
    const postData = this.params.find((param) => param.in === 'postData');
    return `curl_setopt($ch, CURLOPT_POSTFIELDS, '${postData.value}');`;
  }

  generateMultipartPostData() {
    const postData = this.params.find((param) => param.in === 'postData');
    const path = postData.path || '';
    return `
      $postFields = array(
        '${postData.name}' => new CURLFile('${path}')
      );
      curl_setopt($ch, CURLOPT_POSTFIELDS, $postFields);
    `;
  }

  generateOtherPostData() {
    const postData = this.params.find((param) => param.in === 'postData');
    return `curl_setopt($ch, CURLOPT_POSTFIELDS, '${postData.value}');`;
  }

  generateCookie() {
    const cookieParams = this.params.filter((param) => param.in === 'cookie');
    const cookieString = cookieParams
      .map((cookie) => `${cookie.name}=${cookie.value}`)
      .join('; ');
    return `curl_setopt($ch, CURLOPT_COOKIE, '${cookieString}');`;
  }
}

export default PhpHttp1Generator;
