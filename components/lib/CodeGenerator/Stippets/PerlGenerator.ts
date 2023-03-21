import CodeGenerator from "./_CodeGenerator";

class PerlGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    // Генерация заголовка Perl-скрипта
    return "#!/usr/bin/perl\nuse strict;\n\n";
  }

  generateFooterFile(url) {
    // Генерация завершающей части Perl-скрипта
    return "\nprint $response->content;\n";
  }

  generateMimeTypeHeader() {
    // Генерация заголовка Content-Type для Perl-скрипта
    return "my $headers = HTTP::Headers->new(Content_Type => '" + this.mimeType + "');\n\n";
  }

  generateHeaders() {
    // Генерация заголовков запроса для Perl-скрипта
    let headers = this.params.filter(param => param.in === 'headers')
      .map(param => "    '" + param.name + "' => '" + param.value + "',\n")
      .join("");
    return "my $headers = HTTP::Headers->new(\n" + headers + ");\n\n";
  }

  generateQueryParams() {
    // Генерация параметров запроса для Perl-скрипта
    let queryParams = this.params.filter(param => param.in === 'query')
      .map(param => "'" + param.name + "' => '" + param.value + "',\n")
      .join("");
    return "my $query = {\n" + queryParams + "};\n\n";
  }

  generateJsonPostData() {
    // Генерация JSON-данных для POST-запроса в Perl-скрипте
    let postData = this.params.filter(param => param.in === 'postData')[0];
    return "my $data = " + postData.value + ";\n\n";
  }

  generateMultipartPostData() {
    // Генерация Multipart-данных для POST-запроса в Perl-скрипте
    let boundary = "------------------------" + Math.random().toString(36).substring(2);
    let postData = this.params.filter(param => param.in === 'postData')[0];
    let body = "";

    // Генерация тела запроса с Multipart-данными
    if (postData.type === 'file') {
      // Загрузка файлов
      let filePath = postData.path;
      let fileName = filePath.split('/').pop();
      body += "--" + boundary + "\n";
      body += "Content-Disposition: form-data; name=\"" + postData.name + "\"; filename=\"" + fileName + "\"\n";
      body += "Content-Type: application/octet-stream\n\n";
      body += " file content\n";
    } else {
      // Обычные поля
      body += "--" + boundary + "\n";
      body += "Content-Disposition: form-data; name=\"" + postData.name + "\"\n\n";
      body += postData.value + "\n";
    }

    body += "--" + boundary + "--\n\n";

    // Генерация заголовков запроса с Multipart-данными
    let headers = this.params.filter(param => param.in === 'headers')
      .map(param => "    '" + param.name + "' => '" + param.value + "',\n")
      .join("");
    headers += "    'Content-Type' => 'multipart/form-data; boundary=" + boundary + "'\n";
    return "my $headers = HTTP::Headers->new(\n" + headers + ");\n\n" +
      "my $data = \"" + body + "\";\n\n";
  }

  generateOtherPostData() {
    // Генерация обычных POST-данных для Perl-скрипта
    let postData = this.params.filter(param => param.in === 'postData')[0];
    return "my $data = '" + postData.value + "';\n\n";
  }

  generateCookie() {
    // Генерация Cookie-данных для Perl-скрипта
    let cookieParams = this.params.filter(param => param.in === 'cookie')
      .map(param => '"' + param.name + '=' + param.value + '"')
      .join('; ');
    return "my $cookies = HTTP::Cookies->new(cookie_jar => {});\n" +
      "$cookies->set_cookie(0, '" + this.baseUrl + "', '" + cookieParams + "', '/', '', '', 0, 0, 86400, 0);\n\n";
  }
}

export default PerlGenerator;
