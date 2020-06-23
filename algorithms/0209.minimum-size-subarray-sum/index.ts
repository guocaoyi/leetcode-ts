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

/**
 * Two Pointer
 */
export const minSubArrayLen = (str: number, nums: number[]): number => {
  // 伪代码
  // prev,next
  // sum < s; next右移
  // sum > s; prev右移 -> sum < s
  let mini: number = nums.length;
  for (let prev = 0, next = 0, sum = 0; next < nums.length;) {
    sum += nums[next++];
    if (sum >= str) {
      next - prev < mini && (mini = next - prev);
      while ((sum -= nums[prev++]) >= str) {}
    }
  }
  return mini;
};
