import * as asserts from "https://deno.land/std@0.125.0/testing/asserts.ts";
import * as log from "https://deno.land/std@0.125.0/log/mod.ts";
import { canPermutePalindrome } from "./index.ts";

log.info("100184 Palindrome Permutation LCCI");

Deno.test({
  name: `
  Input: "tactcoa"
  Output: true
  permutations: "tacocat"、"atcocta", etc.
  `,
  fn(): void {
    const result: boolean = canPermutePalindrome("tactcoa");
    asserts.assertEquals(true, result);
  },
});

Deno.test({
  name: `
  Input: ""
  Output: true
  `,
  fn(): void {
    const result: boolean = canPermutePalindrome("");
    asserts.assertEquals(true, result);
  },
});

Deno.test({
  name: `
  Input: "abcdefghji"
  Output: false
  `,
  fn(): void {
    const result: boolean = canPermutePalindrome("abcdefghji");
    asserts.assertEquals(false, result);
  },
});

Deno.test({
  name: `
  Input: "beaebea"
  Output: true
  `,
  fn(): void {
    const result: boolean = canPermutePalindrome("beaebea");
    asserts.assertEquals(true, result);
  },
});

Deno.test({
  name: `
  Input: "beaeabea"
  Output: false
  `,
  fn(): void {
    const result: boolean = canPermutePalindrome("beaeabea");
    asserts.assertEquals(false, result);
  },
});

Deno.test({
  name: `
  Input: "gggggggggggggggggggggggggggggg"
  Output: true
  `,
  fn(): void {
    const result: boolean = canPermutePalindrome(
      "gggggggggggggggggggggggggggggg",
    );
    asserts.assertEquals(true, result);
  },
});
