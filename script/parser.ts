import * as ts from "ntypescript";
import * as fs from "fs";
import * as path from "path";

export class Annotation {
  public time?: string; // 提交时间
  public status: boolean; // 提交状态
  public runtime?: string; // 运行时情况
  public memory?: string; // 内存占用情况
  public case?: string; // 测试用例
  public top?: boolean; // 排名靠前的提交记录
}

export class Info extends Annotation {
  [T: string]: any;
  public title: string; // 方案名称
  public comment: string; // 注释
}

export class Submission {
  public name: string; // 名称
  public info: Info; // 注释信息
  public type: "Submission" | "TopRanked";
  public sourse: string; // 源码（ts）
}

/**
 * 解析器
 */
export class Parser {
  private submissions: Submission[] = [];

  /**
   * 加载文件
   */
  public load = ({ filePath }: any): Parser => {
    filePath = path.join(filePath, "index.ts");
    let file = fs.readFileSync(filePath, { encoding: "utf8" }).trim();

    const sourseFile: ts.SourceFile = ts.createSourceFile(
      "code.ts",
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
      .find((n: ts.Node) => ts.formatSyntaxKind(n.kind) == "SyntaxList");
    this.parseSyntax(syntax);
  }

  /**
   * 函数语句 & 箭头函数定义语句进行格式化
   */
  private parseSyntax(syntax: ts.Node) {
    const _this = this;
    syntax.getChildren().forEach((stmt: ts.Node) => {
      const kind = ts.formatSyntaxKind(stmt.kind);
      if (kind == "FunctionDeclaration" || kind == "VariableStatement") {
        const submission = new Submission();
        submission.sourse = stmt.getText();
        const info: Info = _this.parseDoc(stmt);
        submission.info = info;
        submission.name = info.title;
        submission.type = "top" in info ? "TopRanked" : "Submission";
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
      .find((n: ts.Node) => ts.formatSyntaxKind(n.kind) === "JSDocComment");
    let [title, ...comment] = (commNode.comment || "").split("\n");
    info.title = title;
    info.comment = comment.join("\n");
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
}

// 0050. Pow(x, n) Title
// 0050.powx-n 文件夹名，链接跳转
"50.Pow(x, n)"
  .replace(/(\d{0,4})\.(\s[A-Za-z]+)/g, "$2")
  .trim()
  .toLowerCase()
  .replace(/([(|)|,])/g, "")
  .replace(/\s/g, "-");
