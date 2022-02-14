/**
 * 阶乘（Factorial）循环
 * @param num number num!
 */
export const factorial = (num: number = 0): number => {
  if (num == 0 || isNaN(Number(num))) return 0;
  for (let i = num - 1; i > 0; i--) {
    num *= i;
  }
  return num;
};

/**
 * 阶乘（递归）
 * @param num number num!
 */
export const factorialRecursive = (num: number): number =>
  num > 1 ? num * factorialRecursive(num - 1) : 1;
