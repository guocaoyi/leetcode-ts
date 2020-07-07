/**
 * # 62. Unique Paths
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 * 
 * The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 * 
 * How many possible unique paths are there?
 * 
 * ## Example
 * 
 * ```bash
 * Input: m = 3, n = 2
 * Output: 3
 * Explanation:
 * From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
 * 1. Right -> Right -> Down
 * 2. Right -> Down -> Right
 * 3. Down -> Right -> Right
 * ```
 * ```bash
 * Input: m = 7, n = 3
 * Output: 28
 * ```
 * 
 * ## Constraints
 * 
 * - `1 <= m, n <= 100`
 * - It's guaranteed that the answer will be less than or equal to `2 * 10 ^ 9`.
 */
export type Solution = (m: number, n: number) => number;

/**
 * 动态规划
 * [i,j] -> [m-1,n-1] to [0,0];缓存每个点位的路径数量
 * @date 2020/07/07 08:47:49
 * @time O(2n)
 * @space O(1)
 * @runtime
 * @memory
 * @runtime_cn 72 ms, faster than 75.00%
 * @memory_cn 35.8 MB, less than 100.00%
 */
export const uniquePaths = (m: number, n: number): number => {
  const arr = new Array(m);
  for (let i = m - 1; i >= 0; i--) {
    arr[i] = new Array(n);
    for (let j = n - 1; j >= 0; j--) {
      if (i === m - 1 || j === n - 1) {
        arr[i][j] = 1;
      } else {
        arr[i][j] = arr[i + 1][j] + arr[i][j + 1];
      }
    }
  }
  return arr[0][0];
};
