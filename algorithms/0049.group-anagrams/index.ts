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
export type Submission = (strs: string[]) => string[][];

/**
 * 哈希存储
 * 对所有数组元素进行排序，按 Hash 存储，提出；主要使用了 String[] 的一些 API
 * @time 2019.08.11 12:45
 * @runtime 128 ms, faster then 63.90% of TypeScript
 * @memory 45.1 MB, less then 60.87% of TypeScript
 */
export const groupAnagrams = (strs: string[]): string[][] => {
  const map: any = {};
  strs.forEach((str: string) => {
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
