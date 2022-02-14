/**
# 378. Kth Smallest Element in a Sorted Matrix

Given a *n x n* matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

## Example

```bash
matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

return 13.
```

## Note

You may assume k is always valid, 1 ≤ k ≤ n2.
 */
export type Solution = (matrix: number[][], k: number) => number;

/**
 * 解构每行数组，排序后取值
 * @date 2020/07/02 19:18:11
 * @time O(n log n)
 * @space O(n)
 * @runtime 128 ms, faster than 100.00%
 * @memory 42 MB, less than 100.00%
 * @runtime_cn 100 ms, faster than 100.00%
 * @memory_cn 40.8 MB, less than 100.00%
 */
export const kthSmallest = (matrix: number[][], k: number): number => {
  const array: number[] = [];
  matrix.forEach((rows: number[]) => array.push(...rows));
  return array.sort((pre: number, next: number) => pre - next)[k - 1];
};
