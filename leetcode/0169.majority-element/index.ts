/**
 * # 169. Majority Element
 *
 * Given an array of size n, find the majority element.
 * The majority element is the element that appears **more than** `⌊ n/2 ⌋` times.
 *
 * You may assume that the array is non-empty and the majority element always exist in the array.
 *
 * ## Example
 *
 * ```bash
 * Input: [3,2,3]
 * Output: 3
 * ```
 *
 * ```bash
 * Input: [2,2,1,1,1,2,2]
 * Output: 2
 * ```
 */
export type Solution = (nums: number[]) => number;

/**
 * 通用解法
 * @date 2019.03.01
 * @time
 * @space
 * @runtime 68ms < 87.42%
 * @memory 37.2MB > 88.35%
 * @runtime_cn
 * @memory_cn
 */
export const majorityElement = (nums: number[]): number => {
  const map: { [k: number]: number } = {};
  nums.forEach((n) => {
    if (n in map) {
      map[n]++;
    } else {
      map[n] = 1;
    }
  });
  let maximum = 0;
  let maxKey: number = maximum;

  for (const k in map) {
    if (map[k] >= maximum) {
      maximum = map[k];
      maxKey = Number(k);
    }
  }
  return maxKey;
};
