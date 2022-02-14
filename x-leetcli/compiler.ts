import * as asserts from "https://deno.land/std@0.125.0/testing/asserts.ts";
import * as log from "https://deno.land/std@0.125.0/log/mod.ts";

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
  name: string; // 标题（所用方法|算法模型|标签）
  info?: string; // 答题（说明、思路、总结）
  date: string; // 提交时间
  time: string; // 算法时间复杂度
  space: string; // 算法空间复杂度
  runtime?: string; // LeetCode 测试用例耗时
  memory?: string; // LeetCode 测试内存占用
  runtime_cn?: string; // LeetCode(中国) 测试用例耗时
  memory_cn?: string; // LeetCode(中国) 测试内存占用
  code: string; // 代码
}

/**
 * Compiler
 */
export class Compiler {
  constructor() {
    let data: Submission = {
      name: `Submission \*\*`,
      time: new Date().toISOString().replace(/\-/g, "/").replace(/T/, " ").replace(/\..+/, ""),
      code: "```typescript\nconst solution = () => {};\n```",
    };
  }

  /**
   * 加载文件
   */
  public load = ({ filePath }: any): Compiler => {
    filePath = path.join(filePath, "index.ts");
    let file = readFileStrSync(filePath, { encoding: "utf8" }).trim();

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
    syntax.getChildren().forEach((stmt: ts.Node) => {
      const kind = ts.formatSyntaxKind(stmt.kind);
      if (kind == "FunctionDeclaration" || kind == "VariableStatement") {
        const submission = new Submission();
        submission.sourse = stmt.getText();
        const info: Info = this.parseDoc(stmt);
        submission.info = info;
        submission.name = info.title;
        this.submissions.push(submission);
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
    commNode.getChildren().forEach((n: any) => (info[n.tagName.text] = n.comment));
    return info;
  }

  /**
   * 获取 sourse map
   */
  get getSourse(): Submission[] {
    return this.submissions;
  }
}
