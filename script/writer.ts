import * as fs from 'fs';
import * as path from 'path';
import { Parser } from './parser';
import { Submission } from './parser';

//

/**
 * 生成 Markdown 文件
 * @author gcy[yalda]
 * @date 2019.08
 */
export class Markdown {
  private readonly templateMd =
    '# {{name}}\n\n## Related Topics\n\n- ...\n\n## Description\n\n...\n\n## Example\n\n```bash\n➜\n```\n\n## Note\n\n## Thinking\n\n...\n';
  private readonly roma: string = 'I,II,III,IV,V,VI,VII,VIII,IX,X';
  private readonly fileName: string = 'README.md';
  private md: string; //
  private filePath: string; //

  /**
   * load files
   */
  public load = ({ filePath }: any): Mark => {
    this.filePath = filePath;
    filePath = path.join(filePath, this.fileName);
    let file = fs.readFileSync(filePath, { encoding: 'utf8' });
    this.md = file.split('\n## Submissions')[0];
    return this;
  };

  /**
   * json to markdown syntax strings
   */
  public print = (submissions: Submission[]): Mark => {
    let subMd: string = '## Submissions\n\n';
    let topMd: string = '## Top Ranked\n\n';
    submissions.forEach((s: Submission, k: number) => {
      let cache: string = '';
      cache += `### ${this.roma.split(',')[k]}: ${s.name || '**'}\n\n`;
      !!s.info.comment && (cache += `${s.info.comment}\n\n`);
      !!s.info.time && (cache += `- Time: ${s.info.time}\n`);
      !!s.info.status && (cache += `- Status: ${s.info.status}\n`);
      !!s.info.params && (cache += `- Input: : ${s.info.params}\n`);
      !!s.info.runtime && (cache += `- Runtime: ${s.info.runtime}\n`);
      !!s.info.memory && (cache += `- Memory: ${s.info.memory}\n`);
      cache += '\n```typescript\n' + s.sourse + '\n```\n\n';
      s.type == 'Submission' ? (subMd += cache) : (topMd += cache);
    });
    this.md += '\n' + subMd + topMd;
    return this;
  };

  /**
   * write
   */
  public write = (): Mark => {
    let data = this.md;
    fs.writeFileSync(path.join(this.filePath, this.fileName), data, {
      encoding: 'utf8'
    });
    return this;
  };

  /**
   * create template
   */
  public template = () => {};
}

/**
 * 1:保障 github 上的浏览正常
 * 2:保障 www.yalda.cn/leetcode-ts 上的浏览正常
 */
export class Leet {
  private readonly tempCode: string =
    '/**\n *\n * @time\n * @status\n * @runtime\n * @memory\n */\nvar subm = (target: any): any => {};\n';
  private readonly draftCode: string =
    '/**\n * @author yalda\n * @github github.com/guocaoyi\n * @website www.yalda.cn\n */\nvar subm = (target: any): any => {};\n';

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
    let mark = new Mark();
    mark
      .load({ filePath })
      .print(new Parser().load({ filePath }).getSourse)
      .write();
  }

  /**
   * leet index 制作索引
   */
  summary(): any {
    fs.writeFileSync('', '', { encoding: 'utf8' });
  }

  /**
   * leet deploy 发布
   */
  deploy() {
    console.info(':====>');
  }
}
