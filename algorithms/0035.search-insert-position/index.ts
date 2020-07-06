/**
 * # 35. Search Insert Position
 * 
 * Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * 
 * You may assume no duplicates in the array.
 * 
 * ## Example
 * ```bash
 * Input: [1,3,5,6], 5
 * Output: 2
 * ```
 * ```bash
 * Input: [1,3,5,6], 2
 * Output: 1
 * ```
 * ```bash
 * Input: [1,3,5,6], 7
 * Output: 4
 * ```
 * ```bash
 * Input: [1,3,5,6], 0
 * Output: 0
 * ```
 */
export type Solution = (nums: number[], target: number) => number;

/**
 * 
 * @date 2020/07/03 00:10:10
 * @time O(n)
 * @space O(1)
 * @runtime 60 ms, faster than 100.00% 
 * @memory 35.7 MB, less than 100.00%
 * @runtime_cn 72 ms, faster than 60.71% 
 * @memory_cn 34.9 MB, less than 100.00%
 */
export const searchInsert = (nums: number[], target: number): number => {
  let result: number = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) {
      continue;
    } else {
      result = i;
      break;
    }
  }
  return result;
};

/**
 * 分治法：二分搜索
 * @date
 * @time O(log n)
 * @space O(1)
 * @runtime
 * @memory
 * @runtime_cn
 * @memory_cn
 */
export const searchInsert1 = (nums: number[], target: number): number => {
  let result: number = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) {
      continue;
    } else {
      result = i;
      break;
    }
  }
  return result;
};
