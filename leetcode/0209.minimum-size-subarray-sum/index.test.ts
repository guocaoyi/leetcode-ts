import * as asserts from "https://deno.land/std@0.125.0/testing/asserts.ts";
import * as log from "https://deno.land/std@0.125.0/log/mod.ts";
import { minSubArrayLen } from "./index.ts";

log.info("209. Minimum size subarray sum");

Deno.test({
  name: `
  Input: s = 5, nums = []
  Output: 0
  `,
  fn(): void {
    const result = minSubArrayLen(5, []);
    asserts.assertEquals(0, result);
  },
});

Deno.test({
  name: `
  Input: s = 5, nums = [1]
  Output: 0
  `,
  fn(): void {
    const result = minSubArrayLen(5, [1]);
    asserts.assertEquals(0, result);
  },
});

Deno.test({
  name: `
  Input: s = 7, nums = [2,3,1,2,4,3]
  Output: 2
  Explanation: the subarray [4,3] has the minimal length under the problem constraint.
  `,
  fn(): void {
    const result = minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
    asserts.assertEquals(2, result);
  },
});

Deno.test({
  name: `
  Input: s = 10, nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  Output: 10
  Explanation: the subarray [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] has the minimal length under the problem constraint.
  `,
  fn(): void {
    const result = minSubArrayLen(10, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    asserts.assertEquals(10, result);
  },
});

Deno.test({
  name: `
  Input: s = 9, nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 9]
  Output: 1
  Explanation: the subarray [9] has the minimal length under the problem constraint.
  `,
  fn(): void {
    const result = minSubArrayLen(9, [1, 1, 1, 1, 1, 1, 1, 1, 1, 9]);
    asserts.assertEquals(1, result);
  },
});

Deno.test({
  name: `
  Input: s = 55, nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  Output: 0
  `,
  fn(): void {
    const result = minSubArrayLen(55, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    asserts.assertEquals(0, result);
  },
});

Deno.test({
  name: `
  Input: s = 55, nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  Output: 10
  Explanation: the subarray [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] has the minimal length under the problem constraint.
  `,
  fn(): void {
    const result = minSubArrayLen(55, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    asserts.assertEquals(10, result);
  },
});

Deno.test({
  name: `
  Input: s = 99, nums = [100, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  Output: 1
  Explanation: the subarray [100] has the minimal length under the problem constraint.
  `,
  fn(): void {
    const result = minSubArrayLen(
      99,
      [100, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    );
    asserts.assertEquals(1, result);
  },
});

Deno.test({
  name: `
  Input: s = 99, nums = [1, 98, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  Output: 2
  Explanation: the subarray [1,98] has the minimal length under the problem constraint.
  `,
  fn(): void {
    const result = minSubArrayLen(
      99,
      [1, 98, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    );
    asserts.assertEquals(2, result);
  },
});
