import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";

import { threeSum } from "./index.ts";

log.info("15. 3 Sum");

Deno.test({
  name: `
  0015 3Sum #threeSum
  Given array nums = [-1, 0, 1, 2, -1, -4],

  A solution set is:
  [
    [-1, 0, 1],
    [-1, -1, 2]
  ]
  `,
  fn(): void {
    const result: number[][] = threeSum([-1, 0, 1, 2, -1, -4]);
    asserts.assertEquals(
      result,
      [
        [-1, 0, 1],
        [-1, -1, 2],
      ],
    );
  },
});
