import CodeGenerator from "./_CodeGenerator";

class DartGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    return `import 'dart:convert';
import 'package:http/http.dart' as http;

void main() async {
  var url = '${this.baseUrl}${url}';
`;
  }

  generateFooterFile(url) {
    return `}
`;
  }

  generateMimeTypeHeader() {
    return `  var headers = {'Content-Type': '${this.mimeType}'};
`;
  }

  generateHeaders() {
    let headersCode = '';
    this.params.filter(param => param.in === 'headers').forEach(param => {
      headersCode += `  headers['${param.name}'] = '${param.value}';
`;
    });
    return headersCode;
  }

  generateQueryParams() {
    let queryParamsCode = '';
    this.params.filter(param => param.in === 'query').forEach(param => {
      queryParamsCode += `  url = Uri.parse(url).replace(queryParameters: {'${param.name}': '${param.value}'}).toString();
`;
    });
    return queryParamsCode;
  }

  generateJsonPostData() {
    let jsonData = {};
    this.params.filter(param => param.in === 'postData').forEach(param => {
      if (param.type === 'file') {
        return `File type is not supported for Content-Type: ${this.mimeType}`;
      } else {
        jsonData[param.name] = param.value;
      }
    });
    return `  var body = json.encode(${JSON.stringify(jsonData)});
`;
  }

  generateMultipartPostData() {
    return 'multipart/form-data is not supported yet';
  }

  generateOtherPostData() {
    let postDataCode = '';
    this.params.filter(param => param.in === 'postData').forEach(param => {
      if (param.type === 'file') {
        return `File type is not supported for Content-Type: ${this.mimeType}`;
      } else {
        postDataCode += `  var body = '${param.name}=${param.value}';
`;
      }
    });
    return postDataCode;
  }

  generateCookie() {
    let cookieCode = '';
    this.params.filter(param => param.in === 'cookie').forEach(param => {
      cookieCode += `  headers['Cookie'] = '${param.name}=${param.value}';
`;
    });
    return cookieCode;
  }

  generateCode() {
    let url = this.url;

    this.params
      .filter(param => param.in === 'path')
      .forEach(param => {
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

    fetchCode += `  var response = await http.${this.method.toLowerCase()}(url, headers: headers, body: body);

  print(response.body);
}`;

    return fetchCode;
  }
}

export default DartGenerator;
