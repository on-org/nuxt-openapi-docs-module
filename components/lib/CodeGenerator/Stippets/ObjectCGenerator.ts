import CodeGenerator from "./_CodeGenerator";

class ObjectCGenerator extends CodeGenerator {
  protected generateHeaderFile(url): string {
    return `NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"${this.baseUrl}${url}"]];
`;
  }

  protected generateFooterFile(url): string {
    return `NSURLSessionDataTask *task = [session dataTaskWithRequest:request completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
    // handle response
}];
[task resume];`;
  }

  protected generateMimeTypeHeader(): string {
    return `NSString *contentType = @"${this.mimeType}";
[request setValue:contentType forHTTPHeaderField:@"Content-Type"];
`;
  }

  protected generateHeaders(): string {
    let headers = '';
    this.params
      .filter(param => param.in === 'headers')
      .forEach(param => {
        headers += `[request setValue:@"${param.value}" forHTTPHeaderField:@"${param.name}"];
`;
      });
    return headers;
  }

  protected generateQueryParams(): string {
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

  protected generateJsonPostData(): string {
    return `NSData *postData = [NSJSONSerialization dataWithJSONObject:${JSON.stringify(this.getPostDataParamsValues())} options:NSJSONWritingPrettyPrinted error:&error];
[request setHTTPBody:postData];
`;
  }

  protected generateMultipartPostData(): string {
    return `NSData *postData = [self createMultipartFormData:${JSON.stringify(this.getPostDataParamsValues())}];
[request setHTTPBody:postData];
`;
  }

  protected generateOtherPostData(): string {
    let postData = '';
    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        postData += `[request setHTTPBody:[@"${param.value}" dataUsingEncoding:NSUTF8StringEncoding]];
`;
      });
    return postData;
  }

  protected generateCookie(): string {
    let cookieParams = '';
    this.params
      .filter(param => param.in === 'cookie')
      .forEach(param => {
        cookieParams += `[request addValue:@"${param.value}" forHTTPHeaderField:@"Cookie"];
`;
      });
    return cookieParams;
  }

  private getPostDataParamsValues(): any {
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
