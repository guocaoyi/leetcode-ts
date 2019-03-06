# Happy Number

## Tips

- Hash Table
- Math

## Description

Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

## Example

```bash
Input: 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
```

## Solution

### [方案一](https://leetcode-cn.com/submissions/detail/14013924/)

一开始以为这题很简单，也没仔细考虑；使用了 Array.reduce() 和 While 控制语句完事；跑测试用例时才发现，第二条用例就没有通过。问题出在时间复杂度上，这里必须对死循环进行处理。

- State: 超出时间限制3
- Time: N/A
- Memory: N/A
- Ranking: N/A
- Language: javascript

```javascript
var isHappy = function(n) {
  let result = n;
  let f = n =>
    String(n)
      .split("")
      .reduce((x, y) => Math.pow(x, 2) + Math.pow(y, 2));
  while (result !== 1) {
    result = f(result);
  }
  return true;
};
```

### [方案二](https://)

- State: N/A
- Time: N/A
- Memory: N/A
- Ranking: N/A
- Language: python

```python
class Solution:
  def isHappy(self, n: int) -> bool:
```
