/**
# 100184 Palindrome Permutation LCCI

Given a string, write a function to check if it is a permutation of a palin&shy; drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

## Example

```
Input: "tactcoa"
Output: true
permutations: "tacocat"、"atcocta", etc.
```
 */
export type Solution = (s: string) => boolean;

/**
 * 
 * @date
 * @time
 * @space
 * @runtime
 * @memory
 * @runtime_cn 72 ms, faster than 100.00%
 * @memory_cn 32.1 MB, less than 100.00%
 */
export const canPermutePalindrome = (s: string): boolean => {
  let map: { [T: string]: number } = {};
  s.split("").forEach((subChar: string): void => {
    subChar in map ? map[subChar] += 1 : map[subChar] = 1;
  });
  let counter: number = 0;
  Object.values(map).forEach((count) => {
    count % 2 == 1 && counter++;
  });
  return counter <= 1;
};

canPermutePalindrome("tactcoa");
