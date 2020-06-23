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

/**
 * 转数字
 * 一开始没有考虑超出 JS 最大数的问题，直接转成数字进行运算，导致损失精度；
 * @time
 * @status Failed
 * @case [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
 */
export const plusOne = (digits: number[]): Array<number | string> =>
  String(Number(digits.join("")) + 1).split("");

/**
 * 进位制运算
 * 从各位开始计算
 */
export const plusOne$1 = (digits: number[]): Array<number | string> => {
  let p: number = digits.length - 1;
  if (Number(digits.join("")) <= Number.MAX_SAFE_INTEGER - 1) {
    return String(Number(digits.join("")) + 1).split("");
  }

  let last_computed_is_carry: boolean = false;
  while (p >= 0) {
    let d: number = digits[p] + 1;
    if (d === 10) {
      digits[p] = 0;
      last_computed_is_carry = true;
    } else {
      digits[p] = d;
      last_computed_is_carry = false;
      break;
    }
    p -= 1;
  }
  if (last_computed_is_carry) {
    digits = [1].concat(digits);
  }
  return digits;
};
