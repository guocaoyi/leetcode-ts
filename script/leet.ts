import * as fs from "fs";
import * as path from "path";
import { Parser } from "./parser";
import { Mark } from "./mark";

const filePath = "./algorithms/0014.Longest Common Prefix";

const filePaths = [
  "./algorithms/0001.Two Sum",
  "./algorithms/0003.Longest Substring Without Repeating Characters",
  "./algorithms/0014.Longest Common Prefix",
  "./algorithms/0017.Letter Combinations of a Phone Number",
  "./algorithms/0074.Search a 2D Matrix",
  "./algorithms/0136.Single Number",
  "./algorithms/0169.Majority Element",
  "./algorithms/0202.Happy Number",
  "./algorithms/0240.Search a 2D Matrix II",
  "./algorithms/0344.Reverse String",
  "./algorithms/0724.Find Pivot Index"
];

export default class Bin {}

export class Leet {
  private readonly tempCode: string =
    "/**\n *\n * @description\n * @time\n * @status\n * @runtime\n * @memory\n */\nvar subm = (target: any): any => {};\n";
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
