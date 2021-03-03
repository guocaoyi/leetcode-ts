import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { longestCommonPrefix } from "./index.ts";

log.info("0014.Longest Common Prefix");

Deno.test({
  name: `
  Input: ["",""]
  Output: ''`,
  fn(): void {
    const result = longestCommonPrefix(["", ""]);
    asserts.assertEquals(result, "");
  },
});

Deno.test({
  name: `
  Input: ['flower', 'flow', 'flight']
  Output: 'fl'`,
  fn(): void {
    const result = longestCommonPrefix(["flower", "flow", "flight"]);
    asserts.assertEquals(result, "fl");
  },
});

Deno.test({
  name: `
  Input: ['dog', 'racecar', 'car']
  Output: ''`,
  fn(): void {
    const result = longestCommonPrefix(["dog", "racecar", "car"]);
    asserts.assertEquals(result, "");
  },
});

Deno.test({
  name: `
  Input: 
    [
      "abcdefghijklmnopqrstuvwxyzxcewr",
      "abcdefghijklmnopqrstuvwxyzwetwret",
      "abcdefghijklmnopqrstuvwxyzxzcvr",
      "abcdefghijklmnopqrstuvwxyztjnh",
    ]
  Output: ''`,
  fn(): void {
    const result = longestCommonPrefix(
      [
        "abcdefghijklmnopqrstuvwxyzxcewr",
        "abcdefghijklmnopqrstuvwxyzwetwret",
        "abcdefghijklmnopqrstuvwxyzxzcvr",
        "abcdefghijklmnopqrstuvwxyztjnh",
      ],
    );
    asserts.assertEquals(result, "abcdefghijklmnopqrstuvwxyz");
  },
});

Deno.test({
  name: `
  Input: ['vclxzjkhdsaifdsajfhkdlsh', 'iuwerhlkrdfjgbnfxjznfghdksj']
  Output: ''`,
  fn(): void {
    const result = longestCommonPrefix(
      ["vclxzjkhdsaifdsajfhkdlsh", "iuwerhlkrdfjgbnfxjznfghdksj"],
    );
    asserts.assertEquals(result, "");
  },
});
