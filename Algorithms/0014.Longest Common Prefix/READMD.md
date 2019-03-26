# 14 Longest Common Prefix

## Related Topics

- String

## Description

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。

## Example

```bash
**************
```

## Note

## Thinking

- \*\*

## Submissions

### I: \*\*\*

\*\*\*

- language: javascript
- status: \*
- runtime: \*
- runtime distribution: \*
- memory usage: \*
- memory distribution: \*

```javascript
var longestCommonPrefix = function(strs) {
  let prefix = "";
  if (strs && strs.length > 0) {
    let point = 1;
    while (true) {
      prefix = strs[0].slice(0, point);
      for (let i = 0; i < strs.length; i++) {
        if (prefix !== strs[i].slice(0, point)) {
          return prefix.slice(0, prefix.length - 1);
        }
      }
      point++;
    }
  } else {
    return "";
  }
};
```

<!-- I、II、III、IV、V、VI、VII、VIII、IX、X	 -->

## Solutions
