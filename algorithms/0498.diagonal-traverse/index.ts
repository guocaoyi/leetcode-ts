/**
 * # 498. Diagonal Traverse
 *
 * Given a matrix of M x N elements (M rows, N columns), return all elements of
 * the matrix in diagonal order as shown in the below image.
 *
 * ## Example
 *
 * ```bash
 * Input:
 * [
 *  [ 1, 2, 3 ],
 *  [ 4, 5, 6 ],
 *  [ 7, 8, 9 ]
 * ]
 *
 * Output:  [1,2,4,7,5,3,6,8,9]
 * ```
 *
 * ## Explanation:
 *
 * ![498](./assets/498_diagonal_traverse.png)
 *
 * ## Note
 *
 * - nums will have a length in the range [1, 50].
 * - Every nums[i] will be an integer in the range [0, 99].
 */
export type Solution = (matrix: number[][]) => number[];

/**
 * 多指针解法
 * @date 2020.06.30 00:35:00
 * @time O(n)
 * @space O(1)
 * @runtime 188 ms, faster than 100.00%
 * @memory 44.4 MB, less than 100.00%
 * @runtime_cn 160 ms, faster than 33.33%
 * @memory_cn 43.3 MB, less than 100.00%
 */
export const findDiagonalOrder = (matrix: number[][]): number[] => {
  const result: number[] = [];
  const M = matrix.length; // row
  const N = M > 0 ? matrix[0].length : 0; // col

  type Tran = [number, number, boolean];

  const toRight = (
    row: number,
    col: number,
    direction: boolean,
  ): Tran => [row, col + 1, !direction]; // →
  const toBottom = (
    row: number,
    col: number,
    direction: boolean,
  ): Tran => [row + 1, col, !direction]; // ↓
  const toUpperRight = (
    row: number,
    col: number,
    direction: boolean,
  ): Tran => [row - 1, col + 1, direction]; // ↗
  const toBottomLeft = (
    row: number,
    col: number,
    direction: boolean,
  ): Tran => [row + 1, col - 1, direction]; // ↙

  let row = 0, col: number = 0;
  let direction: boolean = true; // true: ↑ false: ↓
  while (row < M && col < N) {
    // push
    result.push(matrix[row][col]);

    if (row === 0 && col === 0) {
      // out of N border ? ↓ : →
      [row, col, direction] = col + 1 >= N
        ? toBottom(row, col, direction)
        : toRight(row, col, direction);
    } else if (row === 0 && col > 0) {
      // up ? (out of N border ? ↓ : →) : (out of M border ? → : ↙ )
      [row, col, direction] = direction
        ? (col + 1 >= N
          ? toBottom(row, col, direction)
          : toRight(row, col, direction))
        : (row + 1 >= M
          ? toRight(row, col, direction)
          : toBottomLeft(row, col, direction));
    } else if (row > 0 && col === 0) {
      // up ? (out of M border ? → : ↓) : (out of M border ? → : ↓)
      [row, col, direction] = direction
        ? (col + 1 >= N
          ? toBottom(row, col, direction)
          : toUpperRight(row, col, direction))
        : (row + 1 >= M
          ? toRight(row, col, direction)
          : toBottom(row, col, direction));
    } else if (row > 0 && col > 0) {
      // up ? (out of N border ? ↓ : ↗) : (out of M border ? → : ↙)
      [row, col, direction] = direction
        ? (col + 1 >= N
          ? toBottom(row, col, direction)
          : toUpperRight(row, col, direction))
        : (row + 1 >= M
          ? toRight(row, col, direction)
          : toBottomLeft(row, col, direction));
    }
  }
  return result;
};
