import * as ts from 'ntypescript';
import * as fs from 'fs';
import * as path from 'path';
import { Submission, Info } from './type';

class HtmlParse {
  private HTML_DECODE: any = {
    '&lt;': '<',
    '&gt;': '>',
    '&amp;': '&',
    '&nbsp;': ' ',
    '&quot;': '"',
    '&#39;': '\'',
    '&copy;': '©'
  };
  parse() {
    // <p></p> -> ''
    // <code></code> -> ``
    // <em></em> -> **
    // <strong></strong> -> ****
    // <pre><pre> -> ```bash```
    // <img>
    // <div></div>
    // <b></b>
    // <br />
    // <ol></ol>
    // <li></li>
    // 转义字符
  }
}

/**
 * 解析器
 * @author gcy[yalda]
 * @date 2019.08
 */
export class Parser {
  private submissions: Submission[] = [];

  /**
   * 加载文件
   */
  public load = ({ filePath }: any): Parser => {
    filePath = path.join(filePath, 'index.ts');
    let file = fs.readFileSync(filePath, { encoding: 'utf8' }).trim();

    const sourseFile: ts.SourceFile = ts.createSourceFile(
      'code.ts',
      file,
      ts.ScriptTarget.ES5,
      true
    );
    this.parseSourse(sourseFile);
    return this;
  };

  /**
   * 递归遍历 AST
   */
  private parseSourse(node: ts.SourceFile) {
    const syntax: ts.Node = node
      .getChildren()
      .find((n: ts.Node) => ts.formatSyntaxKind(n.kind) == 'SyntaxList');
    this.parseSyntax(syntax);
  }

  /**
   * 函数语句 & 箭头函数定义语句进行格式化
   */
  private parseSyntax(syntax: ts.Node) {
    const _this = this;
    syntax.getChildren().forEach((stmt: ts.Node) => {
      const kind = ts.formatSyntaxKind(stmt.kind);
      if (kind == 'FunctionDeclaration' || kind == 'VariableStatement') {
        const submission = new Submission();
        submission.sourse = stmt.getText();
        const info: Info = _this.parseDoc(stmt);
        submission.info = info;
        submission.name = info.title;
        submission.type = 'top' in info ? 'TopRanked' : 'Submission';
        _this.submissions.push(submission);
      }
    });
  }

  /**
   * 解析注解进行格式化
   */
  private parseDoc(stmt: ts.Node): Info {
    const info = new Info();
    const commNode: any = stmt
      .getChildren()
      .find((n: ts.Node) => ts.formatSyntaxKind(n.kind) === 'JSDocComment');
    let [title, ...comment] = (commNode.comment || '').split('\n');
    info.title = title;
    info.comment = comment.join('\n');
    commNode
      .getChildren()
      .forEach((n: any) => (info[n.tagName.text] = n.comment));
    return info;
  }

  /**
   * 获取 sourse map
   */
  get getSourse(): Submission[] {
    return this.submissions;
  }

  /**
   * 字符串格式化城合格的 JS 变量命名规则
   */
  parse(str: string): string {
    return str
      .replace(/(\d{0,4})\.(\s[A-Za-z]+)/g, '$2')
      .trim()
      .toLowerCase()
      .replace(/\-/g, ' ')
      .replace(/\s+/g, ' ')
      .replace(/([(|)|,'])/g, '')
      .replace(/\s/g, '-');
  }
}
