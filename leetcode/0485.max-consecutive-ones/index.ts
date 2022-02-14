/**
 * # 485. Max Consecutive Ones
 *
 * Given a binary array, find the maximum number of consecutive 1s in this array.
 *
 * ## Example
 *
 * ```bash
 * Input: [1,1,0,1,1,1]
 * Output: 3
 * Explanation: The first two digits or the last three digits are consecutive 1s.
 *     The maximum number of consecutive 1s is 3.
 * ```
 *
 * ## Note
 *
 * - The input array will only contain `0` and `1`.
 * - The length of input array is a positive integer and will not exceed 10,000
 */
export type Solution = (nums: Array<0 | 1>) => number;

/**
 * 指针
 * @date 2019.06.21
 * @time
 * @space
 * @runtime 112 ms > 68.79%
 * @memory 36.6 MB < 73,78%
 * @runtime_cn
 * @memory_cn
 */
export const findMaxConsecutiveOnes = (nums: Array<0 | 1>): number => {
  let maxLength: number = 0;
  let curLength: number = 0;
  nums.forEach((v: 0 | 1) => {
    if (v === 1) {
      curLength++ >= maxLength && (maxLength = curLength);
    } else {
      curLength = 0;
    }
  });
  return maxLength;
};
