import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";

import { lengthOfLongestSubstring } from "./index.ts";

log.info("0003 Longest Substring Without Repeating Characters");

Deno.test({
  name: `
  Input: "abcabcbb"
  Output: 3
  `,
  fn(): void {
    const result = lengthOfLongestSubstring("abcabcbb");
    asserts.assertEquals(3, result);
  },
});

Deno.test({
  name: `
  Input: "bbbbb"
  Output: 1
  `,
  fn(): void {
    const result = lengthOfLongestSubstring("bbbbb");
    asserts.assertEquals(1, result);
  },
});

Deno.test({
  name: `
  Input: "pwwkew"
  Output: 3
  `,
  fn(): void {
    const result = lengthOfLongestSubstring("pwwkew");
    asserts.assertEquals(3, result);
  },
});

Deno.test({
  name: `
  Input: "abcdefghijklmnopqrstuvwxyz"
  Output: 26
  `,
  fn(): void {
    const result = lengthOfLongestSubstring("abcdefghijklmnopqrstuvwxyz");
    asserts.assertEquals(26, result);
  },
});
