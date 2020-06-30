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
export type Solution = (x: number, n: number) => number;

/**
 * 内置 API 完成
 * 这里偷懒，直接调用了全局对象 Math.pow 方法，Math#pow
 * @date 2020.06.29 12:32:00
 * @time
 * @space
 * @runtime
 * @memory
 * @runtime_cn 72 ms, less then 66.67%
 * @memory_cn 33.2 MB, less then 100.00%
 */
export const myPow = (x: number, n: number): number =>
  Number(Math.pow(x, n).toFixed(5));

/**
 * 内置 API 完成
 * 这里偷懒，直接用了一元运算符 **
 * @date 2020.06.29 12:32:00
 * @time
 * @space
 * @runtime
 * @memory
 * @runtime_cn 68 ms, less then 83.33%
 * @memory_cn 33.1 MB, less then 100.00%
 */
export const myPow$1 = (x: number, n: number): number =>
  Number((x ** n).toFixed(5));
