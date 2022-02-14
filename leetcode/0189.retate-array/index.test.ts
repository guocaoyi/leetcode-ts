import * as asserts from "https://deno.land/std@0.125.0/testing/asserts.ts";
import * as log from "https://deno.land/std@0.125.0/log/mod.ts";
import { rotate as rotate } from "./index.ts";

log.info("289. Retate Array");

Deno.test({
  name: `
  Input: [1, 2, 3, 4] and k = 0
  Output: [1, 2, 3, 4]
  `,
  fn(): void {
    let nums = [1, 2, 3, 4];
    rotate(nums, 0);
    asserts.assertEquals([1, 2, 3, 4], nums);
  },
});

Deno.test({
  name: `
  Input: [1] and k = 3
  Output: [1]
  Explanation:
  rotate 1 steps to the right: [1]
  rotate 2 steps to the right: [1]
  rotate 3 steps to the right: [1]
  `,
  fn(): void {
    let nums = [1];
    rotate(nums, 3);
    asserts.assertEquals([1], nums);
  },
});

Deno.test({
  name: `
  Input: [1, 2, 3, 4, 5, 6, 7] and k = 7
  Output: [[1, 2, 3, 4, 5, 6, 7]
  Explanation:
  rotate 1 steps to the right: [7, 1, 2, 3, 4, 5, 6]
  rotate 2 steps to the right: [6, 7, 1, 2, 3, 4, 5]
  rotate 3 steps to the right: [5, 6, 7, 1, 2, 3, 4]
  rotate 4 steps to the right: [4, 5, 6, 7, 1, 2, 3]
  rotate 5 steps to the right: [3, 4, 5, 6, 7, 1, 2]
  rotate 6 steps to the right: [2, 3, 4, 5, 6, 7, 1]
  rotate 7 steps to the right: [1, 2, 3, 4, 5, 6, 7]
  `,
  fn(): void {
    let nums = [1, 2, 3, 4, 5, 6, 7];
    rotate(nums, 7);
    asserts.assertEquals([1, 2, 3, 4, 5, 6, 7], nums);
  },
});

Deno.test({
  name: `
  Input: [1,2,3,4,5,6,7] and k = 3
  Output: [5,6,7,1,2,3,4]
  Explanation:
  rotate 1 steps to the right: [7,1,2,3,4,5,6]
  rotate 2 steps to the right: [6,7,1,2,3,4,5]
  rotate 3 steps to the right: [5,6,7,1,2,3,4]
  `,
  fn(): void {
    let nums = [1, 2, 3, 4, 5, 6, 7];
    rotate(nums, 3);
    asserts.assertEquals([5, 6, 7, 1, 2, 3, 4], nums);
  },
});

Deno.test({
  name: `
  Input: [-1,-100,3,99] and k = 2
  Output: [3,99,-1,-100]
  Explanation:
  rotate 1 steps to the right: [99,-1,-100,3]
  rotate 2 steps to the right: [3,99,-1,-100]
  `,
  fn(): void {
    let nums = [-1, -100, 3, 99];
    rotate(nums, 2);
    asserts.assertEquals([3, 99, -1, -100], nums);
  },
});

Deno.test({
  name: `
  Input: [189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189] and k = 189
  Output: [189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189]
  Explanation:
  rotate 1 steps to the right: [189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189]
  rotate 2 steps to the right: [189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189]
  .....
  rotate 189 steps to the right: [189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189]
  `,
  fn(): void {
    let nums = [
      189,
      189,
      189,
      189,
      189,
      189,
      189,
      189,
      189,
      189,
      189,
      189,
      189,
      189,
    ];
    rotate(nums, 189);
    asserts.assertEquals(
      [189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189],
      nums,
    );
  },
});
