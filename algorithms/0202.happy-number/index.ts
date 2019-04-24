/**
 * 一开始以为这题很简单，也没仔细考虑；使用了 Array.reduce() 和 While 控制语句完事；跑测试用例时才发现，第二条用例就没有通过。问题出在时间复杂度上，这里必须对死循环进行处理。
 * @time 2019.03.15
 * @status Time Limit Exceeded
 * @params `2`
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
