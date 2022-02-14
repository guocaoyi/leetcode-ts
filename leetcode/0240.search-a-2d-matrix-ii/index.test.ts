import * as asserts from "https://deno.land/std@0.125.0/testing/asserts.ts";
import * as log from "https://deno.land/std@0.125.0/log/mod.ts";
import { searchMatrix as searchMatrix } from "./index.ts";

log.info("240. Search A 2D Marix II");

Deno.test({
  name: `
  [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]
  Given target = \`5\`, return \`true\`.
  `,
  fn(): void {
    const matrix = [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ];
    asserts.assertEquals(true, searchMatrix(matrix, 5));
  },
});

Deno.test({
  name: `
  [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]
  Given target = \`30\`, return \`true\`.
  `,
  fn(): void {
    const matrix = [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ];
    asserts.assertEquals(true, searchMatrix(matrix, 30));
  },
});

Deno.test({
  name: `
  [
    [1, 3, 6],
    [2, 4, 8],
  ],
  Given target = \`4\`, return \`true\`.
  `,
  fn(): void {
    const matrix = [
      [1, 3, 6],
      [2, 4, 8],
    ];
    asserts.assertEquals(true, searchMatrix(matrix, 4));
  },
});

Deno.test({
  name: `
  [
    [1, 3, 6],
    [2, 4, 8],
  ],
  Given target = \`5\`, return \`false\`.
  `,
  fn(): void {
    const matrix = [
      [1, 3, 6],
      [2, 4, 8],
    ];
    asserts.assertEquals(false, searchMatrix(matrix, 5));
  },
});
