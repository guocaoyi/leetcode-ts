import * as fs from "fs";
import * as path from "path";
import { Submission } from "./parser";

/**
 * markdown
 */
export class Mark {
  private readonly templateMd =
    "# {{name}}\n\n## Related Topics\n\n- ...\n\n## Description\n\n...\n\n## Example\n\n```bash\n➜\n```\n\n## Note\n\n## Thinking\n\n...\n";
  private readonly roma: string = "I,II,III,IV,V,VI,VII,VIII,IX,X";
  private readonly fileName: string = "README.md";
  private md: string; //
  private filePath: string; //

  /**
   * load files
   */
  public load = ({ filePath }: any): Mark => {
    this.filePath = filePath;
    filePath = path.join(filePath, this.fileName);
    let file = fs.readFileSync(filePath, { encoding: "utf8" });
    this.md = file.split("\n## Submissions")[0];
    return this;
  };

  /**
   * json to markdown syntax strings
   */
  public print = (submissions: Submission[]): Mark => {
    let subMd: string = "## Submissions\n\n";
    let topMd: string = "## Top Ranked\n\n";
    submissions.forEach((s: Submission, k: number) => {
      let cache: string = "";
      cache += `### ${this.roma.split(",")[k]}: ${s.name || "**"}\n\n`;
      !!s.info.comment && (cache += `${s.info.comment}\n\n`);
      !!s.info.time && (cache += `- Time: ${s.info.time}\n`);
      !!s.info.status && (cache += `- Status: ${s.info.status}\n`);
      !!s.info.params && (cache += `- Input: : ${s.info.params}\n`);
      !!s.info.runtime && (cache += `- Runtime: ${s.info.runtime}\n`);
      !!s.info.memory && (cache += `- Memory: ${s.info.memory}\n`);
      cache += "\n```typescript\n" + s.sourse + "\n```\n\n";
      s.type == "Submission" ? (subMd += cache) : (topMd += cache);
    });
    this.md += "\n" + subMd + topMd;
    return this;
  };

  /**
   * write
   */
  public write = (): Mark => {
    let data = this.md;
    fs.writeFileSync(path.join(this.filePath, this.fileName), data, {
      encoding: "utf8"
    });
    return this;
  };

  /**
   * create template
   */
  public template = () => {};
}
