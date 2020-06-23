/**
 * # 51. N-Queens
 *
 * The n-queens puzzle is the problem of placing n queens
 * on an n×n chessboard such that no two queens attack each other.
 *
 * ![N-Queens](../../assets/images/8-queens.png)
 *
 * Given an integer _n_, return all distinct solutions to the _n-queens_ puzzle.
 * Each solution contains a distinct board configuration of the n-queens' placement,
 * where `'Q'` and `'.'` both indicate a queen and an empty space respectively.
 *
 * ```bash
 * Input: 4
 * Output: [
 *  [".Q..",  // Solution 1
 *   "...Q",
 *   "Q...",
 *   "..Q."],
 *
 *  ["..Q.",  // Solution 2
 *   "Q...",
 *   "...Q",
 *   ".Q.."]
 * ]
 * Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.
 * ```
 */

/**
 * 回溯法
 */
export const solveNQueens = (n: number): string[][] => {
  const board = new Array(n);
  return null;
};
