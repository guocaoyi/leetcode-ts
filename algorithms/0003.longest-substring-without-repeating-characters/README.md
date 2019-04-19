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

### I: **

```typescript
const slution1 = (s: string): number => {
  let maxSub = "",
    currentSub = "";
  const arr = s.split("");
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
```

### II: 987test case,184ms

```typescript
let slution2 = (s: string): number => {
  const obj = {
    subStr: "",
    maxLen: 0
  };
  for (let i: number = 0; i < s.length; i++) {
    let strArray: string[] = obj.subStr.split(s[i]);
    obj.subStr = strArray[strArray.length - 1] + s[i];
    obj.maxLen = Math.max(obj.maxLen, obj.subStr.length);
  }
  return obj.maxLen;
};
```

## Top Ranked

