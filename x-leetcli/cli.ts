import { writeFileStrSync } from "https://deno.land/std@0.125.0/fs/mod.ts";

/**
 * 1:保障 github 上的浏览正常
 * 2:保障 www.yalda.cn/leetcode-ts 上的浏览正常
 * @author yalda
 * @date 2019.08
 */
export class Leet {
  private readonly tempCode: string =
    "/**\n *\n * @time\n * @status\n * @runtime\n * @memory\n */\nvar subm = (target: any): any => {};\n";
  private readonly draftCode: string =
    "/**\n * @author yalda\n * @github github.com/guocaoyi\n * @website www.yalda.cn\n */\nvar subm = (target: any): any => {};\n";

  /**
   * leet create 0724. Find Pivot Indexs
   */
  create() {
    // step1:README.md
    // step2:index.ts
    // step3:.draft.ts
  }

  /**
   * leet watch 0724
   */
  watch() {
    //
  }

  /**
   * leet doc 0001 | all
   */
  doc(filePath: string) {
    let mark = new Writer();
    mark
      .load({ filePath })
      .print(new Parser().load({ filePath }).getSourse)
      .write();
  }

  /**
   * leet index 制作索引
   */
  summary(): any {
    writeFileStrSync("", "", { encoding: "utf8" });
  }

  /**
   * leet deploy 发布
   */
  deploy() {}
}
