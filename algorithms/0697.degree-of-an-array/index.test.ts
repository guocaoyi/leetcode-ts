import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { findShortestSubArray } from "./index.ts";

log.info("697. Degre of an Array");

Deno.test({
  name: `
  Input: [1, 2, 2, 3, 1]
  Output: 2
  `,
  fn(): void {
    const result: number = findShortestSubArray([1, 2, 2, 3, 1]);
    asserts.assertEquals(2, result);
  },
});

Deno.test({
  name: `
  Input: [1, 1, 1, 1, 1, 1]
  Output: 6
  `,
  fn(): void {
    const result: number = findShortestSubArray([1, 1, 1, 1, 1, 1]);
    asserts.assertEquals(6, result);
  },
});

Deno.test({
  name: `
  Input: [1, 2]
  Output: 1
  `,
  fn(): void {
    const result: number = findShortestSubArray([1, 2]);
    asserts.assertEquals(1, result);
  },
});

Deno.test({
  name: `
  Input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  Output: 1
  `,
  fn(): void {
    const result: number = findShortestSubArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    asserts.assertEquals(1, result);
  },
});
