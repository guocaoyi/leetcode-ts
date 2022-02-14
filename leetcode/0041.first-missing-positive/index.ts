/**
# 41. First Missing Positive

Given an unsorted integer array, find the smallest missing positive integer.

## Example

```bash
Input: [1,2,0]
Output: 3
```
```bash
Input: [3,4,-1,1]
Output: 2
```
```bash
Input: [7,8,9,11,12]
Output: 1
```

## Note

Your algorithm should run in O(n) time and uses constant extra space.
 */
export type Solution = (nums: number[]) => number;

/**
 * 粗暴解法
 * @author yalda
 * @github https://github.com/guocaoyi/leetcode-ts
 */
export const firstMissingPositive = (nums: number[]): number => {
  let counter = 1;
  nums.sort((pre: number, next: number) => pre - next);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > counter) {
      counter++;
    } else {
      break;
    }
  }
  return counter;
};
