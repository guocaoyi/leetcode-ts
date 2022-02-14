import * as asserts from "https://deno.land/std@0.125.0/testing/asserts.ts";
import * as log from "https://deno.land/std@0.125.0/log/mod.ts";
import { arrayPairSum } from "./index.ts";

log.info("561. Array Partition I");

Deno.test({
  name: `
  Input: [1,4,3,2]
  Output: 4
  Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
  `,
  fn(): void {
    const result: number = arrayPairSum([1, 4, 3, 2]);
    asserts.assertEquals(4, result);
  },
});

Deno.test({
  name: `
  Input: [0, 1000, 999, 1]
  Output: 999
  `,
  fn(): void {
    const result: number = arrayPairSum([0, 1000, 999, 1]);
    asserts.assertEquals(999, result);
  },
});

Deno.test({
  name: `
  Input: [0, 0]
  Output: 0
  `,
  fn(): void {
    const result: number = arrayPairSum([0, 0]);
    asserts.assertEquals(0, result);
  },
});

Deno.test({
  name: `
  Input: [1, 10]
  Output: 1
  `,
  fn(): void {
    const result: number = arrayPairSum([1, 10]);
    asserts.assertEquals(1, result);
  },
});

Deno.test({
  name: `
  Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  Output: 25
  `,
  fn(): void {
    const result: number = arrayPairSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    asserts.assertEquals(25, result);
  },
});

Deno.test({
  name: `
  Input: [1, 24, 18, 27, 6, 12, 15, 9, 3, 21]
  Output: 61
  `,
  fn(): void {
    const result: number = arrayPairSum([1, 24, 18, 27, 6, 12, 15, 9, 3, 21]);
    asserts.assertEquals(61, result);
  },
});
