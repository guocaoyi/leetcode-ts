/**
 * # 567. Permutation in String
 *
 * Given two strings *s1* and *s2*, write a function to return true if *s2* contains the permutation of *s1*. In other words, one of the first string's permutations is the *substring* of the second string.
 *
 * ## Example
 * ```typescript
 * Input: s1 = "ab" s2 = "eidbaooo"
 * Output: True
 * Explanation: s2 contains one permutation of s1 ("ba").
 * ```
 * ```typescript
 * Input:s1= "ab" s2 = "eidboaoo"
 * Output: False
 * ```
 *
 * ## Constraints
 * - The input strings only contain lower case letters.
 * - The length of both given strings is in range [1, 10,000].
 */
export type Solution = (s1: string, s2: string) => boolean;

/**
 * @time
 * @space
 */
export const checkInclusion = (s1: string, s2: string): boolean => {
  return false;
};

// 排列组合所有字符串组合；然后查找
//
