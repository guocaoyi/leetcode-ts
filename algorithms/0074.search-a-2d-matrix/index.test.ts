import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";

import { searchMatrix } from "./index.ts";

log.info("0074 Search A 2D Marix");

Deno.test({
  name: `
  Input:
  matrix = [
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ]
  target = 3
  Output: true
  `,
  fn(): void {
    const result: boolean = searchMatrix([
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ], 3);
    asserts.assertEquals(result, true);
  },
});

Deno.test({
  name: `
  Input:
  matrix = [
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ]
  target = 13
  Output: false
  `,
  fn(): void {
    const result: boolean = searchMatrix([
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ], 13);
    asserts.assertEquals(result, false);
  },
});
