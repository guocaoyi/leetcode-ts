import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { findMaxConsecutiveOnes } from "./index.ts";

log.info("485. Max Consecutive Ones");

Deno.test({
  name: `
  Input: [1,1,0,1,1,1]
  Output: 3
  Explanation: The first two digits or the last three digits are consecutive 1s.
      The maximum number of consecutive 1s is 3.
  `,
  fn(): void {
    const result: number = findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
    asserts.assertEquals(3, result);
  },
});

Deno.test({
  name: `
  Input: []
  Output: 0
  `,
  fn(): void {
    const result: number = findMaxConsecutiveOnes([]);
    asserts.assertEquals(0, result);
  },
});

Deno.test({
  name: `
  Input: [0, 0, 0, 0, 0, 0]
  Output: 0
  `,
  fn(): void {
    const result: number = findMaxConsecutiveOnes([0, 0, 0, 0, 0, 0]);
    asserts.assertEquals(0, result);
  },
});

Deno.test({
  name: `
  Input: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  Output: 10
  `,
  fn(): void {
    const result: number = findMaxConsecutiveOnes(
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    );
    asserts.assertEquals(10, result);
  },
});

Deno.test({
  name: `
  Input: [1, 0, 0, 0, 0, 0, 0, 0, 0, 1]
  Output: 1
  `,
  fn(): void {
    const result: number = findMaxConsecutiveOnes(
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    );
    asserts.assertEquals(1, result);
  },
});
