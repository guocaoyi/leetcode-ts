import * as asserts from "https://deno.land/std@0.125.0/testing/asserts.ts";
import * as log from "https://deno.land/std@0.125.0/log/mod.ts";
import { solveNQueens } from "./index.ts";

log.info("51. N Queens");

Deno.test({
  name: `
  Input: 4
  Output: [
    [
      ".Q..",
      "...Q",
      "Q...",
      "..Q.",
    ],
    [
      "..Q.",
      "Q...",
      "...Q",
      ".Q..",
    ],
  ]
  Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.
  `,
  fn(): void {
    const result: string[][] = solveNQueens(4);
    asserts.assertEquals(
      [
        [".Q..", "...Q", "Q...", "..Q."],
        ["..Q.", "Q...", "...Q", ".Q.."],
      ],
      result,
    );
  },
});

Deno.test({
  name: `
  Input: 0
  Output: []
  `,
  fn(): void {
    const result: string[][] = solveNQueens(0);
    asserts.assertEquals([], result);
  },
});

Deno.test({
  name: `
  Input: 1
  Output: 
  [
    ["Q"]
  ]
  `,
  fn(): void {
    const result: string[][] = solveNQueens(1);
    asserts.assertEquals([["Q"]], result);
  },
});
