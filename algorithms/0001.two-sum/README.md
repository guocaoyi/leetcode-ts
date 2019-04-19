# 1. Two Sum

Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

You may assume that each input would have **exactly** one solution, and you may not use the same element twice.

## Example

```bash
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

## Related Topics

- Array
- Hash Table

## Submissions

### I: 两次列表遍历

这事最偷懒的办法，快速实现后，再考虑优化方案
使用 Array.forEach 在性能上会有点损耗(测试用例:61ms 到 59ms)

- Time: 2019.04.13
- Status: Accepted
- Runtime: 120ms > 41.06%

```typescript
var twoSum = (nums: number[], target: number): number[] => {
  for (let i: number = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};
```

### II: 哈希存储

- Status: Accepted

```typescript
var twoSum = (nums: number[], target: number): number[] => {
  const map: any = {};
  const length = nums.length;
  // 使用Array.forEach在性能上会有点损耗(测试用例:61ms到59ms)
  for (let i = 0; i < length; i++) {
    map[nums[i]] = i;
  }
  for (let i = 0; i < length; i++) {
    const x = target - nums[i];
    if (x in map && map[x] != i) {
      return [i, map[x]];
    }
  }
};
```

### III: 一次哈希遍历

- Status: Accepted
- Runtime: 52ms < 100%

```typescript
var twoSum = (nums: number[], target: number): number[] => {
  const map: any = {};
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const x = target - nums[i];
    if (x in map && map[x] != i) {
      return [map[x], i];
    }
    map[nums[i]] = i;
  }
};
```

## Top Ranked

### IV: 哈希遍历

- Runtime: 52ms < 100%

```typescript
var twoSum = (nums: number[], target: number): number[] => {
  const map: any = {};
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const x = target - nums[i];
    if (x in map && map[x] != i) {
      return [map[x], i];
    }
    map[nums[i]] = i;
  }
};
```
