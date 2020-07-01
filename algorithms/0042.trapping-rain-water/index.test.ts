import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { trap } from "./index.ts";

log.info("42. Trapping Rain Water");

Deno.test({
  name: `
  Input: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
  Output: 6
  `,
  fn(): void {
    const result: number = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
    asserts.assertEquals(6, result);
  },
});

Deno.test({
  name: `
  Input: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  Output: 0
  `,
  fn(): void {
    const result: number = trap([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    asserts.assertEquals(0, result);
  },
});

Deno.test({
  name: `
  Input: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
  Output: 0
  `,
  fn(): void {
    const result: number = trap([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
    asserts.assertEquals(0, result);
  },
});

Deno.test({
  name: `
  Input: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  Output: 0
  `,
  fn(): void {
    const result: number = trap([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    asserts.assertEquals(0, result);
  },
});

Deno.test({
  name: `
  Input: [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10]
  Output: 100
  `,
  fn(): void {
    const result: number = trap([10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10]);
    asserts.assertEquals(100, result);
  },
});

Deno.test({
  name: `
  Input: [10, 1, 1, 1, 0, 0, 0, 10, 0, 0, 0, 0]
  Output: 47
  `,
  fn(): void {
    const result: number = trap([10, 1, 1, 1, 88, 0, 0, 10, 0, 0, 0, 0]);
    asserts.assertEquals(47, result);
  },
});
