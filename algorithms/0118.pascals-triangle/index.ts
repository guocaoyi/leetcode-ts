/**
# 118. Pascal's Triangle

Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

![Pascal's Trangle](../../assets/images/118.PascalTriangleAnimated2.gif)

###### In Pascal's triangle, each number is the sum of the two numbers directly above it.

## Example

```bash
Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
```
 */
type Submission = (numRows: number) => number[][];

/**
 * 杨辉三角形
 * (n,k) = (n-1,k-1) + (n-1,k)
 * (n,k) = n!/k!(n-k)! 第 n 行，第 k 个元素
 * @time
 * @status Accepted
 * @runtime 44 ms > 99.04%
 * @memory 33.9 MB < 41.52%
 */
export const PascalTriangle: Submission = (numRows: number): number[][] => {
  if (numRows === 0) {
    return [];
  }
  const triangle: number[][] = [[1]];
  for (let i = 1; i < numRows; i += 1) {
    const row: number[] = [];
    for (let j = 0; j <= i; j += 1) {
      row[j] = (triangle[i - 1][j - 1] || 0) + (triangle[i - 1][j] || 0);
    }
    triangle.push(row);
  }

  return triangle;
};
