import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { permute } from "./index.ts";

log.info("46. Permutations");

Deno.test({
  name: `
  Input: [1,2,3]
  Output:
  [
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,1,2],
    [3,2,1]
  ]
  `,
  fn(): void {
    const result: number[][] = permute([1, 2, 3]);
    asserts.assertEquals(
      [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ],
      result,
    );
  },
});

Deno.test({
  name: `
  Input: [1]
  Output: [[1]]
  `,
  fn(): void {
    const result: number[][] = permute([1]);
    asserts.assertEquals([[1]], result);
  },
});

Deno.test({
  name: `
  Input: [1]
  Output: 
  [
    [1, 2],
    [2, 1]
  ]
  `,
  fn(): void {
    const result: number[][] = permute([1, 2]);
    asserts.assertEquals(
      [
        [1, 2],
        [2, 1],
      ],
      result,
    );
  },
});
