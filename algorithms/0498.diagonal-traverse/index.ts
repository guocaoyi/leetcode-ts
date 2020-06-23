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
 * ![498](../../assets/images/498_diagonal_traverse.png)
 *
 * ## Note
 *
 * - nums will have a length in the range [1, 50].
 * - Every nums[i] will be an integer in the range [0, 99].
 */

/**
 * @time
 */
export const findDiagonalOrder = (matrix: number[][]): number[] => {
  const row: number = matrix.length;
  const result: number[] = [];
  if (row === 0) {
    return result;
  }

  // rows > 0
  let columns: number = matrix[0].length;
  let p: number[] = [0, 0]; //
  let direction: boolean = true; // true:x向右上 false:向左下

  while (!(p[0] === row && p[1] === columns)) {
    // 新注值
    result.push(matrix[p[0]][p[1]]);

    // 处理游标逻辑
    if (direction) {
      // 右上
      if (p[0] - 1 < 0 || p[1] + 1 >= columns) {
        // 越界
      }
      p[0] = p[0] - 1;
      p[1] = p[1] + 1;
    } else {
      // 左下
      p[0] = p[0] + 1;
      p[1] = p[1] - 1;
    }
  }

  return result;
};
