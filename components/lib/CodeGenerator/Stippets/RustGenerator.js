import CodeGenerator from "./_CodeGenerator";

class RustGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    return `use reqwest::header;
use std::collections::HashMap;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::blocking::Client::new();
    let mut headers = header::HeaderMap::new();
    let mut url = "${this.baseUrl}${url}".to_string();
`;
  }

  generateFooterFile(url) {
    return `\n    let response = client.${this.method.toLowerCase()}(&url)
        .headers(headers)
        .send()?;
    println!("Status: {{}}", response.status());
    Ok(())
}`;
  }

  generateMimeTypeHeader() {
    if (this.mimeType === 'application/json') {
      return `    headers.insert(header::CONTENT_TYPE, header::HeaderValue::from_static("application/json"));`;
    } else if (this.mimeType === 'multipart/form-data') {
      return `    headers.insert(header::CONTENT_TYPE, header::HeaderValue::from_static("multipart/form-data"));`;
    } else {
      return `    headers.insert(header::CONTENT_TYPE, header::HeaderValue::from_static("application/x-www-form-urlencoded"));`;
    }
  }

  generateHeaders() {
    const headerParams = this.params.filter(param => param.in === 'headers');
    let headersCode = '';
    headerParams.forEach(param => {
      headersCode += `    headers.insert(header::HeaderName::from_static("${param.name}"), header::HeaderValue::from_static("${param.value}"));\n`;
    });
    return headersCode;
  }

  generateQueryParams() {
    const queryParams = this.params.filter(param => param.in === 'query');
    let queryParamsCode = '';
    queryParams.forEach(param => {
      queryParamsCode += `    url = url.replace("{${param.name}}", &${param.value}.to_string());\n`;
    });
    return queryParamsCode;
  }

  generateJsonPostData() {
    const postDataParams = this.params.filter(param => param.in === 'postData');
    let postDataCode = `    let data = json::json!({\n`;
    postDataParams.forEach(param => {
      postDataCode += `        "${param.name}": ${param.value},\n`;
    });
    postDataCode += `    });\n`;
    postDataCode += `    let body = serde_json::to_string(&data)?;\n`;
    postDataCode += `    let request = client.${this.method.toLowerCase()}(&url)\n`;
    postDataCode += `        .headers(headers)\n`;
    postDataCode += `        .body(body)\n`;
    postDataCode += `        .send()?;\n`;
    return postDataCode;
  }

  generateMultipartPostData() {
    const postDataParams = this.params.filter(param => param.in === 'postData');
    let postDataCode = `    let mut form = reqwest::multipart::Form::new();\n`;
    postDataParams.forEach(param => {
      if (param.type === 'file' && param.path) {
        postDataCode += `    let file = std::fs::File::open("${param.path}")?;\n`;
        postDataCode += `    let field = reqwest::multipart::Part::stream(reqwest::Body::wrap_stream(file)).file_name("${param.name}");\n`;
        postDataCode += `    form = form.part("${param.name}", field);\n`;
      } else {
        postDataCode += `    form = form.text("${param.name}", ${param.value});\n`;
      }
    });
    postDataCode += `    let response = client.${this.method.toLowerCase()}(&url)\n`;
    postDataCode += `        .headers(headers)\n`;
    postDataCode += `        .multipart(form)\n`;
    postDataCode += `        .send()?;\n`;
    return postDataCode;
  }

  generateOtherPostData() {
    const postDataParams = this.params.filter(param => param.in === 'postData');
    let postDataCode = `    let mut data = HashMap::new();\n`;
    postDataParams.forEach(param => {
      postDataCode += `    data.insert("${param.name}", ${param.value});\n`;
    });
    postDataCode += `    let request = client.${this.method.toLowerCase()}(&url)\n`;
    postDataCode += `        .headers(headers)\n`;
    postDataCode += `        .form(&data)\n`;
    postDataCode += `        .send()?;\n`;
    return postDataCode;
  }

  generateCookie() {
    const cookieParams = this.params.filter(param => param.in === 'cookie');
    let cookieCode = `    let mut cookie = String::new();
  `;
    cookieParams.forEach(param => {
      cookieCode += `    cookie.push_str("${param.name}=${param.value}; ");
    `;
    });
    cookieCode += `    headers.insert(header::COOKIE, header::HeaderValue::from_str(&cookie[..cookie.len() - 2])?);
  `;
    return cookieCode;
  }
}

export default RustGenerator;
