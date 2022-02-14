import * as asserts from "https://deno.land/std@0.125.0/testing/asserts.ts";
import * as log from "https://deno.land/std@0.125.0/log/mod.ts";
import { rotate } from "./index.ts";

log.info("100184 Palindrome Permutation LCCI");

Deno.test({
  name: `
  Given matrix = 
  [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ],
   * 
  Rotate the matrix in place. It becomes:
  [
    [7,4,1],
    [8,5,2],
    [9,6,3]d
  ]: "tacocat"、"atcocta", etc.
  `,
  fn(): void {
    const matrix: number[][] = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    rotate(matrix);
    asserts.assertEquals(
      [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
      ],
      matrix,
    );
  },
});

Deno.test({
  name: `
  Given matrix =
  [
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
  ], 
   * 
  Rotate the matrix in place. It becomes:
  [
    [15,13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7,10,11]
  ]
  `,
  fn(): void {
    const matrix: number[][] = [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ];
    rotate(matrix);
    asserts.assertEquals(
      [
        [15, 13, 2, 5],
        [14, 3, 4, 1],
        [12, 6, 8, 9],
        [16, 7, 10, 11],
      ],
      matrix,
    );
  },
});
