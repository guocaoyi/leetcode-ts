import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { merge } from "./index.ts";

log.info("56. Merge Intervals");

Deno.test({
  name: `
  Input: [[1, 3], [2, 6], [8, 10], [15, 18]]
  Output: [[1,6],[8,10],[15,18]]
  `,
  fn(): void {
    const result: number[][] = merge([[1, 3], [2, 6], [8, 10], [15, 18]]);
    asserts.assertEquals([[1, 6], [8, 10], [15, 18]], result);
  },
});

Deno.test({
  name: `
  Input: [[1,4],[4,5]]
  Output: [[1,5]]
  `,
  fn(): void {
    const result: number[][] = merge([[1, 4], [4, 5]]);
    asserts.assertEquals([[1, 5]], result);
  },
});

Deno.test({
  name: `
  Input: []
  Output: []
  `,
  fn(): void {
    const result: number[][] = merge([]);
    asserts.assertEquals([], result);
  },
});

Deno.test({
  name: `
  Input: [[1,4]]
  Output: [[1,4]]
  `,
  fn(): void {
    const result: number[][] = merge([[1, 4]]);
    asserts.assertEquals([[1, 4]], result);
  },
});

Deno.test({
  name: `
  Input: [[1, 99], [2, 98], [3, 97], [4, 96]]
  Output: [[1, 99]]
  `,
  fn(): void {
    const result: number[][] = merge([[1, 99], [2, 98], [3, 97], [4, 96]]);
    asserts.assertEquals([[1, 99]], result);
  },
});

Deno.test({
  name: `
  Input: [[2, 98], [3, 97], [4, 96], [1, 99]]
  Output: [[1, 99]]
  `,
  fn(): void {
    const result: number[][] = merge([[2, 98], [3, 97], [4, 96], [1, 99]]);
    asserts.assertEquals([[1, 99]], result);
  },
});
