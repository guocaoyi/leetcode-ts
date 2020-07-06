import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { findKthNumber } from "./index.ts";

log.info("440. K-th Smallest in Lexicographical Order");

Deno.test({
  name: `
  Input:
  n: 13   k: 2

  Output:
  10

  Explanation:
  The lexicographical order is [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9], so the second smallest number is 10.
  `,
  fn(): void {
    const result: number = findKthNumber(13, 2);
    asserts.assertEquals(10, result);
  },
});

Deno.test({
  name: `
  Input: n: 1  k: 1
  Output: 1
  `,
  fn(): void {
    const result: number = findKthNumber(1, 1);
    asserts.assertEquals(1, result);
  },
});

Deno.test({
  name: `
  Input: n: 100   k: 20
  Output: 26
  `,
  fn(): void {
    const result: number = findKthNumber(100, 20);
    asserts.assertEquals(26, result);
  },
});

Deno.test({
  name: `
  Input: n: 10000   k: 3456
  Output: 4107
  `,
  fn(): void {
    const result: number = findKthNumber(10000, 3456);
    asserts.assertEquals(4107, result);
  },
});

Deno.test({
  name: `
  Input: n: 10000   k: 3456
  Output: 4107
  `,
  fn(): void {
    const result: number = findKthNumber(10000, 3456);
    asserts.assertEquals(4107, result);
  },
});

Deno.test({
  name: `
  Input: n: 1000000000   k: 1
  Output: 1
  `,
  fn(): void {
    const result: number = findKthNumber(1000000000, 1);
    asserts.assertEquals(1, result);
  },
});

Deno.test({
  name: `
  Input: n: 1000000000   k: 1000000000
  Output: 999999999
  `,
  fn(): void {
    const result: number = findKthNumber(1000000000, 1000000000);
    asserts.assertEquals(999999999, result);
  },
});

Deno.test({
  name: `
  Input: n: 1000000000   k: 9999999
  Output: 1
  `,
  fn(): void {
    const result: number = findKthNumber(1000000000, 9999999);
    asserts.assertEquals(1, result);
  },
});
