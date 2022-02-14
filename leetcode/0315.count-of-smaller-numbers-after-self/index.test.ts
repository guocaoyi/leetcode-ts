import * as asserts from "https://deno.land/std@0.125.0/testing/asserts.ts";
import * as log from "https://deno.land/std@0.125.0/log/mod.ts";
import { countSmaller } from "./index.ts";

log.info("315. Count of Smaller Numbers After Self");

Deno.test({
  name: `
  Input: [5,2,6,1]
  Output: [2,1,1,0]
  `,
  fn(): void {
    const result: number[] = countSmaller([5, 2, 6, 1]);
    asserts.assertEquals([2, 1, 1, 0], result);
  },
});

Deno.test({
  name: `
  Input: [9, 8, 7, 6, 5, 4, 3, 2, 1]
  Output: [8, 7, 6, 5, 4, 3, 2, 1, 0]
  `,
  fn(): void {
    const result: number[] = countSmaller([9, 8, 7, 6, 5, 4, 3, 2, 1]);
    asserts.assertEquals([8, 7, 6, 5, 4, 3, 2, 1, 0], result);
  },
});

Deno.test({
  name: `
  Input: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  Output: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  `,
  fn(): void {
    const result: number[] = countSmaller([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    asserts.assertEquals([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], result);
  },
});
