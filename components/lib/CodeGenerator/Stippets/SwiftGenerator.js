import CodeGenerator from "./_CodeGenerator";

class SwiftGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    return `import Foundation\n\n`;
  }

  generateFooterFile(url) {
    return `let url = URL(string: "${this.baseUrl}${url}")!\n`;
  }

  generateMimeTypeHeader() {
    if (this.mimeType === 'application/json') {
      return `request.setValue("application/json", forHTTPHeaderField: "Content-Type")\n`;
    } else if (this.mimeType === 'multipart/form-data') {
      return `request.setValue("multipart/form-data", forHTTPHeaderField: "Content-Type")\n`;
    } else {
      return `request.setValue("${this.mimeType}", forHTTPHeaderField: "Content-Type")\n`;
    }
  }

  generateHeaders() {
    let code = '';

    this.params
      .filter(param => param.in === 'headers')
      .forEach(param => {
        code += `request.setValue("${param.value}", forHTTPHeaderField: "${param.name}")\n`;
      });

    return code;
  }

  generateQueryParams() {
    let code = '';

    this.params
      .filter(param => param.in === 'query')
      .forEach(param => {
        code += `let ${param.name} = "${param.value}"\n`;
      });

    return code;
  }

  generateJsonPostData() {
    let code = '';

    code += `let postData = try! JSONSerialization.data(withJSONObject: [`;

    this.params
      .filter(param => param.in === 'postData')
      .forEach((param, index) => {
        code += `"${param.name}": "${param.value}"`;

        if (index !== this.params.filter(p => p.in === 'postData').length - 1) {
          code += ', ';
        }
      });

    code += `])\n`;
    code += `request.httpBody = postData\n`;

    return code;
  }

  generateMultipartPostData() {
    let code = '';

    code += `let boundary = UUID().uuidString\n`;
    code += `request.setValue("multipart/form-data; boundary=\\(boundary)", forHTTPHeaderField: "Content-Type")\n`;
    code += `let httpBody = NSMutableData()\n`;

    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        if (param.type === 'file') {
          code += `let filePath = "${param.path}"\n`;
          code += `let filename = "${param.value}"\n`;
          code += `let fileData = try! Data(contentsOf: URL(fileURLWithPath: filePath))\n`;
          code += `let mimetype = "application/octet-stream"\n`;
          code += `httpBody.append("--\\(boundary)\\r\\n".data(using: .utf8)!)\n`;
          code += `httpBody.append("Content-Disposition: form-data; name=\\"${param.name}\\"; filename=\\"\\(filename)\\"\\r\\n".data(using: .utf8)!)\n`;
          code += `httpBody.append("Content-Type: \\(mimetype)\\r\\n\\r\\n".data(using: .utf8)!)\n`;
          code += `httpBody.append(fileData)\n`;
        } else {
          code += `httpBody.append("--\\(boundary)\\r\\n".data(using: .utf8)!)\n`;
          code += `httpBody.append("Content-Disposition: form-data; name=\\"${param.name}\\"\\r\\n\\r\\n".data(using: .utf8)!)\n`;
          code += `httpBody.append("${param.value}".data(using: .utf8)!)\n`;
        }
      });

    code += `httpBody.append("\\r\\n--\\(boundary)--\\r\\n".data(using: .utf8)!)\n`;
    code += `request.httpBody = httpBody as Data\n`;

    return code;
  }

  generateOtherPostData() {
    let code = '';

    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        code += `let ${param.name} = "${param.value}"\n`;
      });

    code += `let postData = ${this.params.filter(param => param.in === 'postData').map(param => param.name).join(' + ')}\n`;
    code += `request.httpBody = postData.data(using: .utf8)\n`;

    return code;
  }

  generateCookie() {
    let code = '';

    this.params
      .filter(param => param.in === 'cookie')
      .forEach(param => {
        code += `request.setValue("${param.value}", forHTTPHeaderField: "Cookie")\n`;
      });

    return code;
  }
}

export default SwiftGenerator;
