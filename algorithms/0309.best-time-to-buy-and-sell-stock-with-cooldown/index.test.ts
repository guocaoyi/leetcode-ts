import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { maxProfit } from "./index.ts";

log.info("309. Best Time to Buy and Sell Stock with Cooldown");

Deno.test({
  name: `
  Input: [1,2,3,0,2]
  Output: 3
  Explanation: transactions = [buy, sell, cooldown, buy, sell]
  `,
  fn(): void {
    const result: number = maxProfit([1, 2, 3, 0, 2])
    asserts.assertEquals(3, result);
  },
});

Deno.test({
  name: `
  Input: [1, 2, 3, 0, 2, 7, 1, 9]
  Output: 11
  Explanation: transactions = [buy, sell, cooldown, buy, sell]
  `,
  fn(): void {
    const result: number = maxProfit([1, 2, 3, 0, 2, 7, 1, 9])
    asserts.assertEquals(11, result);
  },
});

Deno.test({
  name: `
  Input: [1, 2, 3, 0, 2, 7, 1, 9]
  Output: 11
  Explanation: transactions = [buy, sell, cooldown, buy, sell]
  `,
  fn(): void {
    const result: number = maxProfit([1, 99, 1, 99, 1, 99, 1, 99])
    asserts.assertEquals(11, result);
  },
});

