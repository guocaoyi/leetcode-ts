/**
 * # 1. Two Sum
 *
 * Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.
 *
 * You may assume that each input would have ***exactly*** one solution, and you may not use the same element twice.
 *
 * ## Example
 *
 * ```bash
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * ```
 */
export type Solution = (nums: number[], target: number) => number[];

/**
 * 嵌套循环遍历
 * 这事最偷懒的办法，快速实现后，再考虑优化方案
 * 使用Array.forEach在性能上会有点损耗(测试用例:61ms到59ms)
 * @date 2018.9.13
 * @time
 * @space
 * @runtime
 * @memory
 * @runtime_cn 120 ms, faster then 40.065%
 * @memory_cn N/A
 */
export const twoSum = (nums: number[], target: number): number[] => {
  let result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        result = [i, j];
        break;
      }
    }
  }
  return result;
};

/**
 * 哈希存储
 * @date 2018.9.13
 * @time
 * @space
 * @runtime
 * @memory
 * @runtime_cn 80 ms, faster then 59.00%
 * @memory_cn N/A
 */
export const twoSum1 = (nums: number[], target: number): number[] => {
  const map: { [k: number]: number } = {};
  nums.forEach((i, k) => (map[i] = k));
  let result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const x = target - nums[i];
    if (x in map && map[x] != i) {
      result = [i, map[x]];
      break;
    }
  }
  return result;
};

/**
 * 哈希存储
 * @date 2018.9.13
 * @time
 * @space
 * @runtime
 * @memory
 * @runtime_cn 56 ms, faster then 100.00%
 * @memory_cn N/A
 */
export const twoSum2 = (nums: number[], target: number): number[] => {
  const map: { [k: number]: number } = {};
  const length: number = nums.length;
  let result: number[] = [];
  for (let i = 0; i < length; i++) {
    map[nums[i]] = i;
  }
  for (let i = 0; i < length; i++) {
    const x = target - nums[i];
    if (x in map && map[x] != i) {
      result = [i, map[x]];
      break;
    }
  }
  return result;
};

/**
 * 哈希遍历
 * @date 2018.9.13
 * @time
 * @space
 * @runtime
 * @memory
 * @runtime_cn 52 ms, faster then 100%
 * @memory_cn N/A
 */
export const twoSum3 = (nums: number[], target: number): number[] => {
  const map: { [k: number]: number } = {};
  const length = nums.length;
  let result: number[] = [];
  for (let i = 0; i < length; i++) {
    const x: number = target - nums[i];
    if (x in map && map[x] != i) {
      result = [map[x], i];
      break;
    }
    map[nums[i]] = i;
  }
  return result;
};
