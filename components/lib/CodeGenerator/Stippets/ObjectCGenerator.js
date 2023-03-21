import CodeGenerator from "./_CodeGenerator";

class ObjectCGenerator extends CodeGenerator {
  generateHeaderFile(url) {
    return `NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"${this.baseUrl}${url}"]];
`;
  }

  generateFooterFile(url) {
    return `NSURLSessionDataTask *task = [session dataTaskWithRequest:request completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
    // handle response
}];
[task resume];`;
  }

  generateMimeTypeHeader() {
    return `NSString *contentType = @"${this.mimeType}";
[request setValue:contentType forHTTPHeaderField:@"Content-Type"];
`;
  }

  generateHeaders() {
    let headers = '';
    this.params
      .filter(param => param.in === 'headers')
      .forEach(param => {
        headers += `[request setValue:@"${param.value}" forHTTPHeaderField:@"${param.name}"];
`;
      });
    return headers;
  }

  generateQueryParams() {
    let queryParams = '';
    let isFirst = true;
    this.params
      .filter(param => param.in === 'query')
      .forEach(param => {
        if (isFirst) {
          queryParams += `[url appendString:@"?${param.name}=${param.value}"];
`;
          isFirst = false;
        } else {
          queryParams += `[url appendString:@"&${param.name}=${param.value}"];
`;
        }
      });
    return queryParams;
  }

  generateJsonPostData() {
    return `NSData *postData = [NSJSONSerialization dataWithJSONObject:${JSON.stringify(this.getPostDataParamsValues())} options:NSJSONWritingPrettyPrinted error:&error];
[request setHTTPBody:postData];
`;
  }

  generateMultipartPostData() {
    return `NSData *postData = [self createMultipartFormData:${JSON.stringify(this.getPostDataParamsValues())}];
[request setHTTPBody:postData];
`;
  }

  generateOtherPostData() {
    let postData = '';
    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        postData += `[request setHTTPBody:[@"${param.value}" dataUsingEncoding:NSUTF8StringEncoding]];
`;
      });
    return postData;
  }

  generateCookie() {
    let cookieParams = '';
    this.params
      .filter(param => param.in === 'cookie')
      .forEach(param => {
        cookieParams += `[request addValue:@"${param.value}" forHTTPHeaderField:@"Cookie"];
`;
      });
    return cookieParams;
  }

  getPostDataParamsValues() {
    let postDataParams = {};
    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        if (param.type === 'file') {
          postDataParams[param.name] = `[NSURL fileURLWithPath:@"${param.path}"]`;
        } else {
          postDataParams[param.name] = param.value;
        }
      });
    return postDataParams;
  }
}

export default ObjectCGenerator;
