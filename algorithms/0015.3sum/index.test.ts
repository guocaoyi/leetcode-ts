import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import {
  threeSum,
  threeSum1,
} from "./index.ts";

Deno.test({
  name: `0015 3Sum #threeSum
  Given array nums = [-1, 0, 1, 2, -1, -4],

  A solution set is:
  [
    [-1, 0, 1],
    [-1, -1, 2]
  ]
  `,
  fn(): void {
    const result: number[][] = threeSum([-1, 0, 1, 2, -1, -4]);
    assertEquals(
      result,
      [
        [-1, 0, 1],
        [-1, -1, 2],
      ],
    );
  },
});

Deno.test({
  name: `0015 3Sum #threeSum1
  Given array nums = [-1, 0, 1, 2, -1, -4],

  A solution set is:
  [
    [-1, 0, 1],
    [-1, -1, 2]
  ]
  `,
  fn(): void {
    const result: number[][] = threeSum1([-1, 0, 1, 2, -1, -4]);
    assertEquals(
      result,
      [
        [-1, 0, 1],
        [-1, -1, 2],
      ],
    );
  },
});
