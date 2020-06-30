/**
 * # 54. Sprial Matrix
 *
 * Given a matrix of *m x n* elements (*m* rows, *n* columns), return all elements of the matrix in spiral order.
 *
 * ## Example
 *
 * ```bash
 * Input:
 * [
 *    [ 1, 2, 3 ],
 *    [ 4, 5, 6 ],
 *    [ 7, 8, 9 ]
 * ]
 * Output: [1,2,3,6,9,8,7,4,5]
 * ```
 *
 * ```bash
 * Input:
 * [
 *   [1, 2, 3, 4],
 *   [5, 6, 7, 8],
 *   [9,10,11,12]
 * ]
 * Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 * ```
 */
export type Solution = (matrix: number[][]) => number[];

/**
 * 多指针遍历
 * @date 2020.06.24 15:39
 * @time
 * @space
 * @param matrix number[][]
 * @runtime 64 ms, faster than 93.75%
 * @memory 32.4 MB, less than 100.00%
 */
export const spiralOrder = (matrix: number[][]): number[] => {
  const result: number[] = [];

  // 模拟边界
  for (
    let top = 0,
      bottom = matrix.length - 1,
      left = 0,
      right = matrix[0] ? matrix[0].length - 1 : 0;
    top <= bottom && left <= right;
    top++, bottom--, left++, right--
  ) {
    // 1 * N only →
    for (let i = left; i <= right && top === bottom; i++) {
      result.push(matrix[top][i]);
    }

    // N * 1 (N > 1) only ↓
    for (let i = top; i <= bottom && right === top && top !== bottom; i++) {
      result.push(matrix[i][right]);
    }

    // →
    for (let i = left; i < right && bottom > top; i++) {
      result.push(matrix[top][i]);
    }

    // ↓
    for (let i = top; i < bottom && right > left; i++) {
      result.push(matrix[i][right]);
    }

    // ←
    for (let i = right; i > left && bottom > top; i--) {
      result.push(matrix[bottom][i]);
    }

    // ↑
    for (let i = bottom; i > top && right > left; i--) {
      result.push(matrix[i][left]);
    }
  }
  return result;
};
