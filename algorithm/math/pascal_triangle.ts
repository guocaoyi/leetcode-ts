/**
 * 杨辉三角形
 * (n,k) = (n-1,k-1) + (n-1,k)
 * (n,k) = n!/k!(n-k)! 第 n 行，第 k 个元素
 * @param n 阶数
 * @return number[] 第 n 行
 */
export const PascalTriangle = (n: number): number[] => {
  if (n === 0) return [];

  const triangle: number[][] = [[1]];

  for (let i = 1; i < n; i += 1) {
    const row: number[] = [];
    for (let j = 0; j <= i; j += 1) {
      row[j] = (triangle[i - 1][j - 1] || 0) + (triangle[i - 1][j] || 0);
    }
    triangle.push(row);
  }

  return triangle[n - 1];
};

/**
 * 杨辉三角形
 * (n,k) = (n-1,k-1) + (n-1,k)
 * (n,k) = n!/k!(n-k)! 第 n 行，第 k 个元素
 * @param n 阶数
 * @return number[][] 所有行
 */
export const PascalTriangle2 = (n: number): number[][] => {
  if (n === 0) return [];

  const triangle: number[][] = [[1]];

  for (let i = 1; i < n; i += 1) {
    const row: number[] = [];
    for (let j = 0; j <= i; j += 1) {
      row[j] = (triangle[i - 1][j - 1] || 0) + (triangle[i - 1][j] || 0);
    }
    triangle.push(row);
  }

  return triangle;
};
