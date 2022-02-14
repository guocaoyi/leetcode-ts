import * as asserts from "https://deno.land/std@0.125.0/testing/asserts.ts";
import * as log from "https://deno.land/std@0.125.0/log/mod.ts";
import { plusOne } from "./index.ts";

log.info("0066 Plus One");

Deno.test({
  name: `
  Input: [0]
  Output: [1]
  Explanation: The array represents the integer 0.
  `,
  fn(): void {
    const result = plusOne([0]);
    asserts.assertEquals(result, [1]);
  },
});

Deno.test({
  name: `
  Input: [1,2,3]
  Output: [1,2,4]
  Explanation: The array represents the integer 123.
  `,
  fn(): void {
    const result = plusOne([1, 2, 3]);
    asserts.assertEquals(result, [1, 2, 4]);
  },
});

Deno.test({
  name: `
  Input: [4,3,2,1]
  Output: [4,3,2,2]
  Explanation: The array represents the integer 4321.
  `,
  fn(): void {
    const result = plusOne([4, 3, 2, 1]);
    asserts.assertEquals(result, [4, 3, 2, 2]);
  },
});

Deno.test({
  name: `
  Input: [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
  Output: [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]
  Explanation: The array represents the integer 6145390195186705543.
  `,
  fn(): void {
    const result = plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);
    asserts.assertEquals(result, [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]);
  },
});

Deno.test({
  name: `
  Input: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
  Output: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  Explanation: The array represents the integer 99999999999999999999999.
  `,
  fn(): void {
    const result = plusOne([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]);
    asserts.assertEquals(
      result,
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    );
  },
});
