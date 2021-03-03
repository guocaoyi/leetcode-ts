/**
 * # 63. Unique Paths II
 *
 * A robot is located at the top-left corner of a **m** x **n** grid (marked 'Start' in the diagram below).
 *
 * The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 *
 * Now consider if some obstacles are added to the grids. How many unique paths would there be?
 *
 * An obstacle and empty space is marked as `1` and `0` respectively in the grid.
 *
 * ## Note
 * 
 * m and n will be at most 100.
 *
 * ## Example
 *
 * ```bash
 * Input:
 * [
 *    [0,0,0],
 *    [0,1,0],
 *    [0,0,0]
 * ]
 * Output: 2
 * Explanation:
 * There is one obstacle in the middle of the 3x3 grid above.
 * There are two ways to reach the bottom-right corner:
 * 1. Right -> Right -> Down -> Down
 * 2. Down -> Down -> Right -> Right
 * ```
 */
export type Solution = (obstacleGrid: number[][]) => number;

/**
 * 递归
 * 一顿操作，结果超时了
 * @date
 * @time O(n^2)
 * @space O(1)
 * @runtime
 * @memory
 * @runtime_cn out of time
 * @memory_cn out of time
 */
export const uniquePathsWithObstacles = (obstacleGrid: number[][]): number => {
  let counter = 0;
  const loop = (i: number, j: number, m: number, n: number): number | void => {
    if (obstacleGrid[i][j] === 0) {
      if (i >= m - 1 && j >= n - 1) {
        return counter++;
      }
      if (i < m - 1) { // ↓
        loop(i + 1, j, m, n);
      }
      if (j < n - 1) { // →
        loop(i, j + 1, m, n);
      }
    }
  };
  loop(0, 0, obstacleGrid.length, obstacleGrid[0]?.length || 0); // [0,0] -> m*n
  return counter;
};

/**
 * 动态规划
 * [i,j] -> [m-1,n-1] to [0,0];缓存每个点位的路径数量
 * @date 2020/07/07 00:11:30
 * @time O(2n)
 * @space O(1)
 * @runtime
 * @memory
 * @runtime_cn 60 ms, faster than 100.00%
 * @memory_cn  33.1 MB, less than 100.00%
 */
export const uniquePathsWithObstacles$1 = (
  obstacleGrid: number[][],
): number => {
  const m: number = obstacleGrid.length; // row
  const n: number = obstacleGrid[0]?.length; // col
  if (!Number.isInteger(m) || !Number.isInteger(n)) {
    return 0;
  }

  // 最右下角一位
  obstacleGrid[m - 1][n - 1] =
    obstacleGrid[m - 1] && obstacleGrid[m - 1][n - 1] === 0 ? 1 : 0;

  // 最下边一行
  for (let i = m - 1, j = n - 2; j >= 0; j--) {
    obstacleGrid[i][j] = obstacleGrid[i][j] === 1 ? 0 : obstacleGrid[i][j + 1];
  }
  // 最右边一列
  for (let i = m - 2, j = n - 1; i >= 0; i--) {
    obstacleGrid[i][j] = obstacleGrid[i][j] === 1 ? 0 : obstacleGrid[i + 1][j];
  }

  //
  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      //  == 1 则为 0
      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = 0;
      } else {
        obstacleGrid[i][j] = obstacleGrid[i + 1][j] + obstacleGrid[i][j + 1];
      }
    }
  }

  // 遍历顺序，最右边一列，从下到上；
  // 然后倒数第二列，以此类推

  return obstacleGrid[0][0];
};
