/**
 * # 440. K-th Smallest in Lexicographical Order
 *
 * Given integers `n` and `k`, find the lexicographically k-th smallest integer in the range from `1` to `n`.
 *
 * ## Note: 1 ≤ k ≤ n ≤ 109.
 *
 * ## Example
 *
 * ```bash
 * Input:
 * n: 13   k: 2
 *
 * Output:
 * 10
 *
 * Explanation:
 * The lexicographical order is [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9], so the second smallest number is 10.
 * ```
 * 
 * ## Thinkings
 * 
 * 该题的粗暴的方法可能是直接创建一个长度为 `n` 的数组，然后 Array.prototype.sort() 获取 `k` 值；但是在 10^9 的情况下，内存可定超过了；所以需要领完
 */
export type Solution = (n: number, k: number) => number;

/**
 * 排序
 * @date
 * @time
 * @space
 */
export const findKthNumber = (n: number, k: number): number => {
  const array: number[] = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  // 桶排序
  return array.sort()[k - 1];
};
