#

## Tips

String

## Description

Write a function that reverses a string. The input string is given as an array of characters char[].
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
You may assume all the characters consist of printable ascii characters.

```bash
Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```

## Solution

### 方案一

这里偷懒了一下，直接使用了 Array.reverse() 方法对输入的字符串进行了倒序

- status: Accepted
- runtime: 124 ms
- memory: 46.7 MB
- language: javascript
- sort: 71.42%

```javascript
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  s.reverse();
};
```
