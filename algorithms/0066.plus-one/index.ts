`
0. \*\*

\*\*\*

"""
\*\*\*
"""

::: \*\*
### \*\*
>>> \*\*
`;
let plusOne: (digits: number[]) => Array<number | string>;

/**
 * 转数字
 * 一开始没有考虑超出 JS 最大数的问题，直接转成数字进行运算，导致损失精度；
 * @status Failed
 * @case [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
 */
plusOne = (digits: number[]): Array<number | string> =>
  String(Number(digits.join('')) + 1).split('');

/**
 * 进位制运算
 * 从各位开始计算
 */
plusOne = (digits: number[]): Array<number | string> => {
  let p: number = digits.length - 1;
  if (Number(digits.join('')) <= Number.MAX_SAFE_INTEGER - 1) {
    return String(Number(digits.join('')) + 1).split('');
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

export default plusOne;
