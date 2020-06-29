import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts"

import { twoSum as twoSum } from "./index.ts";

log.info("167. Two Sum II - Input array is sorted")

Deno.test({
  name: `
  Input: numbers = [1, 2], target = 3
  Output: [1,2]
  Explanation: The sum of 1 and 2 is 3. Therefore index1 = 1, index2 = 2.
  `,
  fn(): void {
    const result = twoSum([1, 2], 3)
    asserts.assertEquals(result, [1, 2])
  },
});

Deno.test({
  name: `
  Input: numbers = [1, 1, 2], target = 3
  Output: [1,3]
  Explanation: The sum of 1 and 2 is 3. Therefore index1 = 1, index2 = 3.
  `,
  fn(): void {
    const result = twoSum([1, 1, 2], 3)
    asserts.assertEquals(result, [1, 3])
  },
});

Deno.test({
  name: `
  Input: numbers = [2,7,11,15], target = 9
  Output: [1,2]
  Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
  `,
  fn(): void {
    const result = twoSum([2, 7, 11, 15], 9)
    asserts.assertEquals(result, [1, 2])
  },
});

Deno.test({
  name: `
  Input: numbers = [4, 6, 7, 15, 23, 34, 45, 67], target = 38
  Output: [1, 6]
  Explanation: The sum of 4 and 34 is 9. Therefore index1 = 1, index2 = 6.
  `,
  fn(): void {
    const result = twoSum([4, 6, 7, 15, 23, 34, 45, 67], 38)
    asserts.assertEquals(result, [1, 6])
  },
});

Deno.test({
  name: `
  Input: numbers = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 5], target = 4
  Output: [1, 11]
  Explanation: The sum of 1 and 3 is 4. Therefore index1 = 1, index2 = 11.
  `,
  fn(): void {
    const result = twoSum([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 5], 4)
    asserts.assertEquals(result, [1, 11])
  },
});

