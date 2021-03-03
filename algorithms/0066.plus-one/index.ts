/**
 * # 66. Plus One
 *
 * Given a **non-empty** array of digits representing a non-negative integer, plus one to the integer.
 *
 * The digits are stored such that the most significant digit is at the head of the list,
 * and each element in the array contain a single digit.
 *
 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 *
 * ## Example
 *
 * ```bash
 * Input: [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 * ```
 *
 * ```bash
 * Input: [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 * ```
 */
export type Solution = (digits: number[]) => number[];

/**
 * 进位制运算
 * 从各位开始计算
 * @date 2020.06.24 18:54
 * @time
 * @space
 * @runtime 72 ms, faster than 50.00%
 * @memory 33.9 MB, less than 100.00%
 * @runtime_cn
 * @memory_cn
 */
export const plusOne = (digits: number[]): number[] => {
  const integer = Number(digits.join(""));
  if (Number(digits.join("")) < Number.MAX_SAFE_INTEGER) {
    return String(integer + 1).split("").map((s) => Number(s));
  }

  let p = digits.length - 1;
  let lastComputedIsCarry = false;
  while (p >= 0) {
    const d = digits[p] + 1;
    if (d === 10) {
      digits[p] = 0;
      lastComputedIsCarry = true;
    } else {
      digits[p] = d;
      lastComputedIsCarry = false;
      break;
    }
    p -= 1;
  }
  if (lastComputedIsCarry) {
    digits = [1].concat(digits);
  }
  return digits;
};
