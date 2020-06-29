import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";

import {
  myPow as myPow,
  myPow$1,
} from "./index.ts";

log.info("0050 Pow(x,n)");

Deno.test({
  name: `
  Input: 2.00000, 10
  Output: 1024.00000
  `,
  fn(): void {
    const result: number = myPow(2.00000, 10);
    asserts.assertEquals(result, 1024.00000);
  },
});

Deno.test({
  name: `
  Input: 2.10000, 3
  Output: 9.26100
  `,
  fn(): void {
    const result: number = myPow(2.10000, 3);
    asserts.assertEquals(result, 9.26100);
  },
});

Deno.test({
  name: `
  Input: 2.00000, -2
  Output: 0.25000
  Explanation: 2-2 = 1/22 = 1/4 = 0.25
  `,
  fn(): void {
    const result: number = myPow(2.00000, -2);
    asserts.assertEquals(result, 0.25000);
  },
});
