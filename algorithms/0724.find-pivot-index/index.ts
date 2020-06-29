/**
 * # 724. Find Pivot Index
 *
 * Given an array of integers `nums`, write a method that returns the "pivot" index of this array.
 *
 * We define the pivot index as the index where the sum of the numbers to the left of the index
 * is equal to the sum of the numbers to the right of the index.
 *
 * If no such index exists, we should return -1. If there are multiple pivot indexes,
 * you should return the left-most pivot index.
 *
 * ## Example
 *
 * ```bash
 * Input:
 * nums = [1, 7, 3, 6, 5, 6]
 * Output: 3
 * Explanation:
 * The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3.
 * Also, 3 is the first index where this occurs.
 * ```
 *
 * ```bash
 * Input:
 * nums = [1, 2, 3]
 * Output: -1
 * Explanation:
 * There is no index that satisfies the conditions in the problem statement.
 * ```
 *
 * ## Note
 *
 * - The length of `nums` will be in the range `[0, 10000]`.
 * - Each element `nums[i]` will be an integer in the range `[-1000, 1000]`.
 */
export type Solution = (nums: number[]) => number;

/**
 * Two Pointers
 * 使用左右两个指针进行逻辑处理
 * @time 2019.06.13
 * @runtime 74 ms > 67.50%
 * @memory 37.7 MB < 87.50%
 */
export const pivotIndex = (nums: number[]): number => {
  const _len: number = nums.length;
  if (_len === 0 || _len === 1) {
    return _len - 1;
  }

  let lSum = 0;
  let rSum = nums.reduce((l, r) => l + r);
  for (let i = 0; i < _len; i += 1) {
    rSum -= nums[i] || 0;
    if (lSum === rSum) {
      return i;
    }
    lSum += nums[i] || 0;
  }
  return -1;
};
