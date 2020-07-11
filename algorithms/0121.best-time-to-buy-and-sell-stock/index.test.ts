import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { maxProfit } from "./index.ts";

log.info("121. Best Time to Buy and Sell Stock");

Deno.test({
  name: `
  Input: [7, 1, 5, 3, 6, 4]
  Output: 5
  Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
               Not 7-1 = 6, as selling price needs to be larger than buying price.
  `,
  fn(): void {
    const result: number = maxProfit([7, 1, 5, 3, 6, 4]);
    asserts.assertEquals(5, result);
  },
});

Deno.test({
  name: `
  Input: [7, 6, 4, 3, 1]
  Output: 0
  `,
  fn(): void {
    const result: number = maxProfit([7, 6, 4, 3, 1]);
    asserts.assertEquals(0, result);
  },
});

Deno.test({
  name: `
  Input: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  Output: 0
  `,
  fn(): void {
    const result: number = maxProfit([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    asserts.assertEquals(0, result);
  },
});

Deno.test({
  name: `
  Input: [9, 8, 7, 6, 5, 6, 7, 8, 9]
  Output: 4
  `,
  fn(): void {
    const result: number = maxProfit([9, 8, 7, 6, 5, 6, 7, 8, 9]);
    asserts.assertEquals(4, result);
  },
});

Deno.test({
  name: `
  Input: [1, 2, 3, 4, 5, 4, 3, 2, 1]
  Output: 4
  `,
  fn(): void {
    const result: number = maxProfit([1, 2, 3, 4, 5, 4, 3, 2, 1]);
    asserts.assertEquals(4, result);
  },
});
