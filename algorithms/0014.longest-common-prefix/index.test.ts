import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import {
  longestCommonPrefix,
  longestCommonPrefix1,
  longestCommonPrefix2,
} from "./index.ts";

Deno.test({
  name: `0014.Longest Common Prefix #longestCommonPrefix
  Input: ['flower', 'flow', 'flight']
  Output: 'fl'`,
  fn(): void {
    const result = longestCommonPrefix(["flower", "flow", "flight"]);
    assertEquals(result, "fl");
  },
});

Deno.test({
  name: `0014.Longest Common Prefix #longestCommonPrefix
  Input: ['dog', 'racecar', 'car']
  Output: ''`,
  fn(): void {
    const result = longestCommonPrefix(["dog", "racecar", "car"]);
    assertEquals(result, "");
  },
});

Deno.test({
  name: `0014.Longest Common Prefix #longestCommonPrefix1
  Input: ['flower', 'flow', 'flight']
  Output: 'fl'`,
  fn(): void {
    const result = longestCommonPrefix1(["flower", "flow", "flight"]);
    assertEquals(result, "fl");
  },
});

Deno.test({
  name: `0014.Longest Common Prefix #longestCommonPrefix1
  Input: ['dog', 'racecar', 'car']
  Output: ''`,
  fn(): void {
    const result = longestCommonPrefix1(["dog", "racecar", "car"]);
    assertEquals(result, "");
  },
});

Deno.test({
  name: `0014.Longest Common Prefix #longestCommonPrefix2
  Input: ['flower', 'flow', 'flight']
  Output: 'fl'`,
  fn(): void {
    const result = longestCommonPrefix2(["flower", "flow", "flight"]);
    assertEquals(result, "fl");
  },
});

Deno.test({
  name: `0014.Longest Common Prefix #longestCommonPrefix2
  Input: ['dog', 'racecar', 'car']
  Output: ''`,
  fn(): void {
    const result = longestCommonPrefix2(["dog", "racecar", "car"]);
    assertEquals(result, "");
  },
});
