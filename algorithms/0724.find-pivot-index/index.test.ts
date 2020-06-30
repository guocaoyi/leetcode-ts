import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { pivotIndex } from "./index.ts";

log.info("724. Find Pivot Index");

Deno.test({
  name: `
  Input:
  nums = [1, 7, 3, 6, 5, 6]
  Output: 3
  Explanation:
  The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3.
  Also, 3 is the first index where this occurs.
  `,
  fn(): void {
    const result: number = pivotIndex([1, 7, 3, 6, 5, 6]);
    asserts.assertEquals(3, result);
  },
});

Deno.test({
  name: `
  Input:
  nums = [1, 2, 3]
  Output: -1
  Explanation:
  There is no index that satisfies the conditions in the problem statement.
  `,
  fn(): void {
    const result: number = pivotIndex([1, 2, 3]);
    asserts.assertEquals(-1, result);
  },
});
