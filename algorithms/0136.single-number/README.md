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

### I: \*\*

- Runtime: 104ms < 58.49%
- Memory: 37.3mb

```typescript
var singleNumber = (nums: Array<number>): any => {
  let map: any = {};
  nums.forEach(n => {
    if (n in map) {
      // map 已经存在 n
      map[n]++;
    } else {
      // 不存在
      map[n] = 1;
    }
    if (map[n] == 2) {
      // 存在并且 == 2
      delete map[n];
    }
  });
  return Object.keys(map);
};
```

### II: \*\*

这里已经没有优化空间了，想想其他方法

- Runtime: 108ms >
- Memory: 36.9mb <

```typescript
var singleNumber2 = (nums: Array<number>): any => {
  let map: any = {};
  nums.forEach((n: number) => {
    if (n in map && map[n] == 1) {
      // 已经存在 且 == 1
      delete map[n];
    } else {
      // 不存在
      map[n] = 1;
    }
  });
  return Object.keys(map);
};
```

## Top Ranked
