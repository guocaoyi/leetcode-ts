import * as fs from "fs";
import * as MarkdownIt from "markdown-it";
import * as hljs from "highlight.js";


const md: MarkdownIt = new MarkdownIt({
  // html: true,
  // linkify: true,
  // typographer: true,
  highlight: function(str: string, lang: string) {
    hljs.configure({
      // useBR: true,
      classPrefix: ""
    });
    const codeHtml = hljs.highlight("js", str, false).value;
    console.info("===>", codeHtml);
    if (lang && hljs.getLanguage(lang)) {
      return codeHtml;
    } else {
      return md.utils.escapeHtml(str);
    }
  }
});

const text = fs.readFileSync("./README.md").toString();
const html = md.render(text);
const filename = `test_${Math.random()
  .toString()
  .slice(2, 9)}.html`;
fs.writeFileSync(filename, html, { encoding: "utf8" });
console.info("filename->", filename);
