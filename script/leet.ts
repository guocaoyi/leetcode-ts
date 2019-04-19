import * as fs from "fs";
import * as path from "path";
import { Parser } from "./parser";
import { Mark } from "./mark";

const filePaths = [
  // "./algorithms/0001.two-sum",
  // "./algorithms/0003.longest-substring-without-repeating-characters",
  // "./algorithms/0004.median-of-two-sorted-arrays",
  // "./algorithms/0014.longest-common-prefix",
  // "./algorithms/0017.letter-combinations-of-a-phone-number",
  "./algorithms/0050.powx-n",
  // "./algorithms/0074.search-a-2d-matrix",
  // "./algorithms/0136.single-number",
  // "./algorithms/0169.majority-element",
  // "./algorithms/0202.happy-number",
  // "./algorithms/0240.search-a-2d-matrix-ii",
  "./algorithms/0344.reverse-string"
  // "./algorithms/0724.find-pivot-index"
];

// 1:保障 github 上的浏览正常
// 2:保障 www.yalda.cn/leetcode-ts 上的浏览正常

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
    new Mark()
      .load({ filePath })
      .print(new Parser().load({ filePath }).getSourse)
      .write();
  }

  /**
   * leet index 制作索引
   */
  summary(): any {
    fs.writeFileSync("", "", { encoding: "utf8" });
  }

  /**
   * leet deploy 发布
   */
  deploy() {}
}

filePaths.forEach((filePath: string) => {
  new Mark()
    .load({ filePath })
    .print(new Parser().load({ filePath }).getSourse)
    .write();
});
