/**
 * # 136. Single Number
 *
 * Given a **non-empty** array of integers, every element appears twice except for one. Find that single one.
 *
 * ## Note
 *
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 *
 * ## Example
 *
 * ```bash
 * Input: [2,2,1]
 * Output: 1
 * ```
 *
 * ```bash
 * Input: [4,1,2,1,2]
 * Output: 4
 * ```
 */
export type Solution = (nums: number[]) => number;

/**
 * 这里已经没有优化空间了，想想其他方法
 * @date 2019.04.19
 * @time
 * @space
 * @runtime 64 ms, faster than 81.78%
 * @memory 36.9 MB, less than 41.03%
 * @runtime_cn
 * @memory_cn
 */
export const singleNumber = (nums: number[]): number => {
  const map: any = {};
  const length: number = nums.length;
  for (let i: number = 0; i < length; i++) {
    if (nums[i] in map && map[nums[i]] == 1) {
      // map 已经存在 n
      delete map[nums[i]];
    } else {
      // 不存在
      map[nums[i]] = 1;
    }
  }
  return Number(Object.keys(map)[0]);
};
