/**
 * # 44. Wildcard Matching
 *
Given an input string `(s)` and a pattern `(p)`, implement wildcard pattern matching with support for `'?'` and `'*'`.

```bash
'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).
```

The matching should cover the entire input string (not partial).

Note:

- `s` could be empty and contains only lowercase letters `a-z`.
- `p` could be empty and contains only lowercase letters `a-z`, and characters like `?` or `*`.

## Example

```bash
Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```
```bash
Input:
s = "aa"
p = "*"
Output: true
Explanation: '*' matches any sequence.
```
```bash
Input:
s = "cb"
p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
```
```bash
Input:
s = "adceb"
p = "*a*b"
Output: true
Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".
```
```bash
Input:
s = "acdcb"
p = "a*c?b"
Output: false
```
 */
export type Solution = (s: string, p: string) => boolean;

/**
 * @date
 * @time
 * @space
 * @memory {leetcode.com}
 * @time {leetcode.com}
 * @memory {leetcode-cn.com}
 * @time {leetcode-cn.com}
 */
export const isMatch = (s: string, p: string): boolean => {
  const pp: string[] = ["a", "*", "?", "b"];
  return pp !== [];
};

isMatch("acdcb", "");
