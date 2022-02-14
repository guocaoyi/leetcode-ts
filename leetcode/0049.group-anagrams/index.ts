/**
 * # 49. Group Anagrams
 *
 * Given an array of strings, group anagrams together.
 *
 * ## Example
 *
 * ```typescript
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * Output:
 * [
 *   ["ate","eat","tea"],
 *   ["nat","tan"],
 *   ["bat"]
 * ]
 * ```
 *
 * ## Note
 *
 * - All inputs will be in lowercase.
 * - The order of your output does not matter.
 */
export type Solution = (strs: string[]) => string[][];

/**
 * 哈希存储
 * 对所有数组元素进行排序，按 Hash 存储，提出；主要使用了 String[] 的一些 API
 * @date 2020/06/30 13:07:38
 * @time O(n log n)
 * @space O(n)
 * @runtime 208 ms, faster than 37.50%
 * @memory 47 Mb, less than 100.00%
 * @runtime_cn 140 ms, faster than 37.50%
 * @memory_cn 46.4 Mb, less than 100.00%
 */
export const groupAnagrams = (strs: string[]): string[][] => {
  const map: { [k: string]: string[] } = {};
  strs.sort().forEach((str: string) => {
    const origin: string = str
      .split("")
      .sort()
      .join("");
    if (origin in map) {
      map[origin].push(str);
    } else {
      map[origin] = [str];
    }
  });
  return Object.values(map);
};
