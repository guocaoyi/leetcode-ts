import * as ts from "ntypescript";
import * as fs from "fs";
import * as path from "path";

/**
 * annotation
 */
export interface AnnotationImpl {
  top?: boolean; // top ranked 排名靠前的提交记录
  time: string; // 提交时间
  status: boolean; // 提交状态
  runtime?: string; // 运行时情况
  memory?: string; // 内存占用情况
  params?: string; // 测试用例
}

/**
 * info
 */
export interface InfoImpl extends AnnotationImpl {
  title: string; // 方案名称
  comment: string; // 注释
}

/**
 * submission
 */
export interface SubmissionImpl {
  name: string; // 名称
  type: SubEnum;
  info: InfoImpl; // 注释信息
  sourse: string; // 源码（ts）
}

/**
 * type
 */
export enum SubEnum {
  SUB = "Submission", // 自行完成
  TOP = "TopRanked" // 他人优秀提交记录，运行时低，内存暂用少
}

/**
 * 解析器
 */
export class Parser {
  private submissions: SubmissionImpl[]; // submissions syntax list

  constructor() {
    this.submissions = [];
  }

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
        const info: InfoImpl = _this.parseDoc(stmt);
        submission.info = info;
        submission.name = info.title;
        submission.type = "top" in info ? SubEnum.TOP : SubEnum.SUB;
        _this.submissions.push(submission);
      }
    });
  }

  /**
   * 解析注解进行格式化
   */
  private parseDoc(stmt: ts.Node): InfoImpl {
    const info: InfoImpl = Object();
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
  get getSourse(): SubmissionImpl[] {
    return this.submissions;
  }
}
