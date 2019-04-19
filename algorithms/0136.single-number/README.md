# 136. Single Number

Given a `non-empty` array of integers, every element appears twice except for one. Find that single one.

## Example

```bash
Input: [2,2,1]
Output: 1
```

```bash
Input: [4,1,2,1,2]
Output: 4
```

## Note

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

## Related Topics

- Hash Table
- Bit Manipulation

## Submissions

### I: 这里已经没有优化空间了，想想其他方法

- Time: 2019.04.19
- Status: Accepted
- Runtime: 64 ms | 81.78%
- Memory: 36.9MB | 41.03%

```typescript
var singleNumber = (nums: number[]): number => {
  let map: any = {};
  let length: number = nums.length;
  for (let i: number = 0; i < length; i++) {
    if (nums[i] in map && map[nums[i]] == 1) {
      // map 已经存在 n
      delete map[nums[i]];
    } else {
      // 不存在
      map[nums[i]] = 1;
    }
  }
  return Number(Object.keys(map)[0]);
};
```

## Top Ranked

