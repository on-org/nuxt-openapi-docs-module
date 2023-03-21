import CodeGenerator from "./_CodeGenerator";

export class ScalaGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    return `import scalaj.http.Http
import scalaj.http.HttpResponse

object Main {
def main(args: Array[String]): Unit = {
val response: HttpResponse[String] = Http("${this.baseUrl}${url}")`;
  }

  generateFooterFile(url) {
    return `\n     .asString     \nprintln(response.body)\n   } \n}`;
  }

  generateMimeTypeHeader() {
    if (this.mimeType === 'application/json') {
      return `\n     .header("Content-Type", "application/json")`;
    } else if (this.mimeType === 'multipart/form-data') {
      return `\n     .header("Content-Type", "multipart/form-data")`;
    } else {
      return `\n     .header("Content-Type", "application/x-www-form-urlencoded")`;
    }
  }

  generateHeaders() {
    let headersCode = '';
    this.params
      .filter(param => param.in === 'headers')
      .forEach(param => {
        headersCode += `\n     .header("${param.name}", "${param.value}")\n`;
      });
    return headersCode;
  }

  generateQueryParams() {
    let queryParamsCode = '';
    this.params
      .filter(param => param.in === 'query')
      .forEach(param => {
        queryParamsCode += `\n     .param('${param.name}', '${param.value}')\n`;
      });
    return queryParamsCode;
  }

  generateJsonPostData() {
    let postData = '';
    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        if (param.type === 'file') {
          postData += `${param.name}=@${param.path}`
        } else {
          postData += `${param.name}=${param.value}`
        }
      });
    return `\n     .postData(${postData})`;
  }

  generateMultipartPostData() {
    let postData = '';
    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        if (param.type === 'file') {
          postData += `\n     .postMulti(MultiPart("${param.name}", "${param.path}"))`
        } else {
          postData += `\n     .postMulti(MultiPart("${param.name}", "${param.value}"))`
        }
      });
    return postData;
  }

  generateOtherPostData() {
    let postData = '';
    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        if (param.type === 'file') {
          postData += `\n     .postData(("${param.name}", "${param.path}"))`
        } else {
          postData += `\n     .postData(("${param.name}", "${param.value}"))`
        }
      });
    return postData;
  }

  generateCookie() {
    let cookieCode = '';
    this.params
      .filter(param => param.in === 'cookie')
      .forEach(param => {
        cookieCode += `\n     .cookie("${param.name}", "${param.value}")\n`;
      });
    return cookieCode;
  }
}

export default ScalaGenerator;
