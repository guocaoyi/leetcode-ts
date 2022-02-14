import * as asserts from "https://deno.land/std@0.125.0/testing/asserts.ts";
import * as log from "https://deno.land/std@0.125.0/log/mod.ts";
import { trapRainWater } from "./index.ts";

log.info("407. Trapping Rain Water II");

Deno.test({
  name: `
  Given the following 3x6 height map:
  [
    [1],
  ]
  Return 0.
  `,
  fn(): void {
    const result: number = trapRainWater([[1]]);
    asserts.assertEquals(0, result);
  },
});

Deno.test({
  name: `
  Given the following 3x6 height map:
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ]
  Return 0.
  `,
  fn(): void {
    const result: number = trapRainWater([[1, 2, 3, 4, 5, 6, 7, 8, 9]]);
    asserts.assertEquals(0, result);
  },
});

Deno.test({
  name: `
  Given the following 3x6 height map:
  [
    [1],
    [2],
    [3],
    [4],
    [5],
    [6],
    [7],
    [8],
    [9],
  ]
  Return 0.
  `,
  fn(): void {
    const result: number = trapRainWater([[1], [2], [3], [4], [5], [6], [7], [8], [9]]);
    asserts.assertEquals(0, result);
  },
});

Deno.test({
  name: `
  Given the following 3x6 height map:
  [
    [1, 4, 3, 1, 3, 2],
    [3, 2, 1, 3, 2, 4],
  ]
  Return 0.
  `,
  fn(): void {
    const result: number = trapRainWater([
      [1, 4, 3, 1, 3, 2],
      [3, 2, 1, 3, 2, 4],
    ]);
    asserts.assertEquals(0, result);
  },
});

Deno.test({
  name: `
  Given the following 3x6 height map:
  [
    [1, 4, 3, 1, 3, 2],
    [3, 2, 1, 3, 2, 4],
    [2, 3, 3, 2, 3, 1],
  ]
  Return 4.
  `,
  fn(): void {
    const result: number = trapRainWater([
      [1, 4, 3, 1, 3, 2],
      [3, 2, 1, 3, 2, 4],
      [2, 3, 3, 2, 3, 1],
    ]);
    asserts.assertEquals(4, result);
  },
});

Deno.test({
  name: `
  Given the following 3x6 height map:
  [
    [1, 4, 3, 1, 3, 2],
    [3, 7, 7, 7, 7, 4],
    [2, 3, 3, 2, 3, 1],
  ]
  Return 0.
  `,
  fn(): void {
    const result: number = trapRainWater([
      [1, 4, 3, 1, 3, 2],
      [3, 7, 7, 7, 7, 4],
      [2, 3, 3, 2, 3, 1],
    ]);
    asserts.assertEquals(0, result);
  },
});

Deno.test({
  name: `
  Given the following 3x6 height map:
  [
    [19999, 0, 0, 0, 0, 0, 0, 0, 19999],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 19999, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [19999, 0, 0, 0, 0, 0, 0, 0, 19999],
  ]
  Return 0.
  `,
  fn(): void {
    const result: number = trapRainWater([
      [19999, 0, 0, 0, 0, 0, 0, 0, 19999],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 19999, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [19999, 0, 0, 0, 0, 0, 0, 0, 19999],
    ]);
    asserts.assertEquals(0, result);
  },
});

Deno.test({
  name: `
  Given the following 3x6 height map:
  [
    [19999, 19999, 19999, 19999, 19999],
    [19999, 19999, 19999, 19999, 19999],
    [19999, 19999, 0, 19999, 19999],
    [19999, 19999, 19999, 19999, 19999],
    [19999, 19999, 19999, 19999, 19999],
  ]
  Return 19999.
  `,
  fn(): void {
    const result: number = trapRainWater([
      [19999, 19999, 19999, 19999, 19999],
      [19999, 19999, 19999, 19999, 19999],
      [19999, 19999, 0, 19999, 19999],
      [19999, 19999, 19999, 19999, 19999],
      [19999, 19999, 19999, 19999, 19999],
    ]);
    asserts.assertEquals(19999, result);
  },
});

Deno.test({
  name: `
  Given the following 3x6 height map:
  [
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
  ]
  Return 441.
  `,
  fn(): void {
    const result: number = trapRainWater([
      [9, 9, 9, 9, 9, 9, 9, 9, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 9, 9, 9, 9, 9, 9, 9, 9],
    ]);
    asserts.assertEquals(441, result);
  },
});

Deno.test({
  name: `
  Given the following 3x6 height map:
  [
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 9, 9, 9, 9, 9, 9, 0, 9],
  ]
  Return 0.
  `,
  fn(): void {
    const result: number = trapRainWater([
      [9, 9, 9, 9, 9, 9, 9, 9, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 9, 9, 9, 9, 9, 9, 0, 9],
    ]);
    asserts.assertEquals(0, result);
  },
});

Deno.test({
  name: `
  Given the following 3x6 height map:
  [
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 8, 8, 8, 8, 8, 8, 8, 8],
    [9, 8, 7, 7, 7, 7, 7, 7, 7],
    [9, 8, 7, 6, 6, 6, 6, 6, 6],
    [9, 8, 7, 6, 5, 5, 5, 5, 5],
    [9, 8, 7, 6, 5, 4, 4, 4, 4],
    [9, 8, 7, 6, 5, 4, 3, 3, 3],
    [9, 8, 7, 6, 5, 4, 3, 2, 2],
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
  ]
  Return 0.
  `,
  fn(): void {
    const result: number = trapRainWater([
      [9, 9, 9, 9, 9, 9, 9, 9, 9],
      [9, 8, 8, 8, 8, 8, 8, 8, 8],
      [9, 8, 7, 7, 7, 7, 7, 7, 7],
      [9, 8, 7, 6, 6, 6, 6, 6, 6],
      [9, 8, 7, 6, 5, 5, 5, 5, 5],
      [9, 8, 7, 6, 5, 4, 4, 4, 4],
      [9, 8, 7, 6, 5, 4, 3, 3, 3],
      [9, 8, 7, 6, 5, 4, 3, 2, 2],
      [9, 8, 7, 6, 5, 4, 3, 2, 1],
    ]);
    asserts.assertEquals(0, result);
  },
});

Deno.test({
  name: `
  Given the following 3x6 height map:
  [
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 8, 8, 8, 8, 8, 8, 8, 8],
    [9, 8, 7, 7, 7, 7, 7, 7, 7],
    [9, 8, 7, 6, 6, 6, 6, 6, 6],
    [9, 8, 7, 6, 7, 7, 7, 7, 7],
    [9, 8, 7, 6, 7, 4, 4, 4, 4],
    [9, 8, 7, 6, 7, 4, 3, 3, 3],
    [9, 8, 7, 6, 7, 4, 3, 2, 2],
    [9, 8, 7, 6, 7, 4, 3, 2, 1],
  ]
  Return 0.
  `,
  fn(): void {
    const result: number = trapRainWater([
      [9, 9, 9, 9, 9, 9, 9, 9, 9],
      [9, 8, 8, 8, 8, 8, 8, 8, 8],
      [9, 8, 7, 7, 7, 7, 7, 7, 7],
      [9, 8, 7, 6, 6, 6, 6, 6, 6],
      [9, 8, 7, 6, 7, 7, 7, 7, 7],
      [9, 8, 7, 6, 7, 4, 4, 4, 4],
      [9, 8, 7, 6, 7, 4, 3, 3, 3],
      [9, 8, 7, 6, 7, 4, 3, 2, 2],
      [9, 8, 7, 6, 7, 4, 3, 2, 1],
    ]);
    asserts.assertEquals(0, result);
  },
});

Deno.test({
  name: `
  Given the following 3x6 height map:
  [
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 8, 8, 8, 8, 8, 8, 8, 8],
    [9, 8, 7, 7, 7, 7, 7, 7, 7],
    [9, 8, 7, 6, 6, 6, 6, 6, 9],
    [9, 8, 7, 6, 7, 7, 7, 7, 7],
    [9, 8, 7, 6, 7, 4, 4, 4, 4],
    [9, 8, 7, 6, 7, 4, 3, 3, 3],
    [9, 8, 7, 6, 7, 4, 3, 2, 2],
    [9, 8, 7, 9, 7, 4, 3, 2, 1],
  ]
  Return 9.
  `,
  fn(): void {
    const result: number = trapRainWater([
      [9, 9, 9, 9, 9, 9, 9, 9, 9],
      [9, 8, 8, 8, 8, 8, 8, 8, 8],
      [9, 8, 7, 7, 7, 7, 7, 7, 7],
      [9, 8, 7, 6, 6, 6, 6, 6, 9],
      [9, 8, 7, 6, 7, 7, 7, 7, 7],
      [9, 8, 7, 6, 7, 4, 4, 4, 4],
      [9, 8, 7, 6, 7, 4, 3, 3, 3],
      [9, 8, 7, 6, 7, 4, 3, 2, 2],
      [9, 8, 7, 9, 7, 4, 3, 2, 1],
    ]);
    asserts.assertEquals(9, result);
  },
});

Deno.test({
  name: `
  Given the following 3x6 height map:
  [
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 3, 3, 3, 3, 3, 2, 1],
    [1, 2, 3, 4, 4, 4, 3, 2, 1],
    [1, 2, 3, 4, 5, 4, 3, 2, 1],
    [1, 2, 3, 4, 4, 4, 3, 2, 1],
    [1, 2, 3, 3, 3, 3, 3, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
  ]
  Return 0.
  `,
  fn(): void {
    const result: number = trapRainWater([
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 3, 3, 3, 3, 3, 2, 1],
      [1, 2, 3, 4, 4, 4, 3, 2, 1],
      [1, 2, 3, 4, 5, 4, 3, 2, 1],
      [1, 2, 3, 4, 4, 4, 3, 2, 1],
      [1, 2, 3, 3, 3, 3, 3, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 2, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]);
    asserts.assertEquals(0, result);
  },
});
