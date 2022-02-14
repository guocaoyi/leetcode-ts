/**
 * # 1137. N-th Tribonacci Number
 *
 * The Tribonacci sequence Tn is defined as follows:
 *
 * T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
 *
 * Given `n`, return the value of Tn.
 *
 * ## Example
 *
 * ```bash
 * Input: n = 4
 * Output: 4
 * Explanation:
 * T_3 = 0 + 1 + 1 = 2
 * T_4 = 1 + 1 + 2 = 4
 * ```
 * ```bash
 * Input: n = 25
 * Output: 1389537
 * ```
 *
 * ## Constraints
 *
 * - `0 <= n <= 37`
 * - The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.
 */
export type Solution = (n: number) => number;

/**
 * @date 2020/07/07 12:47:15
 * @time O(n)
 * @space O(n)
 * @runtime
 * @memory
 * @runtime_cn 60 ms, faster than 100.00%
 * @memory_cn 32.3 MB, less than 100.00%
 */
export const tribonacci = (n: number): number => {
  const cache = [0, 1, 1];
  const fn = (n: number): number =>
    cache[n] = n in cache ? cache[n] : fn(n - 1) + fn(n - 2) + fn(n - 3);
  return fn(n);
};

/**
 * enumeric
 * @date 2020/07/07 12:55:00
 * @time O(1)
 * @space O(1)
 * @runtime
 * @memory
 * @runtime_cn 60 ms, faster than 100.00%
 * @memory_cn 32.3 MB, less than 100.00%
 */
export const tribonacci$1 = (n: number): number => {
  return [
    0,
    1,
    1,
    2,
    4,
    7,
    13,
    24,
    44,
    81,
    149,
    274,
    504,
    927,
    1705,
    3136,
    5768,
    10609,
    19513,
    35890,
    66012,
    121415,
    223317,
    410744,
    755476,
    1389537,
    2555757,
    4700770,
    8646064,
    15902591,
    29249425,
    53798080,
    98950096,
    181997601,
    334745777,
    615693474,
    1132436852,
    2082876103,
  ][n];
};
