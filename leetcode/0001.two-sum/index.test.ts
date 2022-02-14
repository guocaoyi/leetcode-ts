import * as asserts from "https://deno.land/std@0.125.0/testing/asserts.ts";
import * as log from "https:deno.land/std@0.125.0/log/mod.ts";

import { twoSum as twoSum, twoSum1, twoSum2, twoSum3 } from "./index.ts";

log.info("1. Two Sum");

Deno.test({
  name: `
  Given nums = [2, 7, 11, 15], target = 9,
  Because nums[0] + nums[1] = 2 + 7 = 9,
  return [0, 1].
  `,
  fn(): void {
    const result = twoSum([2, 7, 11, 15], 9);
    asserts.assertEquals([0, 1], result);
  },
});

Deno.test({
  name: `
  Input: numbers = [1, 2], target = 3
  Output: [0, 1]
  Explanation: The sum of 1 and 2 is 3. Therefore index1 = 0, index2 = 1.
  `,
  fn(): void {
    const result = twoSum([1, 2], 3);
    asserts.assertEquals([0, 1], result);
  },
});

Deno.test({
  name: `
  Input: numbers = [1, 1, 2], target = 3
  Output: [0, 2]
  Explanation: The sum of 1 and 2 is 3. Therefore index1 = 0, index2 = 2.
  `,
  fn(): void {
    const result = twoSum([1, 1, 2], 3);
    asserts.assertEquals([0, 2], result);
  },
});

Deno.test({
  name: `
  Input: numbers = [2,7,11,15], target = 9
  Output: [0, 1]
  Explanation: The sum of 2 and 7 is 9. Therefore index1 = 0, index2 = 1.
  `,
  fn(): void {
    const result = twoSum([2, 7, 11, 15], 9);
    asserts.assertEquals([0, 1], result);
  },
});

Deno.test({
  name: `
  Input: numbers = [4, 6, 7, 15, 23, 34, 45, 67], target = 38
  Output: [0, 5]
  Explanation: The sum of 4 and 34 is 9. Therefore index1 = 0, index2 = 5.
  `,
  fn(): void {
    const result = twoSum([4, 6, 7, 15, 23, 34, 45, 67], 38);
    asserts.assertEquals([0, 5], result);
  },
});

Deno.test({
  name: `
  Input: numbers = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 5], target = 4
  Output: [0, 10]
  Explanation: The sum of 1 and 3 is 4. Therefore index1 = 0, index2 = 10.
  `,
  fn(): void {
    const result = twoSum([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 5], 4);
    asserts.assertEquals([0, 10], result);
  },
});
