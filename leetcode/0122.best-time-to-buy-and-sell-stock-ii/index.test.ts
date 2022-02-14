import * as asserts from "https://deno.land/std@0.125.0/testing/asserts.ts";
import * as log from "https://deno.land/std@0.125.0/log/mod.ts";
import { maxProfit } from "./index.ts";

log.info("122. Best Time to Buy and Sell Stock II");

Deno.test({
  name: `
  Input: [7,1,5,3,6,4]
  Output: 7
  Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
               Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
  `,
  fn(): void {
    const result: number = maxProfit([7, 1, 5, 3, 6, 4]);
    asserts.assertEquals(7, result);
  },
});

Deno.test({
  name: `
  Input: [1,2,3,4,5]
  Output: 4
  Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
               Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
               engaging multiple transactions at the same time. You must sell before buying again.
  `,
  fn(): void {
    const result: number = maxProfit([1, 2, 3, 4, 5]);
    asserts.assertEquals(4, result);
  },
});

Deno.test({
  name: `
  Input: [7,6,4,3,1]
  Output: 0
  Explanation: In this case, no transaction is done, i.e. max profit = 0.
  `,
  fn(): void {
    const result: number = maxProfit([7, 6, 4, 3, 1]);
    asserts.assertEquals(0, result);
  },
});

Deno.test({
  name: `
  Input: [1, 9, 1, 9, 1, 9, 1, 9]
  Output: 24
  `,
  fn(): void {
    const result: number = maxProfit([1, 9, 1, 9, 1, 9, 1, 9]);
    asserts.assertEquals(24, result);
  },
});

Deno.test({
  name: `
  Input: [1, 10, 11, 99]
  Output: 98
  `,
  fn(): void {
    const result: number = maxProfit([1, 10, 11, 99]);
    asserts.assertEquals(98, result);
  },
});

Deno.test({
  name: `
  Input: [1, 2, 8, 4, 9]
  Output: 13
  `,
  fn(): void {
    const result: number = maxProfit([1, 2, 8, 4, 9]);
    asserts.assertEquals(13, result);
  },
});
