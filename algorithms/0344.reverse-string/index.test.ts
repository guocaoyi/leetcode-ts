import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";

import {
  reverseString as reverseString,
  reverseString$1,
  reverseString$2,
  reverseString$3,
} from "./index.ts";

log.info("0344 Reverse String");

Deno.test({
  name: `
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
  Input: ["H","a","n","n","a","h"]
  Output: ["h","a","n","n","a","H"]
  `,
  fn(): void {
    let s: string[] = ["H", "a", "n", "n", "a", "h"];
    reverseString(s);
    asserts.assertEquals(s, ["h", "a", "n", "n", "a", "H"]);
  },
});
