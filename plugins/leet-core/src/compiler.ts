import * as path from "path";
import * as fs from "fs";

// 提纲
export interface Question {
  title: string; // 题目x
  content: string; // 题干
  example: string | string[]; // 示例
  note: string | string[]; // 说明
  followup: string; // 进阶
  thinking: string; // 个人总结 & 思考
  topics: string[];
  submissions: Submission[]; // 提案
}

// 提交案例
export interface Submission {
  name: string; // 标题（所用方法）
  info?: string; // 答题（说明、思路、总结）
  time: string; // 提交时间
  status?:
    | "Accepted"
    | "Time Limit Exceeded"
    | "Error"
    | "Failed"
    | "Wrong Answer"; // 提交测试情况
  runtime?: string; // 测试运行时（时间复杂度）
  memory?: string; // 测试内存占用（空间复杂度）
  case?: string; // 测试用例（入参）
  code: string; // 代码
}

/**
 * Compiler
 */
export class Compiler {
  constructor() {
    let data: Submission = {
      name: `Submission \*\*`,
      time: new Date()
        .toISOString()
        .replace(/\-/g, "/")
        .replace(/T/, " ")
        .replace(/\..+/, ""),
      code: "```typescript\nconst solution = () => {};\n```",
    };
  }

  /**
   * 加载文件
   */
  public load = ({ filePath }: any): Compiler => {
    filePath = path.join(filePath, "index.ts");
    let file = fs.readFileSync(filePath, { encoding: "utf8" }).trim();

    const sourseFile: ts.SourceFile = ts.createSourceFile(
      "code.ts",
      file,
      ts.ScriptTarget.ES5,
      true,
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
