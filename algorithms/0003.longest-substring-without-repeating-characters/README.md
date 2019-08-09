# 3. Longest Substring Without Repeating Characters

Given a string, find the length of the **longest substring** without repeating characters.

## Example

```bash
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

```bash
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

```bash
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

## Related Topics

- Hash Table
- Two Pointers
- String
- Sliding Window

## Submissions

### I: \*\*

- Time: 2018.10.19
- Status: Output Limit Exceeded

```typescript
var lengthOfLongestSubstring = (s: string): number => {
  let maxSub = '',
    currentSub = '';

  const arr: string[] = s.split('');
  arr.forEach((s: string) => {
    if (currentSub.includes(s)) {
      // 存在
      if (currentSub.length >= maxSub.length) {
        maxSub = currentSub;
      }
      let [lStr, rStr] = currentSub.split(s);
      currentSub = rStr || '';
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
```

### II: \*\*

- Time: 2018.10.19
- Status: Accepted
- Runtime: 116ms | 55.08%

```typescript
var lengthOfLongestSubstring = (s: string): number => {
  let maxSub: string = '',
    currentSub: string = '';

  const arr: string[] = s.split('');
  arr.forEach((s: string) => {
    if (currentSub.includes(s)) {
      // 存在
      if (currentSub.length >= maxSub.length) {
        maxSub = currentSub;
      }
      let [lStr, rStr] = currentSub.split(s);
      currentSub = rStr || '';
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
```

## Top Ranked
