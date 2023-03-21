import JavaScriptSyntaxHighlighter from "./Stippets/JavaScriptSyntaxHighlighter";
import BashSyntaxHighlighter from "./Stippets/BashSyntaxHighlighter";
import PythonSyntaxHighlighter from "./Stippets/PythonSyntaxHighlighter";
import GoSyntaxHighlighter from "./Stippets/GoSyntaxHighlighter";
import CSyntaxHighlighter from "./Stippets/CSyntaxHighlighter";
import OcamlSyntaxHighlighter from "./Stippets/OcamlSyntaxHighlighter";
import CSharpSyntaxHighlighter from "./Stippets/CSharpSyntaxHighlighter";
import JavaSyntaxHighlighter from "./Stippets/JavaSyntaxHighlighter";
import HttpSyntaxHighlighter from "./Stippets/HttpSyntaxHighlighter";
import ClojureSyntaxHighlighter from "./Stippets/ClojureSyntaxHighlighter";
import KotlinSyntaxHighlighter from "./Stippets/KotlinSyntaxHighlighter";
import PHPSyntaxHighlighter from "./Stippets/PHPSyntaxHighlighter";
import PowerShellSyntaxHighlighter from "./Stippets/PowerShellSyntaxHighlighter";
import RSyntaxHighlighter from "./Stippets/RSyntaxHighlighter";
import RubySyntaxHighlighter from "./Stippets/RubySyntaxHighlighter";
import RustSyntaxHighlighter from "./Stippets/RustSyntaxHighlighter";
import SwiftSyntaxHighlighter from "./Stippets/SwiftSyntaxHighlighter";
import ObjectCSyntaxHighlighter from "./Stippets/ObjectCSyntaxHighlighter";
import CppSyntaxHighlighter from "./Stippets/CppSyntaxHighlighter";
import DartSyntaxHighlighter from "./Stippets/DartSyntaxHighlighter";
import ScalaSyntaxHighlighter from "./Stippets/ScalaSyntaxHighlighter";
import LuaSyntaxHighlighter from "./Stippets/LuaSyntaxHighlighter";
import PerlSyntaxHighlighter from "./Stippets/PerlSyntaxHighlighter";
import BrainfuckSyntaxHighlighter from "./Stippets/BrainfuckSyntaxHighlighter";

export class CodeSyntaxHighlighter {
  private _lang: string = 'javascript';

  constructor() {}
  lang(value: string) {
    this._lang = value;
    return this;
  }
  convert(code: string) {
    switch (this._lang) {
      case 'shell':
        return (new BashSyntaxHighlighter).highlight(code);
      case 'javascript':
        return (new JavaScriptSyntaxHighlighter).highlight(code);
      case 'python':
        return (new PythonSyntaxHighlighter).highlight(code);
      case 'go':
        return (new GoSyntaxHighlighter).highlight(code);
      case 'c':
        return (new CSyntaxHighlighter).highlight(code);
      case 'ocaml':
        return (new OcamlSyntaxHighlighter).highlight(code);
      case 'csharp':
        return (new CSharpSyntaxHighlighter).highlight(code);
      case 'java':
        return (new JavaSyntaxHighlighter).highlight(code);
      case 'http':
        return (new HttpSyntaxHighlighter).highlight(code);
      case 'clojure':
        return (new ClojureSyntaxHighlighter).highlight(code);
      case 'kotlin':
        return (new KotlinSyntaxHighlighter).highlight(code);
      case 'php':
        return (new PHPSyntaxHighlighter).highlight(code);
      case 'powershell':
        return (new PowerShellSyntaxHighlighter).highlight(code);
      case 'r':
        return (new RSyntaxHighlighter).highlight(code);
      case 'ruby':
        return (new RubySyntaxHighlighter).highlight(code);
      case 'rust':
        return (new RustSyntaxHighlighter).highlight(code);
      case 'swift':
        return (new SwiftSyntaxHighlighter).highlight(code);
      case 'objectc':
        return (new ObjectCSyntaxHighlighter).highlight(code);
      case 'cpp':
        return (new CppSyntaxHighlighter).highlight(code);
      case 'dart':
        return (new DartSyntaxHighlighter).highlight(code);
      case 'scala':
        return (new ScalaSyntaxHighlighter).highlight(code);
      case 'lua':
        return (new LuaSyntaxHighlighter).highlight(code);
      case 'perl':
        return (new PerlSyntaxHighlighter).highlight(code);
      case 'brainfuck':
        return (new BrainfuckSyntaxHighlighter).highlight(code);
      default:
        throw new Error('bad lang')
    }
  }
}
