/**
 * # 3. Longest Substring Without Repeating Characters
 *
 * Given a string, find the length of the **longest substring** without repeating characters.
 *
 * ## Example
 *
 * ```bash
 * Input: "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * ```
 *
 * ```bash
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * ```
 *
 * ```bash
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 *              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * ```
 */
export type Solution = (s: string) => number;

/**
 * 遍历
 * @date 2020.06.28 12:47
 * @time
 * @space
 * @runtime
 * @memory
 * @runtime_cn 100 ms, faster than 84.62%
 * @memory_cn 42.6 MB, less than 100.00%
 */
export const lengthOfLongestSubstring = (s: string): number => {
  let maxSub: string = "";
  let currentSub: string = "";

  const arr: string[] = s.split("");
  arr.forEach((s: string) => {
    if (currentSub.includes(s)) {
      // 存在
      if (currentSub.length >= maxSub.length) {
        maxSub = currentSub;
      }
      let [lStr, rStr] = currentSub.split(s);
      currentSub = rStr || "";
      currentSub += s;
    } else {
      // 不存在
      currentSub += s;
      if (currentSub.length >= maxSub.length) {
        maxSub = currentSub;
      }
    }
  });
  return maxSub.length;
};
