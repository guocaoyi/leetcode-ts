/**
 * # 67. Add Binary
 *
 * Given two binary strings, return their sum (also a binary string).
 *
 * The input strings are both **non-empty** and contains only characters 1 or 0.
 *
 * ## Example
 *
 * ```bash
 * Input: a = "11", b = "1"
 * Output: "100"
 * ```
 *
 * ```bash
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * ```
 * 
 * ### 注意
 * 一开始偷懒，直接使用 parseInt 来进行数值类型的转换，导致了大数值丢失精度
 * 别忽略 Number.MAX_SAFE_INTEGER，的损失精度的情况
 */
export type Submission = (a: string, b: string) => string;

/**
 * 逐位计算
 * @time
 * @runtime 84 ms > 19.59%
 * @memory 35.6 MB < 71.79%
 */
export const addBinary = (a: string, b: string): string => {
  const result: number[] = [];
  let fix: number = 0;
  for (let p = a.split(""), n = b.split(""); p.length > 0 || n.length > 0;) {
    let sum = Number(p.pop() || "0") + Number(n.pop() || "0") + fix;
    if (sum <= 1) {
      fix = 0;
    }
    if (sum === 2) {
      fix = 1;
      sum = 0;
    } else if (sum === 3) {
      fix = 1;
      sum = 1;
    }
    result.unshift(sum);
  }

  return (fix === 1 ? "1" : "") + result.join("");
};
