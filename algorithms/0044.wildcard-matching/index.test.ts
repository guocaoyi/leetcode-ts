import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { isMatch } from "./index.ts";

log.info("49. Group Anagrams");

Deno.test({
  name: `
  Input:
  s = "aa"
  p = "a"
  Output: false
  Explanation: "a" does not match the entire string "aa".
  `,
  fn(): void {
    const result: boolean = isMatch("aa", "a");
    asserts.assertEquals(false, result);
  },
});

Deno.test({
  name: `
  Input:
  s = "aa"
  p = "*"
  Output: true
  Explanation: '*' matches any sequence.
  `,
  fn(): void {
    const result: boolean = isMatch("aa", "*");
    asserts.assertEquals(true, result);
  },
});

Deno.test({
  name: `
  Input:
  s = "cb"
  p = "?a"
  Output: false
  Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
  `,
  fn(): void {
    const result: boolean = isMatch("cb", "?a");
    asserts.assertEquals(false, result);
  },
});

Deno.test({
  name: `
  Input:
  s = "adceb"
  p = "*a*b"
  Output: true
  Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".
  `,
  fn(): void {
    const result: boolean = isMatch("adceb", "*a*b");
    asserts.assertEquals(true, result);
  },
});

Deno.test({
  name: `
  Input:
  s = "acdcb"
  p = "a*c?b"
  Output: false
  `,
  fn(): void {
    const result: boolean = isMatch("acdcb", "a*c?b");
    asserts.assertEquals(false, result);
  },
});

Deno.test({
  name: `
  Input:
  s = "acdcb"
  p = "ac*?b"
  Output: true
  `,
  fn(): void {
    const result: boolean = isMatch("acdcb", "ac*?b");
    asserts.assertEquals(true, result);
  },
});
