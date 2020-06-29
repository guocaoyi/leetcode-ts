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
