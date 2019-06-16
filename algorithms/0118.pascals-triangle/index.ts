/**
 * 杨辉三角形
 * (n,k) = (n-1,k-1) + (n-1,k)
 * (n,k) = n!/k!(n-k)! 第 n 行，第 k 个元素
 * @param numRows 阶数
 * @state Accepted
 * @runtime 44ms > 99.04%
 * @meomory 33.9MB < 41.52%
 */
export const PascalTriangle = (numRows: number): number[][] => {
  if (numRows === 0) return [];

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
