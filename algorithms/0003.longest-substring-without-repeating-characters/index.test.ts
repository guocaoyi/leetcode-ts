import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { lengthOfLongestSubstring } from "./index.ts";

Deno.test({
  name: `0003 Longest Substring Without Repeating Characters
  Input: "abcabcbb"
  Output: 3
  `,
  fn(): void {
    const result = lengthOfLongestSubstring("abcabcbb");
    assertEquals(result, 3);
  },
});

Deno.test({
  name: `0003 Longest Substring Without Repeating Characters
  Input: "bbbbb"
  Output: 1
  `,
  fn(): void {
    const result = lengthOfLongestSubstring("bbbbb");
    assertEquals(result, 1);
  },
});

Deno.test({
  name: `0003 Longest Substring Without Repeating Characters
  Input: "pwwkew"
  Output: 3
  `,
  fn(): void {
    const result = lengthOfLongestSubstring("pwwkew");
    assertEquals(result, 3);
  },
});
