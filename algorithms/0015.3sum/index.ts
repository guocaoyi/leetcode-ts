/**
 * # 15. 3Sum
 *
 * Given an array `nums` of n integers, are there elements a, b, c in `nums`
 *  such that _a + b + c_ = 0? Find all unique triplets in the array which gives the sum of zero.
 *
 * ### Note
 *
 * The solution set must not contain duplicate triplets.
 *
 * ### Example
 *
 * ```bash
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 *
 * A solution set is:
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 * ```
 */

/**
 * 排列组合
 * 刚拿到这题第一个想法就是使用排列组合，很快写完。结果在遇到一个长3000的数组时，运行超时了，时间复杂度O(n!)。
 * n!/m!(n-m)! 差不多就是 44.95501亿次运算循环，这不管使用何种语言都会遇到超时的问题
 * 看了几个 Submission,他们的时间复杂度能做到 O(n^2)
 * @time 2019.05.20 18:00
 * @status Time Limit Exceeded
 * @case [82597,-9243,62390,83030,-97960,-26521...] (3000)
 */
export const threeSum = (nums: number[]): number[][] => {
  const result: { [T: string]: number[] } = {};
  for (let a: number = 0; a < nums.length; a++) {
    for (let b: number = a + 1; b < nums.length; b++) {
      for (let c: number = b + 1; c < nums.length; c++) {
        if (nums[a] + nums[b] + nums[c] === 0) {
          const arr: number[] = [nums[a], nums[b], nums[c]].sort();
          const arrStr: string = arr.toString();
          if (!(arrStr in result)) {
            result[arrStr] = arr;
          }
        }
      }
    }
  }
  return Object.values(result);
};

/**
 * 排列组合
 */
export const threeSum1 = (nums: number[]): number[][] => {
  const result: { [T: string]: number[] } = {};
  nums = nums.sort();
  let left = 0;
  let right = nums[nums.length - 1];

  for (let a: number = 0; a < nums.length; a++) {
    for (let b: number = a + 1; b < nums.length; b++) {
      for (let c: number = b + 1; c < nums.length; c++) {
        if (nums[a] + nums[b] + nums[c] === 0) {
          const arr: number[] = [nums[a], nums[b], nums[c]].sort();
          const arrStr: string = arr.toString();
          if (!(arrStr in result)) {
            result[arrStr] = arr;
          }
        }
      }
    }
  }

  return Object.values(result);
};
