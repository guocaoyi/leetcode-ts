/**
 * # 202. Happy Number
 *
 * Write an algorithm to determine if a number is "happy".
 *
 * A happy number is a number defined by the following process: Starting with any positive integer,
 * replace the number by the sum of the squares of its digits, and repeat the process until
 * the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
 * Those numbers for which this process ends in 1 are happy numbers.
 *
 * ## Example
 *
 * ```bash
 * Input: 19
 * Output: true
 * Explanation:
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 * ```
 * 
 * ### Thinkings
 * 
 * - 要报所有的推导结果环境，一旦发现已经存在，即除了死循环，立即退出；
 * 一开始以为这题很简单，也没仔细考虑；使用了 Array.reduce() 和 While 控制语句完事；跑测试用例时才发现，第二条用例就没有通过。问题出在时间复杂度上，这里必须对死循环进行处理。
 */
export type Solution = (n: number) => boolean;

/**
 * @date 2020.06.28 15:18
 * @time
 * @space
 * @runtime 92 ms, faster then 100.00%
 * @memory 36.9 MB, less then 100.00%
 * @runtime_cn 88 ms, faster then 25.00%
 * @memory_cn 35.9 MB, less then 100.00%
 */
export const isHappy = (n: number): boolean => {
  let result: number = n;
  let cache: Set<number> = new Set([]);

  let happify = (n: number): any => {
    let sum: number = 0;
    let len = String(n).length;
    for (let i = 0; i < len; i++) {
      sum += (n % 10) ** 2;
      n = (n - n % 10) / 10;
    }
    return sum;
  };

  while (result !== 1) {
    result = happify(result);
    if (cache.has(result)) {
      return false;
    }

    cache.add(result);
  }
  return true;
};
