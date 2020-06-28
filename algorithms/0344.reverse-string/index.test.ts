import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as colors from "https://deno.land/std/fmt/colors.ts";
import * as log from "https://deno.land/std/log/mod.ts";

import {
  reverseString,
  reverseString$1,
  reverseString$2,
  reverseString$3,
} from "./index.ts";

log.info("0344 Reverse String");

Deno.test({
  name: `
  ${colors.blue("#reverseString")}
  Input: []
  Output: []
  `,
  fn(): void {
    let s: string[] = [];
    reverseString(s);
    asserts.assertEquals(s, []);
  },
});

Deno.test({
  name: `
  ${colors.blue("#reverseString$1")}
  Input: []
  Output: []
  `,
  fn(): void {
    let s: string[] = [];
    reverseString$1(s);
    asserts.assertEquals(s, []);
  },
});

Deno.test({
  name: `
  ${colors.blue("#reverseString$2")}
  Input: []
  Output: []
  `,
  fn(): void {
    let s: string[] = [];
    reverseString$2(s);
    asserts.assertEquals(s, []);
  },
});

Deno.test({
  name: `
  ${colors.blue("#reverseString$3")}
  Input: []
  Output: []
  `,
  fn(): void {
    let s: string[] = [];
    reverseString$3(s);
    asserts.assertEquals(s, []);
  },
});

Deno.test({
  name: `
  ${colors.blue("#reverseString")}
  Input: ["a"]
  Output: ["a"]
  `,
  fn(): void {
    let s: string[] = ["a"];
    reverseString(s);
    asserts.assertEquals(s, ["a"]);
  },
});

Deno.test({
  name: `
  ${colors.blue("#reverseString$1")}
  Input: ["a"]
  Output: ["a"]
  `,
  fn(): void {
    let s: string[] = ["a"];
    reverseString$1(s);
    asserts.assertEquals(s, ["a"]);
  },
});

Deno.test({
  name: `
  ${colors.blue("#reverseString$2")}
  Input: ["a"]
  Output: ["a"]
  `,
  fn(): void {
    let s: string[] = ["a"];
    reverseString$2(s);
    asserts.assertEquals(s, ["a"]);
  },
});

Deno.test({
  name: `
  ${colors.blue("#reverseString$3")}
  Input: ["a"]
  Output: ["a"]
  `,
  fn(): void {
    let s: string[] = ["a"];
    reverseString$3(s);
    asserts.assertEquals(s, ["a"]);
  },
});

Deno.test({
  name: `
  ${colors.blue("#reverseString")}
  Input: ["H","a","n","n","a","h"]
  Output: ["h","a","n","n","a","H"]
  `,
  fn(): void {
    let s: string[] = ["H", "a", "n", "n", "a", "h"];
    reverseString(s);
    asserts.assertEquals(s, ["h", "a", "n", "n", "a", "H"]);
  },
});

Deno.test({
  name: `
  ${colors.blue("#reverseString$1")}
  Input: ["H","a","n","n","a","h"]
  Output: ["h","a","n","n","a","H"]
  `,
  fn(): void {
    let s: string[] = ["H", "a", "n", "n", "a", "h"];
    reverseString$1(s);
    asserts.assertEquals(s, ["h", "a", "n", "n", "a", "H"]);
  },
});

Deno.test({
  name: `
  ${colors.blue("#reverseString$2")}
  Input: ["H","a","n","n","a","h"]
  Output: ["h","a","n","n","a","H"]
  `,
  fn(): void {
    let s: string[] = ["H", "a", "n", "n", "a", "h"];
    reverseString$2(s);
    asserts.assertEquals(s, ["h", "a", "n", "n", "a", "H"]);
  },
});

Deno.test({
  name: `
  ${colors.blue("#reverseString$3")}
  Input: ["H","a","n","n","a","h"]
  Output: ["h","a","n","n","a","H"]
  `,
  fn(): void {
    let s: string[] = ["H", "a", "n", "n", "a", "h"];
    reverseString$3(s);
    asserts.assertEquals(s, ["h", "a", "n", "n", "a", "H"]);
  },
});
