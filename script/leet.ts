import { Parser } from "./parser";
import { Mark } from "./mark";

const filePath = "./algorithms/0014.Longest Common Prefix";

class Leet {
  private readonly tempCode: string =
    "/**\n *\n * @description\n * @time\n * @status\n * @runtime\n * @memory\n */\nvar subm = (target: any): any => {};\n";
  private readonly draftCode: string =
    "/**\n * @author yalda\n * @github github.com/guocaoyi\n * @website www.yalda.cn\n */\nvar subm = (target: any): any => {};\n";

  /**
   * leet create 0724. Find Pivot Indexs
   */
  create() {
    // step1:
    // step2:index.ts
    // step3:.draft.ts
  }

  /**
   * leet watch 0724
   */
  watch() {}
  /**
   * leet doc 0001 | all
   */
  doc() {
    const submissions = new Parser().load({ filePath }).getSourse;

    new Mark()
      .load({ filePath })
      .print(submissions)
      .write();
    //
  }

  /**
   * leet index 制作索引
   */
  index() {}

  /**
   * leet deploy 发布
   */
  deploy() {}
}
