import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { searchInsert as searchInsert, searchInsert1 } from "./index.ts";

log.info("0017. Letter Combinations of a Phone Number #letterCombinations");

Deno.test({
  name: `
  Input: [1, 3, 5, 6], 5
  Output: 2
  `,
  fn(): void {
    const result: number = searchInsert([1, 3, 5, 6], 5);
    asserts.assertEquals(2, result);
  },
});

Deno.test({
  name: `
  Input: [1, 3, 5, 6], 2
  Output: 1
  `,
  fn(): void {
    const result: number = searchInsert([1, 3, 5, 6], 2);
    asserts.assertEquals(1, result);
  },
});

Deno.test({
  name: `
  Input: [1, 3, 5, 6], 7
  Output: 4
  `,
  fn(): void {
    const result: number = searchInsert([1, 3, 5, 6], 7);
    asserts.assertEquals(4, result);
  },
});

Deno.test({
  name: `
  Input: [1, 3, 5, 6], 0
  Output: 0
  `,
  fn(): void {
    const result: number = searchInsert([1, 3, 5, 6], 0);
    asserts.assertEquals(0, result);
  },
});
