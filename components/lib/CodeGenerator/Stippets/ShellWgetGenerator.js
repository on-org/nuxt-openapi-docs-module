import CodeGenerator from "./_CodeGenerator";

class ShellWgetGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    return `wget --header='Accept: application/json' --no-check-certificate --quiet --output-document=- '${this.baseUrl}${url}'`;
  }

  generateFooterFile(url) {
    return '';
  }

  generateMimeTypeHeader() {
    if (this.mimeType === 'application/json') {
      return ` --header='Content-Type: application/json'`;
    } else if (this.mimeType === 'multipart/form-data') {
      return ` --header='Content-Type: multipart/form-data'`;
    } else {
      return ` --header='Content-Type: ${this.mimeType}'`;
    }
  }

  generateHeaders() {
    return this.params
      .filter(param => param.in === 'headers')
      .map(param => ` --header='${param.name}: ${param.value}'`)
      .join('');
  }

  generateQueryParams() {
    return this.params
      .filter(param => param.in === 'query')
      .map(param => ` '${param.name}=${param.value}'`)
      .join('');
  }

  generateJsonPostData() {
    return ` --post-data='${JSON.stringify(this.params.find(param => param.in === 'postData'))}'`;
  }

  generateMultipartPostData() {
    const postDataParam = this.params.find(param => param.in === 'postData');
    const fileParam = this.params.find(param => param.type === 'file');

    let postData = '';
    if (postDataParam) {
      for (const [key, value] of Object.entries(postDataParam.value)) {
        postData += `--form '${key}=${value}' `;
      }
    }

    if (fileParam) {
      postData += ` --form '${fileParam.name}=@${fileParam.path}'`;
    }

    return postData;
  }

  generateOtherPostData() {
    return ` --post-data='${this.params.find(param => param.in === 'postData').value}'`;
  }

  generateCookie() {
    return this.params
      .filter(param => param.in === 'cookie')
      .map(param => ` --header='Cookie: ${param.name}=${param.value}'`)
      .join('');
  }

  generateFilePath() {
    const fileParam = this.params.find(param => param.type === 'file');
    return fileParam ? fileParam.path : '';
  }

  generateWgetCommand() {
    let url = this.url;

    this.params
      .filter(param => param.in === 'path')
      .forEach(param => {
        url = url.replace(`{${param.name}}`, param.value)
      });

    let command = this.generateHeaderFile(url);

    if (this.hasCookieParams()) {
      command += this.generateCookie();
    }

    if (this.hasMimeType()) {
      command += this.generateMimeTypeHeader();
    }

    if (this.hasHeadersParams()) {
      command += this.generateHeaders();
    }

    if (this.hasQueryParams()) {
      command += this.generateQueryParams();
    } else if (this.hasPostDataParams()) {
      if (this.mimeType === 'application/json') {
        command += this.generateJsonPostData();
      } else if (this.mimeType === 'multipart/form-data') {
        command += this.generateMultipartPostData()
      } else {
        command += this.generateOtherPostData()
      }
    }

    command += this.generateFooterFile(this.url);

    return command;
  }

  generateCode() {
    const command = this.generateWgetCommand();
    const filePath = this.generateFilePath();

    if (filePath) {
      return `${command} -O ${filePath}`;
    } else {
      return command;
    }
  }
}


export default ShellWgetGenerator;
