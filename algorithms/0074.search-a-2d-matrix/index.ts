/**
 * # 74. Search a 2D Matrix
 *
 * Write an efficient algorithm that searches for a value in an *m x n* matrix.
 * This matrix has the following properties:
 *
 * - Integers in each row are sorted from left to right.
 * - The first integer of each row is greater than the last integer of the previous row.
 *
 * ## Example
 *
 * ```bash
 * Input:
 * matrix = [
 *   [1,   3,  5,  7],
 *   [10, 11, 16, 20],
 *   [23, 30, 34, 50]
 * ]
 * target = 3
 * Output: true
 * ```
 *
 * ```bash
 * Input:
 * matrix = [
 *   [1,   3,  5,  7],
 *   [10, 11, 16, 20],
 *   [23, 30, 34, 50]
 * ]
 * target = 13
 * Output: false
 * ```
 */
export type Solution = (matrix: number[][], target: number) => boolean;

/**
 * 双层遍历
 * @date 2019.3.15
 * @time
 * @space
 * @runtime
 * @memory
 * @runtime_cn 64 ms, faster then 58.68%
 * @memory_cn 35.4 MB, less then 7.41%
 */
export const searchMatrix = (matrix: number[][], target: number): boolean => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == target) {
        return true;
      }
    }
  }
  return false;
};
