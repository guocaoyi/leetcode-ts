import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { removeElement } from "./index.ts";

log.info("0017. Letter Combinations of a Phone Number #letterCombinations");

Deno.test({
  name: `
  Given nums = [3,2,2,3], val = 3,
  Your function should return length = 2, with the first two elements of nums being 2.
  It doesn't matter what you leave beyond the returned length.
  `,
  fn(): void {
    const result: number = removeElement([3, 2, 2, 3], 3);
    asserts.assertEquals(2, result);
  },
});

Deno.test({
  name: `
  Given nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2,
  Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.
  `,
  fn(): void {
    const result: number = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
    asserts.assertEquals(5, result);
  },
});
