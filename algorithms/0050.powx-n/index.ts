/**
 * # 50. Pow(x,n)
 *
 * Implement `pow(x, n)`, which calculates x raised to the power n (xn).
 *
 * ## Example
 *
 * ```bash
 * Input: 2.00000, 10
 * Output: 1024.00000
 * ```
 *
 * ```bash
 * Input: 2.10000, 3
 * Output: 9.26100
 * ```
 *
 * ```bash
 * Input: 2.00000, -2
 * Output: 0.25000
 * Explanation: 2-2 = 1/22 = 1/4 = 0.25
 * ```
 *
 * ## Note
 *
 * - -100.0 < x < 100.0
 * - n is a 32-bit signed integer, within the range [−231, 231 − 1]
 */
type Submission = (x: number, n: number) => number | string

/**
 * 内置 API 完成
 * 这里偷懒，直接调用了全局对象 Math.pow 方法，Math#pow
 * @time 2019.04.19 10:39
 * @status Accepted
 * @runtime 76 ms > 42.42%
 * @memory 34.2 MB < 13.79%
 */
export const myPow: Submission = (x: number, n: number): number | string => {
  return Math.pow(x, n).toFixed(5)
}
