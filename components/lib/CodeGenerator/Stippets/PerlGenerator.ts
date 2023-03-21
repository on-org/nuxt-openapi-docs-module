import CodeGenerator from "./_CodeGenerator";

export class PerlGenerator extends CodeGenerator {
  protected generateHeaderFile(url: string): string {
    let code = '#!/usr/bin/perl\n';
    code += 'use LWP::UserAgent;\n';
    code += `my $url = "${this.baseUrl}${url}";\n`;
    code += `my $method = "${this.method.toLowerCase()}";\n`;
    code += 'my $ua = LWP::UserAgent->new();\n';
    return code;
  }

  protected generateFooterFile(url: string): string {
    let code = '';
    code += 'my $response = $ua->request($request);\n';
    code += 'print $response->content();\n';
    return code;
  }

  protected generateMimeTypeHeader(): string {
    return '';
  }

  protected generateHeaders(): string {
    let code = '';
    this.params
      .filter(param => param.in === 'headers')
      .forEach(param => {
        code += `$request->header("${param.name}" => "${param.value}");\n`;
      });
    return code;
  }

  protected generateQueryParams(): string {
    let code = '';
    this.params
      .filter(param => param.in === 'query')
      .forEach(param => {
        code += `$url .= '?' if ($url !~ /\\?/);\n`;
        code += `$url .= '${param.name}=${param.value}&';\n`;
      });
    return code;
  }

  protected generateJsonPostData(): string {
    let code = '';
    const postData = this.params.find(param => param.in === 'postData');
    code += `$request->header('Content-Type' => 'application/json');\n`;
    code += `my $json = '${postData.value}';\n`;
    code += 'my $data = decode_json($json);\n';
    code += '$request->content($json);\n';
    return code;
  }

  protected generateMultipartPostData(): string {
    let code = '';
    const postData = this.params.find(param => param.in === 'postData');
    code += '$request->header(\'Content-Type\' => \'multipart/form-data\');\n';
    code += `my $filename = '${postData.path}';\n`;
    code += 'open(my $fh, '<', $filename) or die "Can\'t open $filename: $!";\n';
    code += 'binmode($fh);\n';
    code += 'my $data;\n';
    code += 'while(<$fh>) {\n';
    code += ' $data .= $_;\n';
    code += '}\n';
    code += 'close($fh);\n';
    code += '$request->content($data);\n';
    return code;
  }

  protected generateOtherPostData(): string {
    let code = '';
    const postData = this.params.find(param => param.in === 'postData');
    code += '$request->header(\'Content-Type\' => \'${this.mimeType}\');\n';
    code += `my $data = '${postData.value}';\n`;
    code += '$request->content($data);\n';
    return code;
  }

  protected generateCookie(): string {
    let code = '';
    this.params
      .filter(param => param.in === 'cookie')
      .forEach(param => {
        code += `$request->header('Cookie', '${param.name}=${param.value}');\n`;
      });
    return code;
  }
}

export default PerlGenerator;
