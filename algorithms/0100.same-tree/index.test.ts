import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { isSameTree } from "./index.ts";

log.info("100. Same Tree");

Deno.test({
  name: `
  Input:     1         1
            / \       / \
          2   3     2   3

          [1,2,3],   [1,2,3]

  Output: true
  `,
  fn(): void {
    const result: boolean = isSameTree([
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ], 3);
    asserts.assertEquals(result, true);
  },
});

Deno.test({
  name: `
  Input:     1         1
            /           \
          2             2

          [1,2],     [1,null,2]

  Output: false
  `,
  fn(): void {
    const result: boolean = isSameTree([
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ], 3);
    asserts.assertEquals(result, true);
  },
});

Deno.test({
  name: `
  Input:     1         1
            / \       / \
          2   1     1   2

          [1,2,1],   [1,1,2]

  Output: false
  `,
  fn(): void {
    const result: boolean = isSameTree([
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ], 3);
    asserts.assertEquals(result, true);
  },
});
