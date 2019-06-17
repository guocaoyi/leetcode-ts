/**
 * 原生方法
 * 无脑转换类型，忽略了 Number.MAX_SAFE_INTEGER 的损失精度的情况
 * @param {string} a
 * @param {string} b
 * @return {string}
 * @state Error
 * @case '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101'
 * "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
 */
export const addBinary = (a: string, b: string): string => {
  return Number(parseInt(a, 2) + parseInt(b, 2)).toString(2);
};

/**
 * 逐位计算
 * @param {string} a
 * @param {string} b
 * @return {string}
 * @state Accepted
 */
export const addBinary2 = (a: string, b: string): string => {
  const result: number[] = [];
  let fix: number = 0;
  for (let p = a.split(''), n = b.split(''); p.length > 0 || n.length > 0; ) {
    let sum = Number(p.pop() || '0') + Number(n.pop() || '0') + fix;
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

  return (fix === 1 ? '1' : '') + result.join('');
};
