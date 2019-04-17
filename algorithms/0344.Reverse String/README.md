# 344. Reverse String

## Related Topics

- Two Pointers
- String

## Description

Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

### Example

```bash
Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```

## Note

- 不得使用分配额外的空间
- 空间复杂度是 O(1) 的
- in-place algorithms

## Thinking

模拟 Array.reverse() 的实现；在

## Submissions

### I: Array\#reverse

这里偷懒了一下，直接使用了 Array.reverse() 方法对输入的字符串数组进行倒序处理；

- language: javascript
- status: Accepted
- runtime: 124 ms
- runtime distribution: 71.42%
- memory usage: 46.7 MB
- memory distribution:

```javascript
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  s.reverse();
};
```

### II: 二分法

创建一个新的组件，二分翻转

EX:

```bash
Input: [1,17,18,6,4,8,7,5]
  [1,17,18,6,4,8,7,5] -> [17,1,6,18,8,4,5,7] -> [6,18,17,1,5,7,8,4] -> [5,7,8,4,6,18,17,1]
Output: [5,7,8,4,6,18,17,1]

奇数项最后一个数字直接放在最前面
Input: [1,17,18,6,4,8,7,5,9]
  [1,17,18,6,4,8,7,5,9] -> [17,1,6,18,8,4,5,7,9] -> [6,18,17,1,5,7,8,4,9] -> [5,7,8,4,6,18,17,1,9] -> [9,5,7,8,4,6,18,17,1]
Output: [9,5,7,8,4,6,18,17,1]
```

- language: javascript
- status: Accepted
- runtime: 124 ms
- runtime distribution: 71.42%
- memory usage: 46.7 MB
- memory distribution:

```javascript
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {};
```

## III: Extra Array

创建一个新的组件，反向顺序遍历数组并取值存到新的数组中；这里犯了一个错误，题目规定不得分配额外的空间内存；

- language: N/A
- status: N/A
- runtime: N/A
- runtime distribution: N/A
- memory usage: N/A
- memory distribution: N/A

```javascript
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let arr = [];
  for (let i = s.length; i > 0; i--) {
    arr.push(s[i - 1]);
  }
  s = arr;
};
```

## Solutions
