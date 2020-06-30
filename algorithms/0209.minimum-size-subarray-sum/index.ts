/**
 * # 209. Minimum Size Subarray Sum
 *
 * Given an array of **n** positive integers and a positive integer **s**,
 * find the minimal length of a **contiguous** subarray of which the sum ≥ **s**. If there isn't one, return 0 instead.
 *
 * ## Example
 *
 * ```bash
 * Input: s = 7, nums = [2,3,1,2,4,3]
 * Output: 2
 * Explanation: the subarray [4,3] has the minimal length under the problem constraint.
 * ```
 *
 * ## Follow up
 *
 * If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n).
 */
export type Solution = (str: number, nums: number[]) => number;

/**
 * Two Pointer
 * @date 2020.06.29 20:53
 * @time O(n)
 * @space O(1)
 * @runtime 72 ms, faster then 100.00%
 * @memory 37.9 MB, less then 100.00%
 * @runtime_cn 88 ms, faster then 75.00%
 * @memory_cn 37.3 MB, less then 100.00%
 */
export const minSubArrayLen = (s: number, nums: number[]): number => {
  let minLen: number = nums.length + 1;
  let sum: number = 0;
  const subArray: number[] = [];
  let i = 0; // 游标
  while (subArray.length <= nums.length && i <= nums.length) {
    if (sum >= s) {
      // subArray.size < min_len, upgrade minLen
      subArray.length < minLen && (minLen = subArray.length);

      // sum >= s -> subArray.shift
      let front = subArray.shift();
      sum -= (front as number);
    } else {
      // sum < s -> subArray.push
      sum += nums[i];
      subArray.push(nums[i++]);
    }
  }
  return minLen > nums.length ? 0 : minLen;
};
