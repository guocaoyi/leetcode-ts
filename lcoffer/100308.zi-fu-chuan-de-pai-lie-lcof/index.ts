/**
 * # 剑指 Offer 38. 字符串的排列
 *
 * 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
 *
 * ## Example
 *
 * ```bash
 * 输入：s = "abc"
 * 输出：["abc","acb","bac","bca","cab","cba"]
 * ```
 *
 * ## Constraints
 *
 * - `1 <= s 的长度 <= 8`
 */
export type Solution = (s: string) => string[];

/**
 * 思路 1：排列组合
 * 思路 2：排列组合
 */
export const permutation = (s: string): string[] => {
  const arr: string[] = s.split("").sort();
  return arr;
};
