import * as ts from "ntypescript";
import * as fs from "fs";
import * as path from "path";

/**
 * 注释
 */
export interface CommentImpl {
  label: string; // 名称
  description: string; // 解题说明
  time: string; // 提交日期
  status: boolean; // 提交状态
  runtime?: string; // 运行时情况
  memory?: string; // 内存占用情况
  testcase?: string; // 测试用例
  top?: boolean;
}

/**
 * 提交
 */
export interface SubmissionImpl {
  name: string; // 名称
  type: SubEnum;
  info: CommentImpl; // 注释信息
  sourse: string; // 源码（ts）
}

/**
 * 提交类型
 */
export enum SubEnum {
  SUB = "Submission", // 自行完成
  TOP = "TopRanked" // 他人优秀提交记录，运行时低，内存暂用少
}

/**
 * 解析器
 */
export class Parser {
  private readonly fileName: string = "index.ts";
  // submissions syntax list
  private submissions: Array<SubmissionImpl>;

  constructor() {
    this.submissions = [];
  }

  /**
   * 加载文件
   */
  public load = ({ filePath }: any): Parser => {
    filePath = path.join(filePath, this.fileName);
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
    const _this = this;
    const syntax: ts.Node = node
      .getChildren()
      .find((n: ts.Node) => ts.formatSyntaxKind(n.kind) == "SyntaxList");
    _this.parseSyntax(syntax);
  }

  /**
   * 函数语句 & 箭头函数定义语句进行格式化
   */
  private parseSyntax(syntax: ts.Node) {
    const _this = this;
    syntax.getChildren().forEach((stmt: ts.Node) => {
      const kind = ts.formatSyntaxKind(stmt.kind);
      if (kind == "FunctionDeclaration" || kind == "VariableStatement") {
        const submission: SubmissionImpl = Object();
        submission.sourse = stmt.getText();
        const info: CommentImpl = _this.parseDoc(stmt);
        submission.info = info;
        submission.name = info.label;
        submission.type = "top" in info ? SubEnum.TOP : SubEnum.SUB;
        _this.submissions.push(submission);
      }
    });
  }

  /**
   * 解析注解进行格式化
   */
  private parseDoc(stmt: ts.Node): CommentImpl {
    const info: any = {};
    const commNode: any = stmt
      .getChildren()
      .find((n: ts.Node) => ts.formatSyntaxKind(n.kind) === "JSDocComment");
    info.label = commNode.comment;

    commNode
      .getChildren()
      .forEach((n: any) => (info[n.tagName.text] = n.comment));
    return info;
  }

  /**
   * 获取 sourse map
   */
  get getSourse(): Array<SubmissionImpl> {
    return this.submissions;
  }
}
