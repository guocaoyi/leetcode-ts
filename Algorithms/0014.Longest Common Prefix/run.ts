// import * as fs from "fs";
// import * as ts from "typescript";

// const sourceFile: ts.SourceFile = ts.createSourceFile(
//   "index.ts",
//   fs.readFileSync("index.ts").toString(),
//   ts.ScriptTarget.ES2015,
//   false
// );
// const scanner: ts.Scanner = ts.createScanner(
//   ts.ScriptTarget.ES2015,
//   true,
//   ts.LanguageVariant.Standard,
//   "",
//   () => {},
//   10,
//   10
// );

// console.info(sourceFile);
// console.info(scanner);

// // fs.writeFileSync("./source.json", sourceFile.text, {
// //   encoding: "utf8"
// // });

import * as showdown from "showdown";
import * as fs from "fs";

const converter = new showdown.Converter();
converter.setOption("tables", true);
const text = fs.readFileSync("./README.md").toString();
const html = converter.makeHtml(text);

fs.writeFileSync("READMD.html", html, { encoding: "utf8" });
