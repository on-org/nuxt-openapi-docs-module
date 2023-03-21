import CodeGenerator from "./_CodeGenerator";

class Python3Generator extends CodeGenerator {
  generateHeaderFile(url) {
    let code = `import http.client\n\n`;
    code += `conn = http.client.HTTPConnection('${this.getHost()}')\n`;
    code += `conn.request('${this.method}', '${url}'`;

    return code;
  }

  generateFooterFile(url) {
    let code = `\nresponse = conn.getresponse()\n`;
    code += `print(response.read().decode())\n`;
    code += `conn.close()\n`;

    return code;
  }

  generateMimeTypeHeader() {
    let code = `\nheaders = {\n`;
    code += `'Content-type': '${this.mimeType}'\n`;
    code += `}\n`;
    code += `conn.request_headers.update(headers)\n`;

    return code;
  }

  generateHeaders() {
    let code = `\nheaders = {\n`;
    this.params
      .filter((param) => param.in === 'headers')
      .forEach((param) => {
        code += `'${param.name}': '${param.value}',\n`;
      });
    code += `}\n`;
    code += `conn.request_headers.update(headers)\n`;

    return code;
  }

  generateQueryParams() {
    let code = `\nquery_params = {\n`;
    this.params
      .filter((param) => param.in === 'query')
      .forEach((param) => {
        code += `'${param.name}': '${param.value}',\n`;
      });
    code += `}\n`;
    code += `query_string = http.client.urlencode(query_params)\n`;
    code += `conn.request_url += '?' + query_string\n`;

    return code;
  }

  generateJsonPostData() {
    let code = `\nimport json\n`;
    code += `payload = {\n`;
    this.params
      .filter((param) => param.in === 'postData')
      .forEach((param) => {
        code += `'${param.name}': '${param.value}',\n`;
      });
    code += `}\n`;
    code += `payload_json = json.dumps(payload)\n`;
    code += `conn.request_body = payload_json.encode()\n`;

    return code;
  }

  generateMultipartPostData() {
    let code = `\nimport os\n`;
    code += `import http.client\n`;
    code += `import mimetypes\n`;
    code += `boundary = 'boundary'\n`;
    code += `headers = {\n`;
    code += `'Content-Type': 'multipart/form-data; boundary=' + boundary\n`;
    code += `}\n`;
    code += `conn.request_headers.update(headers)\n`;
    code += `payload = b''\n`;
    this.params
      .filter((param) => param.in === 'postData')
      .forEach((param) => {
        if (param.type === 'file' && param.path) {
          const filePath = param.path;
          const contentType = 'application/octet-stream';
          code += `payload += b'--' + boundary.encode() + b'\\r\\n'\n`;
          code += `payload += f'Content-Disposition: form-data; name="${param.name}"; filename="${param.name}"\\r\\n'.encode()\n`;
          code += `payload += f'Content-Type: ${contentType}\\r\\n\\r\\n'.encode()\n`;
          code += `with open('${filePath}', 'rb') as f:\n`;
          code += `    payload += f.read()\n`;
          code += `payload += b'\\r\\n'\n`;
        } else {
          code += `payload += b'--' + boundary.encode() + b'\\r\\n'\n`;
          code += `payload += f'Content-Disposition: form-data; name="${param.name}"\\r\\n\\r\\n'.encode()\n`;
          code += `payload += '${param.value}'.encode()\n`;
          code += `payload += b'\\r\\n'\n`;
        }
      });
    code += `payload += b'--' + boundary.encode() + b'--\\r\\n'\n`;
    code += `conn.request_body = payload\n`;

    return code;
  }

  generateOtherPostData() {
    let code = `\nimport http.client\n`;
    code += `payload = ''\n`;
    this.params
      .filter((param) => param.in === 'postData')
      .forEach((param) => {
        code += `payload += '${param.name}=${param.value}&'\n`;
      });
    code += `payload = payload[:-1]\n`;
    code += `conn.request_body = payload.encode()\n`;

    return code;
  }

  generateCookie() {
    let code = `\ncookies = {\n`;
    this.params
      .filter((param) => param.in === 'cookie')
      .forEach((param) => {
        code += `'${param.name}': '${param.value}',\n`;
      });
    code += `}\n`;
    code += `cookie_string = http.client.cookies.format_cookies(cookies)\n`;
    code += `conn.request_headers['Cookie'] = cookie_string\n`;

    return code;
  }
}

export default Python3Generator;
