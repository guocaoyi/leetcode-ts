import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { firstMissingPositive } from "./index.ts";

log.info("41. First Missing Positive");

Deno.test({
  name: `
  Input: []
  Output: 1
  `,
  fn(): void {
    const result: number = firstMissingPositive([]);
    asserts.assertEquals(1, result);
  },
});

Deno.test({
  name: `
  Input: [0, 2, 2, 1, 1]
  Output: 3
  `,
  fn(): void {
    const result: number = firstMissingPositive([0, 2, 2, 1, 1]);
    asserts.assertEquals(3, result);
  },
});

Deno.test({
  name: `
  Input: [0, 1, 2, 3, 4, 5, 6, 7, 8]
  Output: 9
  `,
  fn(): void {
    const result: number = firstMissingPositive([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    asserts.assertEquals(9, result);
  },
});

Deno.test({
  name: `
  Input: [0, 9, 9, 9, 9, 1, 1, 1, 1, 2, 2, 2]
  Output: 3
  `,
  fn(): void {
    const result: number = firstMissingPositive(
      [0, 9, 9, 9, 9, 1, 1, 1, 1, 2, 2, 2],
    );
    asserts.assertEquals(3, result);
  },
});

Deno.test({
  name: `
  Input: [1, 2, 0]
  Output: 3
  `,
  fn(): void {
    const result: number = firstMissingPositive([1, 2, 0]);
    asserts.assertEquals(3, result);
  },
});

Deno.test({
  name: `
  Input: [3, 4, -1, 1]
  Output: 2
  `,
  fn(): void {
    const result: number = firstMissingPositive([3, 4, -1, 1]);
    asserts.assertEquals(2, result);
  },
});

Deno.test({
  name: `
  Input: [0, 1, 2, -1]
  Output: 3
  `,
  fn(): void {
    const result: number = firstMissingPositive([0, 1, 2, -1]);
    asserts.assertEquals(3, result);
  },
});

Deno.test({
  name: `
  Input: [1, 2, 3, 4, 8, 9, 11, 12]
  Output: 5
  `,
  fn(): void {
    const result: number = firstMissingPositive([1, 2, 3, 4, 8, 9, 11, 12]);
    asserts.assertEquals(5, result);
  },
});

Deno.test({
  name: `
  Input: [111115, 1111111, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 111, 110, 113, 114],
  Output: 11
  `,
  fn(): void {
    const result: number = firstMissingPositive(
      [
        111115,
        1111111,
        -1,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        111,
        110,
        113,
        114,
      ],
    );
    asserts.assertEquals(11, result);
  },
});
