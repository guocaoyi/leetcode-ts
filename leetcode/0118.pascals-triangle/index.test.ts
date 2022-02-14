import * as asserts from "https://deno.land/std@0.125.0/testing/asserts.ts";
import * as log from "https://deno.land/std@0.125.0/log/mod.ts";
import { pascalTriangle } from "./index.ts";

log.info("118. Pascals Triangle");

Deno.test({
  name: `
  Input: 0
  Output:
  []
  `,
  fn(): void {
    const result: number[][] = pascalTriangle(0);
    asserts.assertEquals([], result);
  },
});

Deno.test({
  name: `
  Input: 1
  Output:
  [
    [1],
  ]
  `,
  fn(): void {
    const result: number[][] = pascalTriangle(1);
    asserts.assertEquals([[1]], result);
  },
});

Deno.test({
  name: `
  Input: 2
  Output:
  [
     [1],
    [1,1],
  ]
  `,
  fn(): void {
    const result: number[][] = pascalTriangle(2);
    asserts.assertEquals([[1], [1, 1]], result);
  },
});

Deno.test({
  name: `
  Input: 5
  Output:
  [
       [1],
      [1,1],
     [1,2,1],
    [1,3,3,1],
   [1,4,6,4,1],
  ]
  `,
  fn(): void {
    const result: number[][] = pascalTriangle(5);
    asserts.assertEquals([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]], result);
  },
});
