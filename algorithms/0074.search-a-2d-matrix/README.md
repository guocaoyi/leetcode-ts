# 74. Search a 2D Matrix

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

- Integers in each row are sorted from left to right.
- The first integer of each row is greater than the last integer of the previous row.

## Example

```bash
Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
```

```bash
Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false
```

## Related Topics

- Array
- Binary Search

## Submissions

### I: 双层遍历

- Time: 2019.3.15
- Status: Accepted
- Runtime: 64ms | 58.68%
- Memory: 35.4MB | 7.41%

```typescript
var searchMatrix = (matrix: number[][], target: number): boolean => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == target) {
        return true;
      }
    }
  }
  return false;
};
```

## Top Ranked

