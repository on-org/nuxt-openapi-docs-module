import CodeGenerator from "./_CodeGenerator";

class JavaScriptTypescriptGenerator extends CodeGenerator {
  protected generateHeaderFile(url: string): string {
    return `import axios, { AxiosRequestConfig } from 'axios';

const url = '${this.baseUrl}${url}';
const config: AxiosRequestConfig = {
  method: '${this.method}',
`;
  }

  protected generateFooterFile(url: string): string {
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

  protected generateMimeTypeHeader(): string {
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

  protected generateHeaders(): string {
    const headers = this.params
      .filter(param => param.in === 'headers')
      .map(param => `'${param.name}': '${param.value}',`)
      .join('\n  ');
    return headers;
  }

  protected generateQueryParams(): string {
    const params = this.params
      .filter(param => param.in === 'query')
      .map(param => `'${param.name}': '${param.value}',`)
      .join('\n  ');
    return `params: {
  ${params}
},`;
  }

  protected generateJsonPostData(): string {
    const data = this.params
      .filter(param => param.in === 'postData')
      .map(param => `'${param.name}': '${param.value}',`)
      .join('\n  ');
    return `data: {
  ${data}
},`;
  }

  protected generateMultipartPostData(): string {
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

  protected generateOtherPostData(): string {
    const data = this.params
      .filter(param => param.in === 'postData')
      .map(param => `'${param.name}': '${param.value}',`)
      .join('\n  ');
    return `data: {
  ${data}
},`;
  }

  protected generateCookie(): string {
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
