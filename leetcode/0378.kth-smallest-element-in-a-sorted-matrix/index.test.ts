import * as asserts from "https://deno.land/std@0.125.0/testing/asserts.ts";
import * as log from "https://deno.land/std@0.125.0/log/mod.ts";

import { kthSmallest as kthSmallest } from "./index.ts";

log.info("378. Kth Smallest Element in a Sorted Matrix");

Deno.test({
  name: `
  Input: [[9, 8, 7], [6, 5, 4], [3, 2, 1]]
  Output: 1
  `,
  fn(): void {
    const result: number = kthSmallest(
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      1
    );
    asserts.assertEquals(1, result);
  },
});

Deno.test({
  name: `
  Input: [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15]
  ]
  Output: 8
  `,
  fn(): void {
    const result: number = kthSmallest(
      [
        [1, 5, 9],
        [10, 11, 13],
        [12, 13, 15],
      ],
      8
    );
    asserts.assertEquals(13, result);
  },
});
