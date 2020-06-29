import * as fs from "fs";
import * as path from "path";
import * as ts from "ntypescript";
import * as htmlparser2 from "htmlparser2";

import { download } from "./utils";
import { Submission as ISub } from "leet-core";

class Submission implements ISub {
  name: "";
  info: "";
  time: "";
  status: "Accepted";
  runtime: "";
  memory: "";
  code: "";
}

/**
 * 解析器
 * @author gcy[yalda]
 * @date 2019.08
 */
export class ParserTS {
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

// parse html
class ParseHtml {}

let str: string = fs.readFileSync("./test.md", { encoding: "utf8" });

str = str.replace(/\\n/g, "");
str = str.replace(/\\t/g, "");
str = str.replace(/\n/g, "");
str = str.replace(/\t/g, "");

let s = new Set();
let c = {
  value: "",
  cache: "",
}; // context
const parser = new htmlparser2.Parser(
  {
    async onopentag(name: any, attribs) {
      // 块级作用域
      if (name === "p") {
        // 段落
        return "\n**\n";
      }
      if (name === "code") {
        return "`";
      }
      if (name === "pre") {
        return "```bash\n";
      }
      if (name === "em" || name === "i") {
        return "**";
      }
      if (name === "strong" || name === "b") {
        return "*";
      }
      if (name === "ul" || name === "ol") {
        // <ul> \n
      }
      if (name === "li") {
        // <li> - ***\n
      }
      if (name === "img") {
        // \![alt](src 'title')
        const { src } = attribs;
        // let buffer = await download(src);
        // fs.writeFileSync('./assets/images', buffer, {
        //   encoding: 'binary'
        // });
        return `![](${src})`;
      }
      if (name === "a") {
        return `[]()`;
      }
    },
    ontext(text: string) {
      // Example
      if (
        text === "Example:" ||
        text === "Example 1:" ||
        text === "Example 2:" ||
        text === "Example 3:" ||
        text === "Example 4:" ||
        text === "Example 5:"
      ) {
      }
      // Note
      if (text === "Note:" || text === "NOTE:") {
      }
      // Allow Up
      if (text === "Follow up:") {
      }
      // Constraints:
      if (text === "Constraints:") {
      }
      // Credits
      if (text === "Credits:") {
      }
    },
    onclosetag(name: string) {
      if (name === "p") {
        // 段落
        return "\n";
      }
      if (name === "code") {
        return "`";
      }
      if (name === "pre") {
        return "```\n\n";
      }
      if (name === "em" || name === "i") {
        return "**";
      }
      if (name === "strong" || name === "b") {
        return "*";
      }
      if (name === "ul" || name === "ol") {
        // </ul> \n
      }
      if (name === "li") {
        // </li> - ***\n
      }
      if (name === "img") {
        // \n
      }
      if (name === "a") {
        return `[]()`;
      }
    },
    onerror(e) {},
    onend() {},
  },
  { decodeEntities: true },
);

parser.write(str);
parser.end();
