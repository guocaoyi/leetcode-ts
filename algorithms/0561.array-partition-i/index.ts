/**
 * # 561. Array Partition I
 *
 * Given an array of 2n integers, your task is to group these integers into n pairs of integer,
 * say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.
 *
 * ## Example
 *
 * ```bash
 * Input: [1,4,3,2]
 *
 * Output: 4
 * Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
 * ```
 *
 * ## Note
 *
 * - **n** is a positive integer, which is in the range of [1, 10000].
 * - All the integers in the array will be in the range of [-10000, 10000].
 */
export type Solution = (nums: number[]) => number;

/**
 * @date
 * @time
 * @space
 * @runtime
 * @memory
 * @runtime_cn 112 ms, faster than 88.09%
 * @memory_cn 39 MB, less than 58.18%
 */
export const arrayPairSum = (nums: number[]): number => {
  nums = nums.sort((prev: number, next: number) => prev - next);
  let result: number = 0;
  for (let i = 0; i < nums.length; i += 2) {
    result += nums[i];
  }
  return result;
};
