/**
 * @param {number} n
 * @return {boolean}
 * @time outoftime
 * @commit https://leetcode-cn.com/submissions/detail/14013924/
 */
var isHappy = (n: number): boolean => {
  let result: number = n;
  let f = (n: number): any =>
    String(n)
      .split("")
      .reduce((x: string, y: string) =>
        String(Math.pow(Number(x), 2) + Math.pow(Number(y), 2))
      );
  while (result !== 1) {
    result = f(result);
  }
  return true;
};
