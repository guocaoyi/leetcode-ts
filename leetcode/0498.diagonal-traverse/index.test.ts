import * as asserts from "https://deno.land/std@0.125.0/testing/asserts.ts";
import * as log from "https://deno.land/std@0.125.0/log/mod.ts";
import { findDiagonalOrder } from "./index.ts";

log.info("498. Diagonal Traverse");

Deno.test({
  name: `
  Input:  []
  Output: []
  `,
  fn(): void {
    const result = findDiagonalOrder([]);
    asserts.assertEquals([], result);
  },
});

Deno.test({
  name: `
  Input:  [[]]
  Output: []
  `,
  fn(): void {
    const result = findDiagonalOrder([[]]);
    asserts.assertEquals([], result);
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
    const result = findDiagonalOrder([[1]]);
    asserts.assertEquals([1], result);
  },
});

Deno.test({
  name: `
  Input:
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
  ]
  Output:  [1, 2, 3, 4, 5, 6, 7, 8, 9]
  `,
  fn(): void {
    const result = findDiagonalOrder([[1, 2, 3, 4, 5, 6, 7, 8, 9]]);
    asserts.assertEquals([1, 2, 3, 4, 5, 6, 7, 8, 9], result);
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
  ]
  Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  `,
  fn(): void {
    const result = findDiagonalOrder([[1], [2], [3], [4], [5], [6], [7], [8], [
      9,
    ]]);
    asserts.assertEquals([1, 2, 3, 4, 5, 6, 7, 8, 9], result);
  },
});

Deno.test({
  name: `
  Input:
  [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
  ]
  Output: [1, 2, 7, 8, 3, 4, 9, 10, 5, 6, 11, 12]
  `,
  fn(): void {
    const result = findDiagonalOrder([
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
    ]);
    asserts.assertEquals([1, 2, 7, 8, 3, 4, 9, 10, 5, 6, 11, 12], result);
  },
});

Deno.test({
  name: `
  Input:
  [
    [1, 2, 3, 4, 5,],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
  ]
  Output: [1, 2, 6, 11, 7, 3, 4, 8, 12, 13, 9, 5, 10, 14, 15]
  `,
  fn(): void {
    const result = findDiagonalOrder([
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
    ]);
    asserts.assertEquals(
      [1, 2, 6, 11, 7, 3, 4, 8, 12, 13, 9, 5, 10, 14, 15],
      result,
    );
  },
});

Deno.test({
  name: `
  Input:
  [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
    [11, 12]
  ]
  Output: [1, 2, 3, 5, 4, 6, 7, 9, 8, 10, 11, 12]
  `,
  fn(): void {
    const result = findDiagonalOrder([
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
      [11, 12],
    ]);
    asserts.assertEquals([1, 2, 3, 5, 4, 6, 7, 9, 8, 10, 11, 12], result);
  },
});

Deno.test({
  name: `
  Input:
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15],
  ]
  Output: [1, 2, 4, 7, 5, 3, 6, 8, 10, 13, 11, 9, 12, 14, 15]
  `,
  fn(): void {
    const result = findDiagonalOrder([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12],
      [13, 14, 15],
    ]);
    asserts.assertEquals(
      [1, 2, 4, 7, 5, 3, 6, 8, 10, 13, 11, 9, 12, 14, 15],
      result,
    );
  },
});

Deno.test({
  name: `
  Input:
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  Output: [1, 2, 4, 7, 5, 3, 6, 8, 9]
  `,
  fn(): void {
    const result = findDiagonalOrder([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
    asserts.assertEquals([1, 2, 4, 7, 5, 3, 6, 8, 9], result);
  },
});

Deno.test({
  name: `
  Input:
  [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ]
  Output: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  `,
  fn(): void {
    const result = findDiagonalOrder([
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ]);
    asserts.assertEquals(
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      result,
    );
  },
});

Deno.test({
  name: `
  Input:
  [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ]
  Output: [1, 2, 6, 11, 7, 3, 4, 8, 12, 16, 21, 17, 13, 9, 5, 10, 14, 18, 22, 23, 19, 15, 20, 24, 25]
  `,
  fn(): void {
    const result = findDiagonalOrder([
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ]);
    asserts.assertEquals(
      [
        1,
        2,
        6,
        11,
        7,
        3,
        4,
        8,
        12,
        16,
        21,
        17,
        13,
        9,
        5,
        10,
        14,
        18,
        22,
        23,
        19,
        15,
        20,
        24,
        25,
      ],
      result,
    );
  },
});
