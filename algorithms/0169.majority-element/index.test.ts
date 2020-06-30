import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { majorityElement } from "./index.ts";

log.info("169. Majority Element");

Deno.test({
  name: `
  Input: [3,2,3]
  Output: 3
  `,
  fn(): void {
    const result: number = majorityElement([3, 2, 3]);
    asserts.assertEquals(3, result);
  },
});

Deno.test({
  name: `
  Input: [2, 2, 1, 1, 1, 2, 2]
  Output: 2
  `,
  fn(): void {
    const result: number = majorityElement([2, 2, 1, 1, 1, 2, 2]);
    asserts.assertEquals(2, result);
  },
});
