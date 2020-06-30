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
 * 
 * ## Thinkings
 * 排列组合
 * 刚拿到这题第一个想法就是使用排列组合，很快写完。结果在遇到一个长3000的数组时，运行超时了，时间复杂度O(n!)。
 * n!/m!(n-m)! 差不多就是 44.95501亿次运算循环，这不管使用何种语言都会遇到超时的问题
 * 看了几个 Submission,他们的时间复杂度能做到 O(n^2)
 */
export type Submission = (nums: number[]) => number[][];

/**
 * 排列组合
 * 刚拿到这题第一个想法就是使用排列组合，很快写完。结果在遇到一个长3000的数组时，运行超时了，时间复杂度O(n!)。
 * n!/m!(n-m)! 差不多就是 44.95501亿次运算循环，这不管使用何种语言都会遇到超时的问题
 * 看了几个 Submission,他们的时间复杂度能做到 O(n^2)
 * @date 2019.05.20 18:00
 * @time
 * @space
 * @runtime
 * @memory
 * @runtime_cn
 * @memory_cm
 */
export const threeSum = (nums: number[]): number[][] => {
  nums = nums.sort((a, b) => a - b);
  const result: number[][] = [];
  const cacheSet: Set<string> = new Set();
  for (let a: number = 0; a < nums.length; a++) {
    const bSet: Set<number> = new Set([]);
    for (let b: number = a + 1; b < nums.length; b++) {
      if (bSet.has(nums[b])) {
        continue;
      } else {
        bSet.add(nums[b]);
      }

      const cSet: Set<number> = new Set([]);
      for (let c: number = b + 1; c < nums.length; c++) {
        if (cSet.has(nums[c])) {
          continue;
        } else {
          cSet.add(nums[c]);
        }

        if (nums[a] + nums[b] + nums[c] === 0) {
          let key = [nums[a], nums[b], nums[c]].sort((a, b) => a - b).join("");
          if (cacheSet.has(key)) {
            continue;
          } else {
            cacheSet.add(key);
            result.push([nums[a], nums[b], nums[c]].sort((a, b) => a - b));
          }
        }
      }
    }
  }
  return result;
};
