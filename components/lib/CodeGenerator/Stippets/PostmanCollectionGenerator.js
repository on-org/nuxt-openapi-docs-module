import CodeGenerator from "./_CodeGenerator";

export class PostmanCollectionGenerator extends CodeGenerator {
  collection = {
    info: {
      name: "Generated Collection",
      schema: "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
    },
    item: []
  };

  generateHeaderFile(url) {
    return "";
  }

  generateFooterFile(url) {
    // Генерация объекта Postman коллекции
    const request = {
      url: this.baseUrl + url,
      method: this.method,
      header: [],
      body: {}
    };

    if (this.hasHeadersParams()) {
      this.params.filter(param => param.in === 'headers')
        .forEach(param => {
          request.header.push({
            key: param.name,
            value: param.value
          });
        });
    }

    if (this.hasQueryParams()) {
      request.url += '?';
      this.params.filter(param => param.in === 'query')
        .forEach((param, index, array) => {
          request.url += param.name + '=' + param.value;
          if (index !== array.length - 1) {
            request.url += '&';
          }
        });
    }

    if (this.hasPostDataParams()) {
      if (this.mimeType === 'application/json') {
        request.body.mode = 'raw';
        request.body.raw = JSON.stringify(this.getPostDataJSON());
      } else if (this.mimeType === 'multipart/form-data') {
        request.body.mode = 'formdata';
        request.body.formdata = this.getPostDataFormData();
      } else {
        request.body.mode = 'urlencoded';
        request.body.urlencoded = this.getPostDataUrlEncoded();
      }
    }

    if (this.hasCookieParams()) {
      request.header.push({
        key: 'Cookie',
        value: this.getCookieString()
      });
    }

    const item = {
      name: this.method + ' ' + url,
      request: request,
      response: []
    };

    this.collection.item.push(item);

    return JSON.stringify(this.collection, null, 2);
  }

  generateMimeTypeHeader() {
    return "";
  }

  generateHeaders() {
    return "";
  }

  generateQueryParams() {
    return "";
  }

  generateJsonPostData() {
    return "";
  }

  generateMultipartPostData() {
    return "";
  }

  generateOtherPostData() {
    return "";
  }

  generateCookie() {
    const cookie = this.params.filter(param => param.in === 'cookie')
      .map(param => param.name + '=' + param.value)
      .join('; ');
    return 'pm.cookies.set("' + this.baseUrl + '", "' + cookie + '");\n';
  }

  getPostDataJSON() {
    const postDataJSON = {};
    this.params.filter(param => param.in === 'postData')
      .forEach(param => {
        postDataJSON[param.name] = param.value;
      });
    return postDataJSON;
  }

  getPostDataFormData() {
    const postDataFormData = [];
    this.params.filter(param => param.in === 'postData')
      .forEach(param => {
        if (param.type === 'file') {
          const file = {
            key: param.name,
            src: param.path,
            type: 'file'
          };
          postDataFormData.push(file);
        } else {
          const data = {
            key: param.name,
            value: param.value
          };
          postDataFormData.push(data);
        }
      });
    return postDataFormData;
  }

  getPostDataUrlEncoded() {
    const postDataUrlEncoded = [];
    this.params.filter(param => param.in === 'postData')
      .forEach(param => {
        const data = {
          key: param.name,
          value: param.value
        };
        postDataUrlEncoded.push(data);
      });
    return postDataUrlEncoded;
  }

  getCookieString() {
    return this.params.filter(param => param.in === 'cookie')
      .map(param => param.name + '=' + param.value)
      .join('; ');
  }
}

export default PostmanCollectionGenerator;
