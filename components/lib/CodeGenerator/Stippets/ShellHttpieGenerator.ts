import CodeGenerator from "./_CodeGenerator";

export class ShellHttpieGenerator extends CodeGenerator {
  protected generateHeaderFile(url: string): string {
    return `http ${this.method} ${this.baseUrl}${url}`;
  }

  protected generateFooterFile(url: string): string {
    return '';
  }

  protected generateMimeTypeHeader(): string {
    if (this.mimeType === 'application/json') {
      return '--json';
    } else if (this.mimeType === 'multipart/form-data') {
      return '--form';
    } else {
      return '';
    }
  }

  protected generateHeaders(): string {
    const headers = this.params.filter(param => param.in === 'headers');
    return headers.map(header => `${header.name}:${header.value}`).join(' ');
  }

  protected generateQueryParams(): string {
    const queryParams = this.params.filter(param => param.in === 'query');
    return queryParams.map(queryParam => `${queryParam.name}=${queryParam.value}`).join(' ');
  }

  protected generateJsonPostData(): string {
    const postData = this.params.filter(param => param.in === 'postData');
    const jsonObj = postData.reduce((acc, curr) => {
      acc[curr.name] = curr.value;
      return acc;
    }, {});
    return JSON.stringify(jsonObj);
  }

  protected generateMultipartPostData(): string {
    const postData = this.params.filter(param => param.in === 'postData');
    const files = postData.filter(param => param.type === 'file');
    const formData = postData.filter(param => param.type !== 'file');
    let result = '';
    if (files.length > 0) {
      result += files
        .map(file => `${file.name}=@${file.path}`)
        .join(' ');
    }
    if (formData.length > 0) {
      result += formData
        .map(data => `${data.name}=${data.value}`)
        .join(' ');
    }
    return result;
  }

  protected generateOtherPostData(): string {
    const postData = this.params.filter(param => param.in === 'postData');
    const data = postData.reduce((acc, curr) => {
      acc[curr.name] = curr.value;
      return acc;
    }, {});
    return Object.keys(data)
      .map(key => `${key}=${data[key]}`)
      .join(' ');
  }

  protected generateCookie(): string {
    const cookies = this.params.filter(param => param.in === 'cookie');
    return `Cookie:${cookies.map(cookie => `${cookie.name}=${cookie.value}`).join(';')}`;
  }
}

export default ShellHttpieGenerator;
