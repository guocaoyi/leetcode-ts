/**
 * # 747. Largest Number At Least Twice of Others
 *
 * In a given integer array nums, there is always exactly one largest element.
 *
 * Find whether the largest element in the array is at least twice as much as every other number in the array.
 *
 * If it is, return the **index** of the largest element, otherwise return -1.
 *
 * ## Example
 *
 * ```bash
 * Input: nums = [3, 6, 1, 0]
 * Output: 1
 * Explanation: 6 is the largest integer, and for every other number in the array x,
 * 6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.
 * ```
 *
 * ```bash
 * Input: nums = [1, 2, 3, 4]
 * Output: -1
 * Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.
 * ```
 *
 * ## Note
 *
 * - `nums` will have a length in the range `[1, 50]`.
 * - Every `nums[i]` will be an integer in the range `[0, 99]`.
 */
export type Submission = (nums: number[]) => number;

/**
 * @time 2019.06.13
 */
export const dominantIndex = (nums: number[]): number => {
  if (nums.length === 1) {
    return 0;
  }

  // len > 2
  let queue: number[][] = [
    [0, 0],
    [0, 0],
  ];
  nums.forEach((v: number, k: number) => {
    if (v > queue[0][1]) {
      queue.pop();
      queue = [[k, v]].concat(queue);
    } else if (v > queue[1][1]) {
      queue.pop();
      queue = queue.concat([[k, v]]);
    }
  });

  if (queue[0][1] >= 2 * queue[1][1]) {
    return queue[0][0];
  }
  return -1;
};
