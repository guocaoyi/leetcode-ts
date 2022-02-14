/**
 * # 315. Count of Smaller Numbers After Self
 *
 * You are given an integer array nums and you have to return a new counts array. The counts array has the property where `counts[i]` is the number of smaller elements to the right of `nums[i]`.
 *
 * ## Example
 *
 * ```bash
 * Input: [5,2,6,1]
 * Output: [2,1,1,0]
 * Explanation:
 * To the right of 5 there are 2 smaller elements (2 and 1).
 * To the right of 2 there is only 1 smaller element (1).
 * To the right of 6 there is 1 smaller element (1).
 * To the right of 1 there is 0 smaller element.
 * ```
 */
export type Solution = (nums: number[]) => number[];

/**
 * @date 2020/07/11 18:17:00
 * @time O(n * log n)
 * @space O(n)
 * @runtime
 * @memory
 * @runtime_cn 820 ms, faster than 100.00%
 * @memory_cn 37.7 MB, less than 100.00%
 */
export const countSmaller = (nums: number[]): number[] => {
  const result: number[] = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = nums.length - 1; j > i; j--) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    result[i] = count;
  }
  return result;
};
