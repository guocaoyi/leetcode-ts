import * as asserts from "https://deno.land/std@0.125.0/testing/asserts.ts";
import * as log from "https://deno.land/std@0.125.0/log/mod.ts";
import { spiralOrder } from "./index.ts";

log.info("0054 Spiral Marix");

Deno.test({
  name: `
  Input: []
  Output: []
  `,
  fn(): void {
    const result: number[] = spiralOrder([]);
    asserts.assertEquals(result, []);
  },
});

Deno.test({
  name: `
  Input: [[]]
  Output: []
  `,
  fn(): void {
    const result: number[] = spiralOrder([[]]);
    asserts.assertEquals(result, []);
  },
});

Deno.test({
  name: `
  Input:
    [
      [1]
    ]
  Output: [1]
  `,
  fn(): void {
    const result: number[] = spiralOrder([[1]]);
    asserts.assertEquals(result, [1]);
  },
});

Deno.test({
  name: `
  Input:
    [
      [1],
      [2],
      [3]
    ]
  Output: [1, 2, 3]
  `,
  fn(): void {
    const result: number[] = spiralOrder([[1], [2], [3]]);
    asserts.assertEquals(result, [1, 2, 3]);
  },
});

Deno.test({
  name: `
  Input:
    [
      [1, 2, 3],
    ]
  Output: [1, 2, 3]
  `,
  fn(): void {
    const result: number[] = spiralOrder([[1, 2, 3]]);
    asserts.assertEquals(result, [1, 2, 3]);
  },
});

Deno.test({
  name: `
  Input:
    [
      [1, 2],
      [3, 4],
    ]
  Output: [1, 2, 4, 3]
  `,
  fn(): void {
    const result: number[] = spiralOrder([
      [1, 2],
      [3, 4],
    ]);
    asserts.assertEquals(result, [1, 2, 4, 3]);
  },
});

Deno.test({
  name: `
  Input:
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
  Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
  `,
  fn(): void {
    const result: number[] = spiralOrder([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
    asserts.assertEquals(result, [1, 2, 3, 6, 9, 8, 7, 4, 5]);
  },
});

Deno.test({
  name: `
  Input:
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
    ]
  Output: [1, 2, 3, 4, 8, 7, 6, 5]
  `,
  fn(): void {
    const result: number[] = spiralOrder([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
    ]);
    asserts.assertEquals(result, [1, 2, 3, 4, 8, 7, 6, 5]);
  },
});

Deno.test({
  name: `
  Input:
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ]
  Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
  `,
  fn(): void {
    const result: number[] = spiralOrder([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ]);
    asserts.assertEquals(result, [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
  },
});

Deno.test({
  name: `
  Input:
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ]
  Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
  `,
  fn(): void {
    const result: number[] = spiralOrder([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ]);
    asserts.assertEquals(
      result,
      [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10],
    );
  },
});

Deno.test({
  name: `
  Input:
    [
      [1, 2, 3, 4, 5, 6, 7, 8],
      [9, 10, 11, 12, 13, 14, 15, 16],
    ]
  Output: [1, 2, 3, 4, 5, 6, 7, 8, 16, 15, 14, 13, 12, 11, 10, 9]
  `,
  fn(): void {
    const result: number[] = spiralOrder([
      [1, 2, 3, 4, 5, 6, 7, 8],
      [9, 10, 11, 12, 13, 14, 15, 16],
    ]);
    asserts.assertEquals(
      result,
      [1, 2, 3, 4, 5, 6, 7, 8, 16, 15, 14, 13, 12, 11, 10, 9],
    );
  },
});

Deno.test({
  name: `
  Input:
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
      [10],
      [11],
      [12],
      [13],
      [14],
      [15],
      [16]
    ]
  Output: [1, 2, 3, 4, 5, 6, 7, 8, 16, 15, 14, 13, 12, 11, 10, 9]
  `,
  fn(): void {
    const result: number[] = spiralOrder([
      [1],
      [2],
      [3],
      [4],
      [5],
      [6],
      [7],
      [8],
      [9],
      [10],
      [11],
      [12],
      [13],
      [14],
      [15],
      [16],
    ]);
    asserts.assertEquals(
      result,
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    );
  },
});
