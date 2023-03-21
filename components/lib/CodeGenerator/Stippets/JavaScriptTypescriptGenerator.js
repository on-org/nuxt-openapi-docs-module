import CodeGenerator from "./_CodeGenerator";

class JavaScriptTypescriptGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    return `import axios, { AxiosRequestConfig } from 'axios';

const url = '${this.baseUrl}${url}';
const config: AxiosRequestConfig = {
  method: '${this.method}',
`;
  }

  generateFooterFile(url) {
    return `
};

axios(url, config)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
`;
  }

  generateMimeTypeHeader() {
    let headers = '';
    switch (this.mimeType) {
      case 'application/json':
        headers = `'Content-Type': 'application/json',`;
        break;
      case 'multipart/form-data':
        headers = `'Content-Type': 'multipart/form-data',`;
        break;
      case 'application/x-www-form-urlencoded':
        headers = `'Content-Type': 'application/x-www-form-urlencoded',`;
        break;
      default:
        headers = '';
    }
    return headers;
  }

  generateHeaders() {
    const headers = this.params
      .filter(param => param.in === 'headers')
      .map(param => `'${param.name}': '${param.value}',`)
      .join('\n  ');
    return headers;
  }

  generateQueryParams() {
    const params = this.params
      .filter(param => param.in === 'query')
      .map(param => `'${param.name}': '${param.value}',`)
      .join('\n  ');
    return `params: {
  ${params}
},`;
  }

  generateJsonPostData() {
    const data = this.params
      .filter(param => param.in === 'postData')
      .map(param => `'${param.name}': '${param.value}',`)
      .join('\n  ');
    return `data: {
  ${data}
},`;
  }

  generateMultipartPostData() {
    const data = this.params
      .filter(param => param.in === 'postData' && param.type === 'file')
      .map(param => `{
  name: '${param.name}',
  filename: '${param.path}',
  data: fs.readFileSync('${param.path}'),
},`)
      .join('\n  ');
    return `data: [
  ${data}
],`;
  }

  generateOtherPostData() {
    const data = this.params
      .filter(param => param.in === 'postData')
      .map(param => `'${param.name}': '${param.value}',`)
      .join('\n  ');
    return `data: {
  ${data}
},`;
  }

  generateCookie() {
    const cookies = this.params
      .filter(param => param.in === 'cookie')
      .map(param => `${param.name}=${param.value}`)
      .join(';');
    return `withCredentials: true,
headers: {
  'Cookie': '${cookies}',
},`;
  }
}

export default JavaScriptTypescriptGenerator;
