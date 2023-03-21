import JavaScriptXMLHttpRequestGenerator from "./Stippets/JavaScriptXMLHttpRequestGenerator";
import {Param} from "./Stippets/_CodeGenerator";
import JavaScriptAxiosGenerator from "./Stippets/JavaScriptAxiosGenerator";
import JavaScriptFetchGenerator from "./Stippets/JavaScriptFetchGenerator";
import JavaScriptJQueryGenerator from "./Stippets/JavaScriptJQueryGenerator";
import ShellCurlGenerator from "./Stippets/ShellCurlGenerator";
import ShellHttpieGenerator from "./Stippets/ShellHttpieGenerator";
import ShellWgetGenerator from "./Stippets/ShellWgetGenerator";
import Python3Generator from "./Stippets/Python3Generator";
import PythonRequestsGenerator from "./Stippets/PythonRequestsGenerator";
import GoGenerator from "./Stippets/GoGenerator";
import CGenerator from "./Stippets/CGenerator";
import OcamlGenerator from "./Stippets/OcamlGenerator";
import CSharpHttpClientGenerator from "./Stippets/CSharpHttpclientGenerator";
import CSharpRestSharpGenerator from "./Stippets/CSharpRestSharpGenerator";
import JavaAsyncHttpClientGenerator from "./Stippets/JavaAsyncHttpClientGenerator";
import JavaNetHttpClientGenerator from "./Stippets/JavaNetHttpClientGenerator";
import JavaOkHttpGenerator from "./Stippets/JavaOkHttpGenerator";
import HttpUrlStringGenerator from "./Stippets/HttpUrlStringGenerator";
import JavaUnirestGenerator from "./Stippets/JavaUnirestGenerator";
import ClojureGenerator from "./Stippets/ClojureHttpGenerator";
import KotlinGenerator from "./Stippets/KotlinGenerator";
import PhpCurlGenerator from "./Stippets/PhpCurlGenerator";
import PhpGuzzleGenerator from "./Stippets/PhpGuzzleGenerator";
import PowerShellWebRequestGenerator from "./Stippets/PowerShellWebRequestGenerator";
import PowerShellRestMethodGenerator from "./Stippets/PowerShellRestMethodGenerator";
import RGenerator from "./Stippets/RGenerator";
import RubyGenerator from "./Stippets/RubyGenerator";
import RustGenerator from "./Stippets/RustGenerator";
import SwiftGenerator from "./Stippets/SwiftGenerator";
import BrainfuckGenerator from "./Stippets/BrainfuckGenerator";
import ArduinoGenerator from "./Stippets/ArduinoGenerator";
import PhpHttp1Generator from "./Stippets/PhpHttp1Generator";
import PhpHttp2Generator from "./Stippets/PhpHttp2Generator";
import JavaScriptTypescriptGenerator from "./Stippets/JavaScriptTypescriptGenerator";
import ObjectCGenerator from "./Stippets/ObjectCGenerator";
import CppGenerator from "./Stippets/CppGenerator";
import DartGenerator from "./Stippets/DartGenerator";
import ScalaGenerator from "./Stippets/ScalaGenerator";
import LuaGenerator from "./Stippets/LuaGenerator";
import PerlGenerator from "./Stippets/PerlGenerator";

export class CodeGenerator {
  _baseUrl = '';
  _url = '';
  _method = 'GET';
  _params = [];
  _mimeType = 'application/x-www-form-urlencoded';
  _lang = 'javascript';
  _library = 'xmlhttprequest';

  constructor() {}

  library(value) {
    this._library = value;
    return this;
  }
  lang(value) {
    this._lang = value;
    return this;
  }
  mimeType(value) {
    this._mimeType = value;
    return this;
  }
  params(value) {
    this._params = value;
    return this;
  }
  method(value) {
    this._method = value;
    return this;
  }
  url(value) {
    value = value.startsWith('/') ? value.substring(1) : value
    this._url = value;
    return this;
  }
  baseUrl(value) {
    if (!value.endsWith('/')) {
      value += '/';
    }
    this._baseUrl = value;
    return this;
  }
  convertParams() {
    return {
      baseUrl: this._baseUrl,
      method: this._method,
      mimeType: this._mimeType,
      params: this._params,
      url: this._url
    }
  }
  convert() {
    switch (this._lang) {
      case 'shell':
        switch (this._library) {
          case 'curl':
            return (new ShellCurlGenerator(this.convertParams())).generateCode();
          case 'httpie':
            return (new ShellHttpieGenerator(this.convertParams())).generateCode();
          case 'wget':
            return (new ShellWgetGenerator(this.convertParams())).generateCode();
          default:
            throw new Error('bad library')
        }
      case 'javascript':
        switch (this._library) {
          case 'xmlhttprequest':
            return (new JavaScriptXMLHttpRequestGenerator(this.convertParams())).generateCode();
          case 'jquery':
            return (new JavaScriptJQueryGenerator(this.convertParams())).generateCode();
          case 'fetch':
            return (new JavaScriptFetchGenerator(this.convertParams())).generateCode();
          case 'axios':
            return (new JavaScriptAxiosGenerator(this.convertParams())).generateCode();
          case 'typescript':
            return (new JavaScriptTypescriptGenerator(this.convertParams())).generateCode();
          default:
            throw new Error('bad library')
        }
      case 'python':
        switch (this._library) {
          case 'python':
            return (new Python3Generator(this.convertParams())).generateCode();
          case 'requests':
            return (new PythonRequestsGenerator(this.convertParams())).generateCode();
          default:
            throw new Error('bad library')
        }
      case 'go':
        return (new GoGenerator(this.convertParams())).generateCode();
      case 'c':
        return (new CGenerator(this.convertParams())).generateCode();
      case 'ocaml':
        return (new OcamlGenerator(this.convertParams())).generateCode();
      case 'csharp':
        switch (this._library) {
          case 'httpclient':
            return (new CSharpHttpClientGenerator(this.convertParams())).generateCode();
          case 'restsharp':
            return (new CSharpRestSharpGenerator(this.convertParams())).generateCode();
          default:
            throw new Error('bad library')
        }
      case 'java':
        switch (this._library) {
          case 'asynchttp':
            return (new JavaAsyncHttpClientGenerator(this.convertParams())).generateCode();
          case 'nethttp':
            return (new JavaNetHttpClientGenerator(this.convertParams())).generateCode();
          case 'okhttp':
            return (new JavaOkHttpGenerator(this.convertParams())).generateCode();
          case 'unirest':
            return (new JavaUnirestGenerator(this.convertParams())).generateCode();
          default:
            throw new Error('bad library')
        }
      case 'http':
        return (new HttpUrlStringGenerator(this.convertParams())).generateCode();
      case 'clojure':
        return (new ClojureGenerator(this.convertParams())).generateCode();
      case 'kotlin':
        return (new KotlinGenerator(this.convertParams())).generateCode();
      case 'php':
        switch (this._library) {
          case 'http1':
            return (new PhpHttp1Generator(this.convertParams())).generateCode();
          case 'http2':
            return (new PhpHttp2Generator(this.convertParams())).generateCode();
          case 'curl':
            return (new PhpCurlGenerator(this.convertParams())).generateCode();
          case 'guzzle':
            return (new PhpGuzzleGenerator(this.convertParams())).generateCode();
          default:
            throw new Error('bad library')
        }
      case 'powershell':
        switch (this._library) {
          case 'webrequest':
            return (new PowerShellWebRequestGenerator(this.convertParams())).generateCode();
          case 'restmethod':
            return (new PowerShellRestMethodGenerator(this.convertParams())).generateCode();
          default:
            throw new Error('bad library')
        }
      case 'r':
        return (new RGenerator(this.convertParams())).generateCode();
      case 'ruby':
        return (new RubyGenerator(this.convertParams())).generateCode();
      case 'rust':
        return (new RustGenerator(this.convertParams())).generateCode();
      case 'swift':
        return (new SwiftGenerator(this.convertParams())).generateCode();
      case 'objectc':
        return (new ObjectCGenerator(this.convertParams())).generateCode();
      case 'cpp':
        switch (this._library) {
          case 'iostream':
            return (new CppGenerator(this.convertParams())).generateCode();
          case 'arduino':
            return (new ArduinoGenerator(this.convertParams())).generateCode();
          default:
            throw new Error('bad library')
        }
      case 'dart':
        return (new DartGenerator(this.convertParams())).generateCode();
      case 'scala':
        return (new ScalaGenerator(this.convertParams())).generateCode();
      case 'lua':
        return (new LuaGenerator(this.convertParams())).generateCode();
      case 'perl':
        return (new PerlGenerator(this.convertParams())).generateCode();
      case 'brainfuck':
        return (new BrainfuckGenerator(this.convertParams())).generateCode();
      default:
        throw new Error('bad lang')
    }
  }
}

