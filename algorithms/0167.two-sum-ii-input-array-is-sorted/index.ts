/**
 * # 167. Two Sum II - Input array is sorted
 *
 * Given an array of integers that is already ***sorted in ascending order***,
 * find two numbers such that they add up to a specific target number.
 *
 * The function twoSum should return indices of the two numbers such that they add up to the target,
 * where index1 must be less than index2.
 *
 * ## Note
 *
 * - Your returned answers (both index1 and index2) are not zero-based.
 * - You may assume that each input would have exactly one solution and you may not use the same element twice.
 *
 * ## Example
 *
 * ```bash
 * Input: numbers = [2,7,11,15], target = 9
 * Output: [1,2]
 * Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
 * ```
 */

/**
 * 回溯法
 * 从第一个元素开始进行穷举，知道算出相等的 Target 值
 */
export const twoSum = (numbers: number[], target: number): number[] => {
  let i = 0;
  let p;
  for (; i < numbers.length; i += 1) {
    p = i + 1;
    while (numbers[i] + numbers[p] < target) {
      p += 1;
    }
    if (numbers[i] + numbers[p] === target) {
      break;
    } else if (numbers[i] + numbers[p] > target) {
      continue;
    }
  }
  return [i + 1, p + 1];
};
