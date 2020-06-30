import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { singleNumber as singleNumber } from "./index.ts";

log.info("0136. Single Number");

Deno.test({
  name: `
  Input: [2,2,1]
  Output: 1
  `,
  fn(): void {
    const result = singleNumber([2, 2, 1]);
    asserts.assertEquals(1, result);
  },
});

Deno.test({
  name: `
  Input: [4,1,2,1,2]
  Output: 4
  `,
  fn(): void {
    const result = singleNumber([4, 1, 2, 1, 2]);
    asserts.assertEquals(4, result);
  },
});

Deno.test({
  name: `
  Input: [2]
  Output: 2
  `,
  fn(): void {
    const result = singleNumber([2]);
    asserts.assertEquals(2, result);
  },
});

Deno.test({
  name: `
  Input: [9, 8, 7, 6, 5, 4, 3, 4, 5, 6, 7, 8, 9]
  Output: 3
  `,
  fn(): void {
    const result = singleNumber([9, 8, 7, 6, 5, 4, 3, 4, 5, 6, 7, 8, 9]);
    asserts.assertEquals(3, result);
  },
});
