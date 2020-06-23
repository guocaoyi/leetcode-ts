import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { letterCombinations } from "./index.ts";

Deno.test({
  name: `0017 Letter Combinations of a Phone Number #letterCombinations
  Input: "23"
  Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].`,
  fn(): void {
    const output: string[] = letterCombinations("23");
    assertEquals(
      output,
      ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
    );
  },
});
