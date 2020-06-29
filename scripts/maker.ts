import * as asserts from "https://deno.land/std/testing/asserts.ts";

// 生成 algorithms/*/index.ts
export class MarkTS {
  // 注释
  // code snippet
}

// 生成 algorithms/*/index.jest.ts
export class MarkTest {
  private template: string;
  constructor() {
    const template: string = `
      import * as asserts from "https://deno.land/std/testing/asserts.ts";
      import * as log from "https://deno.land/std/log/mod.ts"

      import { } from "./index.ts";

      log.info("")

      Deno.test({
      name: \`
            \`,
      fn(): void {
      },
      });
    `;
    this.template = template;
  }
}

// 生成 algorithms/*/index.js
export class MarkJS {
  //
  constructor(data: any) { }

  // write async
  write(path: string) {
    //
  }
}

// 生成 algorithms/*/README.md
export class MarkMD {
  private readonly roma: string = "I,II,III,IV,V,VI,VII,VIII,IX,X";
  //
}

// 生成 ~/README.md
export class MarkRootMD {
  private readonly fileName: string = "README.md";

  constructor(data: any) {
    // 8304 -> ⁰, 8313 -> ⁹
    String.fromCharCode(8304); // 上标
    String.fromCharCode(8329); // 下标
  }

  /**
   * load files
   */
  public load = ({ filePath }: any): void => {
    let file = readFileStrSync(filePath, { encoding: "utf8" });
    // this.md = file.split('\n## Submissions')[0];
  };

  /**
   * json to markdown syntax strings
   */
  public print = (submissions: any[]): void => {
    let str: string = "## Submissions\n\n";
    // title

    submissions.forEach((s: any, k: number) => {
      const { name, info } = s;
      str += `### ${name}\n\n`;
      str += `\t${info}\n\n`;
      const { time, status, runtime, memory } = s;
      str +=
        `|Time|Status|Runtime|Memory|\\n|:--:|:----:|:-----:|:----:|\\n|${time}|${status}|${runtime}|${memory}|\\n`;
      const { code } = s;
      str += `\`\`\`typescript\\n${code}\\n\\n\`\`\``;
    });
    // code
  };
}

// 生成 ~/TOPICS.md
export class MarkTopics {
  constructor(data: any) {
    //
  }
}

/**
 * @author gcy[yalda]
 * @date 2019.08
 */
export default {
  MarkTS,
  MarkTest,
  MarkJS,
  MarkMD,
  MarkRootMD,
  MarkTopics,
};
