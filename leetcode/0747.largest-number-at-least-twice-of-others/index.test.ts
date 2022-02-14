import * as asserts from "https://deno.land/std@0.125.0/testing/asserts.ts";
import * as log from "https://deno.land/std@0.125.0/log/mod.ts";
import { dominantIndex } from "./index.ts";

log.info("747. Largest Number At Least Twice of Others");

Deno.test({
  name: `
  Input: nums = [3, 6, 1, 0]
  Output: 1
  Explanation: 6 is the largest integer, and for every other number in the array x,
  6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.
  `,
  fn(): void {
    const result: number = dominantIndex([3, 6, 1, 0]);
    asserts.assertEquals(1, result);
  },
});

Deno.test({
  name: `
  Input: nums = [1, 2, 3, 4]
  Output: -1
  `,
  fn(): void {
    const result: number = dominantIndex([1, 2, 3, 4]);
    asserts.assertEquals(-1, result);
  },
});

Deno.test({
  name: `
  Input: nums = [0,0,0,1]
  Output: 3
  `,
  fn(): void {
    const result: number = dominantIndex([0, 0, 0, 1]);
    asserts.assertEquals(3, result);
  },
});

Deno.test({
  name: `
  Input: nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 999, 1000]
  Output: -1
  `,
  fn(): void {
    const result: number = dominantIndex([1, 1, 1, 1, 1, 1, 1, 1, 1, 999, 1000]);
    asserts.assertEquals(-1, result);
  },
});

Deno.test({
  name: `
  Input: nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1000]
  Output: 10
  `,
  fn(): void {
    const result: number = dominantIndex([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1000]);
    asserts.assertEquals(10, result);
  },
});
